import React from "react";
import styles from "./resume.module.css";
import { Divider } from "@mui/material";

export default function ResumeLayout({ data }) {
  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start p-8 flex-col`}
    >
      <h1 className={`font-[800] text-[25px]`}>{data?.name}</h1>
      <div className={`w-full flex items-center justify-center gap-1`}>
        <p className={`${styles.text} font-bold`}>{data?.role}</p>|
        <p className={`${styles.text} font-bold`}>Porfolio</p>
        <a className={`${styles.link}`} href="/">
          {data?.portfolio_link}
        </a>
      </div>
      <div className={`w-full flex items-center justify-center gap-1`}>
        <p className={`${styles.text} font-bold`}>Mail :</p>
        <a className={`${styles.link} font-semibold`} href="/">
          {data?.mail}
        </a>
        |<p className={`${styles.text}`}>+91 {data?.phone}</p>|
        <p className={`${styles.text} font-bold`}>LinkedIn :</p>
        <a href="/" className={`${styles.link} font-semibold`}>
          {data?.linkedIn}
        </a>
      </div>
      <div className={`w-full flex items-center justify-center gap-1`}>
        <p className={`${styles.text} font-bold`}>GitHub :</p>
        <a className={`${styles.link} font-semibold`} href="/">
          {data?.git}
        </a>
        |<p className={`${styles.text}`}>{data?.district}</p>,
        <p className={`${styles.text}`}>{data?.state}</p>,
        <p className={`${styles.text}`}>{data?.country}</p>
      </div>
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
      >
        <p className={`${styles.title} font-bold uppercase`}>
          Career objective
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />
        <p className={`${styles.text}`}>{data?.about}</p>
      </div>
      {/* //*Education */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
      >
        <p className={`${styles.title} font-bold uppercase text-[15px]`}>
          Education
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />
        {data?.education.map((elem, index) => {
          return (
            <div className="w-full" key={index}>
              <div className="w-full flex flex-row items-center justify-between">
                <p className={`${styles.text} font-bold`}>{elem.department}</p>
                <p className={`${styles.text} font-bold`}>
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-2">
                <p className={`${styles.text}`}>{elem.institution}</p>|
                <p className={`${styles.text} font-bold`}>
                  {elem.percentage.includes(".") ? "CGPA" : "Percentage"}
                </p>
                -
                <p className={`${styles.text}`}>
                  {elem.percentage.includes(".")
                    ? elem.percentage + "/10"
                    : elem.percentage + "%"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* //*Skills */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
      >
        <p className={`${styles.title} font-bold uppercase text-[15px]`}>
          Skills
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />

        <ul className="list-disc ml-5">
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <p className={`${styles.text} font-bold`}>Technical Skills</p>-
              <p className={`${styles.text}`}>Skill 1</p>,
              <p className={`${styles.text}`}>Skill 2</p>,
              <p className={`${styles.text}`}>Skill 3</p>,
              <p className={`${styles.text}`}>Skill 4</p>
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p className={`${styles.text} font-bold`}>Soft Skills</p>-
              <p className={`${styles.text}`}>Skill 1</p>,
              <p className={`${styles.text}`}>Skill 2</p>,
              <p className={`${styles.text}`}>Skill 3</p>,
              <p className={`${styles.text}`}>Skill 4</p>
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p className={`${styles.text} font-bold`}>Languages</p>-
              <p className={`${styles.text}`}>Language 1</p>,
              <p className={`${styles.text}`}>Language 2</p>,
              <p className={`${styles.text}`}>Language 3</p>
            </div>
          </li>
        </ul>
      </div>
      {/* //*Experience */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
      >
        <p className={`${styles.title} font-bold uppercase text-[15px]`}>
          Experience
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />
        <div className="w-full flex flex-row items-center justify-between">
          <p className={`${styles.text} font-bold`}>Role</p>
          <p className={`${styles.text} font-bold`}>Year</p>
        </div>
        <div className="w-full flex flex-row items-center justify-start gap-1">
          <p className={`${styles.text} font-bold`}>Company name</p>|
          <p className={`${styles.text}`}>Place</p>,
          <p className={`${styles.text}`}>State</p>
        </div>
        <ul className="list-disc ml-5">
          <li>
            <p className={`${styles.text}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              ullam at nesciunt atque quibusdam possimus qui distinctio
            </p>
          </li>
          <li>
            <div className={`${styles.text} w-full flex gap-1`}>
              <span className={`${styles.text} font-bold`}>
                Learned Skill :
              </span>
              <p className={`${styles.text}`}>Skill 1</p>,
              <p className={`${styles.text}`}>Skill 2</p>,
              <p className={`${styles.text}`}>Skill 3</p>,
              <p className={`${styles.text}`}>Skill 4</p>
            </div>
          </li>
        </ul>
        <div className="w-full flex flex-row items-center justify-between">
          <p className={`${styles.text} font-bold`}>Role</p>
          <p className={`${styles.text} font-bold`}>Year</p>
        </div>
        <div className="w-full flex flex-row items-center justify-start gap-1">
          <p className={`${styles.text} font-bold`}>Company name</p>|
          <p className={`${styles.text}`}>Place</p>,
          <p className={`${styles.text}`}>State</p>
        </div>
        <ul className="list-disc ml-5">
          <li>
            <p className={`${styles.text}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              ullam at nesciunt atque quibusdam possimus qui distinctio
            </p>
          </li>
          <li>
            <div className={`${styles.text} w-full flex gap-1`}>
              <span className={`${styles.text} font-bold`}>
                Learned Skill :
              </span>
              <p className={`${styles.text}`}>Skill 1</p>,
              <p className={`${styles.text}`}>Skill 2</p>,
              <p className={`${styles.text}`}>Skill 3</p>,
              <p className={`${styles.text}`}>Skill 4</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
