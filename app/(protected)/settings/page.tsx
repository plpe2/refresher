import SettingsContainer from "@/features/Settings/settings-container"
import SettingsItem from "@/features/Settings/settings-item"
import { Container, Box, Button, Typography } from "@mui/material"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

export default function SettingsPage() {
    return <Container maxWidth="lg">
        <Typography variant="h4" color="initial">Settings</Typography>
        <Typography variant="body1" color="initialtial">
            Manage your account preferences and settings
        </Typography>
        {/* Profile Container */}
        <SettingsContainer icon={<PersonOutlinedIcon />} title="Profile">
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
        <SettingsContainer icon={<NotificationsIcon />} title="Notification">
            <SettingsItem title="Email Notifications" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
            <SettingsItem title="Push Notifications" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
            <SettingsItem title="Task Updates" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
            <SettingsItem title="Weekly Digest" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
        </SettingsContainer>

        {/* Appearance Container */}
        <SettingsContainer icon={<PaletteOutlinedIcon />} title="Appearance">
            <SettingsItem title="Theme" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
            <SettingsItem title="Language" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
        </SettingsContainer>

        {/* Security Container */}
        <SettingsContainer icon={<ShieldOutlinedIcon />} title="Security">
            <SettingsItem title="Two-Factor Authentication" >
                <Button variant="contained" color="primary">
                    asd
                </Button>
            </SettingsItem>
            <SettingsItem title="Last Password Change" >
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
    </Container >
}
