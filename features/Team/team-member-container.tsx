import { UserTypes } from '@/types/Users'
import AvatarView from '@/utils/AvatarDisplay'
import RoleTransform from '@/utils/RoleTransform'
import { Avatar, Badge, Box, Typography } from '@mui/material'

export default function MemberDisplay({ member }: { member: UserTypes }) {
    return (
        <Box sx={{ bgcolor: "beige" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    badgeContent={<div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#44b700' }} />}
                >
                    <Avatar sx={{ bgcolor: "purple" }}>{AvatarView(member.name)}</Avatar>
                </Badge>
                <Typography variant="h6" color="initial">{member.name}</Typography>
            </Box>
            <Typography variant="body1" color="initial">{RoleTransform(member.role)}</Typography>
            <Typography variant="body1" color="initial">{member.email}</Typography>
        </Box>
    )
}

