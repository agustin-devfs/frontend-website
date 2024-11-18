import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

type BlogPost = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
};

type BlogProps = {
  posts: BlogPost[];
};

const BlogPage: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>Blog</Typography>
      {posts.map((post) => (
        <Card key={post.id} style={{ marginBottom: '20px' }}>
          {post.image && (
            <CardMedia
              component="img"
              height="200"
              image={post.image}
              alt={post.title}
            />
          )}
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};


// `getStaticProps` obtiene datos durante la construcción del sitio
export const getStaticProps = async () => {
  const res = await fetch('https://example.com/api/blog'); // Reemplaza con la URL de tu API
  const posts: BlogPost[] = await res.json();

  return {
    props: {
      posts, // Pasa los datos a la página como props
    },
    revalidate: 3600, // Opcional: Revalida cada hora (en segundos)
  };
};

export default BlogPage;
