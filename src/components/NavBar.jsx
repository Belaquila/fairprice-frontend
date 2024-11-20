import { NavLink } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";


function NavBar() {
    return (
        <>
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