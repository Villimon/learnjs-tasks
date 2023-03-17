// 1.Введение в браузерные события




// 1.Задача
/*
hider.onclick = function () {
    text.remove()
}
 */
// 2.Задача
// <input type="button" onclick="this.hidden=true" value="Нажми, чтобы спрятать">

// 3.Задача
// 1,2


// 4.Задача

/*
let ball = document.getElementById('ball')

field.addEventListener('click', function (e) {

    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };


    if (ballCoords.top < 0) ballCoords.top = 0
    if (ballCoords.left < 0) ballCoords.left = 0
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }



    ball.style.top = ballCoords.top + 'px'
    ball.style.left = ballCoords.left + 'px'

})
 */
// 5.Задача
/*
let title = document.querySelector('.title')
  let menu = document.querySelector('.menu')

title.addEventListener('click', function() {
    menu.classList.toggle('open')
})
 */
// 6.Задача
/*
let pane = document.querySelectorAll('.pane')

pane.forEach(item => {
    let btn = item.querySelector('.remove-button')
    btn.onclick = () => item.remove();

})
 */
// 7.Задача
/*
let width = 130;
let count = 3;

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};
 */

// 3.Делегирование событий



// 1.Задача
/*
let container = document.getElementById('container')

container.addEventListener('click', function (e) {
    let pane = event.target.closest('.pane');
    if (e.target.className == 'remove-button') {
        pane.remove()
    }
})
 */
// 2.Задача
/*
let tree = document.getElementById('tree')

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}


tree.addEventListener('click', function (e) {
    let childrenContainer = e.target.parentNode.querySelector('ul');
    if (!childrenContainer) return; // нет детей

    childrenContainer.hidden = !childrenContainer.hidden;
})
 */
// 3.Задача
/*
grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}
 */
// 4.Задача
/*
document.onmouseover = function (event) {
    let target = event.target;

    if (!target.dataset.tooltip) return

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = target.dataset.tooltip;
    document.body.append(tooltipElem);


    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';


};

document.onmouseout = function (e) {

    if (tooltipElem) {
        tooltipElem.remove()
    }

};
 */



// 4.Действия браузера по умолчанию

// 1.Задача
// Нужно добавить event.preventDefault()


// 2.Задача
/*
document.addEventListener('click', function (e) {

    function goLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) {
            e.preventDefault()
        };
    }

    let target = e.target.closest('a')


    if (target) {
        return goLink(target.getAttribute('href'));
    }

})
 */
// 3.Задача
/* 
document.addEventListener('click', function (e) {
    let target = e.target.closest('a')
    if (!target) return


    if (target) {
        showThumbnail(target.href, target.title)
        e.preventDefault()
    }

})

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}


 */






