export const validateName = (name) => {
    return name.length > 2 && name.length < 30 ? true : false;
}

export const validateDescription = (description) => {
    return description.length > 2 && description.length < 50 ? true : false;
}

export const validateColor = (color) => {
    return color !== null ? true : false;
}