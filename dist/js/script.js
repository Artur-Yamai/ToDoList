window.onload = () => {
 
    const buttonAdd = document.querySelector('.add');
    const toDo = document.querySelector('.toDoList');
    const buttonRemove = document.querySelector('.remove');
    const input = document.querySelector('.entryField');
    
    // добавляет список на Enter
    input.onkeypress =  pressKey;
    // дополняет список
    buttonAdd.onclick = addPoint;
    // отмечает выполненные задачи
    toDo.onclick = changeState;
    // удаляет выполненые пункты и исправляет номера задач, чтобы шли по порядку
    buttonRemove.onclick = removeClass;
    
    function addPoint () {

        // берет текст из поля ввода
        let text = input.value.trim();

        // проверка на пустые строки
        if (text !== '') {

        //узнает количество пунктов, для порядкового номера
        let sum = document.querySelectorAll('.point');

        // сооздает новый пункт с изменениями
        toDo.innerHTML += `<p class="point">
        <span class="number">${sum.length + 1}. </span>
        <span class="text">${text}</span>
        <input type="checkbox" class="checkbox">
        <span class="success">Выполнено</span>  
        </p>`;

        // очищает поле ввода
        input.value = ''; 

        }           
    }

    function pressKey (event) {
        if (event.keyCode == 13) {
            addPoint();
        }
    }
    
    function changeState (event) {
    
        // ищет где было событие
        let target = event.target;
        // отметает все варианты, кроме чекбокса
        if (target.classList == 'checkbox') {
            
            // добавляет или убирает класс к пункту        
            if (!target.checked) {
                target.parentNode.classList.remove('point_checked');
            } else {
                target.parentNode.classList.add('point_checked');
            }

        }       
        
    };
 
    function removeClass () {
        
        let checkList = document.querySelectorAll('.checkbox');
        
        for (let i = 0; i < checkList.length; i++) {

            if (checkList[i].checked) {
                checkList[i].parentNode.remove()              
            }
            
        }

        //узнает количество пунктов, для порядкового номера
        let sum = document.querySelectorAll('.point');  

        // изменяет порядковый номер пунктов
        for (let i = 0; i < sum.length; i++) {            
            sum[i].querySelector('.number').innerHTML = `${i+1}. `;
        }

    }
    
}

