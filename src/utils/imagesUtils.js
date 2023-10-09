export function generateArticleRandomImageURL() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return `/images/article${randomNumber}r.jpg`;
}

export function generateProfileRandomImageURL() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return `/images/profile${randomNumber}r.jpg`;
}


