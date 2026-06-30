import { Box, Typography, Container } from '@mui/material'
import { ParentContainer } from '@/components/parent-container'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function Dashboard() {
    return (
        <ParentContainer>
            <Box sx={{ bgcolor: "beige" }}>
                <Typography variant="h4" color="initial">My Task</Typography>
                <Typography variant="h6" color="initial">Task assigned to you</Typography>
                <Container sx={{ display: "flex", gap: 2, mt: 5, mb: 3 }}>
                    <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mb: 5 }}>
                        <CheckBoxOutlinedIcon />
                        <Typography variant="h4" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">Total Task</Typography>
                    </Container>
                    <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mb: 5 }}>
                        <ReportGmailerrorredIcon />
                        <Typography variant="h4" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">To do</Typography>
                    </Container>
                    <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mb: 5 }}>
                        <AccessTimeIcon />
                        <Typography variant="h4" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">In Progress</Typography>
                    </Container>
                    <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mb: 5 }}>
                        <CheckCircleOutlineRoundedIcon />
                        <Typography variant="h4" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">Complete</Typography>
                    </Container>
                </Container>
                <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh" }}>
                    <CheckBoxOutlinedIcon />
                    <Typography variant="body1" color="initial">No Task Assigned to you</Typography>
                </Container>
            </Box>
        </ParentContainer>
    )
}
