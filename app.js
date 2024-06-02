//set initial count
let count = 0;

//select value and buttons

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList
        
        count = style.contains('decrease') ? count-1 :
                style.contains('increase') ? count+1 : count = 0

        value.textContent = count

        value.style.color = count > 0 ? 'green':
                            count < 0 ? 'red': '#222'
                            
        
    })
})

