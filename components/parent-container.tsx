import { Box } from "@mui/material"
import React from "react"
import { SideBar } from "./Sidebar/sidebar-navigation"
import Navbar from "@/features/NavigationBar/navbar"

export const ParentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ display: "flex", bgcolor: "blue", width: "100%" }}>
            <SideBar />
            <Box >
                <Navbar />
                {children}
            </Box>
        </Box>
    )
}