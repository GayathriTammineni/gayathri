let currentDroppable = null;

  drag1.onmousedown = function(event) {

  let sX = event.clientX - drag1.getBoundingClientRect().left;
  let sY = event.clientY - drag1.getBoundingClientRect().top;

  drag1.style.position = 'absolute';
  drag1.style.zindex=1000;
  document.body.append(drag1);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    drag1.style.left = pageX - sX + 'px';
    drag1.style.top = pageY - sY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    drag1.hidden =false;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    drag1.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { 
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { 
       
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  drag1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    drag1.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

drag1.ondragstart = function() {
  return false;
};