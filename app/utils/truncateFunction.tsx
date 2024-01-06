//Function that truncates text such as product names when they are longer than the given number in the function
export const truncateText = (str: string) => {
    if(str.length < 45) {
        return str
    } else {
        return str.substring(0, 45) + "..."
    }
}