let movies = [
    {
        name:"falcon and the winter soldier",
        des: "Falcon and the Winter Soldier ars/slider 2.PNGe a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
        image: "images/slider 2.PNG"
    },
    {
        name:"falcon and the winter soldier",
        des: "Falcon and the Winter Soldier ars/slider 2.PNGe a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
        image: "images/slider 2.PNG"
    },
    {
        name:"falcon and the winter soldier",
        des: "Falcon and the Winter Soldier ars/slider 2.PNGe a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
        image: "images/slider 2.PNG"
    },
    {
        name:"falcon and the winter soldier",
        des: "Falcon and the Winter Soldier ars/slider 2.PNGe a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
        image: "images/slider 2.PNG"
    },
    {
        name:"falcon and the winter soldier",
        des: "Falcon and the Winter Soldier ars/slider 2.PNGe a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
        image: "images/slider 2.PNG"
    },
];
const carousel = document.querySelector('.carousel')
let slider = [];

let slideIndex = 0;
const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    let slide = document.createElement("div")
    let imgElements =document.createElement("img")
    let content = document.createElement("div")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")

    imgElements.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.
}
