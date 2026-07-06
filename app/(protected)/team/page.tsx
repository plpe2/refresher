import { Box, Container, SxProps, Theme, Typography } from "@mui/material";

const displayCount: SxProps<Theme> = {
    display: "flex",
    gap: "10px",
    width: "100%",
    mt: "50px",
    mb: "50px"
}

const displayCountChild: SxProps<Theme> = {
    backgroundColor: "red",
    padding: "50px",
    flex: 1
}

export default function TeamPage() {
    return (
        <Container maxWidth="lg">
            <Box>
                <Typography variant="h4" color="initial">Team</Typography>
                <Typography variant="body1" color="initial">
                    Manage your team members and collaborators
                </Typography>
            </Box>
            <Box sx={displayCount}>
                <Box sx={displayCountChild}>
                    <Typography variant="h5" color="initial">6</Typography>
                    <Typography variant="body1" color="initial">Team Members</Typography>
                </Box>
                <Box sx={displayCountChild}>
                    <Typography variant="h5" color="initial">6</Typography>
                    <Typography variant="body1" color="initial">Online Now</Typography>
                </Box>
                <Box sx={displayCountChild}>
                    <Typography variant="h5" color="initial">6</Typography>
                    <Typography variant="body1" color="initial">Total Active Tasks</Typography>
                </Box>
            </Box>
        </Container>
    )
}
