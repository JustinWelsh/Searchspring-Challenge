import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
  Badge,
} from "@nextui-org/react";
import { AcmeLogo } from "../common/Logo";
import { SearchIcon } from "../common/SearchIcon";
import SearchInput from "../common/SearchInput";
import { fetchProducts } from "../../services/api/ProductService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { useUserContext } from "../../services/context/UserContext";
import SearchComponent from "../ui/SearchComponent";

export default function NavBar({ setResults }) {
  const { userSearch, setUserSearch, cart, setProducts, setPagination } =
    useUserContext();

  return (
    <Navbar isBordered className="p-3 opacity-95 shadow-lg z-50">
      <NavbarContent justify="start">
        <NavbarBrand className="sm:mr-4">
          <FontAwesomeIcon icon={faGem} className="text-3xl p-2" />
          <p className="hidden sm:block text-3xl font-bold text-inherit textShadow">
            StellarStyle
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          {/* <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem> */}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <SearchComponent classes="hidden md:block" />

        <div className="flex gap-1">
          <FontAwesomeIcon icon={faBagShopping} className="text-2xl" />
          <Badge content={cart} color="danger"></Badge>
        </div>
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
    </Navbar>
  );
}
