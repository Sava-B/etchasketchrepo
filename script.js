const container = document.querySelector('#grid');


for (let i = 0; i < 256; i++) {

    const div = document.createElement('div');

    div.style.color = 'blue';
    div.textContent = '';
    div.setAttribute("style", "border: 1px solid black; background: white; padding: 15px;");



    container.append(div)

}