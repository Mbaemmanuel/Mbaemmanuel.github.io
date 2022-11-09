 let password = 1234;
 let accountBalance = 100000;
let counter = 1;

let sign_in = document.getElementById('signin-ui');
let Name = document.getElementById('name')
let transcation = document.getElementById('transcation-ui')
let transactionMessage = document.getElementById('transactionMessage-ui');
let passwordInput = document.getElementById('password') //Password inputed by client

sign_in.addEventListener('submit', ((e) =>{
    e.preventDefault();
    //If you want to redirect to another page
    // window.location.href = "https://google.com"
    // window.location = "https://google.com"
    // window.location.replace("https://google.com")
    // location.replace("https://google.com")
    //  location.href = "https://google.com"
    // location = "https://google.com"

   
    for(let userObject in localStorage){
        if (localStorage.hasOwnProperty(userObject)){
            JSON.parse(localStorage.getItem(userObject));
            console.log(JSON.parse(localStorage.getItem(userObject)))
            console.log(userObject.Name)
            if(Name.value == JSON.parse(localStorage.getItem(userObject)).Name){
                console.log('confirm')
            }
            else{
                 
            }
        }
    }

    if (passwordInput.value == password){
        transcation.style.display = 'block'
        sign_in.style.display = 'none'
        passwordInput.value = ''
        counter = 0;
    }
    else if (passwordInput.value != password && counter < 4){
        alert(`        Incorrect Password, Try Again, You will be banned after 4 attempts.`)
        counter++
    }
    else if (passwordInput.value != password && counter >= 4){
        sign_in.style.display = 'none'
        alert(`You have tried 4 times, and you are now banned from using this service`)
        counter++
    }

}))

transcation.addEventListener('submit' , ((e) =>{
    e.preventDefault();
        let inputElements = document.getElementsByName('transaction')
        
        for (let element of inputElements){
            if (element.checked){
               transcationFunction(element, element.id)
            }
        }
}))

function transcationFunction(element, transaction){ // Function for performing transaction
    if (transaction == 'checkBalance'){
        sign_in.style.display = 'none'
        alert(`${Name.value}, Your transcation was successful,Your Account Balance is ${accountBalance} Naira\n Select A Transaction Above for another transaction `)
       
        element.checked = false
    }

    else if (transaction == 'withdraw'){
        sign_in.style.display = 'none'
    let withdraw = parseFloat(prompt('Enter Amount you want to withdraw'));
    if (withdraw <= accountBalance){
    accountBalance = accountBalance - withdraw;
    alert( `${Name.value}, Your transcation was successfullYour Account Balance is ${accountBalance} Naira Select A Transaction Above for another transaction  `)
    element.checked = false
    }
}


else if (transaction == 'deposit'){
    sign_in.style.display = 'none'
    let deposit = parseFloat(prompt('Enter Amount you want to deposit'));
    if (deposit <= 100000){
    accountBalance = accountBalance + deposit;
    alert( `${Name.value}, Your transcation was successfullYour Account Balance is ${accountBalance} Naira Select A Transaction Above for another transaction  `)
    element.checked = false
    }
}

else if (transaction == 'sign-out'){
    sign_in.style.display = 'none'
    alert(`Thank you for banking with us have a nice day`)
    transcation.style.display = 'none'
    transactionMessage.style.display = 'none'
    element.checked = false
    Name.value = ''
}

}

let btt = document.getElementById('btt');
btt.addEventListener('click', ((e) =>{
    e.preventDefault();
    
    //If you want to redirect to another page
    location.href = "banks.html"
    document.getElementById('btt')
    
 }))
//  localStorage.clear()