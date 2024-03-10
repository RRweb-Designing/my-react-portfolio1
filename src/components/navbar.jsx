function Navbar ()
{
    return (
        <>
       
          
               
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
  
    <a className="navbar-brand ms-5" href="">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto fs-5 mb-2 me-auto">
        <li className="nav-item  ">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown ">
           
            <li><a className="dropdown-item " href="/signin">Signin</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/signup">Signup</a></li>
          </ul>
        </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     

        </>
    )
};
export default Navbar;