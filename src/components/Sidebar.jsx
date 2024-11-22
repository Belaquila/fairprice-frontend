import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar bg-white text-black p-4">
      <ul>
        <li>
          <Link
            to="/products"
            className={location.pathname === "/products" ? "active" : ""}
          >
            Products
          </Link>
        </li>
        {/* 
        <li>
          <Link
            to="/costs"
            className={location.pathname === "/costs" ? "active" : ""}
          >
            Costs
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "active" : ""}
          >
            User Profile
          </Link>
        </li>
        */}

      </ul>
    </div>
  );
}

export default Sidebar;
