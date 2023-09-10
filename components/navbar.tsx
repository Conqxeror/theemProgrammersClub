import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {Logo} from "./icons";
import PostButton from "./PostButton";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <Link href="/" color="foreground">
          <p className="font-bold text-inherit">TPC</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link color="foreground" href="#">
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Resources
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" color="foreground">
            Our Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <PostButton isMenuOpen={isMenuOpen}/>
      </NavbarContent>
      <NavbarMenu className="place-content-between w-full">
        <div>
        <NavbarMenuItem>
          <Link color="foreground">
            Articles
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground">
            Resources
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground">
            Gallery
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground">
            Our Work
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground">
            Contact Us
          </Link>
        </NavbarMenuItem>
        </div>
        <div className="py-20">
        <NavbarContent justify="end">
          <PostButton isMenuOpen={isMenuOpen} isMobile={true} />
      </NavbarContent>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
