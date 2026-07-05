import { Box, Typography } from '@mui/material'
import React from 'react'

type SettingsContainerProps = {
    icon: React.JSX.Element,
    title: string
    children: React.ReactNode
}

export default function SettingsContainer({ icon, title, children }: SettingsContainerProps) {
    return (
        <Box sx={{
            width: "90%",
            bgcolor: "red",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            mt: "10px",
            mb: "10px"
        }}>
            <Box sx={{ display: "flex", }}>
                {icon}
                <Typography variant="h6" color="initial">
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    )
}

