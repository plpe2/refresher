"use client";
import { useContext } from "react";

import { AuthContext } from "@/context/auth-context";
import { Badge, Box, IconButton } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Navbar() {
  const userData = useContext(AuthContext);

  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          height: "6vh",
          marginBottom: "1.5%",
          borderRadius: "0 0 10px 10px",
          width: "20%",
          justifySelf: "right",
          // position: "absolute",
          padding: "10px",
          justifyItems: "center"
        }}
      >
        <Box>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              p: 3
            }}
            aria-label="show 4 unread messages"
            onClick={() => console.log("haha1")}
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              p: 3
            }}
            aria-label="show 4 unread messages"
            onClick={() => userData?.logout()}
          >
            <Badge color="primary">
              <MoreHorizIcon />
            </Badge>
          </IconButton>
        </Box>
      </div>
    </>
  );
}
