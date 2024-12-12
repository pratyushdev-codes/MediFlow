import React, { useState } from 'react';
import Navbar from './Navbar';

const Addpackage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (err) {
      console.error('Error sending email:', err);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div 
      className="d-flex justify-content-center align-items-center text-center position-relative"
      style={{
        backgroundImage: "url('/images/world-map.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        opacity: 0.2
      }}
    >
    <div className="position-absolute top-50 start-50 translate-middle">
    <h2 className="display-2 fw-bold  m-0" style={{ fontSize: '6rem' , color:"#FFFFFF"}}>
      MediFlow
    </h2>
  </div>
</div>

      <div className="d-flex justify-content-center align-items-center vh-100" style={{     borderTopRightRadius:"30px",   color:"white",   backgroundPosition:"right",    backgroundRepeat: "no-repeat", backgroundSize: "contain",backgroundImage: "url('/images/grad1.png')",}} >
    
        <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <h2 style={{ background: 'linear-gradient(135deg, rgb(209 141 95), #B48CDE)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontWeight:"bold"}}
        className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Secure and Reliable Live Tracking of Emergency Healthcare Products to Eliminate Irregularities
      </h2>
      <br/><br/><br/><br/>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input
            style={{borderRadius:"15px"}}
              type="email"
              className="form-control"
              id="inputEmail4"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Package Name</label>
            <input type="password" className="form-control" id="inputPassword4"style={{borderRadius:"15px"}} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" style={{borderRadius:"15px"}} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"  style={{borderRadius:"15px"}}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" style={{borderRadius:"15px"}} / >
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <input type="text" className="form-control" id="inputCity" style={{borderRadius:"15px"}} / >
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputCity" style={{borderRadius:"15px"}} / >
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
               Confirm Package 
              </label>
            </div>
          </div>
          <div className="col-12">
            <a href='https://livemaptracking-2.onrender.com/'><button type="submit" className="btn btn-primary" style={{borderRadius:"20px"}}>Confirm Order and Track</button></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addpackage;
