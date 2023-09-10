import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useSession } from 'next-auth/react'; 
import { Router, useRouter } from 'next/router'; 

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading React Quill...</p>,
});

export default function UploadArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      [{ 'link': 'link' }, { 'image': 'image' }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'script',
    'indent',
    'direction',
    'size',
    'color',
    'background',
    'align',
    'link',
    'image',
  ];

  const { data: session } = useSession(); 
  const router = useRouter(); 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!session?.user) {
      setError('You must be logged in to post an article.');
      return;
    }
  
    if (!title.trim() || !content.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError(null);
  
    const requestObj = {
      title: title,
      content: content,
      user: session.user.email,
      dateAdded: new Date().toString(),
    };
  
    try {
      // Make a POST request to the API to create a new post
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestObj),
      });
  
      if (response.status === 201) {
        const newPost = await response.json();
        console.log('New post created:', newPost);
        setTitle('');
        setContent('');
        // router.push('/success');
        console.log("Post created successfully!!!")
      } else {
        console.error('Error creating post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div>
      <h1 className='flex justify-center m-5'>Upload Article</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="error text-danger-300 flex justify-center">{error}</p>}
        <div className='flex justify-center p-5'>
          <Input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Article Title"
          />
        </div>
        <div className='p-5'>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={content}
            onChange={handleContentChange}
            placeholder="Write your article here..."
          />
          <div className='flex justify-end my-5 gap-3'>
          <Button color='danger' onClick={handleCancel} >Cancel</Button>
          <Button color="primary" type="submit">
            Publish
          </Button>
        </div>
        </div>
      </form>
    </div>
  );
}
