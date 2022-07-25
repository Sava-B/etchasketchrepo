const body = document.body
const container = document.querySelector('#grid');


for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = 'divs';
    div.id = 'div2';
    div.textContent = '';
    container.append(div)


    let timeout;

    const removeTransition = () => {    
        div.classList.remove('clicked');
    }
    const timefunction = () => {
        timeout = setTimeout(removeTransition, 4000)
    }

    div.addEventListener('mouseover', () => {
        div.classList.add('clicked');
        timefunction()
        
    })

}
