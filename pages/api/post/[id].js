// pages/api/posts/[id].js
import { getPostById } from "../../../utils/post";

export default async function handler(req, res) {

    
  try {

      const { id } = req.query;
      const post = await getPostById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
    
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
