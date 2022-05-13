const editButton = document.querySelector('.edit-btnX');

editButton.addEventListener("click", () => {

    const userFields = document.querySelectorAll('p');
    let make = userFields[0].innerText.split(": ")[1];
    let model = userFields[1].innerText.split(": ")[1];
    let year = userFields[3].innerText.split(": ")[1];
    const profileBlock = document.querySelector('.profile-block');

    profileBlock.innerHTML = `
    <div> HELLO!
    <form method="PUT" href="/users/" class='form-edit-user'>
        <label for="make">Make:</label></br>
        <input type="text" id="make" name="make" value="${make}"></br>
        <label for="model">Model:</label></br>
        <input type="text" id="model" name="model" value="${model}"></br>
        <label for="year">Year:</label></br>
        <input type="year" id="year" name="year" value='${year}'></br>;
        </form>
    </div>`
});
