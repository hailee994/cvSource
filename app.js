
// Background animation

 const animationBackground = ()=>{
    const boxAnimation = document.querySelector('.animation-background');
    const createsBox = document.createElement('div')
    createsBox.classList.add('box')


    let size = Math.random()*200;


    createsBox.style.width= 20 + size + 'px';
    createsBox.style.height= 20+  size + 'px';

    createsBox.style.top = 0;
    createsBox.style.left = Math.random() * 100 + 'vw';

    boxAnimation.appendChild(createsBox)
    setTimeout(()=>{
        createsBox.remove()
    },30000)

 }
setInterval(animationBackground,3000)
 

// Phần menu click.
const color_menu = document.querySelectorAll('.list-menu ul li')

color_menu.forEach(item=>{
    item.addEventListener('click',()=>{
        color_menu.forEach(item=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })

   
})


 const nav_menu = document.querySelectorAll('section')
 const about_section = document.getElementById('about-se')

 about_section.addEventListener('click',()=>{
     nav_menu.forEach(item=>{
         item.classList.remove('active')
     })
    document.getElementById('about').classList.add('active');
 })

const resume_section = document.getElementById('resume-se')

 resume_section.addEventListener('click',()=>{
        nav_menu.forEach(item=>{
            item.classList.remove('active')
        })
     document.getElementById('resume').classList.add('active'); 
 })

 const works_section = document.getElementById('works-se')
 works_section.addEventListener('click',()=>{
    nav_menu.forEach(item=>{
        item.classList.remove('active')
    })
     document.getElementById('works').classList.add('active')  
 })

 const blog_section = document.getElementById('blog-se')
 blog_section.addEventListener('click',()=>{
    nav_menu.forEach(item=>{
        item.classList.remove('active')
    })
     document.getElementById('blog').classList.add('active')
 })

 const contact_section = document.getElementById('contact-se')
 contact_section.addEventListener('click',()=>{
    nav_menu.forEach(item=>{
        item.classList.remove('active')
    })
    document.getElementById('contact').classList.add('active')  
})
// End menu section

// phần slide resume

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

btn1.addEventListener('click',()=>{
    btn1.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    document.querySelector('.box-slide').style.left = '0'
})

btn2.addEventListener('click',()=>{
    btn2.classList.add('active')
    btn1.classList.remove('active')
    btn3.classList.remove('active')
    document.querySelector('.box-slide').style.left = '-590px'


})
btn3.addEventListener('click',()=>{
    btn3.classList.add('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    document.querySelector('.box-slide').style.left = '-1180px'
})

// Send messenger
 const send = document.getElementById('send');

 send.addEventListener('click',()=>{
     document.querySelector('.content-form').classList.add('remove');
    document.querySelector('.thanks').classList.add('active')
 })


 // set works

 const nav_menu_works = document.querySelectorAll('.nav-works ul li')

 nav_menu_works.forEach(item=>{
     item.addEventListener('click',()=>{
         nav_menu_works.forEach(item=>{
             item.classList.remove('active')
         })
         item.classList.add('active')
     })
 })

 nav_menu_works.forEach(item=>{
     item.addEventListener('click',()=>{
       console.log(item.data)
     })
 })

 /// set hidden menu
const btn_menu = document.querySelector('.btn-menu')
const button_hidden = document.querySelector('.button-hidden')
const container_hidden = document.querySelector('.container-hidden')
const content_hidden = document.querySelector('.content-hidden')
const hidden_menu = document.querySelector('.hidden-menu')
console.log(btn_menu)
btn_menu.addEventListener('click',()=>{
    button_hidden.classList.add('active');
    container_hidden.classList.add('active');
    content_hidden.classList.add('active');
    hidden_menu.classList.add('active')
})


button_hidden.addEventListener('click',()=>{
    button_hidden.classList.remove('active');
    container_hidden.classList.remove('active');
    content_hidden.classList.remove('active');
    hidden_menu.classList.remove('active')
})

