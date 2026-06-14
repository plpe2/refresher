import { Container, Typography } from "@mui/material"
import Link from "next/link"

export const SideBar = () => {
    return <Container maxWidth="lg" sx={{ width: "10%", bgcolor: "red" }}>
        <Typography variant="body1" color="initial">
            <Link href={"/"}>
                Todo App
            </Link>
        </Typography>
    </Container>
}