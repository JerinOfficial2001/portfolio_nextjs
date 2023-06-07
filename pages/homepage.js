import Layout from "@/layouts/Layout";
import React, { useState } from "react";
import "animate.css";
import { useRouter } from "next/router";
import Firstrow from "@/homepage/Firstrow";
import Secondrow from "@/homepage/Secondrow";
import Thirdrow from "@/homepage/Thirdrow";

export default function Homepage() {
  // const [hoverEffect, sethoverEffect] = useState(false);
  const router = useRouter();
  return (
    <>
      <Layout>
        <Firstrow/>
        <Secondrow/>
        <Thirdrow/>
      </Layout>
    </>
  );
}
