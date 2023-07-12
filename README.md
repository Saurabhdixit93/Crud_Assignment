# Social Media API

This is a simple CRUD API for posting social media posts, as well as adding likes and comments to a post.

## Setup

1. Clone the repository:

bash
git clone `https://github.com/Saurabhdixit93/Crud_Assignment`

2. Install the dependencies:

`npm install`

3. Start the server:

`npm start`

The server will start running at `http://localhost:5000`.

## API Endpoints

### User Registration

- Endpoint: `POST http://localhost:5000/user/signup`
- Request Body:

json
{
"userEmail": "user@example.com",
"userName": "username",
"userPassword": "password"
}

- Response:

json
{
"message": "User registered successfully"
}

### User Login

- Endpoint: `POST http://localhost:5000/user/login`
- Request Body:

json
{
"userName": "username",
"userPassword": "password"
}

- Response:

json
{
"message": "User logged in successfully ,Use this Token for Access protected routes"
"token": token
}

### Forgot Password

- Endpoint: `POST http://localhost:5000/user/reset-password`
- Request Body:

json
{
"userEmail": "user@example.com"
}

- Response:

json
{
"message": "Temporary password generated"
"temporaryPassword": "examplePassword"
}



### Get all posts

- Endpoint: GET `http://localhost:5000/post/get-posts`
- Headers:
  - Authorization: Bearer [JWT Token]

Retrieves all the posts.

### Create a post

- Endpoint: POST `http://localhost:5000/post/add-post`
- Headers:
  - Authorization: Bearer [JWT Token]
- Request body:

json
{
"title": "Post Title",
"content": "Post Content"
}

Creates a new post.

### Get a specific post

- Endpoint: GET `http://localhost:5000/post/get-post/:postId`
- Headers:
  - Authorization: Bearer [JWT Token]

Retrieves a specific post by ID.

### Update a specific post

- Endpoint: PUT `http://localhost:5000/post/update-post/:postId`
- Headers:
  - Authorization: Bearer [JWT Token]
- Request body:

json
{
"title": "Updated Title",
"content": "Updated Content"
}

Updates a specific post by ID.

### Delete a specific post

- Endpoint: DELETE `http://localhost:5000/post/delete-post/:postId`
- Headers:
  - Authorization: Bearer [JWT Token]

Deletes a specific post by ID.

### Like a post

- Endpoint: POST `http://localhost:5000/post/posts/:postId/add-like`
- Headers:
  - Authorization: Bearer [JWT Token]

Adds or removes a like to a specific post by ID. Clicking the like button multiple times will toggle the like count.

### Comment on a post

- Endpoint: POST `http://localhost:5000/post/posts/:postId/add-comment`
- Headers:
  - Authorization: Bearer [JWT Token]
- Request body:

json
{
"comment": "Comment Text"
}

Adds a comment to a specific post by ID.

Make sure to replace [JWT Token] in the headers with the actual JWT token that needs to be provided for authentication.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
.
