import React, { useEffect, useState } from "react";
import api from "../api";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Form } from "react-bootstrap";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterPlan, setFilterPlan] = useState("All");

  const fetchCustomers = async () => {
    const res = await api.get("/customers");
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const addCustomer = async (customer) => {
    const res = await api.post("/customers", customer);
    setCustomers([res.data, ...customers]);
  };

  const updateCustomer = async (id, data) => {
    const res = await api.put(`/customers/${id}`, data);
    setCustomers(customers.map(c => (c.id === id ? res.data : c)));
  };

  const deleteCustomer = async (id) => {
    await api.delete(`/customers/${id}`);
    setCustomers(customers.filter(c => c.id !== id));
  };

  // Filtering
  const filteredCustomers = customers.filter(c =>
    (c.name.toLowerCase().includes(search.toLowerCase()) ||
     c.phone.includes(search)) &&
    (filterPlan === "All" || c.plan === filterPlan)
  );

  // Chart Data: Count customers per plan
  const chartData = ["Basic", "Standard", "Premium"].map(plan => ({
    name: plan,
    value: customers.filter(c => c.plan === plan).length
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div>
      <h2>📊 Service Dashboard</h2>

      {/* Search & Filter */}
      <div className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="me-2"
        />
        <Form.Select
          value={filterPlan}
          onChange={(e) => setFilterPlan(e.target.value)}
          style={{ maxWidth: "200px" }}
        >
          <option value="All">All Plans</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </Form.Select>
      </div>

      {/* Add Customer Form */}
      <CustomerForm addCustomer={addCustomer} />

      {/* Chart */}
      <div className="my-4" style={{ height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Customer List */}
      <CustomerList
        customers={filteredCustomers}
        updateCustomer={updateCustomer}
        deleteCustomer={deleteCustomer}
      />
    </div>
  );
}

export default Dashboard;
