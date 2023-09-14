// console.log("first")
const rectangle = document.querySelector('#rectangle');

rectangle.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var rectCoordinates = rectangle.getBoundingClientRect();
    var internalOrdinates = mouseX - rectCoordinates.left;
    // console.log(`internalOrdinates->${internalOrdinates}->${rectCoordinates.right}`)
    if (internalOrdinates < rectCoordinates.width / 2) {
        var redShade = gsap.utils.mapRange(0, rectCoordinates.width / 2, 255, 100, internalOrdinates);
        // console.log(redShade);
        rectangle.style.backgroundColor = 'rgb(' + redShade + ', 0, 0)';
    }
    else {
        var greenShade = gsap.utils.mapRange( rectCoordinates.width / 2,rectCoordinates.right,  100, 255,internalOrdinates);
        console.log(greenShade);
        rectangle.style.backgroundColor = 'rgb(0,' + greenShade + ',0)';
        // var blueShade = gsap.utils.mapRange( rectCoordinates.width / 2,rectCoordinates.right,  100, 255,internalOrdinates);
        // console.log(blueShade);
        // rectangle.style.backgroundColor = 'rgb(0, 0, ' + blueShade + ')';
    }


    // console.log(rectangle.getBoundingClientRect());
})

rectangle.addEventListener('mouseleave',function(event){
    rectangle.style.backgroundColor='rgb(255,255,255)';
});

// rectangle.addEventListener('mousemove', (event) => {
//     console.log("mouse");
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;

//     console.log(`${mouseX}  ${mouseY}`);
//     console.log(`top-left ${rectObj.left}  ${rectObj.top}`);
//     console.log(`top-right ${rectObj.right}  ${rectObj.top}`);
//     console.log(`bottom-left${rectObj.left}  ${rectObj.bottom}`);
//     console.log(`bottom-right${rectObj.right}  ${rectObj.bottom}`);

//     const midX = rectObj.left + (rectObj.width / 2);
//     //  console.log(midX);
//     if (mouseY > rectObj.top && mouseY < rectObj.bottom) {
//         // console.log("check")
//         if (mouseX >= rectObj.left && mouseX <= midX) {
//             console.log("left");
//         }
//         else if (mouseX< rectObj.right && mouseX > rectObj.bottom) {
//             console.log("right");
//         }
//     }

// });