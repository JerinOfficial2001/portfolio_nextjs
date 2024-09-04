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
import { useQuery } from "@tanstack/react-query";

export default function Homepage() {
  // const [hoverEffect, sethoverEffect] = useState(false);
  const router = useRouter();
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const homepage = router.query.homepage
    ? router.query.homepage
    : !cachedCookie
    ? "66276a73361a148fef6608c2"
    : cachedCookie?._id;
  const [isMyProfile, setisMyProfile] = useState(false);
  const {
    data: DATA,
    isError: usersErr,
    isLoading: usersLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserByID(homepage),
    enabled: !!homepage,
  });
  const {
    data: profile,
    isError: profileErr,
    isLoading: profileLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => GetProfileByID(homepage),
    enabled: !!homepage && !!DATA,
  });
  const {
    data: credentials,
    isError: credentialErr,
    isLoading: CredentialsLoading,
    error,
  } = useQuery({
    queryKey: ["credential"],
    queryFn: () => GetCredentialsByID(homepage),
    enabled: !!homepage && !!DATA,
  });
  // useEffect(() => {
  //   if (usersErr || profileErr || credentialErr) {
  //     console.log(usersErr, profileErr, credentialErr, error);
  //     router.push("/");
  //   }
  // }, [usersErr, profileErr, credentialErr]);

  useEffect(() => {
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
  }, [homepage, cachedCookie]);
  return (
    <>
      <Firstrow
        data={DATA}
        profile={profile}
        isMyProfile={isMyProfile}
        credentials={credentials}
        isLoading={profileLoading}
      />
      <Secondrow data={DATA} />
      <Thirdrow />
    </>
  );
}
