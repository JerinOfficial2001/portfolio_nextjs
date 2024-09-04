import React from "react";
import styles from "./resume.module.css";
import { Divider } from "@mui/material";
import { useGlobalContext } from "@/utils/globalContext";

export default function ResumeLayout({ data, size, notRes }) {
  const { isxs } = useGlobalContext();
  let isResponsive = !notRes && (size || isxs);
  const SkillsComponent = (arr) => {
    return (
      <>
        {arr.map((elem, index) => {
          const isLastItem = index === arr.length - 1;
          return (
            <p
              key={index}
              className={`${isResponsive ? styles.smallText : styles.text}`}
            >
              {elem} {!isLastItem && ", "}
            </p>
          );
        })}
      </>
    );
  };
  return (
    <div
      className={`w-full h-full bg-white flex items-center justify-start flex-col`}
      style={{
        padding: isResponsive ? "20px" : "70px",
      }}
    >
      <h1 className={`font-[800] text-[${isResponsive ? "10px" : "25px"}]`}>
        {data?.name}
      </h1>
      <div className={`w-full flex items-center justify-center gap-1`}>
        <p
          className={`${
            isResponsive ? styles.smallText : styles.text
          } font-bold`}
        >
          {data?.role}
        </p>
        <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
        <p
          className={`${
            isResponsive ? styles.smallText : styles.text
          } font-bold`}
        >
          Porfolio
        </p>
        <a
          className={`${isResponsive ? styles.smallText : styles.link}`}
          href="/"
        >
          {data?.portfolio_link}
        </a>
      </div>
      <div className={`w-full flex items-center justify-center gap-1`}>
        <p
          className={`${
            isResponsive ? styles.smallText : styles.text
          } font-bold`}
        >
          Mail :
        </p>
        <a
          className={`${
            isResponsive ? styles.smallText : styles.link
          } font-semibold`}
          href="/"
        >
          {data?.mail}
        </a>
        <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          +91 {data?.phone}
        </p>
        <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
        <p
          className={`${
            isResponsive ? styles.smallText : styles.text
          } font-bold`}
        >
          LinkedIn :
        </p>
        <a
          href="/"
          className={`${
            isResponsive ? styles.smallText : styles.link
          } font-semibold`}
        >
          {data?.linkedIn}
        </a>
      </div>
      <div className={`w-full flex items-center justify-center gap-1`}>
        <p
          className={`${
            isResponsive ? styles.smallText : styles.text
          } font-bold`}
        >
          GitHub :
        </p>
        <a
          className={`${
            isResponsive ? styles.smallText : styles.link
          } font-semibold`}
          href="/"
        >
          {data?.git}
        </a>
        <span className={`${isResponsive ? styles.smallText : ""}`}>|</span>
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          {data?.district}
        </p>
        <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          {data?.state}
        </p>
        <span className={`${isResponsive ? styles.smallText : ""}`}>,</span>
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          {data?.country}
        </p>
      </div>
      {/* //*Objective */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase`}
        >
          Career objective
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />
        <p className={`${isResponsive ? styles.smallText : styles.text}`}>
          {data?.about}
        </p>
      </div>
      {/* //*Education */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px]`}
        >
          Education
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />
        {data?.education.map((elem, index) => {
          return (
            <div className={`w-full mb-${isResponsive ? 0 : 2}`} key={index}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.department}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-2">
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.institution}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.percentage.includes(".") ? "CGPA" : "Percentage"}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  -
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
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
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px]`}
        >
          Skills
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />

        <ul
          className={`list-disc ml-5 ${isResponsive ? styles.smallText : ""}`}
        >
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Technical Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.technical)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Soft Skills
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.soft)}
            </div>
          </li>
          <li>
            <div className="w-full flex flex-row items-center justify-start gap-1">
              <p
                className={`${
                  isResponsive ? styles.smallText : styles.text
                } font-bold`}
              >
                Languages
              </p>
              <span className={`${isResponsive ? styles.smallText : ""}`}>
                -
              </span>
              {SkillsComponent(data?.skills?.language)}
            </div>
          </li>
        </ul>
      </div>
      {/* //*Experience */}
      <div
        className={`w-full flex items-start justify-center gap-1 flex-col mt-2`}
      >
        <p
          className={`${
            isResponsive ? styles.smallText : styles.title
          } font-bold uppercase text-[15px]`}
        >
          Experience
        </p>
        <Divider
          sx={{ width: "100%", borderWidth: "1.5px", borderColor: "black" }}
        />
        {data.experience.map((elem, index) => {
          return (
            <div key={index} className={`w-full mb-${isResponsive ? 0 : 3}`}>
              <div className="w-full flex flex-row items-center justify-between">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.role}
                </p>
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.from.slice(0, 4)}-{elem.to.slice(0, 4)}
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-start gap-1">
                <p
                  className={`${
                    isResponsive ? styles.smallText : styles.text
                  } font-bold`}
                >
                  {elem.company_name}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  |
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.place}
                </p>
                <span className={`${isResponsive ? styles.smallText : ""}`}>
                  ,
                </span>
                <p
                  className={`${isResponsive ? styles.smallText : styles.text}`}
                >
                  {elem.state}{" "}
                </p>
              </div>
              <ul
                className={`list-disc ml-5 ${
                  isResponsive ? styles.smallText : ""
                }`}
              >
                <li>
                  <p
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    }`}
                  >
                    {elem.description}
                  </p>
                </li>
                <li>
                  <div
                    className={`${
                      isResponsive ? styles.smallText : styles.text
                    } w-full flex gap-1`}
                  >
                    <span
                      className={`${
                        isResponsive ? styles.smallText : styles.text
                      } font-bold`}
                    >
                      Learned Skill :
                    </span>
                    {SkillsComponent(elem.skills)}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
