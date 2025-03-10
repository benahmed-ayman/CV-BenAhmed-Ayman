const liegeatlas_gris =document.getElementById('liege_atlas_gris');
const hepl_gris =document.getElementById('hepl_gris')

liegeatlas_gris.addEventListener('mouseenter', () => {
    liegeatlas_gris.src='./img/liege_atlas_color.svg';
});

liegeatlas_gris.addEventListener('mouseout', () => {
    liegeatlas_gris.src='./img/logo_liege_atlas.svg';
});




hepl_gris.addEventListener('mouseenter', () => {
    hepl_gris.src='img/logo_hepl_color.svg';
});

hepl_gris.addEventListener('mouseout', () => {
    hepl_gris.src='./img/logo_hepl_gris.svg';
});





/*

aussi faire en sorte que les logo defile

const image = document.getElementById("changeableImage");
const imageSrcDefault = "https://via.placeholder.com/300x200";
const imageSrcHover = "https://via.placeholder.com/300x200/ff0000/ffffff";

image.addEventListener("mouseover", () => {
    image.src = imageSrcHover;
});

image.addEventListener("mouseout", () => {
    image.src = imageSrcDefault;
});

*/