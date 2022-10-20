const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>🏠 House Hunters</h1>
      <div className="links">
        <a href="/">Home</a>
        <span onClick={() => handleOverlay()}>New Entry</span>
      </div>
    </nav>
  );
}
 
export default Navbar;