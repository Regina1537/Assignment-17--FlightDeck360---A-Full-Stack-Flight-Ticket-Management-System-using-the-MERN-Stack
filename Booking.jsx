// File: src/pages/Booking.jsx
import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    passengerName: "",
    contact: "",
    email: "",
    flightNumber: "",
    journeyDate: "",
    from: "",
    to: "",
    totalPassengers: 1,
    assistanceRequired: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking request submitted:", formData);
    // Here you can integrate fetch/axios POST to backend API
    // fetch("/api/bookings", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <div style={{ maxWidth:480 }}>
    <h2>Register</h2>
    <form onSubmit={submit}>
    <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
    <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
    <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
    <button type="submit">Register</button>
    </form>
    </div>
    );
    } 
    
