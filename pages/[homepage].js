import Layout from "@/layouts/Layout";
import React, { useContext, useEffect, useState } from "react";
import "animate.css";
import { useRouter } from "next/router";
import Firstrow from "@/homepage/Firstrow";
import Secondrow from "@/homepage/Secondrow";
import Thirdrow from "@/homepage/Thirdrow";
import { getUserByID } from "@/controller/auth";
import { GetAllProfile, GetProfileByID } from "@/controller/profile";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { GetCredentialsByID } from "@/controller/credentials";

export default function Homepage() {
  // const [hoverEffect, sethoverEffect] = useState(false);
  const router = useRouter();
  const [DATA, setDATA] = useState(null);
  const [profile, setprofile] = useState(null);
  const [credentials, setcredentials] = useState(null);
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const homepage = router.query.homepage
    ? router.query.homepage
    : !cachedCookie
    ? "66276a73361a148fef6608c2"
    : cachedCookie?._id;
  const [isMyProfile, setisMyProfile] = useState(false);
  const fetchData = () => {
    GetAllProfile().then((profiles) => {
      const profileIDs = profiles?.map((elem) => elem.userID);
      if (profileIDs?.includes(homepage)) {
        getUserByID(homepage).then((data) => {
          setDATA(data);
        });
        GetProfileByID(homepage).then((data) => {
          setprofile(data);
        });
        GetCredentialsByID(homepage).then((data) => {
          setcredentials(data);
        });

        if (cachedCookie) {
          if (homepage == cachedCookie._id) {
            setisMyProfile(true);
          } else {
            setisMyProfile(false);
          }
        } else {
          if (router.pathname == "/" && cachedCookie) {
            setisMyProfile(true);
          } else {
            setisMyProfile(false);
          }
        }
      } else if (cachedCookie) {
        setisMyProfile(true);
      } else {
        router.push("/");
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, [homepage]);
  return (
    <>
      <Firstrow
        fetchData={fetchData}
        data={DATA}
        profile={profile}
        isMyProfile={isMyProfile}
        credentials={credentials}
      />
      <Secondrow data={DATA} />
      <Thirdrow />
    </>
  );
}
