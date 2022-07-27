const body = document.body
const container = document.querySelector('#grid');
const btn = document.querySelector('#btn');
const inpt = document.querySelector("#inpt");



const askUser = () => {
    if (typeof parseInt(inpt.value) == 'number' && parseInt(inpt.value) < 100 && parseInt(inpt.value) > 0) {
        for (let i = 0; i < parseInt(inpt.value)*parseInt(inpt.value); i++) {
            const div = document.createElement('div');
            div.className = 'divs';
            div.id = 'div2';
            div.textContent = '';
            container.append(div)
            let timeout;
            div.style.gridTemplateColumns = 'auto'*parseInt(inpt.value)
        
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
    }

}


btn.addEventListener('click', askUser)



