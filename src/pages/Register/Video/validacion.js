export const validateTitle = (title) => {
    return title.length > 2 && title.length < 150 ? true : false;
}

export const validateLink = (link) => {
    var regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return regex.test(link) ? true : false;
}

export const validateCategory = (category) => {
    return category.length > 0 ? true : false;
}

export const validateDescription = (description) => {
    return description.length > 2 && description.length < 300 ? true : false;
}
