import React from "react";
import { Button } from "./ui/button.jsx";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-5 py-5">
      <div>
        <p className="text-4xl font-semibold">Simpp</p>
      </div>
      <div>
        <Button className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-xl font-bold cursor-pointer">
          +
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
