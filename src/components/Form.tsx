import { useForm } from '../hooks/useForm'

interface FormData {
  email: string
  name: string
  age: number
}

const Form = () => {
  const { form, handleChange, fetchForm } = useForm<FormData>({
    email: '',
    name: '',
    age: 0
  })

  const { email, name } = form

  const updateForm = () => {
    fetchForm({
      email: 'leo@leo.com',
      name: 'Leo',
      age: 28
    })
  }

  return (
    <>
      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <pre>{JSON.stringify(form)}</pre>
      </form>
      <button onClick={updateForm} type="button">
        GetInfo
      </button>
    </>
  )
}

export default Form
