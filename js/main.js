const fillers = document.getElementsByClassName('inside');
const draggable = document.getElementById('draggable');

function draggableEverything() {
  let dragSources = document.querySelectorAll('[draggable="true"]');
  dragSources.forEach(dragSource => {
    dragSource.addEventListener('dragstart', dragStart);
    dragSource.addEventListener('dragend', dragEnd);
  });

  function dragStart(e) {
    this.classList.add('dragging');
  }

  function dragEnd(e) {
    this.classList.remove('dragging');
  }
}

for (const inside of fillers) {
  const element = inside;
  element.addEventListener('click', function() {
    //changing color on click;
    if (this.classList.length === 2) {
      this.classList.add('backgrounder');
    } else {
      this.classList.remove('backgrounder');
    }

    //defining condition for insert element or remove element from id="draggable"
    if (element.parentNode === container) {
      draggable.appendChild(element);
      draggable.setAttribute('draggable', 'true');
    } else if (element.parentNode === draggable) {
      container.appendChild(element);
    } else {
      if (draggable.length === 0) {
        draggable.setAttribute('draggable', 'false');
      }
    }

    //passing all drag function into every element;
    draggableEverything();
  });
}
