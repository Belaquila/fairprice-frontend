import { Button, Navbar } from "flowbite-react";
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {

  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <Navbar fluid className="fixed top-0 w-full z-50 bg-white shadow-md">
      <Navbar.Brand href="/">
        <img src="./fairprice_logo.svg" className="mr-3 h-6 sm:h-9" alt="FairPrice Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold italic dark:text-white">FairPrice</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!isLoggedIn && (
          <NavLink to="/login">
            <Button className="bg-[var(--secondary-color)] text-white mr-4">Log in</Button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/signup">
            <Button className="bg-[var(--primary-color)] text-white mr-4">Get started</Button>
          </NavLink>
        )}
        {isLoggedIn && (
          <Button onClick={logOutUser} className="bg-slate-400 text-white mr-4">Logout</Button>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {isLoggedIn && (<Navbar.Link style={{ color: 'var(--secondary-color)' }} href="/products" active>My products</Navbar.Link>)}
        {isLoggedIn && (<Navbar.Link style={{ color: 'var(--secondary-color)' }} href="/costs" active>My costs</Navbar.Link>)}
        <Navbar.Link style={{ color: 'var(--secondary-color' }} href="/about" active>About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;