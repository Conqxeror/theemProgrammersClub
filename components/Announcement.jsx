import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Announcement() {

    const upcomingEvents = [
        {
            id: 1,
            title: "Web Development Workshop",
            date: "August 25, 2023",
            description: "Join us for a hands-on web development workshop.",
            imageUrl: "https://source.unsplash.com/random/900x700/?coding",
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            date: "September 10, 2023",
            description: "Learn the art of designing user-centered interfaces.",
            imageUrl: "https://source.unsplash.com/random/900x700/?design",
        },
        {
            id: 3,
            title: "Data Science Conference",
            date: "October 5, 2023",
            description: "Explore the latest trends in data science and analytics.",
            imageUrl: "https://source.unsplash.com/random/900x700/?data",
        },
        // Add more events...
    ];

    return (
        <div className="">
            <h1 className="py-5 text-large"><b>Upcoming Events</b></h1>
            <div className="gap-5 grid justify-items-center md:flex">
                {upcomingEvents.map((event, index) => (
                    <div key={index}>
                        <Card className="py-4 w-80">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{event.title}</p>
                                <small className="text-default-500">{event.date}</small>
                                <h4 className="font-bold text-large">{event.description}</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 justify-center">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src={event.imageUrl}
                                    width={270}
                                />
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
