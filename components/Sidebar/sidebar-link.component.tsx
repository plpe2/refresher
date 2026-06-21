import { Box, Typography } from "@mui/material"
import Link from "next/link"
import React from "react";

type SidebarLinkProps = {
    icon: React.JSX.Element,
    label: string,
    href: string,
    isCollapsed: boolean
}

export const SidebarLinks = ({ icon, label, href, isCollapsed }: SidebarLinkProps) => {
    let typographStyle = {}
    if (isCollapsed) {
        typographStyle = {
            display: {
                xs: "none"
            }
        }
    } else {
        typographStyle = {
            display: {
                xs: "none", md: "block"
            }
        }
    }

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
            <Typography variant="body1" color="initial" sx={typographStyle}>
                {label}
            </Typography>
        </Box>
    </Link>
}