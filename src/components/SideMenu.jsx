import { Link, useLocation } from "react-router-dom";

//function Sidebar() {
//  const location = useLocation();
//
//  return (
//    <div className="sidebar bg-white text-black p-4">
//      <ul>
//        <li>
//          <Link
//            to="/products"
//            className={location.pathname === "/products" ? "active" : ""}
//          >
//            Products
//          </Link>
//        </li>
//        {/* 
//        <li>
//          <Link
//            to="/costs"
//            className={location.pathname === "/costs" ? "active" : ""}
//          >
//            Costs
//          </Link>
//        </li>
//        <li>
//          <Link
//            to="/profile"
//            className={location.pathname === "/profile" ? "active" : ""}
//          >
//            User Profile
//          </Link>
//        </li>
//        */}
//
//      </ul>
//    </div>
//  );
//}

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

export function SideMenu({isOpen, setIsOpen}) {

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex  items-center justify-center">
        <Button 
        className="w-4 h-8 bg-[var(--secondary-color)] rounded-l-full fixed left-0 top-1/4 transform -translate-y-1/2 rotate-180 z-50"
        onClick={() => setIsOpen(true)}></Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="w-56">
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  {window.innerWidth < 480 && <button>i'm a button</button>}
                  <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/products" icon={HiShoppingBag}>
                      Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/costs" icon={HiCollection}>
                      Costs
                    </Sidebar.Item>
                    <Sidebar.Item href="/profil" icon={HiUsers}>
                      Users list
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/about" icon={HiClipboard}>
                      Api Docs
                    </Sidebar.Item>

                    <Sidebar.Item href="/contact" icon={HiInformationCircle}>
                      Help
                    </Sidebar.Item>

                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default SideMenu;
