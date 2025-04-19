"use client";

import { Text } from "@repo/ui";

const Page = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  }

  return (
    <article>
      <Text>안녕하세요</Text>
      <div onClick={handleClick} className="flex flex-col items-center justify-between min-h-screen p-24">
        <Text>저에 대해서 궁금하신가요?</Text>
      </div>
    </article>
  );
};

export default Page;
