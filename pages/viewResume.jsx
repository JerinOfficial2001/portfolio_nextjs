import ResumeLayout from "@/components/resume/ResumeLayout";
import { useGlobalContext } from "@/utils/globalContext";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactToPrint from "react-to-print";

export default function ViewResume() {
  const router = useRouter();
  const { resumes, printRef, isxs, isMd } = useGlobalContext();
  const particularResume = resumes?.find((elem) => elem._id == router.query.id);
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div
          className="relative w-[100%] flex items-start justify-between "
          style={{
            flexDirection: isxs ? "column-reverse" : "row",
            alignItems: isxs ? "center" : "center",
            justifyContent: isxs ? "center" : "space-between",
          }}
        >
          <div className="w-[70%]">
            <div>
              <ResumeLayout data={particularResume} />
              <div style={{ display: "none" }}>
                <div ref={printRef}>
                  <ResumeLayout data={particularResume} notRes={true} />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: isxs ? "100%" : "70vh",
            }}
            className="sticky top-0  flex items-center justify-center"
          >
            <ReactToPrint
              trigger={() => {
                return (
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Print
                    </span>
                  </button>
                );
              }}
              content={() => printRef.current}
            />
          </div>
        </div>
      )}
    </>
  );
}
