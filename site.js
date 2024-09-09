// const pageHeader = document.querySelector('h1')
// pageHeader.textContent = `Sebastian's Webpage`

// const p = document.querySelector('footer > p')
// p.textContent = 'Something Stupid'

// const links = document.querySelectorAll('.active')
// for (let i = 0; i < links.length; i++){
//     links[i].style.color = 'Black'
// }

// document.body.style.backgroundColor = 'grey'
// document.title = pageHeader.textContent

// const nav = document.querySelector('nav')
// const contact = nav.querySelector('#contact')
// contact.style.textDecoration = 'underline'

// function test(event) {
//     //console.log(event.target.parentElement)
//     console.log(event.target.closest('section'))
// }

// const p = document.querySelector('section p')
// p.addEventListener('click', test)

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector('.welcome h2')

if (isMorning){welcome.textContent='Good Morning!'}
if (isAfternoon){welcome.textContent='Good Afternoon!'}
if (isEvening){welcome.textContent='Good Evening!'}
