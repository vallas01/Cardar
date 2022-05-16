

const demoButton = document.querySelector("#demo");

demoButton.addEventListener("click", async (e) => {

    document.querySelector('#email').value = "demouser@test.com";
    document.querySelector('#password').value = "strongPassword!Demo";

})
