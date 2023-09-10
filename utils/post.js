import { connectToDatabase } from '../lib/db';
const POSTS_COLLECTION = 'posts'; 
import { ObjectId } from 'mongodb'; // Import ObjectId

export async function createPost(postData) {
  const { title, content, user, dateAdded } = postData;
  try {
    const { db } = await connectToDatabase();

    // Insert the post into the database
    const result = await db.collection(POSTS_COLLECTION).insertOne({
      title,
      content,
      user,
      dateAdded,
    });
    return result; 
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

export async function getPosts() {
  try {
    const { db } = await connectToDatabase();
    return await db.collection(POSTS_COLLECTION).find().toArray();
  } catch (error) {
    console.error('Error getting posts', error);
    throw error;
  }

}

export async function getPostById(id) {
  try {
    const { db } = await connectToDatabase();
    const postId = new ObjectId(id);
    const post = await db.collection(POSTS_COLLECTION).findOne({ _id: postId });
    return post;
  } catch (error) {
    console.error('Error getting post by ID:', error);
    throw error;
  }
}