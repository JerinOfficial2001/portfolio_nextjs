import { GetAPK } from "@/controller/project";
import { APK_URL } from "@/utils/api";
import {
  Autorenew,
  DisabledByDefaultRounded,
  Download,
} from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ProjectCard({
  title,
  description,
  link,
  image,
  id,
  type,
  userID,
  apk_id,
}) {
  const { data: APK, isLoading: isApkLoading } = useQuery({
    queryKey: ["apk"],
    queryFn: () => GetAPK(userID, id),
    enabled: !!userID && !!id && type == "Application",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleDownloadAPK = async () => {
    if (apk_id) {
      setIsLoading(true);

      try {
        const downloadUrl = `${APK_URL}/Projects/downloadapk/${apk_id}`;
        const response = await fetch(downloadUrl);

        if (response.ok) {
          const blob = await response.blob();
          const contentDisposition =
            response.headers.get("Content-Disposition") || "";
          const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
          const filename = filenameMatch ? filenameMatch[1] : `${title}.apk`;

          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = filename;
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        } else {
          console.error("Download failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("APK not found");
    }
  };
  const router = useRouter();
  const theme = useTheme();
  const isxs = useMediaQuery(theme.breakpoints.only("xs"));
  const issm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));
  return (
    <div className="cursor-pointer flex items-center flex-col justify-start  bg-[#34363a] rounded-2xl hover:translate-y-[-5px] transition-all duration-[.5s]">
      <div
        onClick={() => {
          if (type == "Application") {
            router.push(`/projects/application?id=${userID}&projectID=${id}`);
          }
        }}
        className="flex items-center justify-start flex-col w-[100%] p-5"
      >
        <p className="text-[16px] text-white font-bold tracking-wider">
          {title}
        </p>
        {type == "Application" && description && (
          <p className="text-[14px] text-[#9ca3af] font-semibold tracking-wider">
            {description}
          </p>
        )}
        {link && (
          <div
            style={{
              color: "#2a81a5",
              fontWeight: "bold",
            }}
          >
            Visit :{" "}
            <a
              className="custom-underline"
              target="_blank"
              href={link}
              style={{
                color: "#2a81a5",
                fontWeight: "normal",
                maxWidth: "180px",
                textOverflow: "ellipsis",
                whiteSpace: "none",
                flexWrap: "nowrap",
                overflow: "hidden",
              }}
            >
              {link}
            </a>
          </div>
        )}
        <img
          onClick={() => {
            if (type == "Website") {
              //   router.push(`/project?id=${userID}`);
              router.push(`/projectPage?projectID=${id}`);
            }
          }}
          style={{
            height:
              type == "Profile"
                ? isxs
                  ? "150px"
                  : "200px"
                : isxs
                ? "auto"
                : "200px",
            width: type == "Profile" ? (isxs ? "150px" : "200px") : "auto",
            objectFit: "cover",
            borderRadius: type == "Profile" ? "50%" : "",
            objectPosition: type == "Profile" ? "top" : "center",
          }}
          className="rounded-md mt-3"
          src={image}
          alt="Project"
        />
      </div>
      {type == "Application" && (
        <button
          onClick={
            isApkLoading || isLoading || !APK ? undefined : handleDownloadAPK
          }
          disabled={isApkLoading || isLoading || !APK}
          className="mt-2 rounded-[10px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white  group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          style={{
            cursor:
              isApkLoading || isLoading || !APK ? "not-allowed" : "pointer",
          }}
        >
          <span
            className={
              !APK
                ? "text-[red] flex gap-2 align-center rounded-[11px] relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 group-hover:bg-opacity-0"
                : "flex gap-2 align-center rounded-[11px] relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 group-hover:bg-opacity-0"
            }
          >
            {isApkLoading || isLoading ? (
              <Autorenew className="loadingBtn text-[10px]" />
            ) : APK ? (
              <Download />
            ) : (
              <DisabledByDefaultRounded className="text-[red]" />
            )}{" "}
            Download Apk
          </span>
        </button>
      )}
      {type == "Website" && (
        <button
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Visit
          </span>
        </button>
      )}
      {type == "Profile" && (
        <button
          onClick={() => {
            router.push(`/${userID}`);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            View
          </span>
        </button>
      )}
    </div>
  );
}
