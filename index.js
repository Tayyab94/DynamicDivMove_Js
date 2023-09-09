let rectangle = document.getElementById("rectangle");

// rectangle.addEventListener("mousemove", function (details) {
//     gsap.to("#rectangle", {
//         left: details.clientX + "px",

//     })
// })


window.addEventListener("mousemove", function (details) {
    // gsap.to(rectangle, {
    //     left: details.clientX + "px",
    //     ease: Prower3
    //     // })


    var rect = rectangle.getBoundingClientRect();

    var xVal = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.width / 2,
        window.innerWidth - (100 + rect.width / 2),
        details.clientX);

    gsap.to("#rectangle", {
        left: xVal,
        ease: Power3,
    })
})