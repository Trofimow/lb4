


/*--------------------------------------------------------часть 1----------------------------------------------*/


  function getText() {
    let text = document.getElementById('text').value;
    let textcolor = document.getElementById('color').value;
    let newLine = document.createElement('div');
    let selectionPosition = document.getElementsByName('place');
    newLine.innerHTML = text;
    newLine.onclick = removeDiv;
  
    function removeDiv() {
      list.removeChild(this);
    };
  
    Element.prototype.setAttributes = function(attrs) {
      for (var idx in attrs) {
        if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]) {
            this.style[prop] = attrs[idx][prop];
          }
        } else {
          this.setAttribute(idx, attrs[idx]);
        }
      }
    };
  
    newLine.setAttributes({
      'styles': {
        'backgroundColor': textcolor,
      },
    });
  
    for (let i = 0; i < selectionPosition.length; i++) {
      if (selectionPosition[i].type == "radio" && selectionPosition[i].checked) {
        list.appendChild(newLine);
      } else {
        list.insertBefore(newLine, list.firstChild);
      }
    }
  }
  
  function alertText() {
    let alrt = document.getElementById('list');
    let elems = alrt.children;
    let fullElem = new Array();
    elems = Array.prototype.slice.call(elems);
    for (let i = 0; i < elems.length; i++) {
      fullElem[i] = elems[i].textContent;
    }
    alert(fullElem.join());
  }



/*--------------------------------------------------------часть 2----------------------------------------------*/

  function addRectangle() {
    let newRectangle = document.createElement('div');
    newRectangle.innerHTML;
    let task2 = document.getElementById('task2');
    task2.appendChild(newRectangle);
  
    let r = Math.floor(Math.random() * (223));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    let widthNumber = getRandomInt(40, 150);
    let widthPX = widthNumber.toString(10) + 'px';
    let heightNumber = getRandomInt(40, 150);
    let heightPX = heightNumber.toString(10) + 'px';
  
    let leftNumber = getRandomInt(0, 600);
    let leftPX = leftNumber.toString(10) + 'px';
    let topNumber = getRandomInt(0, 300);
    let topPX = topNumber.toString(10) + 'px';
  
    Element.prototype.setAttributes = function(attrs) {
      for (var idx in attrs) {
        if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]) {
            this.style[prop] = attrs[idx][prop];
          }
        } else {
          this.setAttribute(idx, attrs[idx]);
        }
      }
    };
  
    newRectangle.setAttributes({
      'styles': {
        'height': heightPX,
        'width': widthPX,
        'backgroundColor': color,
        'left': leftPX,
        'top': topPX,
      },
    });
  
    newRectangle.setAttribute('class', 'rectitac');
  
    task2.onclick = function(event) {
      let target = event.target; 
      if (target.className != 'rectitac') return; 
      light(target); 
      target.style.zIndex = 1000;
    };
  }
  
  function moveRect(e) {
    let Rect = document.getElementById("highlight");
  
    let cs = window.getComputedStyle(Rect);
  
    let left = parseInt(cs.left);
    let top = parseInt(cs.top);
  
    switch (e.keyCode) {
      case 37: 
          Rect.style.left = left - 30 + "px";
        break;
      case 38: 
          Rect.style.top = top - 30 + "px";
        break;
      case 39: 
          Rect.style.left = left + 30 + "px";
        break;
      case 40:
          Rect.style.top = top + 30 + "px";
        break;
    }
  }
  
  addEventListener("keydown", moveRect);
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let selectedDiv;
  
  function light(node) {
    if (selectedDiv) {
      selectedDiv.removeAttribute('id');
    }
    selectedDiv = node;
    selectedDiv.setAttribute('id', 'highlight');
  }




  /*--------------------------------------------------------часть 3----------------------------------------------*/
  function addBlock() {
    let newRectangle = document.createElement('div');
    newRectangle.innerHTML;
    let task3 = document.getElementById('field3');
    task3.appendChild(newRectangle);
  
    let r = Math.floor(Math.random() * (223));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    let widthNumber = getRandomInt(40, 150);
    let widthPX = widthNumber.toString(10) + 'px';
    let heightNumber = getRandomInt(40, 150);
    let heightPX = heightNumber.toString(10) + 'px';
  
    let leftNumber = getRandomInt(0, 600);
    let leftPX = leftNumber.toString(10) + 'px';
    let topNumber = getRandomInt(0, 300);
    let topPX = topNumber.toString(10) + 'px';
  
    Element.prototype.setAttributes = function(attrs) {
      for (var idx in attrs) {
        if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]) {
            this.style[prop] = attrs[idx][prop];
          }
        } else {
          this.setAttribute(idx, attrs[idx]);
        }
      }
    };
  
    newRectangle.setAttributes({
      'styles': {
        'backgroundColor': color,
        'width': widthPX,
        'height': heightPX,
        'left': leftPX,
        'top': topPX,
  
      },
    });
  
    newRectangle.setAttribute('class', 'draggable')
  }
  

  document.onmousedown = function(e) { //нажали на мышь
    let elem = e.target; //элемент, на который нажали
    if (elem.className && elem.className.indexOf('draggable') >= 0) { //фильтрует эелементы (только с классом draggable)
      elem.ondragstart = function() {
        return false
      }; //убираем перетаскивание от HTML5
      let coor = elem.getBoundingClientRect(); //получаем координыты елемента относительно окна браузера
      let osx = e.offsetX; //получаем смещение по Х указателя мыши относительно начала координат эелемента
      let osy = e.offsetY; // тоже по У
      elem.style.position = 'fixed'; //фиксируем элемент относительно окна
      elem.style.top = coor.top + 'px'; //задаем начальные координаты У
      elem.style.left = coor.left + 'px'; //тоже по Х
  
      document.onmousemove = function(ev) { //тянем (функция в функции - тянем при нажатой кнопке)
        let x = ev.clientX; //координата Х относительно окна браузера
        let y = ev.clientY; //тоже по Х
  
        elem.style.left = x - osx + 'px'; //задаем координату Х без смещения для движения элемента
        elem.style.top = y - osy + 'px'; // тоже по У
        removeSelect(); //запретить стандартное выделение
      }
    }
  }
  
  document.onmouseup = function(e) { //отпустили кнопку
    var elem = e.target; //наш элемент
    document.onmousemove = function() {
      return false
    }; //отменяем перемещение элемента
  }
  
  function removeSelect() { //функция - убрать стандартное выделение
    var b = document.body; //по всему документу
    b.style.webkitUserSelect = b.style.mozUserSelect = b.style.msUserSelect = 'none'; //добавляем свойство CSS - запретить выделение
  }




  part4.onmousemove = function() { 
    x1= event.clientX; 
    y1= event.clientY;
    x2=x1-90;
    y2=y1-260; 
}
document.onclick=function()
{
  if(x1>10&&y1>154&&x1<795&&y1<700)
  {
   let newRectangle = document.createElement('div');
   newRectangle.innerHTML;
   let task3 = document.getElementById('task4');
   task3.appendChild(newRectangle);
    let mbr;
   let r = Math.floor(Math.random() * (223));
   let g = Math.floor(Math.random() * (256));
   let b = Math.floor(Math.random() * (256));
   let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
   if(x1<170||x1>640||y1<250||y1>600){
     mbr=50;
   }else if((x1>=170&&x1<300)||(x1<=640&&x1>540)||(y1>=250&&y1<300)||(y1<=600&&y1>550)){
    mbr=100;
   }else{
    mbr=150;
   }
   let leftPX =  x2-(mbr/2) + 'px';
   let topPX =  y2 -(mbr/2)+ 'px';
   let wbr=mbr+'px';
   let qwe=mbr/2+'px';

   Element.prototype.setAttributes = function(attrs) {
     for (var idx in attrs) {
       if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
         for (var prop in attrs[idx]) {
           this.style[prop] = attrs[idx][prop];
         }
       } else {
         this.setAttribute(idx, attrs[idx]);
       }
     }
   };
 
   newRectangle.setAttributes({
     'styles': {
       'width': wbr,
       'height': wbr,
       'left': leftPX,
       'top': topPX,
       '-moz-border-radius': qwe,
       '-webkit-border-radius': qwe,
       'background':color,
       'border-radius':qwe,
     },
   });
   newRectangle.setAttribute('class', 'draggable')
  }
}