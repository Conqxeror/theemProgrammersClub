import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/post/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.error("Error fetching post:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  const renderContent = () => {
    return { __html: post.content }; 
  };

  return (
    <Layout>
      <div className="h-full m-5">
        <div className="my-5">
          <h1 className="text-3xl font-bold">Title: {post.title}</h1>
          <p className="text-sm text-gray-500 uppercase font-semibold">
            User Posted: {post.user}
          </p>
        </div>
        <div className="px-4 py-5">
          <div dangerouslySetInnerHTML={renderContent()} />
        </div>
      </div>
    </Layout>
  );
}

export default Post;
