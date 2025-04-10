/* HTML NOTES
<!DOCTYPE html> <!-- Document type node-->
<!-- 
- head, title, body: these are the element type nodes
- "DOM in JS", "Javascript DOM": there are the text node
-->
<html lang="en">
<head>
    <title>DOM in JS</title>
</head>
<body>
    <!-- comment: this is a comment node --> 
    <div>
        <p>Javascript DOM</p>
        <p>Javascript DOM</p>
        <p>Javascript DOM</p>
        <p>Javascript DOM</p>
    </div>
</body>
</html>

<!--
# Tree structure of the HTML document
- HTML
    - head
        - title
    - body
        - div
            - p
            - p
            - p
            - p
-->

<!-- HERE 
here head, title, body, comment, p :
- all them are the nodes of the HTML document

# NODE relationship:
- Any node has relationships to other nodes in the DOM tree, and it is same as described in the traditional family tree
-->
*/

/*
# DOM - Document object model
- It is an application programming interface(API) for manipulating HTML documents.
- The DOM provides functions that you to add, remove and modify parts of the document effectively.
- The DOM represent an HTML document as a tree of nodes.
*/

/*
# Selecting ELemnts using DOM
1. getElementByID(): returns an element object that represents an HTML element
*/

let msg = document.getElementById("message");
console.log(msg);

// if their is no id with the name it will return null
let null_id = document.getElementById("xyz");
console.log(null_id) // null

/*
2. getElementByName(): return HTML element with same name
*/
let radio_input = document.getElementsByName('lang');
console.log(radio_input);

/*
3. getElementByTagName(): 
- it accepts a tag name and returns a live HTMLCollection of elements
*/
let input_tag = document.getElementsByTagName('input');
console.log(input_tag);

/*
4. getElementByClassName():
- this method returns an array-like of objects of the child elements with specified class name.
*/
let headings = document.getElementsByClassName('heading');
console.log(headings);
// we can also perform this method on element object also. for eg:
let cont = document.getElementById('container');
console.log(cont);
let cont_heading = cont.getElementsByClassName('heading');
console.log(cont_heading);

/*
# querySelector(): this method allows ys to select the 1st element that matches one or more css selectors.
# querySelectorAll(): 
*/

let heading1 = document.querySelector('.heading');
console.log(heading1);
let all_headings = document.querySelectorAll('.heading');
console.log(all_headings);
// all heading inside the container id.
cont = document.querySelector('#container');
cont_heading = cont.querySelectorAll('.heading')
console.log(cont_heading);
// now select all the heading inside the div using only element tag
let div_heading = document.querySelectorAll('div .heading');
console.log(div_heading);
let div_heading_and_other_heading = document.querySelectorAll('div, .heading');
console.log(div_heading_and_other_heading);

/*
# Traversing elements
- here we will learn how to parent element, child element etc.
- To get  the parent node of a specified node in the DOM tree, we can use the parentNode property.

*/

// now from html traversing element section, we will try to get the parent element(div) using the child node(p).
let txt = document.querySelector('.text');
console.log(txt);
console.log(txt.parentNode);
// Getting child element of a node in JS
let parent = document.querySelector('#div1');
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(parent.childNodes);
// how to select the next siblings, previous siblings of an element
let p2 = document.querySelector('#message');
console.log(p2.previousElementSibling); //js dom 2
console.log(p2.nextElementSibling); //ds dom 3

/*
# Manipulate HTML element
1. createElement(): 
- To create an HTML element we use the createElement() method
- The document.createElement() accepts an HTML tag name and returns a new Node with the element. 
*/
let div = document.createElement("div") //div tag will be created
console.log(div);
div.innerHTML = "<h1>Heading is inserted using js</h1>" //this html code will be inserted into the div tag now
document.body.appendChild(div); //this will add the tag into our HTML document  
// here we can also add id and class in div tag eg:
div.id = 'divId';
div.className = 'divClass';

/*
2. appendChild():
- We use appendChild() method  to add a node to the end of the list of child nodes of a specified parent node.
- It can also be used to move an existing child node to the new position within the document.
*/
let menu = document.querySelector('#Menu');
let project = document.createElement('li');
project.innerHTML='Project';
console.log(project);
menu.appendChild(project);

/*
3. textContent
- To get the text content of a node and its descendents, you use the textContent property.
*/

console.log(menu.textContent);
console.log(menu.innerText);

menu.textContent = "Hello!";

/*
4. innerHTML
*/
menu.innerHTML = "<h1>Hello!</h1>";