let loganImages = [
    "https://wallpaperaccess.com/full/1191225.jpg",
    "https://images5.alphacoders.com/744/thumb-1920-744742.jpg",
    "https://wallpapercave.com/wp/wp1962468.jpg",
    "https://wallpapercave.com/wp/wp1962478.jpg",
    "https://wallpapercave.com/wp/wp1962485.jpg",
    "https://wallpapercave.com/wp/wp1962497.jpg",
    "https://wallpapercave.com/wp/wp1962482.jpg"
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomIndex = Math.floor(Math.random() * loganImages.length);
    imgs[i].src = loganImages[randomIndex];
}