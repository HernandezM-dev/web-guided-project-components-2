// Imports at the top of the file!
// We never nest imports inside blocks of code!
import axios from 'axios'

// 👉 TASK 1- Test out the endpoint `https://dog.ceo/api/breeds/image/random`
//    * With HTTPie (command-line tool)
//    * With Postman (tool with GUI)
//    * With Chrome :)


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
// <div class="entry"></div>
const entryPoint = document.querySelector('.entry')


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
const card = dogCardMaker({
  breed: 'German Sheppard',
  imageURL: 'https://sasscer.files.wordpress.com/2014/05/image33.jpg'
})

// entryPoint.appendChild(card)

function dogCardMaker({ imageURL, breed }) {
  // const imageURL = stuff.imageURL
  // const breed = stuff.breed
  // const { imageURL, breed } = stuff

  // instantiating the elements
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Proyects with npm: install it with npm and import it into this file
// console.log(axios)

const randomDogURL = 'https://dog.ceo/api/breeds/image/random'
let responseData = null

// this takes an eternity AND JS CAN'T WAIT
axios.get(randomDogURL)
  .then(function (something) {
    // debugger
    // console.log(something.data)
    responseData = something.data // NOT GONNA WORK!!!!!!!

    // WHATEVER WE WANT TO DO WITH THE RESPONSE NEEDS TO BE DONE RIGHT HERE
    // DOM manipulation etc
  })
  .catch(function (error) {
    // debugger
    console.log(error)
  })


console.log(responseData) // NOT GONNA WORK! IT'S STILL null !!!!!!
console.log('lady gaga')

// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/australian/images/random/3`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console
//    (instructor will demo fetching a random dog from `https://dog.ceo/api/breeds/image/random`)
const austDog = 'https://dog.ceo/api/breed/australian/images/random/3'
axios.get(austDog)
  .then(function (value) {
    const imageURLs = value.data.message
    const breed = 'Australian'

    // we can loop over imageURLs
    // at each iteration we instantiate a Dog Card
    // and append it to the entry point
    imageURLs.forEach(imageURL => {
      const card = dogCardMaker({ imageURL, breed })
      entryPoint.appendChild(card)
    })
  })
  .catch(function (error) {
    debugger
  })

// 👉 TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 TASK 8- Import the breeds and loop over them, fetching a dog at each iteration
