import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import Homepage from "./[homepage]";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
