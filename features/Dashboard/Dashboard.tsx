import { Box, Typography, Container } from '@mui/material'
import { ParentContainer } from '@/components/parent-container'

export default function Dashboard() {
    return (
        <ParentContainer>
            <Box sx={{ bgcolor: "beige" }}>
                <Typography variant="h4" color="initial">Dashboard</Typography>
                <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mt: 5, mb: 5 }}>
                    <Typography variant="body1" color="initial">Task Count</Typography>
                </Container>
                <Container sx={{ display: "flex", gap: 2 }}>
                    <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mb: 5 }}>
                        <Typography variant="body1" color="initial">Task Count</Typography>
                    </Container>
                    <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mb: 5 }}>
                        <Typography variant="body1" color="initial">Task Count</Typography>
                    </Container>
                    <Container maxWidth="lg" sx={{ border: "1px solid black", height: "30vh", mb: 5 }}>
                        <Typography variant="body1" color="initial">Task Count</Typography>
                    </Container>
                </Container>
            </Box>
        </ParentContainer>
    )
}
