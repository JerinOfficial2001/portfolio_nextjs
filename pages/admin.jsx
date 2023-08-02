import AddProject from "@/components/Admin/AddProject";
import Projects from "@/components/Admin/Projects";
import Resume from "@/components/Admin/Resume";
import React, { useState } from "react";

export default function Admin() {
  const [clicky, setclicky] = useState("/");
  return (
    <div className=" text-white h-full w-full flex-col flex gap-2 p-2">
      <div className="w-[100%] h-[60px] flex items-center p-2 gap-3">ADMIN</div>
      {"/" === clicky && (
        <>
          <div
            onClick={() => {
              setclicky("projects");
            }}
            className="bg-black w-[100%] h-[200px] flex items-center justify-center p-2 gap-3 rounded-md"
          >
            PROJECTS
          </div>
          <div className="bg-black w-[100%] h-[200px] flex items-center justify-center p-2 gap-3 rounded-md">
            NOTIFICATIONS
          </div>
          <div className="bg-black w-[100%] h-[200px] flex items-center justify-center p-2 gap-3 rounded-md">
            ADMIN
          </div>
          <div
            onClick={() => {
              setclicky("resume");
            }}
            className="bg-black w-[100%] h-[200px] flex items-center justify-center p-2 gap-3 rounded-md"
          >
            RESUME
          </div>
        </>
      )}
      {"projects" === clicky && (
        <Projects setclicky={setclicky} clicky={clicky} />
      )}
      {"addProject" === clicky && (
        <AddProject setclicky={setclicky} clicky={clicky} />
      )}
      {"resume" === clicky && <Resume setclicky={setclicky} />}
    </div>
  );
}
