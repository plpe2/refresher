import { Box, Typography } from "@mui/material"
import Link from "next/link"
import React from "react";

export const SidebarLinks = ({ icon, label, href }: { icon: React.JSX.Element, label: string, href: string }) => {
    return <Link href={href} style={{ textDecoration: "none", color: "black" }}>
        <Box sx={{ display: "flex" }}>
            {icon}
            <Typography variant="body1" color="initial" sx={{ display: { xs: "none", md: "block" } }}>{label}</Typography>
        </Box>
    </Link>
}