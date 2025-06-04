import { getPosts } from "@kord/supabase/queries";

interface Post {
  id: string;
  title: string;
}

export async function PostsServer() {
  // In development mode, use mock data
  let posts: Post[] = [];
  
  if (process.env.NODE_ENV === 'development') {
    console.info('🔄 Development mode: Using mock post data');
    posts = [
      { id: '1', title: 'Sample Post 1' },
      { id: '2', title: 'Sample Post 2' },
    ];
  } else {
    try {
      // For production, try to get real data
      const response = await getPosts();
      if (response && 'data' in response) {
        posts = response.data as Post[] || [];
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-md hover:bg-muted/40 transition-colors">
          {post.title}
        </div>
      ))}
      {posts.length === 0 && (
        <div className="p-4 text-muted-foreground text-center">No posts available</div>
      )}
    </div>
  );
}
