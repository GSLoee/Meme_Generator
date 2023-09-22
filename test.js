const urlInput = document.querySelector(".url-input");
const canvas = document.querySelector(".canvas");
const canvas2 = document.querySelector(".canvas-2");
const generateMeme = document.querySelector(".generate");
const topTextInput = document.querySelector(".top-input");
const bottomTextInput = document.querySelector(".bottom-input");

let currentCanvas = canvas;

function generateImage() {
    const imageUrl = urlInput.value;
    const topText = topTextInput.value;
    const bottomText = bottomTextInput.value;

    if (!currentCanvas.style.backgroundImage) {
        currentCanvas.style.backgroundImage = `url('${imageUrl}')`;
        currentCanvas.style.backgroundSize = "cover";
        currentCanvas.style.backgroundRepeat = "no-repeat";
    } else {
        
        currentCanvas = currentCanvas === canvas ? canvas2 : canvas;
        currentCanvas.style.backgroundImage = `url('${imageUrl}')`;
        currentCanvas.style.backgroundSize = "cover";
        currentCanvas.style.backgroundRepeat = "no-repeat";
    }

    const ctx = currentCanvas.getContext("2d");
    ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

   
    ctx.font = "30px Impact";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

   
    ctx.fillText(topText, currentCanvas.width / 2, 10);

    
    ctx.font = "30px Impact";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

   
    ctx.fillText(bottomText, currentCanvas.width / 2, currentCanvas.height - 10);

   
    urlInput.value = "";
    topTextInput.value = "";
    bottomTextInput.value = "";
}
function refreshPage() {
    location.reload(); 
}

generateMeme.addEventListener("click", generateImage);