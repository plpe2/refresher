import { Box, Typography } from '@mui/material'
import React from 'react'

type SettingsItemProps = {
    title: string,
    children: React.ReactNode
}

export default function SettingsItem({ title, children }: SettingsItemProps) {
    return (
        <Box sx={{
            width: "90%",
            display: "flex",
            borderBottom: "1px solid black",
            padding: "10px",
            marginBottom: "10px"
        }}>
            <Box sx={{ width: "50%" }}>
                <Typography variant="body1" color="initial">
                    {title}
                </Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}>
                {children}
            </Box>
        </Box>
    )
}

