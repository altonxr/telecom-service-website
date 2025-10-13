import React, { useState } from "react";

function CustomerForm({ addCustomer }) {
  const [form, setForm] = useState({ name: "", phone: "", plan: "Basic" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    addCustomer(form);
    setForm({ name: "", phone: "", plan: "Basic" });
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="form-control"
          />
        </div>
        <div className="col">
          <select name="plan" value={form.plan} onChange={handleChange} className="form-select">
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100">Add</button>
        </div>
      </div>
    </form>
  );
}

export default CustomerForm;
