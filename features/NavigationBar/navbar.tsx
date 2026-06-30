"use client";
import { useContext, useState } from "react";

import { AuthContext } from "@/context/auth-context";
import { Badge, Box, Collapse, IconButton, Typography, Button } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Navbar() {
  const userData = useContext(AuthContext);
  const [isOpenOption, setOption] = useState<boolean>(false)
  const [isOpenNotif, setNotif] = useState<boolean>(false)

  return (
    <>
      <Box
        sx={{
          backgroundColor: "gray",
          height: "6vh",
          mb: "1.5%",
          borderRadius: "0 0 10px 10px",
          width: {
            xs: "100%",
            sm: "50%",
            md: "30%",
            lg: "20%",
          },
          p: 1,
          position: "sticky",
          marginLeft: "auto",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>

          <Box sx={{ textAlign: "center" }}>
            <IconButton
              sx={{
                width: 40,
                height: 40,
                p: 3
              }}
              aria-label="show 4 unread messages"
              onClick={() => setNotif(prev => !prev)}
            >
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Collapse in={isOpenNotif} timeout="auto" orientation="vertical">
              <Box
                component="div"
                sx={{
                  mt: 1,
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: '#f9f9f9',
                  gap: 2,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography variant="body1" color="initial">Sample Notif1</Typography>
                <Typography variant="body1" color="initial">Sample Notif2</Typography>
                <Typography variant="body1" color="initial">Sample Notif3</Typography>
              </Box>
            </Collapse>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <IconButton
              sx={{
                width: 40,
                height: 40,
                p: 3
              }}
              aria-label="show 4 unread messages"
              onClick={() => setOption(prev => !prev)}
            >
              <Badge color="primary">
                <MoreHorizIcon />
              </Badge>
            </IconButton>
            <Collapse in={isOpenOption} timeout="auto" orientation="vertical">
              <Box
                component="div"
                sx={{
                  mt: 1,
                  p: 2,
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: '#f9f9f9',
                  gap: 2,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Button variant="contained" color="success" onClick={() => alert("Profile")} fullWidth>
                  Profile
                </Button>
                <Button variant="contained" color="primary" onClick={() => alert("Settings")} fullWidth>
                  Settings
                </Button>
                <Button variant="contained" color="error" onClick={() => userData?.logout()} fullWidth>
                  Logout
                </Button>
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Box>
    </>
  );
}
