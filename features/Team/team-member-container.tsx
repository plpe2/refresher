import { Box, SxProps, Theme } from '@mui/material'
import React from 'react'

export default function MemberDisplay({ sx }: { sx?: SxProps<Theme> }) {
    return (
        <Box sx={{ bgcolor: "beige" }}>
            Hello
        </Box>
    )
}

