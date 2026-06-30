import { SxProps, Theme } from "@mui/material";

export const SideBarContainerStyle = ( isCollapsed: boolean ) : SxProps<Theme> => ({
    width: isCollapsed ? { xs: "15%", md: "8%" } : "15%",
    bgcolor: "red",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    position: "sticky",
    top: 0
})

