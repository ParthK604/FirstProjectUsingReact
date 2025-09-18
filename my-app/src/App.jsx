import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './App.css'

function App() {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(form);
    console.log("Form submitted:", form);
  };

  const UserData = ({ data }) => {
    return (
      <>
        <div className="data">Last Name: {data.lastname}</div>
        <div className="data">First Name: {data.firstname}</div>
        <div className="data">Age: {data.age}</div>
        <div className="data">Phone: {data.phone}</div>
        <div className="data">Email: {data.email}</div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="info">
        <div className="input">
          <h2>Enter Your Details</h2>
          {/* Entire form should be inside <form> with onSubmit */}
          <form onSubmit={handleForm}>
            <div className="form-field lastname">
              <label>
                <span>Enter Your LastName</span>
                <input
                  type="text"
                  name="lastname"
                  value={form.lastname || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-field firstname">
              <label>
                <span>Enter Your FirstName</span>
                <input
                  type="text"
                  name="firstname"
                  value={form.firstname || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-field age">
              <label>
                <span>Enter Your age</span>
                <input
                  type="number"
                  name="age"
                  value={form.age || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-field phone">
              <label>
                <span>Enter Your PhoneNumber</span>
                <input
                  type="number"
                  name="phone"
                  value={form.phone || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-field email">
              <label>
                <span>Enter Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button type="submit" className="submitbtn">
              Submit
            </button>
          </form>
        </div>

        <div className="output">
          {submitted ? <UserData data={submitted} /> : <p>No data submitted yet</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
