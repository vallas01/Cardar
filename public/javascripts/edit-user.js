
const editButton = document.querySelector('.edit-user');

editButton.addEventListener("click", async (e) => {

    const id = document.querySelector('.user-id').innerText;
    const userName = document.querySelector('.profile-wrapper h1').innerText;
    const userFields = document.querySelectorAll('.profile-wrapper p');
    let email = userFields[0].innerText;
    let state = userFields[1].innerText;
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
        <button class='cancel-edit'>Cancel</button>
    </div>
    </div>
    </form>`;

    const updateButton = document.querySelector('.update-user');

    updateButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const editForm = document.querySelector('.form-edit-user');
        const formData = new FormData(editForm);
        const firstName = formData.get("fname");
        const lastName = formData.get("lname");
        const state = formData.get("state");
        const email = formData.get("email");
        const bio = formData.get("bio");
        const body = {firstName, lastName, state, email, bio}
        
        try{
        const res = await fetch(`/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });

        //if(res.json.message === 'failure') {console.log(errors)}
        
        window.location.href = `/users/${id}`
    }
    catch(err) {
        if (err.status >= 400 && err.status < 600) {
            const errorJSON = await err.json();
    }
}  
})

    const cancelEdit = document.querySelector('.cancel-edit');

    cancelEdit.addEventListener("click", async (e) => {
        window.location.href = `/users/${id}`
    })
 
});
