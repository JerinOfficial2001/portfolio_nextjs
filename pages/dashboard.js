import { GetAllProfile } from "@/controller/profile";
import Layout from "@/layouts/Layout";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { MyContextState } from "./_app";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { Add } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import ProfileModal from "@/components/ProfileModal";
import ProjectContainer from "@/components/dashboard/ProjectContainer";
import { useQuery } from "@tanstack/react-query";
import { GetAllVisibleProjects } from "@/controller/project";
import FlipCard from "@/components/dashboard/FlipCard";
export default function Dashboard() {
  const { data: Projects, isLoading: projectLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: GetAllVisibleProjects,
  });
  const { data: Profiles, isLoading: profileLoading } = useQuery({
    queryKey: ["profiles"],
    queryFn: GetAllProfile,
  });

  // const [windowPathName, setwindowPathName] = useState("");
  // const currentHash = typeof window !== "undefined" ? window.location.hash : "";
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setwindowPathName(window.location.hash);
  //   }
  // }, [currentHash]);
  if (!Profiles || !Projects) {
    return <Button>Refresh</Button>;
  }
  return (
    <>
      <Toaster position="top-center" />
      <div
        id="portfolio"
        className="w-[100%]"
        style={{
          paddingTop: 30,
        }}
      >
        <ProjectContainer
          isLoading={profileLoading}
          projects={Profiles}
          title={"Portfolio's"}
          description={
            "Showcase your work and skills with a visually stunning and interactive portfolio."
          }
          type={"Profile"}
        />
      </div>
      <div
        style={{
          paddingTop: 50,
        }}
        id={"applications"}
        className="w-[100%]"
      >
        <ProjectContainer
          isLoading={projectLoading}
          projects={
            Projects
              ? Projects.filter((elem) => elem.category == "Application")
              : []
          }
          title={"Mobile Application Projects"}
          description={
            "Empower users with a seamless and intuitive mobile app experience."
          }
          type={"Application"}
          Profiles={Profiles}
        />
      </div>
      <div
        id={"websites"}
        className="w-[100%] "
        style={{
          paddingTop: 50,
        }}
      >
        <ProjectContainer
          isLoading={projectLoading}
          projects={
            Projects
              ? Projects.filter((elem) => elem.category == "Website")
              : []
          }
          title={"Website Projects"}
          description={
            "Showcase your work and skills with a personalized online portfolio."
          }
          type={"Website"}
          Profiles={Profiles}
        />
      </div>
    </>
  );
}
