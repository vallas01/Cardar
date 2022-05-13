//delete the postId and redirect to the userId

const deleteBtn = document.querySelector('.delete-btn')
const idText = document.getElementById('hiddenId').innerText
const id = parseInt(idText)
const ownerIdText = document.getElementById('hiddenUserId').innerText
const ownerId = parseInt(ownerIdText)

deleteBtn.addEventListener('click', async(e) => {
    e.preventDefault()
    const res = await fetch(`/posts/${id}`, {
            method: 'DELETE'
        })
    const data = await res.json()

    if (data.message === 'Delete SUCCESS') window.location.href=`/users/${ownerId}`;
})
