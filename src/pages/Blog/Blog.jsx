/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <>
      <section>
        <div className="bg-gray-100">
          <div>
            <h1 className="text-4xl font-bold text-center py-16">
              Most Read Blogs{" "}
            </h1>
          </div>
        </div>

        <div className="my-container my-20">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-8 p-10 items-center border-box rounded-md bg-gray-50 ">
              
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">
                  Tell us the differences between uncontrolled and controlled
                  components?
                </h4>
                <p className="text-xl font-semibold text-gray-600">
                  In React, controlled components refer to components that have
                  their state and behavior controlled by the parent component.
                  These components rely on props passed down from the parent
                  component to update their state and behavior. Uncontrolled
                  components refer to components that manage their own state
                  internally. They use a ref to access the DOM element's current
                  value and update the state accordingly.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-box gap-8 items-center p-10 rounded-md bg-gray-50 ">
              
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">
                  How to validate React props using PropTypes?
                </h4>
                <p className="text-xl font-semibold text-gray-600">
                  React PropTypes is a built-in feature that provides a way to
                  validate the type and shape of the props passed to a React
                  component. This helps ensure that the correct data is passed
                  to a component and can prevent errors and bugs. Here some
                  methods: <br />
                  PropTypes.any : The prop can be of any data type. <br />
                  PropTypes.bool : The prop should be a Boolean. <br />
                  PropTypes.number : The prop should be a number. <br />
                  PropTypes.string : The prop should be a string. <br />
                  PropTypes.func : The prop should be a function. <br />
                  PropTypes.array : The prop should be an array.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-box gap-8 p-10 items-center rounded-md bg-gray-50 ">
             
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">
                  Tell us the difference between nodejs and express js?
                </h4>
                <p className="text-xl font-semibold text-gray-600">
                  Node.js is a runtime environment that provides basic features
                  for building server-side applications, while Express.js is a
                  web framework built on top of Node.js that provides a
                  higher-level set of features specifically for building web
                  applications. Express.js provides a more intuitive and
                  streamlined development experience, while Node.js offers more
                  flexibility in how applications are built and
                  structured.Node.js provides a basic set of features for
                  building server-side applications, such as file system access,
                  network communication, and event-driven programming.
                  Express.js, on the other hand, provides a higher-level set of
                  features for building web applications, including routing,
                  middleware, and templating.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-box gap-8 p-10 items-center rounded-md bg-gray-50 ">
             
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-bold">
                  What is a custom hook, and why will you create a custom hook?
                </h4>
                <p className="text-xl font-semibold text-gray-600">
                  A custom hook is a function in React that allows developers to
                  extract and reuse logic from a component, making it easier to
                  share functionality across multiple components. Custom hooks
                  are functions that typically use built-in React hooks and can
                  be created to perform any kind of task or functionality needed
                  in a component. custom hooks are a powerful tool in React
                  development that allows developers to extract and reuse logic
                  from components, making it easier to write and maintain code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
