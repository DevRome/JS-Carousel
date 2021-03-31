const employees = [
    {
        id: 1,
        image: "person-1.jpg",
        name: "Lorenzo Raspa",
        job: "Web Developer",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nisi architecto cupiditate voluptas autem aperiam facere alias distinctio maiores ut?"
    },
    {
        id: 2,
        image: "person-2.jpg",
        name: "Andrea Cantarini",
        job: "Portiere",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nisi architecto cupiditate voluptas autem aperiam facere alias distinctio maiores ut?"
    },
    {
        id: 3,
        image: "person-3.jpg",
        name: "Federica Pacioni",
        job: "Sunglasses Expert",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nisi architecto cupiditate voluptas autem aperiam facere alias distinctio maiores ut?"
    },
    {
        id: 4,
        image: "person-4.jpg",
        name: "Elisabetta Canalis",
        job: "Show Girl",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nisi architecto cupiditate voluptas autem aperiam facere alias distinctio maiores ut?"
    },
]

// Get HTML elements
const img = document.getElementById("img")
const name = document.getElementById("name")
const job = document.getElementById("job")
const info = document.getElementById("info")

// Get buttons
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randBtn = document.querySelector(".rand-btn")

// start count
let currentItem = 0;

// load first employee
window.addEventListener("DOMContentLoaded", (req, res)=>{
    employees[currentItem]
    loadEmployee()
})

function loadEmployee(){
    img.src = "/img/" + employees[currentItem].image;
    name.textContent = employees[currentItem].name;
    job.textContent = employees[currentItem].job;
    info.textContent = employees[currentItem].info
}

// Next employee
nextBtn.addEventListener("click", ()=>{
    currentItem++
    if(currentItem > employees.length - 1){
        currentItem = 0
    }
    loadEmployee()
})

// Prev employee
prevBtn.addEventListener("click", ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = employees.length -1
    }
    loadEmployee()
})

// Generate random employee
randBtn.addEventListener("click", ()=>{
    currentItem = Math.floor(Math.random() * employees.length)
    loadEmployee()
})

    