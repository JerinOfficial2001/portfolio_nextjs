import React from "react";
import { Toaster } from "react-hot-toast";

export default function Layout({ children, prev, button }) {
  return (
    <div className="h-full w-full flex-col flex gap-2 p-2">
      <Toaster position="top-center" />
      <div className="w-[100%] flex items-center justify-between p-2 ">
        <div onClick={prev} className="bg-black p-2 rounded-md">
          <p>{"<="}</p>
        </div>
        {button}
      </div>
      {children}
    </div>
  );
}
