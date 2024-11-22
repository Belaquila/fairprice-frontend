import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function NavBar({ toggleSidebar }) {
    const location = useLocation();
    const { isLoggedIn, logOutUser } = useContext(AuthContext);

    return (
        <>
"use client";

import { Button, Navbar } from "flowbite-react";

export function Component() {
  return (

    
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}




            <Navbar fluid rounded>
                
                <Navbar.Brand href="#">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold">
                        FairPrice
                    </span>
                </Navbar.Brand>
                

                <Navbar.Collapse>

                    <Navbar.Link active>
                        <NavLink to="/">Home</NavLink>
                    </Navbar.Link>

                    <Navbar.Link >
                        <NavLink to="/about">About</NavLink>
                    </Navbar.Link>

                    <Navbar.Link >
                        <NavLink to="https://www.linkedin.com/in/ahmed-belabdia-a19118128/">Contact</NavLink>
                    </Navbar.Link>

                </Navbar.Collapse>

                {/* Get Started Button */}
                <div className="hidden md:flex">
                    <Button
                        color="primary"
                        href="/signup"
                        className="ml-4"
                    >
                        Get Started
                    </Button>
                </div>
                
            </Navbar>

        </>
    )
}

export default NavBar;