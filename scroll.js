const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll', show)

show()

function show() {
    const triggerBotton = window.innerHeight / 5 * 4

    
    boxes.forEach(box => {
        
        const boxTop =  box.getBoundingClientRect().top 

        if (boxTop < triggerBotton) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
    });
}