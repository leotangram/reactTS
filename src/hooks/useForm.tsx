import { ChangeEvent, useState } from 'react'

// export function useForm<T>(initState: T) {
export const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState)

  const handleChange = ({
    target: { name, value }
  }: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [name]: value })
  }

  const fetchForm = (form: T) => {
    setForm(form)
  }

  return {
    form,
    handleChange,
    fetchForm,
    ...form
  }
}
