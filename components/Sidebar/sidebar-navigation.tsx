import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"
import GridViewIcon from '@mui/icons-material/GridView';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export const SideBar = () => {
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

            <Link href={"/task"} style={{ textDecoration: "none", color: "black" }}>
                <Box sx={{ display: "flex" }}>
                    <GridViewIcon />
                    <Typography variant="body1" color="initial"> Task Board</Typography>
                </Box>
            </Link>


            <Link href={"/task"} style={{ textDecoration: "none", color: "black" }}>
                <Box sx={{ display: "flex" }}>
                    <CheckBoxOutlinedIcon />
                    <Typography variant="body1" color="initial">My Task</Typography>
                </Box>
            </Link>


            <Link href={"/task"} style={{ textDecoration: "none", color: "black" }}>
                <Box sx={{ display: "flex" }}>
                    <InboxIcon />
                    <Typography variant="body1" color="initial">Inbox</Typography>
                </Box>
            </Link>


            <Link href={"/task"} style={{ textDecoration: "none", color: "black" }}>
                <Box sx={{ display: "flex" }}>
                    <CalendarTodayIcon />
                    <Typography variant="body1" color="initial">Calendar</Typography>
                </Box>
            </Link>


            <Link href={"/userslist"} style={{ textDecoration: "none", color: "black" }}>
                <Box sx={{ display: "flex" }}>
                    <PeopleAltIcon />
                    <Typography variant="body1" color="initial">Team</Typography>
                </Box>
            </Link>


            <Link href={"/task"} style={{ textDecoration: "none", color: "black" }}>
                <Box sx={{ display: "flex" }}>
                    <SettingsIcon />
                    <Typography variant="body1" color="initial">Settings</Typography>
                </Box>
            </Link>
        </Box >
        <Box sx={{ height: "20%" }}>

        </Box>
        <Box sx={{ height: "10%", display: "flex" }}>
            <ArrowBackIosOutlinedIcon />
            <Typography variant="body1" color="initial">Collapse</Typography>
        </Box>
    </Container >
}