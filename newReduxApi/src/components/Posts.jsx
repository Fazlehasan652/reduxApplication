import { useState } from "react";
import { useGetPostsQuery } from "../app/apiSlice";
import Post from "./Post";

const Posts = () => {
  // const [request, setRequest] = useState(false);
  const [currentPostId, setCCurrentPostId] = useState(null);
  // const {
  //   data: posts,
  //   isLoading,
  //   isError,
  //   error,
  // } = useGetPostsQuery(10, {
  //   // skip: request,
  //   // refetchOnMountOrArgChange: true,
  // });
  const { data: posts, isLoading, isError, error } = useGetPostsQuery(10);
  let content;
  if (isLoading) {
    content = <h1>Loading Posts....</h1>;
  }
  if (!isLoading && isError) {
    content = (
      <h1 className="text-red-500">Something wrong happened - {error}</h1>
    );
  }

  if (!isLoading && !isError) {
    if (posts.length > 0) {
      content = (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ listStyleType: "square" }}>
              <a href="#" onClick={() => setCCurrentPostId(post.id)}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      );
    }
  }

  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {content}
      {currentPostId && (
        <div className="max-w-md mx-auto mt-10 space-y-5 bg-pink-300 p-5">
          <Post id={currentPostId} />
        </div>
      )}
    </div>
  );
};

export default Posts;
