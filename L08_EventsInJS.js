/*
# Events in JS
- The change in the state of an object is known as an Event.
- Events are fired to notify code of "Interesting changes" that may affect code execution.

- Mouse Event(click, double click etc.)
- Keyboard Events(keypress, keyup, keydown)
- Form Events(submit etc)
- Print event and many more

# Event Object
- It is a special object that has details about the event.
- All event handlers have access to the event Object's properties and methods.
        node.event = (e) => {
            //handle code
        }
- e.target, e.type, e.clientX, e.clientY etc

# Event Listeners
- node.addEventListener(event, callback_func);
- node.removeEventListener(event, callback_func);
*/

let btn = document.querySelector('#btn-1');
btn.addEventListener('click', () => {
    console.log('Button was clicked');
})

btn.ondblclick = () => {
    console.log('button was clicked twice!')
}

let heading = document.querySelector('#headId');
heading.onmouseover = () => {
    console.log('You are inside the heading tag.');
}