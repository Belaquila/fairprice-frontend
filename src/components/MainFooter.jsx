import { Footer } from "flowbite-react";
import { NavLink } from "react-router-dom";

function MainFooter() {
  return (
    <Footer id="footer" className="w-full bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between mt-0" style={{ marginTop: '0px' }}>
      <Footer.Copyright by="FairPrice™" year={2024} className="p-4" />
      <Footer.LinkGroup className="p-4">
        <Footer.Link>
          <NavLink to="/about">About</NavLink>
        </Footer.Link>
        <Footer.Link>
          <NavLink to="/about">Privacy Policy</NavLink>
        </Footer.Link>
        <Footer.Link>
          <NavLink to="https://github.com/Belaquila/fairprice-backend">Github</NavLink>
        </Footer.Link>
        <Footer.Link>
          <NavLink to="https://www.linkedin.com/in/ahmed-belabdia-a19118128/">Contact</NavLink>
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default MainFooter;

