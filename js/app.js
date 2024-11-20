const tabs = document.querySelectorAll('.tab_link')
const cards = document.querySelectorAll('.tab_card')

// console.log(tabs)

if(tabs){
    tabs.forEach(tab => {
        tab.addEventListener('click', function(){
            tabs.forEach(tab => tab.classList.remove('active'));
            cards.forEach(card => card.classList.remove('active'));
    
            this.classList.toggle('active');
            const target = this.getAttribute('data-tab')
            document.getElementById(target).classList.add('active')
        })
    })    
}

const reg = document.getElementById('reg_form')
const regMail = document.getElementById('reg_mail')
const regPass = document.getElementById('reg_pass')

const sign = document.getElementById('sign_form')
const signMail = document.getElementById('sign_mail')
const signPass = document.getElementById('sign_pass')

if(reg){
    reg.addEventListener('submit', function(event){
        event.preventDefault()
        let mail = regMail.value
        let pass = regPass.value
        
        console.log(mail, pass)

        localStorage.setItem('mail', mail)
        localStorage.setItem('pass', pass)
    
        window.location.href = 'sign.html'
    })
}

if(sign){
    sign.addEventListener('submit', function(event){
        event.preventDefault()

        let mail = localStorage.getItem('mail')
        let pass = localStorage.getItem('pass')
    
        if(signMail.value.trim() === mail && signPass.value.trim() === pass){
            alert('Вы успешно вошли!')
            window.location.href = 'index.html'
            
            localStorage.removeItem('mail')
            localStorage.removeItem('pass')
        }else{
            alert('Неправильная почта или пароль!')
            event.stopPropagation()
            console.error(mail, pass)
        }
    })
}