const   hourArrow   = document.querySelector('.h'),
        minuteArrow = document.querySelector('.m'),
        secondArrow = document.querySelector('.s'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes');
        
function watch() {
    
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours()
        
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
        minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
        
        setTimeout(() => watch(), 1000)
        
}
watch()


// рекурсия - это когда функция запускает саму себя внутри
// setTimeout() - это функция которая запускает что то с указанной задержкой

// let i = 0;

// function qwerty() {
//     if(i < 10) {
//         console.log(i);
//         i++
//         setTimeout(() =>  qwerty(), 1000)
       
//     }
// }
// qwerty()


const links = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')
const shours = document.querySelector('.stopwatch__hours')
const sminutes = document.querySelector('.stopwatch__minutes')
const sseconds = document.querySelector('.stopwatch__seconds')
const sbtn = document.querySelector('.stopwatch__btn')
const span = document.querySelector('.tabsLink__span')

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}
let d=0;
let b =0;
let i = 0;
let btni =0;
function timer() {
    sbtn.addEventListener('click', () => {  
        if (sbtn.innerHTML === 'start') {  
            btni = setInterval(addSec, 1000);
            sbtn.innerHTML = 'stop';
            span.classList.add('active')
        } else if (sbtn.innerHTML === 'stop') {  
            clearInterval(btni);
            sbtn.innerHTML = 'clear';
            span.classList.remove('active')
            span.classList.add('active_clear')
            
        } else if (sbtn.innerHTML === 'clear') { 
            clearInterval(btni);
            b = 0;
            i = 0;
            d = 0;
            sseconds.innerHTML = i;
            sminutes.innerHTML = b; 
            shours.innerHTML = d;   
            sbtn.innerHTML = 'start';
            span.classList.remove('active_clear')
            
        }
    });
}
function addSec(){
   
        i += 1;
        sseconds.innerHTML = i;
        if(i>59){
            
            i=0;
            b+=1;
            sminutes.innerHTML=b;
            sseconds.innerHTML = i;
            
            
        }
        if(b>59){
            i=0;
            sseconds.innerHTML = i;
            b=0;
            d+=1;
            shours.innerHTML=d;
            sminutes.innerHTML=b;


        }
   
}

timer();
