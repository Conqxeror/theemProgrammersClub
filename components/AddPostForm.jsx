// components/AddPostForm.js

import { useState } from "react";
import { createPost } from "../utils/apiClient";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

export default function AddPostForm({ session, isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const post = {
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()), 
      image,
      user: session.user.email,
      dateAdded: new Date().toString(), 
    };

    await createPost(post);
    setIsSubmitting(false);

    setTitle("");
    setContent("");
    setTags("");
    setImage(null);
  };

  return (
  <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className={isOpen ? '' : 'hidden'} >
  <ModalContent className="p-4">
    <ModalHeader className="flex flex-col gap-1">
      <h2 className="text-2xl font-semibold">Create Post</h2>
    </ModalHeader>
    <ModalBody>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-600">Title</label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-gray-600">Content</label>
          <textarea
            id="content"
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-gray-600">Image</label>
          <input
            type="file"
            id="image"
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary-500"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="tags" className="text-gray-600">Tags</label>
          <input
            type="text"
            id="tags"
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary-500"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (comma-separated)"
          />
        </div>
      </form>
    </ModalBody>
    <ModalFooter className="flex">
      <Button
        color="danger"
        variant="light"
        onPress={onClose}
        className="border border-danger-500 text-danger-500 px-4 py-2 rounded-md hover:bg-danger-100"
      >
        Close
      </Button>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 focus:ring focus:ring-primary-200"
        onClick={handleSubmit} // Trigger the form submission
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </ModalFooter>
  </ModalContent>
</Modal>
  );
}
