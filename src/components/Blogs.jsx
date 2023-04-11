import React from "react";

const Blogs = () => {
  return (
    <div className="mt-[65px] py-8 lg:mt-[75px] px-6 lg:px-16">
      <h1 className="text-5xl font-bold">Blogs</h1>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold">
          What is Context API?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
        <p className="text-xl font-[350]">
          <strong>Context API</strong> replaces props when the components tree
          is deep.Passing data through props is a great way but when it comes to
          a deep tree it becomes incovenient and we have to do it
          repeadetly.What if we could pass data by parent component.Then comes
          the Context API part.It kind of teleports data by parent component to
          the components below it.
        </p>
        <h1 className="text-3xl font-semibold">
          What is Custom hook?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
        <h1 className="text-3xl font-semibold">
          What is useRef?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
        <h1 className="text-3xl font-semibold">
          What is useMemo?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
