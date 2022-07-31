const body = document.body
const container = document.querySelector('#grid');
const btn = document.querySelector('#btn');
const inpt = document.querySelector("#inpt");

const reset = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

btn.addEventListener('click', () => {
    if (typeof parseInt(inpt.value) == 'number' && parseInt(inpt.value) < 100 && parseInt(inpt.value) > 0) {
        let timeout;
        reset(container)
        for (let i = 0; i < parseInt(inpt.value)**2; i++) {
            const div = document.createElement('div');
            div.className = 'divs';
            container.style.gridTemplateColumns = `repeat(${parseInt(inpt.value)}, auto)`
            container.style.gridTemplateRows = `repeat(${parseInt(inpt.value)}, auto)`
            container.append(div)
        
            const removeTransition = () => {    
                div.classList.remove('clicked');
            }
            const timefunction = () => {
                timeout = setTimeout(removeTransition, 1000)
            }
        
            div.addEventListener('mouseover', () => {
                div.classList.add('clicked');
                timefunction()
                
            })
        }

    } else {
        alert('You need to input an integer');
        reset(container) 
    }
})



