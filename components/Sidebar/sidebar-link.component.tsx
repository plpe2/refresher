import { Box, Typography } from "@mui/material"
import Link from "next/link"
import React from "react";

type SidebarLinkProps = {
    Icon: React.JSX.Element,
    label: string,
    href: string,
    isCollapsed: boolean
}

export const SidebarLinks = ({ Icon, label, href, isCollapsed }: SidebarLinkProps) => {
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
            <Box sx={{
                width: isCollapsed ? "100%" : "30%",
            }}>
                {Icon}
            </Box>
            {!isCollapsed && (
                <Box sx={{ width: "70%" }}>
                    <Typography>{label}</Typography>
                </Box>
            )}
        </Box>
    </Link>
}