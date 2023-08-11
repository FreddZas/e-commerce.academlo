import { useForm } from "react-hook-form"

const FilterPrice = ({setFromTo}) => {

  const { register, reset, handleSubmit } = useForm()

  const submit = data =>{
    const from = Number(data.from.trim())
    const to = Number(data.to.trim())
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
  }

  return (
    <article>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="from">From </label>
          <input {...register('from')} type="text" id="from"/>
        </div>
        <div>
          <label htmlFor="to">To </label>
          <input {...register('to')} type="text" id="to"/>
        </div>
        <button>Filter Price</button>
      </form>
    </article>
  )
}

export default FilterPrice