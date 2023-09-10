import React from "react";
import { NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link"; 
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react"; 
import { useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/avatar";
import AddPostForm from "./AddPostForm";
import { useDisclosure } from "@nextui-org/use-disclosure";

export default function PostButton(props) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex gap-5">
        <NavbarItem>
          <Button 
            as={Link}
            color="primary"
            variant="flat"
            className={props.isMenuOpen ? (props.isMobile ? "" : "hidden") : ""}
            // onClick={onOpen}
            href="/uploadpost"
          >
            Add Post +  
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Link href="/profile">
            <Avatar
              isBordered
              color="primary"
              src={session.session.user?.image || '/default-avatar.png'} 
              className={props.isMenuOpen ? (props.isMobile ? "" : "hidden") : ""} 
            />
          </Link>
        </NavbarItem>

        <AddPostForm session={session} isOpen={isOpen} onClose={onClose} />

      </div>
    );
  } else {
    return (
      <div className="flex items-baseline gap-5">

        <NavbarItem className={props.isMenuOpen ? (props.isMobile ? "" : "hidden") : ""}>
          <Link className="" color="foreground">
            Login
          </Link>
        </NavbarItem>

        <NavbarItem className={props.isMenuOpen ? (props.isMobile ? "" : "hidden") : ""}>
          <Button
            as={Link} 
            color="primary"
            variant="flat"
            className={props.isMenuOpen ? (props.isMobile ? "" : "hidden") : ""}
            onClick={() => signIn('google')}  
          >
            SignUp
          </Button>
        </NavbarItem>

      </div>
    );
  }
}