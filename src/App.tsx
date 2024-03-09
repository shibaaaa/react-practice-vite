import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    age: '',
  })

  const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>フォームサンプル</h1>
      <div className="card">
        <label htmlFor="name">
          名前:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
        <label htmlFor="age">
          年齢:
        </label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <p>
        名前: {form.name} <br/>
        年齢: {form.age}
      </p>
    </>
  )
}

export default App
