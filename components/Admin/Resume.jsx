import React from "react";
import Layout from "./Layout";

export default function Resume({ setclicky }) {
  return (
    <Layout
      prev={() => {
        setclicky("/");
      }}
    >
      <input type="file" accept="image/" className="w-[100%] p-3 rounded-md" />
    </Layout>
  );
}
