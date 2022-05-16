// window.addEventListener("load", (event)=>{
    
// })

const demoButton = document.querySelector("#demo");

demoButton.addEventListener("click", async (e) => {
    const loginForm = document.getElementById('#loginForm');
    const formData = new FormData(loginForm);
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    email.value = "demouser@test.com"
    password.value = "strongPassword!Demo"


    // formData.set("email", "demouser@test.com");
    // formData.set("password", "strongPassword!Demo");

    setTimeout(() => {
        let wait = "just wait a second"
    }, 2000);
    
    // const submit = document.querySelector("#signIn");

    loginForm.submit();
})
