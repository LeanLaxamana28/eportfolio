import React from 'react';




function App() {
  return (
    <div>
      
      <header className="bg-dark text-white py-3">
        <div className="container text-center">
          <h2>Welcome to my Portfolio</h2>
          <nav>
            <a href="#about" className="text-white mx-2">About</a>
            <a href="#projects" className="text-white mx-2">Projects</a>
            <a href="#contact" className="text-white mx-2">Contact</a>
          </nav>
        </div>
      </header>
<br></br>
           <br></br>
            <br></br>
             <br></br>
      {/* Main Content */}
      <main className="container text-center mt-5">
        <h1>Lean's Portfolio</h1>
        <p className="lead">
          This is my personal portfolio.
        </p> <br></br>
        <button className="btn btn-success">Click Me.</button>
      </main>
<br></br>
           <br></br>
            <br></br>
             <br></br>
      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <br></br>
          
          <p>&copy; {new Date().getFullYear()} Lean Laxamana. All rights reserved.</p>
          <p>
            <a href="https://github.com/LeanLaxamana28" className="text-white mx-2">GitHub</a> 
           
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
