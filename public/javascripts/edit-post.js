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

console.log(`description is => ${description}`)

    const profileBlock = document.querySelector('.profile-block');

    profileBlock.innerHTML = `
    <div class="profile-block">
        <div class="upper-block">
            <div class="img_container">
                <img src='${image}' height='50px' width='70px' class='carImage'>
            </div>
            <div class="make_mod_yr">
                <form method="PUT" href="/posts/${postId}" class='form-edit-user'>
                <input class="left-align" type="text" id="make" name="make" value="${make}" placeholder="${make}"></br>
                <input class="left-align" type="text" id="model" name="model" value="${model}" placeholder=${model}></br>
                <input class="left-align" type="number" id="year" name="year" value="${year}" ></br>
            </div>
        </div>
        <div class="lower-block">
            <div class="description">
                <textarea class="desc_box" rows="5" cols="50" id="description" name="description">${description}</textarea></br>
            </div>
            <div class="accidents">
                <p class="right-align">This car has been in
                    <span id="number">
                    <input type="number" id="numbEd" name="accidents" value="${accidents}" >
                    </span>
                    <span> accidents!</span>
                </p>
            </div>
            <div class="comment_boxAfter">
            </div>

        </div>
        <div class="buttons">
            <button type="submit" class='update-btnX'>SUBMIT</button>
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
        const body = {make, model, year}
console.log(`year is => ${description}`)

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
                console.log(errorJSON);
            }
        }

    });

});
