import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">AllBooking</span>
            <div className="navIcons">
                <button className="navButtons">Register</button>
                <button className="navButtons">Login</button>
             </div> 

        </div>
    </div>
  )
}

export default Navbar