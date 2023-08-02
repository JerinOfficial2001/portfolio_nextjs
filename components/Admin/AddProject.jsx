import React, { useEffect, useState } from "react";
import { addProject, getProjects, removeProject } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";

export default function AddProject({ setclicky, clicky }) {
  const dispatch = useDispatch();
  const [inputDatas, setinputDatas] = useState({
    title: "",
    link: "",
  });
  const { title, link } = inputDatas;
  const [projectImg, setprojectImg] = useState("");
  // const [projectImg1, setprojectImg1] = useState("");
  // const [projectImg2, setprojectImg2] = useState("");

  const transformFile = (file) => {
    const reader = new FileReader(file);
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setprojectImg(reader.result);
      };
    } else {
      setprojectImg("");
    }
  };

  const imgHandler = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };
  // const transformFile1 = (file) => {
  //   const reader = new FileReader(file);
  //   if (file) {
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       setprojectImg1(reader.result);
  //     };
  //   } else {
  //     setprojectImg1("");
  //   }
  // };

  // const imgHandler1 = (e) => {
  //   const file = e.target.files[0];
  //   transformFile1(file);
  // };
  // const transformFile2 = (file) => {
  //   const reader = new FileReader(file);
  //   if (file) {
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       setprojectImg2(reader.result);
  //     };
  //   } else {
  //     setprojectImg2("");
  //   }
  // };

  // const imgHandler2 = (e) => {
  //   const file = e.target.files[0];
  //   transformFile2(file);
  // };

  const allProjects = async () => dispatch(getProjects());
  useEffect(() => {
    allProjects();
  }, []);
  const submitHandler = async () => {
    if (
      title !== "" &&
      link !== "" &&
      projectImg !== ""
      // projectImg1 !== "" &&
      // projectImg2 !== ""
    ) {
      const post = addProject({
        title,
        link,
        image: projectImg,
      });
      if (post) {
        setinputDatas({
          title: "",
          link: "",
        });
        setprojectImg("");
        setclicky("projects");
        // setprojectImg1("");
        // setprojectImg2("");
      }
    } else {
      alert("Fill All");
    }
  };

  return (
    <Layout
      prev={() => {
        setclicky("projects");
      }}
    >
      <div className="h-full w-full flex-col flex gap-2 justify-center">
        <div className="w-[100%] h-[300px] p-2 flex items-center justify-center border-[1px] rounded-md">
          {projectImg ? (
            <img
              src={projectImg}
              alt="loading"
              className="h-[100%] w-[100%] object-contain"
            />
          ) : (
            "Preview"
          )}
        </div>
        <input
          className="w-[100%] p-3 rounded-md"
          placeholder="Title"
          required
          type="text"
          value={title}
          onChange={(e) => {
            setinputDatas({ ...inputDatas, title: e.target.value });
          }}
        />
        <input
          className="w-[100%] p-3 rounded-md"
          placeholder="Link"
          required
          type="text"
          value={link}
          onChange={(e) => {
            setinputDatas({ ...inputDatas, link: e.target.value });
          }}
        />
        {/* <input
              placeholder="Description"
              required
              type="text"
              value={description}
              onChange={(e) => {
                setinputDatas({ ...inputDatas, description: e.target.value });
              }}
            />
            <input
              placeholder="ToolsUsed"
              required
              type="text"
              value={toolsUsed}
              onChange={(e) => {
                setinputDatas({ ...inputDatas, toolsUsed: e.target.value });
              }}
            /> */}
        <input
          className="w-[100%] p-3 rounded-md"
          required
          type="file"
          accept="image/"
          onChange={imgHandler}
        />
        {/* <input
              required
              type="file"
              accept="image/"
              onChange={imgHandler1}
            />
            <input
              required
              type="file"
              accept="image/"
              onChange={imgHandler2}
            /> */}
        <button
          className="w-[100%] p-3 rounded-md"
          onClick={async () => {
            submitHandler();
            await dispatch(getProjects());
          }}
        >
          ADD
        </button>
      </div>
    </Layout>
  );
}
