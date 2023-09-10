import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import { validateHeaderValue } from "http";

export default function Resource() {
  const resourceLinks = [
    {
      id: 1,
      imageLink: "https://source.unsplash.com/random/900×700/?website",
      description:
        "The best course for the beginners who are looking for starting a jouney in FrontEnd Development",
      siteLink: "google.com",
      title: "Introduction to Web Development",
      courseLink: "https://source.unsplash.com/random/900×700/?website",
    },
    {
      id: 2,
      imageLink: "https://source.unsplash.com/random/900×700/?ui",
      description:
        "The best course for the beginners who are looking for starting a jouney in FrontEnd Development",
      siteLink: "google.com",
      title: "UI/UX Design Principles",
      courseLink: "https://source.unsplash.com/random/900×700/?ui",
    },
    {
      id: 3,
      imageLink: "https://source.unsplash.com/random/900×700/?javascript",
      description:
        "The best course for the beginners who are looking for starting a jouney in FrontEnd Development",
      siteLink: "google.com",
      title: "Getting Started with JavaScript",
      courseLink: "https://source.unsplash.com/random/900×700/?javascript",
    },
    {
      id: 4,
      imageLink: "https://source.unsplash.com/random/900×700/?frontend",
      description:
        "The best course for the beginners who are looking for starting a jouney in FrontEnd Development",
      siteLink: "google.com",
      title: "Front-end Frameworks Comparison",
      courseLink: "https://source.unsplash.com/random/900×700/?frontend",
    },
    // Add more resource links...
  ];

  return (
    <div className="">
      <h1 className="py-5 text-large">
        <b>Resources</b>
      </h1>
      <div className="grid gap-5 md:flex">
      {resourceLinks.map((event, index) => (
        <div key={index}>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="logo"
                height={40}
                radius="sm"
                src={event.imageLink}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">
                  {event.title}
                </p>
                <p className="text-small text-default-500">{event.siteLink}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                {event.description}
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isexternal = "true" showanchoricon="true" href={event.courseLink}>
                Visit Course
              </Link>
            </CardFooter>
          </Card>
        </div>
      ))}
      </div>
    </div>
  );
}
