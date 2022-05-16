
const editButton = document.querySelector('.edit-user');

editButton.addEventListener("click", async (e) => {

    const id = document.querySelector('.user-id').innerText;
    const signedIn = document.querySelector('.user-signed').innerText;
    if(id !== signedIn) {
        const registerDiv = document.querySelector('.register-error-div');
        registerDiv.innerHTML= `
        <div class='error-messages'>
          <p> The following error(s) occurred: </p>
          <ul class='add-list-error'>
            <li>You cannot edit another User's profile</li>
          </ul>
        </div>`;

        return await new Promise(resolve => setTimeout(resolve, 10000));
    }
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
        <label class="form-control" for="fname">First name:</label></br>
        <input class="form-control" type="text" id="fname" name="fname" value="${firstName}"></br>
        <label class="form-control" for="lname">Last name:</label></br>
        <input class="form-control" type="text" id="lname" name="lname" value="${lastName}"></br>
        <label class="form-control" for="email">Email:</label></br>
        <input class="form-control" type="email" id="email" name="email" value='${email}'></br>
        <label class="form-control" for="state">State:</label></br>
        <input class="form-control" type="text" id="state" name="state" value="${state}"></br>
    <div class="right-side
        <label class="form-control" for="bio">Bio:</label><br>
        <textarea class="form-control" rows="5" cols="50" id="bio" name="bio">${bio}</textarea><br>
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
        const body = {id, firstName, lastName, state, email, bio}
        
        try{
        const res = await fetch(`/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });

        if(!res.ok){
        throw res;
        }
      window.location.href = `/users/${id}`
        
          
    }
    catch(err) {
        if (err.status >= 400 && err.status < 600) {
        const { errors } = await err.json();

        if(errors.length > 0) {
            const registerDiv = document.querySelector('.register-error-div');
            registerDiv.innerHTML= `
            <div class='error-messages'>
              <p> The following error(s) occurred: </p>
              <ul class='add-list-error'></ul>
            </div>`;
           
            const list = document.querySelector('.add-list-error');
            errors.forEach(error => {
                let li = document.createElement('li')
                li.innerHTML = `${error}` 
                list.append(li)
            });
    }
}
}  

    const cancelEdit = document.querySelector('.cancel-edit');

    cancelEdit.addEventListener("click", async (e) => {
        window.location.href = `/users/${id}`
    })
 
})

    });
