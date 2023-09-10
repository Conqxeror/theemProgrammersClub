import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from '@nextui-org/image';
import { Link } from "@nextui-org/link";

function extractFirstImageFromHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const imgElement = doc.querySelector('img');
  return imgElement ? imgElement.getAttribute('src') : null;
}

export default function Articles() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Error fetching posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <h1 className="py-5 text-large"><b>Articles</b></h1>
      <div className="gap-5 grid justify-items-center md:flex">
      {posts.map((post) => (
        <Card key={post._id} className="py-4 w-80">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Link href={`post/${post._id}`}>
          <p className="text-large uppercase font-bold">{post.title}</p></Link>
          <small className="text-default-500">{post.dateAdded}</small>
          <h4 className="font-bold text-tiny">{post.user}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={extractFirstImageFromHTML(post.content)}
            width={270}
          />
        </CardBody>
      </Card>
      ))}
    </div>
    </>
  );
}
