
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Registration successful!");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <input
          placeholder="Full Name"
          required
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
