const targetContainer = document.querySelector("#messages");

const section1 = document.createElement('section');
section1.className = "message"
section1.textContent = "Hi"

const section2 = document.createElement('section');
section2.className = "message"
section2.textContent = "Sup"

const section3 = document.createElement('section');
section3.className = "message"
section3.textContent = "Nothin"

const section4 = document.createElement('section');
section4.className = "message"
section4.textContent = "Huh?"

const section5 = document.createElement('section');
section5.className = "message"
section5.textContent = "Nothin's up"

targetContainer.appendChild(section1);
targetContainer.appendChild(section2);
targetContainer.appendChild(section3);
targetContainer.appendChild(section4);
targetContainer.appendChild(section5);

// // A new "virtual" document fragment to contain components
// const fragment = document.createDocumentFragment()

// // Create an emperor component element
// const julius = document.createElement('div')
// julius.textContent = "Julius Caesar"
// fragment.appendChild(julius)

// // Create an emperor component element
// const augustus = document.createElement('div')
// augustus.textContent = "Augustus Caesar"
// fragment.appendChild(augustus)

// // Create an emperor component element
// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

// /*
//     Now I can update my HTML document all at once, with all
//     three emperor components rendered. Otherwise, I would
//     have needed to add each one, individually - a much more
//     "expensive" operation.
// */
// document.querySelector("#emperorList").appendChild(fragment)