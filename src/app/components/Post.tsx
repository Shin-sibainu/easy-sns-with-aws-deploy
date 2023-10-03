"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion/dom";
import { Post } from "@/utils/Types";

type PostProps = {
  post: Post;
};

const PostComponent = (props: PostProps) => {
  const { post } = props;
  // const [isLiked, setIsLiked] = useState<boolean>(false); // Likeの状態を管理するstate
  // const [likes, setLikes] = useState<number>(post.likes); // Likeの状態を管理するstate

  // const toggleLike = async () => {
  //   setIsLiked(!isLiked); // Likeの状態をトグルする
  //   // ここで必要に応じて、いいね数を更新したり、APIにリクエストを送ったりできます。
  //   const editPost = await fetch(`http://localhost:3000/api/post/`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id: post.id }),
  //   });
  //   console.log(editPost);

  //   if (editPost.ok) {
  //     const { post: updatedPost } = await editPost.json();
  //     console.log(updatedPost);
  //     // setLikes(updatedPost.likes);
  //   }
  // };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0, scale: 0.75 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={easeOut}
      className="bg-slate-50 py-5 px-5 rounded-md mt-3 relative"
    >
      <div>
        <p className="font-medium">{post.content}</p>
        <small className="text-gray-600 font-medium mr-2">
          {new Date(post.createdAt).toLocaleString("ja-JP")}
        </small>
        {/* <button className="rounded-full p-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            stroke="red"
            className="h-5 w-5"
            style={{ transform: "translateY(3px)" }} // ここでtranslateYを設定
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <span>{likes}</span> */}
      </div>
    </motion.div>
  );
};

export default PostComponent;
