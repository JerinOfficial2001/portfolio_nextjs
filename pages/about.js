import Layout from "@/layouts/Layout";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import FirstrowAbout from "@/about/FirstrowAbout";
import SecondrowAbout from "@/about/SecondrowAbout";
import ThirdrowAbout from "@/about/ThirdrowAbout";
import { GetAllProfile } from "@/controller/profile";

export default function About() {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      GetAllProfile().then((profiles) => {
        const profileIDs = profiles.map((elem) => elem.userID);
        if (profileIDs.includes(id)) {
        } else {
          router.push("/");
        }
      });
    }
  }, []);

  return (
    <>
      <Layout>
        <FirstrowAbout />
        <SecondrowAbout />
        <ThirdrowAbout />
      </Layout>
    </>
  );
}
