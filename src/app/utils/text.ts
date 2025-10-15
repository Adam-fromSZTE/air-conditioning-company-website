export const toCamelCase = (str: string) => {
    return str
        .toLowerCase()
        .trimStart()
        .trimEnd()
        .split(" ")
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
};
