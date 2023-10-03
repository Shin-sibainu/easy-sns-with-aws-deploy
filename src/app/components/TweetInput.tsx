"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const postTweet = async (inputValue: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: inputValue }),
    });
    // console.log(inputValue);
  } catch (err) {
    console.error(err);
  }
};

const TweetInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    postTweet(inputValue);
    setInputValue("");

    router.refresh();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-4 rounded-md outline-none border-2 border-transparent focus:border-orange-500 focus:ring-1  placeholder-gray-500 text-gray-700"
          placeholder="今何してる？"
          style={{ transition: "all 0.3s ease" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // ユーザーの入力をstateに反映
        />
        <button
          type="submit"
          className="mt-2 w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 focus:outline-none focus:border-orange-700 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
        >
          投稿する
        </button>
      </form>
    </>
  );
};

export default TweetInput;
