import AuthModal from "@/components/Auth/AuthModal";
import {
  AddFeedback,
  DeleteFeedback,
  GetAllFeedbacks,
} from "@/controller/feedbacks";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { getTime } from "@/utils/getTime";
import { useGlobalContext } from "@/utils/globalContext";
import { useSocket } from "@/utils/socket";
import {
  ArrowDropDown,
  AttachFile,
  Delete,
  Edit,
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  Send,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Feedback() {
  const { socketSendMessage, socket } = useSocket();
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedData = cookie ? JSON.parse(cookie) : false;
  const [msg, setmsg] = useState("");
  const [mediaImage, setmediaImage] = useState(null);
  const scrollRef = useRef();
  const router = useRouter();
  const [feedbacks, setfeedbacks] = useState([]);
  const [openAuthModel, setopenAuthModel] = useState(false);
  const { isLg, isMd, isXl, issm, isxs } = useGlobalContext();
  const fetchDatas = () => {
    GetAllFeedbacks().then((data) => {
      setfeedbacks(data);
    });
  };

  useEffect(() => {
    if (socket) {
      socket.on("receivemessage", (data) => {
        fetchDatas();
      });
    }
  }, [socket]);

  useEffect(() => {
    fetchDatas();
  }, []);
  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [feedbacks.length]);
  const handleSubmit = () => {
    if (msg.length !== "" || mediaImage) {
      const formData = new FormData();
      const DATA = {
        name: cachedData?.name,
        image: cachedData?.image,
        message: msg,
        user_id: cachedData?._id,
        gender: cachedData?.gender,
        file: mediaImage,
      };
      Object.entries(DATA).forEach(([key, value]) =>
        formData.append(key, value)
      );
      AddFeedback(formData).then((data) => {
        if (data && data?.status == "ok") {
          toast.success(data?.message);
          socketSendMessage({
            name: cachedData?.name,
            image: cachedData?.image,
            message: msg,
            user_id: cachedData?._id,
            gender: cachedData?.gender,
          });
          setmsg("");
          setmediaImage(null);
        } else {
          toast.error(data?.message);
        }
      });
    } else {
      toast.error("Media or text is required");
    }
  };
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setmediaImage(file);
    }
  };
  const handleDelete = (id) => {
    DeleteFeedback(id).then((res) => {
      if (res == "success") {
        console.log("test");
        fetchDatas();
        socketSendMessage({
          name: cachedData?.name,
          image: cachedData?.image,
          message: msg,
          user_id: cachedData?._id,
          gender: cachedData?.gender,
        });
      }
    });
  };
  const handleKeyEnter = (event) => {
    if (event.key == "Enter") {
      handleSubmit();
    }
  };
  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            title={part}
            style={{
              width: isxs ? "210px" : "100%",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "#00afff",
              display: "block",
              overflow: "hidden",
            }}
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        );
      } else {
        // Render normal text
        return part;
      }
    });
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toaster position="top-center" />
      {/* //*Header */}
      <Stack
        sx={{
          zIndex: 2,
          transform: "rotate(270deg)",
          position: "absolute",
          left: { xs: -60, md: -30 },
          top: 150,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 40,
            fontFamily: "monospace",
          }}
        >
          JERS-folio
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: 15,
          }}
        >
          Create your portfolio
        </Typography>
      </Stack>
      <Button
        sx={{
          display: { lg: "flex", sm: "none", xs: "none" },
          position: "absolute",
          right: 35,
          top: 55,
          zIndex: 2,
          border: "2px solid  #828282",
          borderRadius: 10,
          width: "280px",
          height: "60px",
          color: " #828282",
          fontWeight: "bold",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </Button>
      <IconButton
        sx={{
          display: { lg: "none", sm: "flex", xs: "flex" },
          position: "absolute",
          right: 5,
          top: { xs: 10, md: 50 },
          zIndex: 3,
          border: "2px solid  #828282",
          borderRadius: 10,
          color: " white",
          fontWeight: "bold",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        <Home />
      </IconButton>
      {/* //*INPUT field */}
      <Stack
        sx={{
          zIndex: 3,
          position: "absolute",
          left: { lg: 10, sm: 0, xs: 0 },
          bottom: { xs: 10, md: 40 },
          width: { lg: "35%", sm: "100%", xs: "100%" },
          alignItems: { xs: "center", md: "unset" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            display: { xs: "none", md: "flex" },
          }}
        >
          FOLLOW US
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: 15,
            width: "200px",
            display: { xs: "none", md: "flex" },
          }}
        >
          You can Create your own portfolio here and give us your feedback
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {[
            { icon: <LinkedIn />, link: "" },
            { icon: <Facebook />, link: "" },
            { icon: <Instagram />, link: "" },
          ].map((elem, index) => {
            return (
              <IconButton key={index} sx={{ color: "white" }}>
                {elem.icon}
              </IconButton>
            );
          })}
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
            flexDirection: "column",
            width: { xs: "90%", md: "100%" },
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
          {!cachedData && (
            <Button
              onClick={() => {
                setopenAuthModel(true);
              }}
              sx={{
                color: "gray",
                fontWeight: "bold",
                position: "absolute",
                zIndex: 1,
              }}
            >
              Login to start global chat
            </Button>
          )}
          <TextField
            disabled={!cachedData}
            // onKeyDown={handleKeyEnter}
            multiline
            onChange={(e) => {
              setmsg(e.target.value);
            }}
            value={msg}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #828282 !important",
              },
              "& .MuiInputBase-root": {
                borderRadius: 20,
                height: { lg: "70px", sm: "50px", xs: "50px" },
                paddingX: 3,
              },
            }}
            fullWidth
            inputProps={{
              style: {
                color: "gray",
                fontWeight: "bold",
              },
            }}
            placeholder="Type here"
          />
          <IconButton
            disabled={!cachedData}
            sx={{
              color: "white",
              position: "absolute",
              right: 65,
            }}
            onClick={handleFileSelect}
          >
            <AttachFile />
          </IconButton>
          <IconButton
            disabled={!cachedData}
            onClick={handleSubmit}
            sx={{
              color: "white",
              position: "absolute",
              right: 15,
              background: "#66f06670",
              "&:hover": {
                background: "#61a166",
              },
            }}
          >
            <Send />
          </IconButton>
          {mediaImage && (
            <Box
              sx={{
                position: "absolute",
                bottom: 90,
                width: "80%",
                padding: 2,
                background: "#353535",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ objectFit: "contain" }}
                component={"img"}
                src={URL.createObjectURL(mediaImage)}
              />
              <ArrowDropDown
                sx={{
                  color: "#353535",
                  fontSize: 80,
                  position: "absolute",
                  bottom: -45,
                }}
              />
            </Box>
          )}
        </Box>
      </Stack>
      {/* //*Title on vdo */}
      <Stack
        sx={{
          display: { lg: "flex", sm: "none", xs: "none" },
          zIndex: 2,
          position: "absolute",
          left: 310,
          top: 170,
          width: "35%",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 60,
            fontFamily: "monospace",
            width: "320px",
            lineHeight: "60px",
          }}
        >
          WE <br />
          BUILD PORTFOLIO
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: 15,
            width: "200px",
          }}
        >
          You can Create your own portfolio here and give us your feedback
        </Typography>
      </Stack>
      {/* //*ChatBubble */}
      <Stack
        sx={{
          zIndex: { xs: 2, md: 1 },
          position: "absolute",
          right: { xs: 0, md: 60 },
          width: { xs: "100%", md: "45%" },
          padding: 2,
          gap: 2,
          maxHeight: { xs: "90vh", xl: "625px", lg: "625px" },
          overflowY: "auto",
          bottom: { xs: 0, md: "20px" },
          pt: { xs: 8, md: 15 },
          mb: { xs: 8, md: 0 },
        }}
      >
        {[
          {
            _id: 1,
            name: "John",
            gender: "MALE",
            time: "2:15PM",
            message: { text: "Best place to make portfolio" },
            user_id: 2,
          },
          {
            _id: 3,
            name: "Jenisha",
            gender: "FEMALE",
            time: "2:18PM",
            message: { text: "Superb website i ever seen" },
            user_id: 3,
          },
          ...feedbacks,
        ].map((elem, index) => {
          const isSender = elem.user_id == cachedData?._id;
          const date = elem.time ? elem.time : getTime(elem.createdAt);
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: isSender ? "flex-end" : "flex-start",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  marginTop: 0,
                  borderRadius: "50%",
                  border: "2px solid cornflowerblue",
                  height: "50px",
                  width: "50px",
                  display: isSender ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  src={
                    elem.image && elem.image != "null"
                      ? elem?.image?.url
                      : elem?.gender == "FEMALE"
                      ? "/female.png"
                      : "/male.png"
                  }
                  alt="profile"
                  style={{
                    objectFit: "cover",
                    height: "90%",
                    width: "90%",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Stack
                sx={{
                  borderRadius: isSender
                    ? "20px 20px 0px 20px"
                    : "0px 20px 20px 20px",
                  background: "#17981252",
                  padding: 2,
                  width: { xs: "80%", md: "auto" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "monospace",
                  }}
                >
                  {elem.name}
                </Typography>
                {elem?.message?.image && (
                  <Box
                    component={"img"}
                    sx={{
                      height: "200px",
                      objectFit: { xs: "contain", md: "cover" },
                      borderRadius: 6,
                      maxWidth: { xs: "100%", lg: "500px" },
                    }}
                    src={elem.message?.image?.url}
                  />
                )}

                <Typography
                  sx={{
                    color: "#d4d4d4",
                    fontSize: 15,
                    width: "355px",
                  }}
                >
                  {renderTextWithLinks(elem.message?.text)}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isSender ? "space-between" : "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      display: isSender ? "flex" : "none",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <IconButton size="small">
                        <Edit sx={{ fontSize: "20px", color: "gray" }} />
                      </IconButton> */}
                    <IconButton
                      onClick={() => {
                        handleDelete(elem._id);
                      }}
                    >
                      <Delete
                        sx={{
                          fontSize: "20px",
                          color: "gray",
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: 10,
                    }}
                  >
                    {date}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          );
        })}
        <div ref={scrollRef} />
      </Stack>
      <Box
        component={"img"}
        src="/Subtract.png"
        sx={{
          display: { xs: "none", md: "block" },
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 1,
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      >
        <source src="/Bgvdo.mp4" type="video/mp4" />
      </video>
      <AuthModal
        open={openAuthModel}
        handleClose={() => {
          setopenAuthModel(false);
        }}
      />
    </Box>
  );
}
