//  function hello (){
// let name = document.forms.RegForms.Name.value;
// let amount = document.forms.RegForms.amount.value;
// let Email = document.forms.RegForms.Email.value;
// let phone = document.forms.RegForms.phone.value;
// let password = document.forms.RegForms.password.value;
// let address = document.forms.RegForms.address.value
// let accountBalance = 0;

// let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
//   //Javascript reGex for Email Validation.
// let regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
// let regName = /\d+$/g;                                    // Javascript reGex for Name validation

// if (name == "" || regName.test(name)) {
//     walert("Please enter your name properly.");
//     name.focus();
//     return false;
// }
//     ``
// if (address == "") {
//     alert("Please enter your address.");
//     address.focus();
//     return false;
// }
    
// if (Email == "" || !regEmail.test(Email)) {
//     alert("Please enter a valid e-mail address.");
//     Email.focus();
//     return false;
// }
    
// if (password == "") {
//     alert("Please enter your password");
//     password.focus();
//     return false;
// }

// if(password.length <6){
//     alert("Password should be atleast 6 character long");
//     password.focus();


// }
// if (phone == "" || !regPhone.test(phone)) {
//     alert("Please enter valid phone number.");
//     phone.focus();

// }
 
//  if (document.getElementById (amount) == "") {
      
//   let acc =  amount + accountBalance
//   alert (`your account balance is ${acc}`)
// console.log(`your account balance is ${acc}`)
//   }
    
//  }
// this is where i stored the users in an arry as an object
 let users = []
let register = document.getElementById('submit')
 register.addEventListener('click', ((e) =>{
    e.preventDefault();
   
    
   let userName = document.getElementById('createAccountName');
   let userAmount = document.getElementById('createAccountAmount');
   let userPassword = document.getElementById('createAccountPassword');
   let userEmail = document.getElementById('createAccountEmail');
   let userphone =  document.getElementById('createAccountPhone');
   let userAddress =  document.getElementById('createAccountAddress');
   let userObject = {
      Name : userName.value,
      amount : userAmount.value,
      password : userPassword.value,
      Email: userEmail.value,
      Phone:userphone.value,
      Address:userAddress.value,
   }
   users.push(userObject);
   console.log(userObject)
   console.log(users)
   localStorage.setItem(`${userObject.Name}`, JSON.stringify(userObject));
   console.log(localStorage.getItem(`${userObject.Name}`))
console.log(localStorage)
 if (userObject.Address == ''){ //&& userObject.amount && userObject.password && userObject.Email && userObject.Phone && userObject.Address == '' ){
   alert('please fill in the form')
 }
 
else{
    //If you want to redirect to another page
   location.href = "A1-21-22.html"
}
   //   localstorage.clear()

 }))

 
//  let sign_in = document.getElementById('signin-ui');
// let Name = document.getElementById('name');
// let transcation = document.getElementById('transcation-ui')
// let transactionMessage = document.getElementById('transactionMessage-ui');
// let passwordInput = document.getElementById('password')
// console.log(sign_in)

//  sign_in.addEventListener('submit', ((e) =>{
//   e.preventDefault();
//   //If you want to redirect to another page
//   // window.location.href = "https://google.com"
//   // window.location = "https://google.com"
//   // window.location.replace("https://google.com")
//   // location.replace("https://google.com")
//   //  location.href = "https://google.com"
//   // location = "https://google.com"
//   console.log(users)
//   if (passwordInput.value == password){
//       transcation.style.display = 'block'
//       sign_in.style.display = 'none'
//       incorrect.style.display = 'none'
//       passwordInput.value = ''
//       exitMessage.style.display = 'none'
//       counter = 0;
//   }
//   else if (passwordInput.value != password && counter < 4){
//       alert(`        Incorrect Password, Try Again, You will be banned after 4 attempts.`)
//       counter++
//   }
//   else if (passwordInput.value != password && counter >= 4){
//       sign_in.style.display = 'none'
//       alert(`You have tried 4 times, and you are now banned from using this service`)
//       counter++
//   }

// }))


 




 

