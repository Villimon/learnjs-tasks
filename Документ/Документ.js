// 3.Навигация по DOM-элементам

// 2.Задача
// 1.Да
// 2.нет


// 4.Поиск: getElement*, querySelector*
/*
document.getElementById('age-table')

document.getElementsByTagName('label')

document.querySelector('td')

document.getElementsByName('search')[0]

document.querySelector('input')

let inputs = document.querySelectorAll('input')
inputs[inputs.length - 1]
 */


// 5.Свойства узлов: тип, тег и содержимое

// 1.Задача
/* for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
  }
 */
// 2.Задача
// 1

// 3.Задача
// BODY

// 4.Задача
// HTMLDocument
// 2 в иерархии


// 6.Атрибуты и свойства


// 1.Задача
/* let elem = document.querySelector('[data-widget-name]')

elem.dataset.widgetName */
// 2.Задача
/* let links = document.querySelectorAll('a');

for (let link of links) {
    let href = link.getAttribute('href');
    if (!href) continue;

    if (!href.includes('://')) continue;

    if (href.startsWith('http://internal.com')) continue; /

    link.style.color = 'orange';
} */





// 7.Изменение документа


// 1.Задача
// 1,3

// 2.Задача
/*
function clear(elem) {
    for (let i=0; i < elem.childNodes.length; i++) {
        elem.childNodes[i].remove();
    }
}

clear(elem);
 */

// 3.Задача
// В table  не может бюыть текста

// 4.Задача

{/* <ul id="ul"></ul> */ }

/*
while (true) {
    let data = prompt("Введите текст для элемента списка", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

 */


// 5.Задача
/*
let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createTree(container, data) {
  container.append(createTreeDom(data))

}

function createTreeDom(obj) {

  let ul = document.createElement('ul');

  for(let key in obj){
    let li = document.createElement('li');
    li.innerHTML = key;

    let children = createTreeDom(obj[key])

    if(children) {
      li.append(children)
    }

    ul.append(li)

  }
  return ul

}

createTree(document.getElementById('tree'), data);
 */
// 6.Задача

/*
 let lis = document.getElementsByTagName('li');

    for (let li of lis) {
      let descendantsCount = li.getElementsByTagName('li').length;
      if (!descendantsCount) continue;

      li.firstChild.data += ' [' + descendantsCount + ']';
    }
*/

// 7.Задача
/*
 function createCalendar(elem, year, month) {

      let mon = month - 1;
      let d = new Date(year, mon);

      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) {
      let day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }

    createCalendar(calendar, 2012, 9);
*/

// 8.Задача
/*
function update() {
    let clock = document.querySelector('#clock')
    let date = new Date()

    let hours = date.getHours()
    if (hours < 10) {
        hours = '0' + hours
    }
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes()
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;

}
let timer;

function clockStart() {
    if (!timer) {
        timer = setInterval(update, 1000)
    }
    update()
}

function clockStop() {
    clearInterval(timer)
    timer = null
}
 */

// 9.Задача
// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// 10.Задача
/* let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);

 */

// 8.Стили и классы

// 1.Задача
/*
function showNotification({ top = 0, right = 0, className, html }) {
    let div = document.createElement('div');
    div.className = 'notification'

    if (className) {
        div.classList.add('className')
    }

    div.style.top = top + 'px'
    div.style.right = right + 'px'

    div.innerHTML = html
    document.body.append(div);

    setInterval(() => div.remove(), 1500)
}

 */

// 9.Размеры и прокрутка элементов

// 1.Задача
// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 2.Задача
// let scrollWidth = div.offsetWidth - div.clientWidth;

// 3.Задача
// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

// 4.Задача
// 1.clientWidth  не учитывает скролл
// 2.clientWidth возвращает число, а getComputedStyle возвращает строку
// 3.box-sizing сломает  JavaScript


// 11.Координаты

// 1.Задача
/*
let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];

let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];


let answer4 = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight
];
*/

// 2.Задача
/*

  function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
      case "top":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
    }

  }


  function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");


*/

// 3.Задача
/*
<body style="height: 2000px">

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>

  <blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.
  </blockquote>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>


  <script>

    function getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    function positionAt(anchor, position, elem) {

      let anchorCoords = getCoords(anchor);

      switch (position) {
        case "top":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;

        case "right":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;
      }

    }

    function showNote(anchor, position, html) {

      let note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.append(note);

      positionAt(anchor, position, note);
    }

    let blockquote = document.querySelector('blockquote');

    showNote(blockquote, "top", "note above");
    showNote(blockquote, "right", "note at the right");
    showNote(blockquote, "bottom", "note below");

*/

// 4.Задача

/* 

function getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    function showNote(anchor, position, html) {

      let note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.append(note);

      positionAt(anchor, position, note);
    }

    function positionAt(anchor, position, elem) {

      let anchorCoords = getCoords(anchor);

      switch (position) {
        case "top-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;

        case "right-out":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;

        case "top-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "right-in":
          elem.style.width = '150px';
          elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
          break;
      }

    }


    let blockquote = document.querySelector('blockquote');

    showNote(blockquote, "top-in", "note top-in");
    showNote(blockquote, "top-out", "note top-out");
    showNote(blockquote, "right-out", "note right-out");
    showNote(blockquote, "bottom-in", "note bottom-in");


*/




