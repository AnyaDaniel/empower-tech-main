import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className="h-auto  max-w-[1521px] mx-auto w-full  flex flex-col lg:flex-row items-start justify-between px-4 lg:px-20 py-10 lg:py-20 ">
      <header className="w-full lg:w-1/5 italics text-xl italic text-empBlack">
        Our Story
      </header>
      <div className="w-full lg:w-4/5 flex flex-col gap-y-3">
        <h2 className="text-sm text-empBlack">
          At Empower Tech Limited, we believe in the power of effective
          communication to transform businesses. With a focus on creating
          genuine connections, we specialize in providing tailored solutions
          that meet the unique needs of our clients. Our team is committed to
          staying at the forefront of technology, ensuring we deliver smart and
          efficient strategies for outsourcing. Discover a partner who values
          your success and is dedicated to enhancing your business through
          impactful communication.
        </h2>
        <Image
          className="object-cover w-full h-auto"
          src="/hero/story-video.png"
          width={1000}
          height={700}
          alt="Video"
        />
      </div>
    </div>
  );
};

export default Story;
