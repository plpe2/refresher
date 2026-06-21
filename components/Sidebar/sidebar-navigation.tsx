import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"
import GridViewIcon from '@mui/icons-material/GridView';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { SidebarLinks } from "./sidebar-link.component";

const LinkValues = [
    { label: "Task Board", href: "/", icon: <GridViewIcon /> },
    { label: "My Task", href: "/task", icon: <CheckBoxOutlinedIcon /> },
    { label: "Inbox", href: "/", icon: <InboxIcon /> },
    { label: "Calendar", href: "/", icon: <CalendarTodayIcon /> },
    { label: "Team", href: "/userslist", icon: <PeopleAltIcon /> },
    { label: "Settings", href: "/", icon: <SettingsIcon /> },
]

export const SideBar = () => {
    LinkValues.map((data) => console.log(data.label))
    return <Container
        maxWidth="lg"
        sx={{
            width: "10%",
            bgcolor: "red",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            position: "sticky",
            top: 0
        }}>
        <Box sx={{ height: "20%" }}>
            <Typography variant="body1" color="initial" >
                <Link href={"/"} >
                    Todo App
                </Link>
            </Typography>
        </Box>

        <Box sx={{ height: "50%", display: "flex", flexDirection: "column", gap: 3, bgcolor: "yellow" }}>
            {LinkValues.map((data, key) => <SidebarLinks key={key} icon={data.icon} label={data.label} href={data.href} />)}
        </Box >
        <Box sx={{ height: "20%" }}>

        </Box>
        <Box sx={{ height: "10%", display: "flex", borderTop: "1px solid black", pt: 5 }}>
            <ArrowBackIosOutlinedIcon />
            <Typography variant="body1" color="initial" sx={{ display: { xs: "none", md: "block" } }}>Collapse</Typography>
        </Box>
    </Container >
}