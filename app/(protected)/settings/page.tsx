import SettingsContainer from "@/features/Settings/settings-container"
import SettingsItem from "@/features/Settings/settings-item"
import { Container, Box, Button, Typography } from "@mui/material"

export default function SettingsPage() {
    return <Container maxWidth="lg">
        <Typography variant="h4" color="initial">Settings</Typography>
        <Typography variant="body1" color="initialtial">
            Manage your account preferences and settings
        </Typography>
        {/* Profile Container */}
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

        {/* Notification Container */}
        <SettingsContainer title="Notification">
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

        {/* Appearance Container */}
        <SettingsContainer title="Appearance">
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

        {/* Security Container */}
        <SettingsContainer title="Secutiry">
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

        <Box sx={{ width: "90%", padding: "10px", display: "flex", gap: 3 }}>
            <Button variant="contained" color="primary" sx={{ width: "70%" }}>
                Save Changes
            </Button>
            <Button variant="contained" color="error" sx={{ width: "30%" }}>
                Cancel
            </Button>
        </Box>
    </Container>
}
