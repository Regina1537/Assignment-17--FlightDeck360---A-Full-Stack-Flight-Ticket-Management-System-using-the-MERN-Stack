// File: src/App.jsx
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Flights from './pages/Flights'
import Booking from './pages/Booking'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'
import BookFlight from './components/book-flight/BookFlight'
import ChangePassword from './components/changepassword/ChangePassword'
import Dashboard from './components/dashboard/Dashboard'
import ProtectedRoute from './components/protectedroutes/ProtectedRoute'
import Hero from './components/hero/Hero'


export default function App(){
return (
<div className="app-root">
<header className="topbar">
<h1>FlightDeck360</h1>
<nav>
<Link to="/">Flights</Link>
<Link to="/booking" className="ml">Book</Link>
<a href="/public/booking.html" className="ml" target="_blank" rel="noreferrer">Static Booking Page</a>
</nav>
</header>
<main className="container">
<Routes>
<Route path="/" element={<Flights/>} />
<Route path="/booking" element={<Booking/>} />
</Routes>
</main>
<footer className="footer">© {new Date().getFullYear()} FlightDeck360. All rights reserved.</footer>
</div>
)
}

const App = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<><Navbar /><Register /></>} />
          <Route path='/home' element={<><Home /> <Flight /> <Footer /></>} />
          <Route path='/login' element={<><Navbar /><Login /></>} />
          <Route path='/register' element={<> <Navbar /> <Register /></>} />
          <Route path='/dashboard' element={<><ProtectedRoute>
           <Navbar /> <Dashboard />
            </ProtectedRoute></>} />
  
            <Route path='/bookings' element={<><ProtectedRoute><BookFlight /></ProtectedRoute></>} />
  
            <Route path='book-flight' element={<><ProtectedRoute><BookFlight /></ProtectedRoute></>} />
  
            <Route path='/change-password' element={<><ProtectedRoute><ChangePassword /></ProtectedRoute></>} />
  
            <Route path='book-flight' element={<><ProtectedRoute><BookFlight /></ProtectedRoute></>} /> 
          {/* <Route path='/' element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='/home' element={<><Home /> <Flight /><Footer /></>}/>
          <Route path='/' element={<><Home /><Footer /></>} />
          <Route path='/book-flight' element={<><BookFlight /></>} />
          <Route path='/dashboard' element={<><Navbar /><Dashboard /></>} />
        <Route path='/bookings' element={<><BookFlight /></>} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path='/register' element={<Register />} /> */
        }

        <Route path='*' element={<> <NotFound /> </>} />
      </Routes>
    </div>
    )
}

export default App