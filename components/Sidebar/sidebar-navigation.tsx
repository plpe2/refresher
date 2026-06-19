import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"

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
            <Typography variant="body1" color="initial">
                <Link href={"/"}>
                    Todo App
                </Link>
            </Typography>
        </Box>

        <Box sx={{ height: "50%", display: "flex", flexDirection: "column", gap: 5, bgcolor: "yellow" }}>
            <Typography variant="body1" color="initial">
                <Link href={"/task"}>
                    Task Board
                </Link>
            </Typography>


            <Typography variant="body1" color="initial">
                <Link href={"/task"}>
                    My Tasks
                </Link>
            </Typography>


            <Typography variant="body1" color="initial">
                <Link href={"/task"}>
                    Inbox
                </Link>
            </Typography>


            <Typography variant="body1" color="initial">
                <Link href={"/task"}>
                    Calendar
                </Link>
            </Typography>


            <Typography variant="body1" color="initial">
                <Link href={"/userslist"}>
                    Team
                </Link>
            </Typography>


            <Typography variant="body1" color="initial">
                <Link href={"/task"}>
                    Settings
                </Link>
            </Typography>
        </Box>
        <Box sx={{ height: "20%" }}>

        </Box>
        <Box sx={{ height: "10%" }}>
            <Typography variant="body1" color="initial">Collapse</Typography>
        </Box>
    </Container>
}