"use client"
import MemberDisplay from "@/features/Team/team-member-container";
import { } from "@/hooks/api/users/users";
import useTeamDisplay from "@/hooks/api/users/useTeamDisplay";
import { Box, Container, Grid, SxProps, Theme, Typography } from "@mui/material";

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
    const { teamMember } = useTeamDisplay()
    teamMember.map((member) => console.log(member.email))
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
            <Grid container spacing={2}>
                {teamMember.map((member, key) => (
                    <Grid key={key} size={{ xs: 12, sm: 12, md: 6 }}>
                        <MemberDisplay member={member} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
