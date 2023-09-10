//pages/api/posts.js
import { createPost, getPosts } from '../../utils/post';

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        const post = await createPost(req.body);
        res.status(201).json(post);
        break;

      case 'GET':
        const posts = await getPosts();
        res.status(200).json(posts);
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
