const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {


    const itemText = sendInput.value;

    const newItem = document.createElement('div');
    newItem.classList.add('items');
    newItem.addEventListener('click', function() {
        newItem.classList.toggle('done');
    });
    newItem.textContent = itemText;

    if (event.key == 'Enter' && itemText != '') {
        itemsContainer.append(newItem);
        sendInput.value = '';
    };

})





/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */