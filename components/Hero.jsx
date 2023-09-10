import React from "react";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function App() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-center items-center py-5">
      <div className="text-center md:text-left">
        <h5 className="mb-2 md:mb-0">
          <b>Most Recent Announcement</b>
        </h5>
        <p className="mb-4">Find out more about the Announement in the detailed.</p>
        <Button color="primary" className="font-semibold">Learn More</Button>
      </div>
      <div>
        <Image
          width={720}
          height={576}
          src="https://source.unsplash.com/random/900×700/?code"
          alt="NextUI Image with fallback"
        />
      </div>
    </div>
  );
}
