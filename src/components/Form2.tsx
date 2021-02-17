import { useForm } from '../hooks/useForm'

const Form2 = () => {
  const { form, handleChange } = useForm({
    postal: '',
    city: ''
  })

  const { postal, city } = form

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Código postal:</label>
        <input
          className="form-control"
          type="text"
          name="postal"
          onChange={handleChange}
          value={postal}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input
          className="form-control"
          type="text"
          name="city"
          onChange={handleChange}
          value={city}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}

export default Form2
