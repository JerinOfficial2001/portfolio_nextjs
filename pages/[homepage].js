import Layout from "@/layouts/Layout";
import React, { useEffect, useState } from "react";
import "animate.css";
import { useRouter } from "next/router";
import Firstrow from "@/homepage/Firstrow";
import Secondrow from "@/homepage/Secondrow";
import Thirdrow from "@/homepage/Thirdrow";
import { getUserByID } from "@/controller/auth";
import { GetProfileByID } from "@/controller/profile";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { GetCredentialsByID } from "@/controller/credentials";

export default function Homepage() {
  // const [hoverEffect, sethoverEffect] = useState(false);
  const router = useRouter();
  const [DATA, setDATA] = useState(null);
  const [profile, setprofile] = useState(null);
  const [credentials, setcredentials] = useState(null);
  const { homepage } = router.query;
  const cookie = getDecryptedCookie("userData");
  const [isMyProfile, setisMyProfile] = useState(false);
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const fetchData = () => {
    if (homepage && homepage !== "homepage") {
      getUserByID(homepage).then((data) => {
        setDATA(data);
      });
      GetProfileByID(homepage).then((data) => {
        setprofile(data);
      });
      GetCredentialsByID(homepage).then((data) => {
        setcredentials(data);
      });
    } else {
      if (cachedCookie) {
        getUserByID(cachedCookie._id).then((data) => {
          setDATA(data);
        });
        GetProfileByID(cachedCookie._id).then((data) => {
          setprofile(data);
        });
        GetCredentialsByID(cachedCookie._id).then((data) => {
          setcredentials(data);
        });
      }
    }
    if (homepage && cachedCookie) {
      if (homepage == cachedCookie._id || homepage == "homepage") {
        setisMyProfile(true);
      } else if (!homepage && cachedCookie) {
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
  };
  useEffect(() => {
    fetchData();
  }, [cookie, homepage]);
  return (
    <>
      <Layout>
        <Firstrow
          fetchData={fetchData}
          data={DATA}
          profile={profile}
          isMyProfile={isMyProfile}
          credentials={credentials}
        />
        <Secondrow />
        <Thirdrow />
      </Layout>
    </>
  );
}
