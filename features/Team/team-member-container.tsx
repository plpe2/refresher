import { UserTypes } from '@/types/Users'
import AvatarView from '@/utils/AvatarDisplay'
import RoleTransform from '@/utils/RoleTransform'
import { Avatar, Badge, Box, Typography, Button, IconButton } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function MemberDisplay({ member }: { member: UserTypes }) {
    return (
        <Box sx={{ bgcolor: "beige", padding: 5 }}>
            <Box sx={{ display: "flex", gap: 5 }}>
                <Box>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={<div style={{ width: 15, height: 15, borderRadius: '50%', backgroundColor: '#44b700' }} />}
                    >
                        <Avatar sx={{ bgcolor: "purple", height: "50px", width: "50px" }}>{AvatarView(member.name)}</Avatar>
                    </Badge>
                </Box>
                <Box>
                    <Typography variant="h5" color="initial">{member.name}</Typography>
                    <Typography variant="body1" color="initial">{RoleTransform(member.role)}</Typography>
                </Box>
                <Box sx={{ ml: "auto" }}>
                    <IconButton aria-label="" onClick={() => alert("haha")} size='large'>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 4, ml: 2 }}>
                <EmailOutlinedIcon />
                <Typography variant="body1" color="initial">{member.email}</Typography>
            </Box>
            <hr />
            <Box sx={{ display: "flex", padding: 1 }}>
                <Typography variant="body1" color="initial" sx={{ flex: 1 }}>Active Task : 8</Typography>
                <Button variant="contained" color="primary" sx={{ flex: 1 }}>
                    Message
                </Button>
            </Box>
        </Box>
    )
}

