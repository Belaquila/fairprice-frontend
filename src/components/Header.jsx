import { Button, Navbar } from "flowbite-react";
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

export function Header() {

  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <Navbar fluid rounded className="fixed top-0 w-full z-50 bg-white shadow-md">
      <Navbar.Brand href="/">
        <img src="./fairprice_logo.svg" className="mr-3 h-6 sm:h-9" alt="FairPrice Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold italic dark:text-white">FairPrice</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!isLoggedIn && <Button className="bg-[var(--secondary-color)] text-white">Get started</Button>}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Services</Navbar.Link>
        <Navbar.Link href="https://www.linkedin.com/in/ahmed-belabdia-a19118128/">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;