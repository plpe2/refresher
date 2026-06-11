import { Box } from "@mui/material"
import React from "react"
import { SideBar } from "./Sidebar/sidebar-navigation"
import Navbar from "@/features/NavigationBar/navbar"

export const ParentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ display: "flex", bgcolor: "blue", width: "100%", minHeight: "100vh" }}>
            <SideBar />
            <Box sx={{ flexGrow: 4, bgcolor: "green" }}>
                <Navbar />
                <Box sx={{ padding: 5, marginTop: -5 }}>{children}</Box>
            </Box>
        </Box>
    )
}