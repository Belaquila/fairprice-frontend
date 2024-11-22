import React from "react";
import { Button } from "flowbite-react";
import NavBar from "../components/Header"

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar, present only in the landing page. If user connected, they see a side bar*/}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to fairprice
          </h1>
          <p className="text-gray-600 mb-8">
            Simplify your pricing with our intuitive tool and services.
          </p>
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </Button>
        </div>
      </main>
  
      <MainFooter/>

    </div>
  );
};

export default LandingPage;
