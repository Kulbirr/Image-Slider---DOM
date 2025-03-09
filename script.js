const images = [
    "https://picsum.photos/id/1018/500/300",  
    "https://picsum.photos/id/1025/500/300",
    "https://picsum.photos/id/1039/500/300",
    "https://picsum.photos/id/1043/500/300",
    "https://picsum.photos/id/1050/500/300" 
];

let idx = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage(){
    sliderImage.src = images[idx];
}

prevBtn.addEventListener("click", () => {
    idx = idx-1;
    if(idx < 0) idx = images.length-1;
    // console.log(idx);
    updateImage();
})

nextBtn.addEventListener("click", () =>{
    idx = idx+1;
    if(idx == images.length) idx = 0;
    // console.log(idx);
    updateImage();
})

updateImage();