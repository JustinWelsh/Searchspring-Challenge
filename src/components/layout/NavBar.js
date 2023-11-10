import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Navbar, NavbarBrand, NavbarContent, Badge } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { useUserContext } from "../../services/context/UserContext";
import SearchComponent from "../ui/SearchComponent";

export default function NavBar({ setResults }) {
  const { cart } = useUserContext();

  return (
    <Navbar isBordered className="p-3 opacity-95 shadow-lg z-50">
      <NavbarContent justify="start">
        <NavbarBrand className="sm:mr-4">
          <FontAwesomeIcon icon={faGem} className="text-3xl p-2" />
          <p className="hidden sm:block text-3xl font-bold text-inherit textShadow">
            StellarStyle
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3"></NavbarContent>
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
