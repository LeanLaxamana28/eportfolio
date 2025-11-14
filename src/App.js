import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Logo URLs
const djangoLogo = "https://static.djangoproject.com/img/logos/django-logo-positive.svg";
const reactLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
const reactNativeLogo = "https://reactnative.dev/img/header_logo.svg";

function App() {
  return (
    <div>
      {/* Top Navbar with Logos on the Left & Links on the Right */}
      <header style={{ backgroundColor: '#2e80afff', color: 'white' }} className="py-3">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Left side: Logos */}
          <div className="d-flex align-items-center">
              
            <img src={reactLogo} alt="ReactJS Logo" style={{ width: '30px', marginRight: '15px' }} />
              <img src={djangoLogo} alt="Django Logo" style={{ width: '50px', marginRight: '15px'}} />
            <img src={reactNativeLogo} alt="React Native Logo" style={{ width: '30px' }} />
            
          </div>

          {/* Right side: Nav Links */}
          <nav className="d-flex">
            <a href="#home" className="text-white mx-3">Home</a>
            <a href="#projects" className="text-white mx-3">Projects</a>
            <a href="#certificates" className="text-white mx-3">Certificates</a>
            <a href="#about" className="text-white mx-3">About</a>
            <a href="#contact" className="text-white mx-3">Contact</a>
          </nav>

        </div>
      </header>

      {/* Main Content */}
      <main className="container text-center mt-5">

        {/* HOME SECTION WITH YOUR PICTURE */}
        <section id="home" className="mb-5">
          <div className="row align-items-center">

            {/* LEFT SIDE — Your Picture */}
            <div className="col-md-4 text-center">
              <img 
                src="/lean.png" 
                alt="Lean Laxamana"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "380px", objectFit: "cover" }}
              />
            </div>

            {/* RIGHT SIDE — Intro Text */}
            <div className="col-md-8 text-start">
              <h1 className="fw-bold">Portfolio</h1>
              <p className="lead">
               Hi I'm Lean Laxamana a BSIS student.
              </p>

              
            </div>

          </div>
        </section>
      <br></br>
      <br></br>       
      <br></br>
         <br></br>
         <br></br>        
         <br></br>
         <br></br>
         <br></br>
         <br></br>        
         <br></br>
        <br></br>
         <br></br>
         
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2e80afff', color: 'white' }} className="py-3">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Lean Laxamana. All rights reserved. Made with heart.</p>
          <p>
            <a href="https://github.com/LeanLaxamana28" className="text-white mx-2">GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
