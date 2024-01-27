# VideoApp API Challenge

This RESTful API was developed as part of the full-stack backend developer selection process. It's designed to assess the developer's skills and is freely available for use in frontend development or other applications.

## Getting Started

To get started, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Davidongo93/videoapp-API-challenge.git
   ```

2. Install dependencies:

   ```bash
   cd videoapp-API-challenge
   npm install
   ```
3. paste .env file sended by mail into the project root directory



### Usage

1. Start the server:

   ```bash
   npm start
   ```
The server will be running at `http://localhost:3000/`.

2. Test
   
   ```bash
   npm test
   ```

### Endpoints

1. Login User: - POST - `/users/login`
2. New User: - POST - `/users`
3. Edit User: - PUT - `/users/edit`
4. Delete User: - DELETE - `/users/delete`
5. New Video: - POST - `/video/post`
6. Edit Video: - PUT - `/video/edit/${videoId}`
7. Delete Video: - DELETE - `/video/delete/${videoId}`
8. Videos By User: - GET - `/video/user/${userId}`
9. Private Videos: - GET - `/video/private`
10. Public Videos: - GET - `/video/public`
11. Video Comment: - POST - `/video/${videoId}/comment`
12. Video Reaction: - POST - `/video/${videoId}/like`
13. Videos by reactions: - GET - `/video/popular`

## 1. Create a new user

- **Endpoint:** `POST /users`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "theUser",
    "email": "john@email.com",
    "password": "12345"
  }
  ```
- **Response (success):**
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "data": {
      "id": "6389a2df-e0a1-4bf5-9bca-5fef51024bd0",
      "username": "CypherBetray",
      "email": "cypher@zion.org",
      "password": "****",
      "updatedAt": "2024-01-27T18:23:25.814Z",
      "createdAt": "2024-01-27T18:23:25.814Z",
      "deletedAt": null
    }
  }
  ```


## 2. Login

- **Endpoint:** `POST /users/login`
- **Description:** Login with email and password.
- **Request Body:**
  ```json
  {
    "email": "john@email.com",
    "password": "12345"
  }
  ```
- **Response (Success):**
  ```json
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
  }
  ```
- **Response (Invalid Credentials):**
  ```json
  {
    "success": false,
    "token": "Invalid credentials"
  }
  ```

## 3. Modify User Info

- **Endpoint:** `PUT /users`
- **Description:** Modify username or password.


- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Request Parameters:**
  ```json
  {
    "username": "newUsername",
    "password": "newPassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User information updated successfully"
  }

## 4. Delete User (Logical delete)


- **Endpoint:** `DELETE /users`
- **Description:** Logical delete (deletedAt not null).


- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

- **Response:**
  ```json
  {
	"success": true,
	"message": "User deleted successfully"
  }
  ```
## 5. New Video: - POST - `/video/post`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

 - **Request Body:**
```json
{
  "title": "Pranks Gone Wild",
  "description": "A compilation of hilarious pranks caught on camera.",
  "credits": "Credits: PranksterExtreme",
  "isPublic": false,
  "videoUrl": "https://www.funnyvideos.com/pranks-gone-wild.mp4"
}
```

#### Response:
```json
{
  "success": true,
  "message": "Video created successfully",
  "data": {
    "title": "Pranks Gone Wild",
    "description": "A compilation of hilarious pranks caught on camera.",
    "credits": "Credits: PranksterExtreme",
    "isPublic": false,
    "videoUrl": "https://www.funnyvideos.com/pranks-gone-wild.mp4",
    "userId": "6389a2df-e0a1-4bf5-9bca-5fef51024bd0"
  }
}
```

## 6. Edit Video: - PUT - `/video/edit/${videoId}`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Request Body:
```json
{
  "title": "Pranks Gone Wild",
  "description": "A compilation of hilarious pranks caught on camera.",
  "credits": "Credits: PranksterExtreme",
  "isPublic": false,
  "videoUrl": "https://www.funnyvideos.com/pranks-gone-wild.mp4"
}
```
## 7. Delete Video: - DELETE - `/video/delete/${videoId}`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Response:
```json
{
	"success": true,
	"message": "Video deleted successfully"
}
```
## 8. Videos By User: - GET - `/video/user/${userId}`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Response:
```json
{
	"success": true,
	"videos": [
		{
			"id": "4c8a7783-60fe-4967-a49e-423414e99a3a",
			"title": "Cats Dancing Ballet",
			"description": "Adorable cats showing off their ballet skills.",
			"credits": "Credits: Choreography by Whiskers, Music by Meowzart",
			"isPublic": true,
			"videoUrl": "https://www.funnyvideos.com/cats-ballet.mp4",
			"createdAt": "2024-01-27T14:58:51.958Z",
			"updatedAt": "2024-01-27T14:58:51.958Z",
			"userId": "dc5761a5-5517-4602-ab4b-89779479061c"
		},
		{
			"id": "f7b271ac-b63d-4e43-8f43-64608105e28e",
			"title": "Epic Fail Compilation",
			"description": "A compilation of hilarious fails from around the world.",
			"credits": "Credits: None, because no one wants to claim these fails!",
			"isPublic": false,
			"videoUrl": "https://www.funnyvideos.com/epic-fail.mp4",
			"createdAt": "2024-01-27T14:59:07.127Z",
			"updatedAt": "2024-01-27T14:59:07.127Z",
			"userId": "dc5761a5-5517-4602-ab4b-89779479061c"
		},
		{
			"id": "4787445e-44d2-4a19-8437-6364d0221955",
			"title": "Baby Laughing at Ripping Paper",
			"description": "A baby's uncontrollable laughter at the sound of ripping paper.",
			"credits": "Credits: Happy Baby Productions",
			"isPublic": true,
			"videoUrl": "https://www.funnyvideos.com/baby-laughing.mp4",
			"createdAt": "2024-01-27T14:59:12.941Z",
			"updatedAt": "2024-01-27T14:59:12.941Z",
			"userId": "dc5761a5-5517-4602-ab4b-89779479061c"
		},
		{
			"id": "a7ea4a13-362d-4b24-a6d0-8e946e1dab31",
			"title": "Squirrel Olympics",
			"description": "Squirrels showcasing their amazing acrobatic skills.",
			"credits": "Credits: Squirrel Athletics Association",
			"isPublic": false,
			"videoUrl": "https://www.funnyvideos.com/squirrel-olympics.mp4",
			"createdAt": "2024-01-27T14:59:28.553Z",
			"updatedAt": "2024-01-27T14:59:28.553Z",
			"userId": "dc5761a5-5517-4602-ab4b-89779479061c"
		},
		{
			"id": "e9101d0f-5579-4ae8-aef9-05c358001e5c",
			"title": "Dancing Penguin Party",
			"description": "Penguins having a dance party in Antarctica.",
			"credits": "Credits: DJ Penguin on the turntables",
			"isPublic": true,
			"videoUrl": "https://www.funnyvideos.com/dancing-penguins.mp4",
			"createdAt": "2024-01-27T14:59:50.930Z",
			"updatedAt": "2024-01-27T14:59:50.930Z",
			"userId": "dc5761a5-5517-4602-ab4b-89779479061c"
		}
	]
}
```

## 9. Private Videos: - GET - `/video/private`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Response:
```json
{
	"success": true,
	"videos": [
		{
			"id": "f7b271ac-b63d-4e43-8f43-64608105e28e",
			"title": "Epic Fail Compilation",
			"description": "A compilation of hilarious fails from around the world.",
			"credits": "Credits: None, because no one wants to claim these fails!",
			"isPublic": false,
			"videoUrl": "https://www.funnyvideos.com/epic-fail.mp4",
			"createdAt": "2024-01-27T14:59:07.127Z",
			"updatedAt": "2024-01-27T14:59:07.127Z",
			"userId": "dc5761a5-5517-4602-ab4b-89779479061c"
		},
		{
			"id": "a7ea4a13-362d-4b24-a6d0-8e946e1dab31",
			"title": "Squirrel Olympics",
			"description": "Squirrels showcasing their amazing acrobatic skills.",
			"credits": "Credits: Squirrel Athletics Association",
			"isPublic": false,
			"videoUrl": "https://www.funnyvideos.com/squirrel-olympics.mp4",
			"createdAt": "2024-01-27T14:59:28.553Z",
			"updatedAt": "2024-01-27T14:59:28.553Z",
			"userId": "dc5761a5-5517-4602-ab4b-89779479061c"
		}
	]
}
```

## 10. Public Videos: - GET - `/video/public`

#### Response:
```json
{
	"success": true,
	"videos": [
		{
			"id": "ae30367c-fab7-41cd-981a-06e5d0dcd1ea",
			"title": "Dancing Penguin Party",
			"description": "Penguins having a dance party in Antarctica.",
			"credits": "Credits: DJ Penguin on the turntables",
			"isPublic": true,
			"videoUrl": "https://www.funnyvideos.com/dancing-penguins.mp4",
			"createdAt": "2024-01-27T17:26:45.994Z",
			"updatedAt": "2024-01-27T17:26:45.994Z",
			"userId": "529cce16-d219-4d27-b0b4-858b6a26b9a6"
		}
	]
}
```
## 11. Video Comment: - POST - `/video/${videoId}/comment`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Body:
```json
{
	"content": "nice Video, thanks 4 sharing."
}
```

#### Response:
```json
{
	"success": true,
	"message": "Comment created successfully",
	"data": {
		"id": "73ed8739-baec-4906-96f7-d2a6baa823ed",
		"userId": "1af0f145-0560-4a6d-8dca-e6f82f07ac50",
		"videoId": "093ebeb6-6931-413a-b316-f98fbed7fad6",
		"content": "nice Video, thanks 4 sharing.",
		"updatedAt": "2024-01-27T18:16:39.855Z",
		"createdAt": "2024-01-27T18:16:39.855Z"
	}
}
```
# 12. Video Reaction: - POST - `/video/${videoId}/like`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Response:
```json
{
	"success": true,
	"message": "Video liked/unliked successfully"
}
```
## 13. Videos by Reactions: - GET - `/video/popular`

- **Request Headers:**
  ```
  Authorization: Bearer <token>
  ```

#### Response:
```json
{
	"success": true,
	"videos": [
		{
			"id": "4c8a7783-60fe-4967-a49e-423414e99a3a",
			"title": "Cats Dancing Ballet",
			"description": "Adorable cats showing off their ballet skills.",
			"credits": "Credits: Choreography by Whiskers, Music by Meowzart",
			"isPublic": true,
			"videoUrl": "https://www.funnyvideos.com/cats-ballet.mp4",
			"createdAt": "2024-01-27T14:58:51.958Z",
			"updatedAt": "2024-01-27T14:58:51.958Z",
			"likeCount": "3"
		},
		{
			"id": "e9101d0f-5579-4ae8-aef9-05c358001e5c",
			"title": "Dancing Penguin Party",
			"description": "Penguins having a dance party in Antarctica.",
			"credits": "Credits: DJ Penguin on the turntables",
			"isPublic": true,
			"videoUrl": "https://www.funnyvideos.com/dancing-penguins.mp4",
			"createdAt": "2024-01-27T14:59:50.930Z",
			"updatedAt": "2024-01-27T14:59:50.930Z",
			"likeCount": "3"
		},
		{
			"id": "f7b271ac-b63d-4e43-8f43-64608105e28e",
			"title": "Epic Fail Compilation",
			"description": "A compilation of hilarious fails from around the world.",
			"credits": "Credits: None, because no one wants to claim these fails!",
			"isPublic": false,
			"videoUrl": "https://www.funnyvideos.com/epic-fail.mp4",
			"createdAt": "2024-01-27T14:59:07.127Z",
			"updatedAt": "2024-01-27T14:59:07.127Z",
			"likeCount": "2"
		},
		{
			"id": "4787445e-44d2-4a19-8437-6364d0221955",
			"title": "Baby Laughing at Ripping Paper",
			"description": "A baby's uncontrollable laughter at the sound of ripping paper.",
			"credits": "Credits: Happy Baby Productions",
			"isPublic": true,
			"videoUrl": "https://www.funnyvideos.com/baby-laughing.mp4",
			"createdAt": "2024-01-27T14:59:12.941Z",
			"updatedAt": "2024-01-27T14:59:12.941Z",
			"likeCount": "2"
		},
		{
			"id": "a7ea4a13-362d-4b24-a6d0-8e946e1dab31",
			"title": "Squirrel Olympics",
			"description": "Squirrels showcasing their amazing acrobatic skills.",
			"credits": "Credits: Squirrel Athletics Association",
			"isPublic": false,
			"videoUrl": "https://www.funnyvideos.com/squirrel-olympics.mp4",
			"createdAt": "2024-01-27T14:59:28.553Z",
			"updatedAt": "2024-01-27T14:59:28.553Z",
			"likeCount": "1"
		}
	]
}
```
