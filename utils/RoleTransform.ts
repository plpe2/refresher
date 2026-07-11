export default function RoleTransform( role : string) {
    let DisplayedRole
    if (role == "qa") {
        return DisplayedRole = "Quality Assurance"
    } else if (role == "dev") {
        return DisplayedRole = "Program Developer"
    } else if (role == "manager") {
        return DisplayedRole = "Project Manager"
    }
}