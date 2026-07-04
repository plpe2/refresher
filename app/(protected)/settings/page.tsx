import SettingsContainer from "@/features/Settings/settings-container"
import SettingsItem from "@/features/Settings/settings-item"
import { Container, Box, Button, Typography } from "@mui/material"

export default function SettingsPage() {
    return <Container maxWidth="lg">
        <Typography variant="h4" color="initial">Settings</Typography>
        <Typography variant="body1" color="initialtial">
            Manage your account preferences and settings
        </Typography>
        <SettingsContainer title="Profile">
            <SettingsItem title="Full Name" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
            <SettingsItem title="Email" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
            <SettingsItem title="Role" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
        </SettingsContainer>
        <Box>
            <Button variant="contained" color="primary">
                Save Changes
            </Button>
            <Button variant="contained" color="primary">
                Cancel
            </Button>
        </Box>
    </Container>
}
