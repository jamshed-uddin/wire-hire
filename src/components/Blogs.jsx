import React from "react";

const Blogs = () => {
  return (
    <div className="mt-[65px] py-8 lg:mt-[75px] px-6 lg:px-16">
      <h1 className="text-5xl font-bold">Blogs</h1>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold ">
          What is Context API?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
        <p className="text-xl font-[350]">
          <strong>Context API</strong> replaces props when the components tree
          is deep.Passing data through props is a great way but when it comes to
          a deep tree it becomes incovenient and we have to do it
          repeadetly.What if we could pass data by parent component.Then comes
          the Context API part.It kind of teleports data by parent component to
          the components below it.To start with the Context API, the first thing
          we need to do is create a context using the createContext function
          from React.After creating our context, that context now has two React
          components that are going to be used: Provider and Consumer.The
          Provider component is going to be used to wrap the components that are
          going to have access to our context.After we wrap all the components
          that are going to need access to the context with the Provider
          component, we need to tell which component is going to consume that
          data.
        </p>
        <h1 className="text-3xl font-semibold mt-7">
          What is Custom hook?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
        <p className="text-xl font-[350]">
          <strong>Custom hooks</strong> are javascript function that start with
          use.The purpose of use is to let React know that this is not a regular
          function but it needs to treated as hooks which then allows React to
          control the use of this function to follow the standards and rules of
          hooks.Custom hooks allow us to use built in hooks within the function
          without the need of functional components, it helps us to abstract the
          business logic out of the component making component's code cleaner
          and readable.To create a custom hook, simply define a function that
          uses one or more of the built-in React hooks, and then export it for
          use in other components.
        </p>
        <h1 className="text-3xl font-semibold mt-7">
          What is useRef?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
        <p className="text-xl font-[350]">
          <strong>useRef</strong> hook can be used to directly access the DOM
          element. It allows us to persist values between renders. It can be
          used to store a mutable value across renders and does not cause a
          re-render when updated. When we try to count how many times our
          application renders using the useState Hook, we would be caught in an
          infinite loop since this Hook itself causes a re-render. Here comes
          the use of the useRef hook in ReactJS.
        </p>
        <h1 className="text-3xl font-semibold mt-7">
          What is useMemo?
          <span className="block h-[2px] w-36 mt-2  bg-regal-blue"></span>
        </h1>
        <p className="text-xl font-[350]">
          <strong>useMemo</strong> hook is used to optimize the React
          application by returning a memoized value which helps to prevent doing
          the complex calculations on every re-rendering. This hook stores the
          cached value and only updates the function on certain defined
          conditions.It is designed to improve the performance of your React
          component through the use of memoization technique.This hook takes 2
          arguments.The function that we want to cache.The values that tell us
          to call the function if they change.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
