import { getCollection } from 'astro:content';

export const GET = async () => {
  const posts = await getCollection('posts');

  const searchIndex = posts.map((post) => ({
    id: post.id,
    data: {
      title: post.data.title,
      description: post.data.description,
    },
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
