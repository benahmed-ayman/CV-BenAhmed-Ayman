const liegeatlas_gris = document.querySelector('.liege_atlas_gris');
const hepl_gris = document.querySelector('.hepl_gris')

liegeatlas_gris.addEventListener('mouseenter', () => {
    liegeatlas_gris.src = './img/liege_atlas_color.svg';
});

liegeatlas_gris.addEventListener('mouseout', () => {
    liegeatlas_gris.src = './img/logo_liege_atlas.svg';
});


hepl_gris.addEventListener('mouseenter', () => {
    hepl_gris.src = 'img/logo_hepl_color.svg';
});

hepl_gris.addEventListener('mouseout', () => {
    hepl_gris.src = './img/logo_hepl_gris.svg';
});


/*-------------------------------accesibilité---------------------------------*/


document.querySelector(".logoaccesibility").addEventListener("click", function () {
    document.querySelector(".accesibilité").style.visibility = "visible";
});

/*-----------------------------mettre le fernier animation ici ---------------------------*/



/*-----------------------------------------------------------------*/


const audio = document.querySelector(".monAudio")


document.querySelector(".logoaccesibility").addEventListener("click", function () {
    audio.play()
});


