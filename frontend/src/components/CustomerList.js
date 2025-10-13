import React, { useState } from "react";

function CustomerList({ customers, updateCustomer, deleteCustomer }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", phone: "", plan: "" });

  const startEdit = (c) => {
    setEditId(c.id);
    setEditData({ name: c.name, phone: c.phone, plan: c.plan });
  };

  const saveEdit = (id) => {
    updateCustomer(id, editData);
    setEditId(null);
  };

  return (
    <table className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Plan</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(c => (
          <tr key={c.id}>
            <td>
              {editId === c.id ? (
                <input value={editData.name} onChange={e => setEditData({ ...editData, name: e.target.value })} />
              ) : c.name}
            </td>
            <td>
              {editId === c.id ? (
                <input value={editData.phone} onChange={e => setEditData({ ...editData, phone: e.target.value })} />
              ) : c.phone}
            </td>
            <td>
              {editId === c.id ? (
                <select value={editData.plan} onChange={e => setEditData({ ...editData, plan: e.target.value })}>
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              ) : c.plan}
            </td>
            <td>
              {editId === c.id ? (
                <>
                  <button className="btn btn-success btn-sm me-2" onClick={() => saveEdit(c.id)}>Save</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => startEdit(c)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteCustomer(c.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerList;
