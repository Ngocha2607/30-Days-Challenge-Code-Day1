var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var removeAll = document.querySelector('.remove-btn');
var tags= ['nodejs' , 'react'];

reRender();

function reRender() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fas fa-times" onclick='removeTag(${i})'></i>
                            </li>`
    }

    content.appendChild(input);
    input.focus();
}

input.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        tags.push(input.value.trim());
        input.value = '';
        reRender();
    }
})

function removeTag(index) {
    tags.splice(index, 1);
    reRender();
}

removeAll.addEventListener('click', function() {
    tags = [];
    reRender();
})