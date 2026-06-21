import { Box, Typography } from "@mui/material"
import Link from "next/link"
import React from "react";

type SidebarLinkProps = {
    icon: React.JSX.Element,
    label: string,
    href: string
}

export const SidebarLinks = ({ icon, label, href }: SidebarLinkProps) => {
    return <Link
        href={href}
        style={{
            textDecoration: "none",
            color: "black",
        }}>
        <Box
            sx={{
                display: "flex",
                "&:hover": {
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                },
            }}>
            {icon}
            <Typography variant="body1" color="initial" sx={{ display: { xs: "none", md: "block" } }}>
                {label}
            </Typography>
        </Box>
    </Link>
}