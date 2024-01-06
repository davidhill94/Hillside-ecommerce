export const truncateText = (str: string) => {
    if(str.length < 45) {
        return str
    } else {
        return str.substring(0, 45) + "..."
    }
}