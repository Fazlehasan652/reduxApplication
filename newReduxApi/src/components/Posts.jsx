import { useState } from "react";
import { useGetPostsQuery } from "../app/apiSlice";

const Posts = () => {
  const [request, setRequest] = useState(false)
  const { data: posts, isLoading, isError, error } = useGetPostsQuery(5, {
    skip: request,
    refetchOnMountOrArgChange:true
  });

  let content;
  if (isLoading) {
    content = <h1>Loading Posts....</h1>;
  }
  if (!isLoading && isError) {
    content = (
      <h1 className='text-red-500'>Something wrong happened - {error}</h1>
    );
  }

  if (!isLoading && !isError) {
    if (posts.length > 0) {
      content = (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ listStyleType: "square" }}>
              {post.title}
            </li>
          ))}
        </ul>
      );
    }
  }

  return (
    <div className='p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
      {content}
    </div>
  );
};

export default Posts;
