export default function AvatarView(nameToTransform: string) {
    const separatedName = nameToTransform.split(" ")
    return separatedName[0].split("")[0] + separatedName[1].split("")[0]
}