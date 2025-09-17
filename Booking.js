// File: public/booking.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
  
    if (!form) return;
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = {
        passengerName: document.getElementById("passengerName").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        flightNumber: document.getElementById("flightNumber").value,
        journeyDate: document.getElementById("journeyDate").value,
        from: document.getElementById("from").value,
        to: document.getElementById("to").value,
        totalPassengers: document.getElementById("totalPassengers").value,
        assistanceRequired: document.getElementById("assistanceRequired").checked,
      };
  
      console.log("Booking data:", formData);
  
      try {
        // Example POST to backend API
        const res = await fetch("http://localhost:5000/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (res.ok) {
          alert("Booking submitted successfully!");
          form.reset();
        } else {
          const err = await res.json();
          alert("Error: " + (err.message || "Failed to submit booking"));
        }
      } catch (error) {
        console.error(error);
        alert("Network error, please try again later.");
      }
    });
  });