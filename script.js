const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameAu = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('animated-bg')
const animated_bgs_texts = document.querySelectorAll('animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '    <img src="https://source.unsplash.com/random" alt="random image" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    nameAu.innerHTML= 'John Doe'
    date.innerHTML = 'Oct 20 2002'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
} 