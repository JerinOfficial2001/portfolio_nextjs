import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { addResume, getResume, updateResume } from "@/redux/actions";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function Resume({ setclicky }) {
  const [resume, setresume] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResume());
  }, []);
  const myrResume = useSelector((state) => state.counter.resume);
  const transformFile = (file) => {
    const reader = new FileReader(file);
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setresume(reader.result);
      };
    } else {
      setresume("");
    }
  };
  const imgHandler = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };
  const submitHandler = async () => {
    if (resume !== "") {
      // await addResume({ image: resume });
    } else {
      toast.error("All fields are Mandatory!");
    }
  };
  // console.log("IMG", resume);
  return (
    <Layout
      prev={() => {
        setclicky("/");
      }}
    >
      <div className="h-[400px] w-[200px] p-2">
        {myrResume.map((i) => (
          <>
            <img
              key={i._id}
              src={i.image.url}
              alt="loading..."
              className="h-[100%] w-[100%] object-contain"
            />
            <input
              type="file"
              accept="image/"
              className="w-[100%] p-3 rounded-md"
              onChange={imgHandler}
            />
            <button
              onClick={async () => {
                submitHandler();
                await updateResume(i._id, resume);
                await dispatch(getResume());
              }}
            >
              ADD
            </button>
          </>
        ))}
      </div>
    </Layout>
  );
}
