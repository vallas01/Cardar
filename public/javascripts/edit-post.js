const editButton = document.querySelector('.edit-btnX');

editButton.addEventListener("click", async (e) => {

    const postId = document.querySelector('#hiddenId').innerText;
    const userId = document.querySelector('#hiddenUserId').innerText;
    const image = document.querySelector('#hiddenImg').innerText

    let make = document.getElementById("makeEd").innerText
    let model = document.getElementById("modelEd").innerText
    let year = document.getElementById("yearEd").innerText

    let description = document.getElementById("descr").innerText
    let accidents = document.getElementById("number").innerText

    const profileBlock = document.querySelector('.profile-block');

    profileBlock.innerHTML = `
    <div class="profile-block">
    <form method="PUT" href="/posts/${postId}" class='form-edit-user'>
        <div class="upper-block">
            <div class="img_container">
                <img src='${image}' height='50px' width='70px' class='carImage'>
            </div>
            <div class="make_mod_yr">
                <input class="left-align" type="text" id="make" name="make" value="${make}" placeholder="${make}"></br>
                <input class="left-align" type="text" id="model" name="model" value="${model}" placeholder=${model}></br>
                <input class="left-align" type="number" id="year" name="year" value="${year}" ></br>
            </div>
        </div>
        <div class="lower-block">
            <div class="description">
                <textarea class="desc_boxAfter" rows="5" cols="50" id="description" name="description">${description}</textarea></br>
            </div>
            <div class="accidents">
                <p class="right-align">Number of accidents to report:
                    <span id="number">
                    <input type="number" id="numbEd" name="accidents" value="${accidents}" > Currently ${accidents}
                    </span>
                    <span> accidents reported!</span>
                </p>
            </div>
            <div class="comment_boxAfter">
            </div>

        </div>
        <div class="buttons">
            <button type="submit" class='update-btnX'>SUBMIT</button>
            <div class="spacer"> </div>
            <button class='delete-btnX'>DELETE</button>
        </div>
    </form>
    </div>`

    const updateButton = document.querySelector('.update-btnX');

    updateButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const editForm = document.querySelector('.form-edit-user');
        const formData = new FormData(editForm);
        const make = formData.get("make");
        const model = formData.get("model");
        const year = formData.get("year");
        const description = formData.get("description");
        const accidents = formData.get("accidents");
        const user = userId;
        const body = {make, model, year, user, postId, description, accidents}


        try{
            const res = await fetch(`/posts/${postId}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            });


            window.location.href = `/users/${userId}`
        }catch(err){
            if (err.status >= 400 && err.status < 600) {
                const errorJSON = await err.json();
            }
        }

    });

    const deleteBtn = document.querySelector('.delete-btnX')

    deleteBtn.addEventListener('click', async(e) => {
        e.preventDefault()
        const res = await fetch(`/posts/${postId}`, {
            method: 'DELETE'
        })
        const data = await res.json()

        if (data.message === 'Delete SUCCESS') window.location.href=`/users/${userId}`;
    })

});
