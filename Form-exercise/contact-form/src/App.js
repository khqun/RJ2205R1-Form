import { Formik} from 'formik';
import { useState } from 'react'
import './App.css';

const regex = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
function App() {
  const [form, setForm] = useState({message: "Fill your form"});
  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }
  const handleValidate = () => {
    const errors = {};
    if (!form.name) {
      errors.name = "Required"
    }
    if (!form.email) {
      errors.email = "Required"
    }
    else if (!regex.email.test(form.email)) {
      errors.email = "Invalid email adress"
    }
    if (!form.phone) {
      errors.phone = "Required"
    }
    return errors
  }
  const handleSubmit = () => {
    alert("Success");
  }
  return (
    <div>
      <h1>Contact form </h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>

              <label>Name</label>
              <div>
                <input
                  type="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <p className="error">{errors.name}</p>
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <p className="error">{errors.email}</p>
              </div>
            </div>
            <div>
              <label>Phone</label>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <p className="error">{errors.phone}</p>
              </div>
            </div>
            <div>
              <label>Message</label>
              <div>
                <textarea
                onChange={handleChange}
                name='message'
                value={form.message}
                ></textarea>
              </div>
            </div>
            <button type='submit'> Submit</button>
          </form>
        )}

      </Formik>
    </div>
  )
}

export default App;
