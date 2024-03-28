// Select the ul from the DOM
const formOutput = document.querySelector('ul')

// Grab the names data from localstorage(make sure to parse)

const form = JSON.parse(localStorage.getItem('form')) || []

// Receive the delete button element
function removePost(btnObj) {

  // Get the parent element of the button
  const parent = btnObj.parentElement

  // Get the txt of the button (used to retreive the name)
  const para = parent.querySelector('p')

  const name = para.innerText

  // Use the array.filter method to filter the friends array out and remove the name matching the button text
  const filtered = form.filter(function (form) {
    if (form !== name) {
      return true
    }
  })

  // Replace the old friends array with the new filtered array
//  

  // Overwrite the old names data in localstorage(stringify)
  localStorage.setItem('form', JSON.stringify(form))

  // Remove the button's parent <li> from the DOM
  parent.remove()

  // If friends is empty, add the paragraph to our ul that says 'No friends have been added'
  if (!form.length) {
    formOutput.innerHTML = '<p>No Friends Have Been Added.</p>'
  }
}

// Create a function that loops over the friends array and outputs an li to the ul for each name in the friends array
function outputPosts() {
  // If friends array is not empty, remove the no friends paragraph from the DOM 
  if (form.length) {
    formOutput.innerHTML = ''
  }

  for (let blogPost of form) {
    // Insert HTML into the friendsOutput UL at the inside end(beforeend)
    formOutput.insertAdjacentHTML('beforeend', `
      <li class="row align-center">
        <h1>${blogPost.title}</h1>
        <h2>${blogPost.message}</h2>
        <p>Author: ${blogPost.name}</p>
        <button class="delete-btn">Delete</button>
      </li>
    `)
  }
}

outputPosts()

// Create an event listener on all delete btns so when clicked they remove that name from localstorage and also remove the li from the window

document.body.addEventListener('click', function (eventObj) {
  const el = eventObj.target

  // Check if the element that was clicked was the delete button(use the classList to see if the element has a class of delete-btn)
  if (el.classList.contains('delete-btn')) {
    // When a delete button is clicked, pass the el to the removeFriend function
    removePost(el)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const darkModeStatus = localStorage.getItem('darkMode');
  if (darkModeStatus === 'enabled') {
      document.body.classList.add('dark');
  } else {
      document.body.classList.remove('dark');
  }
});

