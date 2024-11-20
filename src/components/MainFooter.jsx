import { Footer } from "flowbite-react";
import { NavLink } from "react-router-dom";

function MainFooter() {
  
  return (
    <Footer id="footer" container >

      <Footer.Copyright by="FairPrice™" year={2024} 
      
      />

      <Footer.LinkGroup>
        <Footer.Link >
            <NavLink to="/about">About</NavLink>
        </Footer.Link>
        <Footer.Link >
            <NavLink to="../index.html">Privacy Policy</NavLink>
        </Footer.Link>
        <Footer.Link >
            <NavLink to="https://github.com/Belaquila/fairprice-backend">Github</NavLink>
        </Footer.Link>
        <Footer.Link >
            <NavLink to="https://www.linkedin.com/in/ahmed-belabdia-a19118128/">Contact</NavLink>
        </Footer.Link>
      </Footer.LinkGroup>

    </Footer>
  );
  
}

export default MainFooter;

