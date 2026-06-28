"use client"
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"
import GridViewIcon from '@mui/icons-material/GridView';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { SidebarLinks } from "./sidebar-link.component";
import { useState } from "react";
import { SideBarContainerStyle } from "@/styles/Sidebar/sidebar.styles";

const LinkValues = [
    { label: "Task Board", href: "/", icon: <GridViewIcon /> },
    { label: "My Task", href: "/task", icon: <CheckBoxOutlinedIcon /> },
    { label: "Inbox", href: "/", icon: <InboxIcon /> },
    { label: "Calendar", href: "/", icon: <CalendarTodayIcon /> },
    { label: "Team", href: "/userslist", icon: <PeopleAltIcon /> },
    { label: "Settings", href: "/", icon: <SettingsIcon /> },
]

export const SideBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [desktopCollapsed, setCollapse] = useState<boolean>(false)

    const isCollapsed = isMobile ? true : desktopCollapsed;

    return <Container
        maxWidth="lg"
        sx={SideBarContainerStyle(isCollapsed)}>
        {/* Title Link */}
        <Box sx={{ height: "20%", display: "flex", justifyContent: "center" }}>
            <Link href={"/"} style={{ textDecoration: "none", color: "black", display: "flex", marginTop: 20 }} >
                <Box>
                    <TaskAltIcon sx={{ textAlign: "center", fontSize: "2.5rem" }} />
                </Box>
                {!isCollapsed && <Box>
                    <Typography variant="h4" color="initial">All Task</Typography>
                </Box>}
            </Link>
        </Box>

        {/* Displaying of Link from LinkValues */}
        <Box
            sx={{
                height: "50%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                bgcolor: "yellow",
                textAlign: "center",
            }}>
            {LinkValues.map((data, key) =>
                <SidebarLinks key={key} Icon={data.icon} label={data.label} href={data.href} isCollapsed={isCollapsed} />)
            }
        </Box >

        <Box sx={{ height: "20%" }}>
        </Box>

        {/* Collapse button */}
        <Box
            component="button"
            type="button"
            onClick={() => setCollapse(prev => !prev)}
            sx={{
                height: "10%",
                display: "flex",
                borderTop: "1px solid black",
                pt: 5,
                "&:hover": { bgcolor: "blue", color: "white" }
            }}>
            <ArrowBackIosOutlinedIcon />
            <Typography variant="body1" color="initial"
                sx={isCollapsed ? { display: "none" } : { display: { xs: "none", md: "block" } }}>
                Collapse
            </Typography>
        </Box>
    </Container >
}