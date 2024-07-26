import RequestCard from "@/components/Projects/RequestCard";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Button, Chip, Collapse, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function BackendProject() {
  const AllRequests = [
    {
      method: "GET",
      title: "GET Requests",
      contents: [
        {
          request: "GET",
          _id: 1,
          url: "https://accountbookapi.vercel.app",
          title: "GetStatistics",
          endpoint: "/api/v1/statics/get",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
          query: [
            { key: "userid", value: "66a1f39dbbdf0f64ad7afd58" },
            { key: "type", value: "CUSTOMER" },
          ],
          params: [],
        },
        {
          request: "GET",
          _id: 2,
          url: "https://accountbookapi.vercel.app",
          title: "GetParty",
          endpoint: "/api/v1/party/get",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
          query: [{ key: "userid", value: "66a1f39dbbdf0f64ad7afd58" }],
          params: [{ key: "StatisticID", value: "66a1f39dbbdf0f64ad7afd5a" }],
        },
        {
          request: "GET",
          _id: 3,
          url: "https://accountbookapi.vercel.app",
          title: "GetCollections",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
          endpoint: "/api/v1/collection/get",
          query: [{ key: "userid", value: "66a1f39dbbdf0f64ad7afd58" }],
          params: [
            {
              key: "CollectionID",
              value: "66a1f3c2bbdf0f64ad7afd66",
            },
          ],
        },
      ],
    },
    {
      method: "POST",
      title: "POST Requests",
      contents: [
        {
          request: "POST",
          _id: 1,
          url: "https://accountbookapi.vercel.app",
          title: "CreateParty",
          endpoint: "/api/v1/party/create",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
          query: [{ key: "userid", value: "66a1f39dbbdf0f64ad7afd58" }],
          params: [],
          inputs: [
            {
              name: "staticsID",
              type: "text",
            },
            {
              name: "partyname",
              type: "text",
            },
            {
              name: "phone",
              type: "number",
            },
            {
              name: "type",
              type: "select",
              menus: {
                values: ["CUSTOMER", "SUPPLIER"],
                defaultVal: "CUSTOMER",
              },
            },
          ],
        },
      ],
    },
  ];
  const [openCollapse, setopenCollapse] = useState(
    AllRequests.length > 0 ? AllRequests.map(() => ({ isOpen: true })) : []
  );
  useEffect(() => {
    if (AllRequests.length > 0) {
      setopenCollapse(AllRequests.map(() => ({ isOpen: true })));
    }
  }, [AllRequests.length]);

  const renderJson = (data) => {
    if (typeof data === "object" && data !== null) {
      return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Object.entries(data).map(([key, value]) => (
            <li key={key} style={{ marginBottom: "8px" }}>
              <span style={{ color: "blue" }}>{key}:</span>
              <span style={{ color: "brown", marginLeft: "4px" }}>
                {renderJson(value)}
              </span>
            </li>
          ))}
        </ul>
      );
    }
    return <span>{String(data)}</span>;
  };
  const handleOpenCollapse = (index) => {
    const prevArr = [...openCollapse];
    prevArr[index].isOpen = !prevArr[index].isOpen;
    setopenCollapse(prevArr);
  };
  return (
    <Stack sx={{ width: "100%", gap: 2, alignItems: "flex-start" }}>
      <Stack
        sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "50%",
            borderRadius: "10px",
            background: "#c4b3b3",
            padding: "5px",
            gap: 1,
          }}
        >
          <Chip
            label="Base URL"
            sx={{ fontFamily: "cursive", fontWeight: "bold" }}
          />
          <Typography
            title={URL}
            sx={{
              color: "gray",
              fontFamily: "cursive",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "87%",
              flexWrap: "nowrap",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            : https://accountbookapi.vercel.app
          </Typography>
        </Box>
      </Stack>
      {AllRequests.map((methods, index) => {
        return (
          <Stack sx={{ width: "100%" }}>
            <Button
              sx={{
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                fontFamily: "cursive",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              startIcon={
                openCollapse[index]?.isOpen ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )
              }
              onClick={() => {
                handleOpenCollapse(index);
              }}
            >
              {methods.title}
            </Button>
            <Collapse
              in={openCollapse[index]?.isOpen}
              timeout="auto"
              unmountOnExit
            >
              <Stack sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
                {methods.contents.map((elem, index) => {
                  return (
                    <RequestCard
                      key={elem._id}
                      props={{
                        request: elem.request,
                        url: elem.url,
                        title: elem.title,
                        endpoint: elem.endpoint,
                        token: elem.token,
                        query: elem.query,
                        params: elem.params,
                        inputs: elem.inputs,
                      }}
                    />
                  );
                })}
              </Stack>
            </Collapse>
          </Stack>
        );
      })}
    </Stack>
  );
}
