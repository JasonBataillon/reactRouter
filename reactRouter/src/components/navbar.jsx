import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <footer id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </footer>
    </>
  );
}
