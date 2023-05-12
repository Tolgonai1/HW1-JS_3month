
// todo 1) Используя регулярные выражения сделать проверку на валидность gmail почты

const input = document.querySelector('#emailInput')
const button = document.querySelector('#checkEmail')
const span = document.querySelector('.result')

const regExp =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@gmail.com$/

button.onclick = () => {
    if (regExp.test(input.value)){
        span.textContent = 'your email is valid'
        span.style.color = 'blue'
    } else {
        span.textContent = 'your email is not valid'
        span.style.color = 'red'
    }
}

//todo 2) Используя рекурсию необходимо заставить блок двигаться по странице.
// Создайте один большой блок и один маленький внутри него. Задайте большому блоку position: relative, а малому absolute.
// И изменяйте параметр позиции малого блока (.style.left=${переменная}px).
// Большому блоку задайте высоту и ширину в 500px, А маленькому 50px на 50px
// Нужно чтобы маленький блок подвинулся слева на право внутри большого блока и остановился.

const blockSmall = document.querySelector('.block-2')
let num = 0
const moveRight = () => {
    if(num < 450){
        num++
        moveRight()
        blockSmall.style.left = `${num}px`
    }
}
moveRight()
