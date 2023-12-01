const info = {
    Sehwag:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png",
    Sachin:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png",
    Gambhir:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png",
    Virat:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png",
    Dhoni:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png",
    Yuvraj:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png",
    Raina:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg",
    Harbhajan:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg",
    Zaheer:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg",
    Munaf:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg",
    Sreesanth:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg"
};

const image = document.getElementById("image")
const box = document.querySelector(".pop")

function popup(name){
    box.style.display = "block"
    image.src = info[name]
}

function winClose(){
    box.style.display = "none"
}