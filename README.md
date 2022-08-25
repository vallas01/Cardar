# Cardar

## Live Link
https://cardar-project.herokuapp.com/

Cardar at a high level is an app that allows users to interact with other users by creating, searching, updating, and deleting car posts. The app gives users the opportunity to edit their own profile such as their bio, location, etc. Additionally, users are able to interact with other users in the community by creating and reading comments, as well as editing and deleting their own personal comments. The home page allows users to see some of the most recent posts that were uploaded to the website.

# Features

## User Profile

Users are able to view and customize their profile dynamically if they decide the information they provided in the registration does not match with their current status (location, bio, etc). It is advantageous for a user to go to their profile in order to see all the cars they have posted to the community.

## Car Posts

The Cardar experience permits users to Create, Read, Update, or Delete their car posts.

### Create

To create a post, a user can simply click on the 'plus' icon in the navigation bar no matter what route they are in while navigating through the app. Once the icon is clicked, it will take the user to a form that will ask them for specific information in order to post. Once the form is correctly filled out, they will be redirected to their profile with the newly added post.

### Read

Any user will be able to access any post in several ways. We encourage users to utilize the search bar to find a specific car they might be interested in (more info on this under the Search Feature section). A user can also access car posts from a user's profile and on the home page with posts that were recently populated to the app.

### Update

When looking through their own posts, users will be able to dynamically edit posts that they have created to fix one, many, or all fields of the post. To update, click on the 'edit' button and make the necessary changes. Once the form is correctly filled out, the user can press the 'Submit' button to update the changes. The user will receive errors if the form is filled out incorrectly.

### Delete

Similar to the Update Feature, users are able to dynamically delete their own posts by clicking the 'edit' button. A 'Delete' button will appear and can be clicked on if the user decides to delete the specified car post.

## Search

The search feature gives users a way to search for any car under several fields of the car post. With the search bar in the navigation bar, users will have immediate access to search for any post they might be interested in. When an input is provided and submitted, the server will search for the key word under the following categories: model, make, and color. A successful match will display the images of the car posts. If the server cannot find anything in the mentioned fields with the specified key word, no posts will appear.

<p align="center">
  <img src="https://media.giphy.com/media/jyjVgyWFAzNkjwNkfU/giphy.gif"></img>
</p>

```js
const posts = await Post.findAll({
  where: {
    [Op.or]: [
      {
        model: {
          [Op.iLike]: `%${req.query.searchedInput}%`,
        },
      },
      {
        make: {
          [Op.iLike]: `%${req.query.searchedInput}%`,
        },
      },
      {
        color: {
          [Op.iLike]: `%${req.query.searchedInput}%`,
        },
      },
    ],
  },
  include: Image,
});
res.render("search-result", {
  title: "Search Results",
  posts,
});
```

## Home Page

As mentioned above, a user will have access to the most recent posts. When a user clicks on the post, they will be redirected to the specified post route where they can interact with the community and make a comment on the post. Make a new post as a demo user and be able to see your post on the home page!

# Technologies Used

Cardar was built using the following technologies:

- Javascript
- Pug
- CSS
- Sequelize

# Upcoming Features

- Implement a dynamic comment section where users can edit and delete their own comments.
- Allow users to upload photos from their own local machine instead of providing an HTTP link.
- Signed in users can upvote on posts and comments
- Posts will blow up and users will be able to access a post dynamically so that they do not lose their spot in their search.
- Users can buy and sell cars on the platform.
