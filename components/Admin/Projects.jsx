import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, removeProject } from "@/redux/actions";

export default function Projects({ setclicky, clicky }) {
  const dispatch = useDispatch();

  const allProjects = async () => dispatch(getProjects());
  useEffect(() => {
    allProjects();
  }, []);
  const projects = useSelector((state) => state.counter.projects);
  return (
    <Layout
      prev={() => {
        setclicky("/");
      }}
      button={
        <button
          className="bg-black p-2 rounded-md"
          onClick={() => {
            setclicky("addProject");
          }}
        >
          ADD PROJECT
        </button>
      }
    >
      <div className="w-[100%] h-[80vh] overflow-x-scroll flex-col flex gap-2">
        {projects?.map((i) => {
          return (
            <div
              key={i._id}
              className="h-[250px] bg-[black] rounded-md flex-col flex gap-1 p-2 justify-center items-center"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "120px",
                  borderRadius:2
                }}
              >
                <img
                  src={i.image.url}
                  alt="loading"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h1>{i.title}</h1>
              <h1>{i.link}</h1>
              <h1>{i.description}</h1>
              <h1>{i.toolsUsed}</h1>
           
              <div className="w-[100%] flex items-center justify-between ">
                <button className="border-[1px] p-2 rounded-md w-[70px]">
                  EDIT
                </button>
                <button
                  className="border-[1px] p-2 rounded-md"
                  onClick={async () => {
                    await removeProject(i._id);
                    await dispatch(getProjects());
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
