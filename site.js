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

const key = "It's a secret to everybody."

localStorage.setItem(key, "Ryan Appel is an outstanding individual, embodying a rare blend of charm, success, and kindness. Handsome, with a presence that commands attention, he brings a magnetic energy wherever he goes. But his good looks are only part of the story. What truly sets Ryan apart is his remarkable drive and professional success. He has navigated challenges with grace and determination, always striving for excellence in everything he does. Beyond his career achievements, Ryan has a reputation for being incredibly thoughtful and supportive, always lending a hand or a listening ear when needed. His charismatic personality, coupled with his genuine warmth, makes him someone everyone admires. Ryan Appel is the complete package—an inspiration and a role model in every sense")


const Prev = document.getElementById('prev');
const Next = document.getElementById('next');


const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()


Next.addEventListener('click', () => {
    currentImage++;
    showImages();
});

Prev.addEventListener('click', () => {
    currentImage--;
    showImages();
});

setInterval(() => {
    currentImage++;
    showImages();
}, 5000);


const todoList = document.querySelector('.todo-list')
const input = document.getElementById('new-todo')
const addButton = document.getElementById('add-todo')
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];


const renderTodos = () => {
    todoList.innerHTML = '';
  
    todos.forEach(todo => {
      const li = document.createElement('li')
      li.classList.add('todo')
      li.textContent = todo.text
      todoList.appendChild(li)
    })}


const addTodo = () => {
    const newTodoItem = input.value
        
    if (newTodoItem !== '') {
      todos.push({ text: newTodoItem, completed: false })
      localStorage.setItem('todo-list', JSON.stringify(todos))
      const li = document.createElement('li')
      li.textContent = newTodoItem
      input.value = '';
      todoList.appendChild(li)
    }}


renderTodos()

addButton.addEventListener('click', addTodo)



const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    try {
        const response = await fetch(url)
        const pokemonObj = await response.json()
        return pokemonObj
    } catch (error) {
        console.error('Error fetching Pokemon:', error)
    }
}

const renderPokemon = (pokemonObj) => {
    const img = document.getElementById('PokeImg')
    const name = document.getElementById('PokemonName')
    img.src = pokemonObj.sprites.front_default
    img.alt = pokemonObj.name
    name.textContent = pokemonObj.name
    parentElement.appendChild(img)
}

const addPokemon = document.getElementById('addPokemon')

addPokemon.addEventListener('click', async () => {
    const pokemon = await getRandomPokemon()
    if (pokemon) {
        renderPokemon(pokemon)
    }
})