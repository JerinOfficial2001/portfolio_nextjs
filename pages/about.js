import Layout from "@/layouts/Layout";
import React from "react";
import { useRouter } from "next/router";
import FirstrowAbout from "@/about/FirstrowAbout";
import SecondrowAbout from "@/about/SecondrowAbout";
import ThirdrowAbout from "@/about/ThirdrowAbout";

export default function About() {
  const router =useRouter()
  return (
    <>
      <Layout>
        <FirstrowAbout/>
        <SecondrowAbout/>
        <ThirdrowAbout/>
      </Layout>
    </>
  );
}
