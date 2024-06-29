import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";
import LoadingPostsDetails from "./loading";

export default function PostDetailsPage({ params }) {
  const postId = params.postId;

  return (
    <div>
      <h1>Post Details</h1>

      <Suspense fallback={<LoadingPostsDetails />}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
