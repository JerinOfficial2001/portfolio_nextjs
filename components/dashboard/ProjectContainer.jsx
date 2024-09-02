import { Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronDown, ChevronUp } from "lucide";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function ProjectContainer({
  projects,
  title,
  description,
  type,
  isLoading,
  Profiles,
}) {
  const [visibleCount, setvisibleCount] = useState(3);
  const handleViewMore = () => {
    if (visibleCount == projects.length) {
      setvisibleCount(3);
    } else {
      setvisibleCount(projects.length);
    }
  };
  const getProfile = async (userID) => {
    const currentProfile = Profiles?.find((elem) => elem.userID == userID);
    if (currentProfile) {
      return currentProfile;
    } else {
      return null;
    }
  };
  const [displayProjects, setdisplayProjects] = useState([]);
  useEffect(() => {
    if (projects && projects.length > 3) {
      setdisplayProjects(projects?.slice(0, visibleCount));
    } else if (projects && projects.length > 0) {
      setdisplayProjects(projects);
    } else {
      setdisplayProjects([]);
    }
  }, [projects?.length, projects]);

  return (
    <div className="w-[100%] flex flex-col items-center justify-center gap-5 ">
      <p className="md:text-[2.25rem] text-white font-bold tracking-wider">
        {title}
      </p>
      <p className="md:text-[1.125rem] text-[#9ca3af] font-semibold tracking-wider text-center">
        {description}
      </p>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {!isLoading
          ? displayProjects?.map((elem, index) => {
              return (
                <Grid key={index} item md={4} xs={12}>
                  <div
                    style={{ width: "100%" }}
                    className="animate__animated animate__zoomIn animate__delay-.3s thirdrow"
                  >
                    <ProjectCard
                      title={elem.title || elem.name}
                      description={elem.description || elem.role}
                      link={elem.link}
                      image={elem.image.url}
                      id={elem._id}
                      type={type}
                      apk_id={elem.apk_id}
                      userID={elem.userID}
                      getProfile={getProfile}
                    />
                  </div>
                </Grid>
              );
            })
          : [1, 2, 3].map((_, index) => {
              return (
                <Grid key={index} item md={4} xs={12}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      bgcolor: "#34363a",
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  />
                </Grid>
              );
            })}
      </Grid>
      {projects?.length > 3 && !isLoading && (
        <div
          onClick={handleViewMore}
          className="bg-[#004a77] text-[#c2e7ff] p-2 rounded-lg px-4 transition-all duration-[.5s] hover:scale-105 cursor-pointer"
        >
          {visibleCount > 3 ? "View less" : "View more"}

          {visibleCount > 3 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
      )}
    </div>
  );
}
