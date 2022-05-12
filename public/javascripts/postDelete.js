

const deleteBtn = document.querySelector('.delete-btn')
const idText = document.getElementById('hiddenId').innerText
const id = parseInt(idText)

console.log(`idText to delete is: ${idText}`)
console.log(`id to delete is: ${id}`)

deleteBtn.addEventListener('click', async(e) => {
    e.preventDefault()

  console.log(`attempting delete /posts/${id}`)

    const res = await fetch(`/posts/${id}`, {
            method: 'DELETE'
        })
    const data = await res.json()
    console.log(`res.data????:  ${data}`)

        if (data.message === 'Success') {
            const container = document.getElementById(`post-container-${postId}`)
            container.remove()
        } else {

        }
})
