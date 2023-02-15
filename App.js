const nav__link = document.querySelectorAll(".navbar__link");

nav__link.forEach(e => {
    e.addEventListener("click",() => {
        removeClassLink()
        e.classList.add("active")
    })
})
function removeClassLink() {
    nav__link.forEach(e => {
        e.classList.remove("active")
    })
}

// nav__link.forEach(e =>{
//     e.addEventListener("mouseover", () => {
//         removeLink()
//         e.style.setProperty('--zero-opacity', 1)
//     })
// })

// function removeLink () {
//     nav__link.forEach(e =>{
//         e.addEventListener("mouseup", () => {
//             e.style.setProperty('--zero-opacity', 0)
//         })
//     })
// }