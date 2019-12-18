window.GetImgInit=function(){let = html2canvasScript = document.createElement('script');
html2canvasScript.src ="https://cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.js";
document.getElementsByTagName('head')[0].appendChild(html2canvasScript);}

window.GetImg=function(source) {
GetImgInit()
source = document.querySelector(source)
let = imgContainer = document.createElement('img');
imgContainer.style.position='fixed';
imgContainer.style.top='0';
imgContainer.style.left=0;
imgContainer.style.right=0;
imgContainer.style.zIndex=100000;
        html2canvas(source).then(canvas => {
            var imageData = canvas.toDataURL("image/png");
            imgContainer.src = imageData;
            document.body.appendChild(imgContainer);
            sessionStorage.setItem('imageSrc', imageData);
        });
}
