
const editButton = document.querySelector('.edit-user');

editButton.addEventListener("click", async (e) => {

    const id = document.querySelector('.user-id').innerText;
    const userName = document.querySelector('.profile-wrapper h1').innerText;
    const userFields = document.querySelectorAll('p');
    let email = userFields[0].innerText.split(": ")[1];
    let state = userFields[1].innerText.split(": ")[1];
    let bio = userFields[3].innerText
    let firstName = userName.split(" ")[0];
    let lastName = userName.split(" ")[1];
    const profileWrapper = document.querySelector('.profile-wrapper');
    
    profileWrapper.innerHTML = `
    <div class="left-side">   
    <form method="PUT" href="/users/${id}" class='form-edit-user'>  
        <label for="fname">First name:</label></br>
        <input type="text" id="fname" name="fname" value="${firstName}"></br>
        <label for="lname">Last name:</label></br>
        <input type="text" id="lname" name="lname" value="${lastName}"></br>
        <label for="email">Email:</label></br>
        <input type="email" id="email" name="email" value='${email}'></br>
        <label for="state">State:</label></br>
        <input type="text" id="state" name="state" value="${state}"></br>
    <div class="right-side
        <label for="bio">Bio:</label><br>
        <textarea rows="5" cols="50" id="bio" name="bio">${bio}</textarea><br>
        <button type="submit" class='update-user'>Submit</button>
    </div>
    </div>
    </form>`;

    const updateButton = document.querySelector('.update-user');

    updateButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const editForm = document.querySelector('.form-edit-user');
        const formData = new FormData(editForm);
        const fname = formData.get("fname");
        const lname = formData.get("lname");
        const newState = formData.get("state");
        const newEmail = formData.get("email");
        const newBio = formData.get("bio");
        const body = {fname, lname, newState, newEmail, newBio}
        
        try{
        const res = await fetch(`/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });
        
        window.location.href = `/users/${id}`
    }
    catch(err) {
        if (err.status >= 400 && err.status < 600) {
            const errorJSON = await err.json();
            console.log(errorJSON);
    }
}
    
})
 
});
