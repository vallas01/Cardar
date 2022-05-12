
// Find all delete buttons
// add event listener to each button
// send a fetch request to delete the correct post
// remove post from page with successful response

const deleteBtn = document.querySelector('.delete-btn')
const id = document.getElementById('hiddenId').innerText

console.log(`id to delete is: ${id}`)

deleteBtn.addEventListener('click', async(e) => {


    e.preventDefault()
    const postId = e.target.id.split('-')[2]
    console.log(post.id)
        const res = await fetch(`/posts/${postId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === 'Success') {
            const container = document.getElementById(`post-container-${postId}`)
            container.remove()
        } else {

        }
})
