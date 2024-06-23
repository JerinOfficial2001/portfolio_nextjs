import Layout from "@/layouts/Layout";
import { getResume } from "@/redux/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function resume() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResume());
  }, []);
  const resume = useSelector((state) => state.counter.resume);
  console.log("Resume", resume);
  return (
    <div className="w-[100%]  bg-black rounded-md p-2 flex items-center justify-center">
      {resume.map((i) => (
        <img
          src={i.image.url}
          alt="loading..."
          className="h-[100%] w-[100%] object-contain"
        />
      ))}
    </div>
  );
}
