import { UserTypes } from '@/types/Users'
import RoleTransform from '@/utils/RoleTransform'
import { Box, SxProps, Theme, Typography } from '@mui/material'

export default function MemberDisplay({ sx, member }: { sx?: SxProps<Theme>, member: UserTypes }) {
    return (
        <Box sx={{ bgcolor: "beige" }}>
            <Typography variant="h6" color="initial">{member.name}</Typography>
            <Typography variant="body1" color="initial">{RoleTransform(member.role)}</Typography>
            <Typography variant="body1" color="initial">{member.email}</Typography>
        </Box>
    )
}

