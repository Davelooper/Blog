export function generateArticleRandomImageURL() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return `/images/article${randomNumber}r.jpg`;
}


