export function createButton() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Удали меня';
    btn.onclick = () => btn.remove();
    document.body.appendChild(btn);
}

export function createArrList(arr) {
    let ul = document.createElement('ul');
    arr.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML = element;
        li.onmouseover = (event) =>
            event.target.setAttribute('title', event.target.innerHTML);
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    let a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.innerHTML = 'tensor';
    a.addEventListener('click', (event) => {
        if (event.target.innerHTML == 'tensor') {
            event.target.innerHTML =
                event.target.innerHTML + ' ' + event.target.href;
        }
    });
    document.body.appendChild(a);
}

export function createList() {
    let liCreator = function () {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.onclick = (event) => (event.target.innerHTML += '!');
        return li;
    };

    let ul = document.createElement('ul');
    ul.appendChild(liCreator());
    document.body.appendChild(ul);

    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.onclick = () => ul.appendChild(liCreator());
    document.body.appendChild(button);
}
