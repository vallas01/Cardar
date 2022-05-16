// window.addEventListener("load", (event)=>{
    
// })

const demoButton = document.querySelector("#demo");

demoButton.addEventListener("click", async (e) => {
    // const loginForm = document.getElementById('#loginForm');
    // const formData = new FormData(loginForm);
    // const email = document.querySelector('#email')
    // const password = document.querySelector('#password')

    const email = "demouser@test.com"
    const password = "strongPassword!Demo"

    const body = {email, password};

    try{
        const res = await fetch(`/users/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });

    }
    catch(err) {
        if (err.status >= 400 && err.status < 600) {
            const errorJSON = await err.json();
    }
}  

})
