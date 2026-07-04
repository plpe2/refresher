"use client"
import SettingsContainer from "@/features/Settings/settings-container"
import SettingsItem from "@/features/Settings/settings-item"
import { Container, Box, Button, Typography } from "@mui/material"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import { useAuthProvider } from "@/context/jwt/auth-provider";

export default function SettingsPage() {
    const userData = useAuthProvider();
    const { user } = userData;
    let DisplayedRole;

    if (user?.role == "qa") {
        DisplayedRole = "Quality Assurance"
    } else if (user?.role == "dev") {
        DisplayedRole = "Programm Developer"
    } else if (user?.role == "manager") {
        DisplayedRole = "Project Manager"
    }

    return <Container maxWidth="lg">
        <Typography variant="h4" color="initial">Settings</Typography>
        <Typography variant="body1" color="initialtial">
            Manage your account preferences and settings
        </Typography>
        {/* Profile Container */}
        <SettingsContainer icon={<PersonOutlinedIcon />} title="Profile">
            <SettingsItem title="Full Name" >
                <Typography variant="body1" color="initial">{user?.name}</Typography>
            </SettingsItem>
            <SettingsItem title="Email" >
                <Typography variant="body1" color="initial">{user?.email}</Typography>
            </SettingsItem>
            <SettingsItem title="Role" >
                <Typography variant="body1" color="initial">{DisplayedRole}</Typography>
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
