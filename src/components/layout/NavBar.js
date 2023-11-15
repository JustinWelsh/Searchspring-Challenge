import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Navbar, NavbarContent, Badge } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { useUserContext } from "../../services/context/UserContext";
import SearchComponent from "../ui/SearchComponent";

export default function NavBar({ fetchData }) {
  const { cart } = useUserContext();

  return (
    <Navbar isBordered className="p-3 opacity-95 z-50">
      <NavbarContent justify="start">
        <li
          className="sm:mr-4 flex items-center hover:cursor-pointer"
          onClick={() => {
            fetchData("winter");
          }}
        >
          <FontAwesomeIcon icon={faGem} className="text-4xl p-2" />
          <div className="hidden sm:block">
            <img
              src="https://see.fontimg.com/api/renderfont4/PKgnB/eyJyIjoiZnMiLCJoIjo2NiwidyI6MTAwMCwiZnMiOjY2LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U3RlbGxhclN0eWxl/cruel-machine.png"
              alt="Graffiti fonts"
              width={100}
            />
            <p className="text-xs">Premium Apparel.</p>
          </div>
        </li>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <SearchComponent classes="hidden md:block" />

        <div className="flex gap-1">
          <FontAwesomeIcon icon={faBagShopping} className="text-2xl" />
          <Badge content={cart} color="danger"></Badge>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
