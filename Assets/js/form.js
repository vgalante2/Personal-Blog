
const formOutput = document.querySelector('#form')



function submitPost(postObj) {
 
// Stop the page from refreshing
postObj.preventDefault()


const usernameValue = formOutput.name.value
const titleValue = formOutput.title.value
const messageValue = formOutput.message.value

// - Store the input value from our name input (what they typed into the box)

const raw = localStorage.getItem('form')
const formArray = JSON.parse(raw) || []

const blogPost = {
    name: usernameValue,
    title: titleValue,
    message: messageValue
}


formArray.push(blogPost)
console.log(blogPost)

localStorage.setItem('form', JSON.stringify(formArray))

window.location = 'blog.html'
}


function init() {
    // Create a submit event listener for the form
   formOutput.addEventListener('submit', submitPost)
  }
  
  init()
  

  const parsed = JSON.parse((raw && [raw]) || [])
  console.log(parsed)

