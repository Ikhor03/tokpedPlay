# Tokopedia Play Clone API

This is the backend API for the Tokopedia Play Clone project, which is a video streaming platform. It is built using Express, MongoDB, and Mongoose.

## Database Structure

The database structure consists of three main models:

1. Videos:
   - title (String, required) : Title of the video.
   - seller (String, required) : Name of the seller or uploader of the video.
   - hotOffer (Array of Strings, required) : Array of hot offers related to the video.
   - live (Boolean, required) : Flag to indicate if the video is live or not.
   - watchCount (Number, required) : Number of views or watch count of the video.
   - videoUrl (String, required) : URL of the video.
   - thumbnail (String, required) : URL of the video thumbnail.
   - createdAt (Date) : Timestamp of when the video was created.
   - updatedAt (Date) : Timestamp of when the video was last updated.

2. Products:
   - name (String, required) : Name of the product.
   - price (Number, required) : Price of the product.
   - imageUrl (String, required) : URL of the product image.
   - productUrl (String, required) : URL of the product page.
   - discount (Number) : Discount value for the product.
   - video (Reference to Video) : Reference to the video to which the product is related.
   - createdAt (Date) : Timestamp of when the product was created.
   - updatedAt (Date) : Timestamp of when the product was last updated.

3. CommentList:
   - name (String, required, default: 'anonymous') : Name of the commenter.
   - content (String, required) : Content of the comment.
   - created_at (Date) : Timestamp of when the comment was created.
   - updated_at (Date) : Timestamp of when the comment was last updated.
   - video (Reference to Video) : Reference to the video to which the comment is related.

## API Structure

The API is structured as follows:

1. Videos:
   - POST '/api/videos': Add a new video to the database.
   - GET '/api/videos': Get all videos.
   - GET '/api/videos/:id': Get a specific video by ID.

2. Products:
   - POST '/api/products': Add a new product to the database.
   - GET '/api/products': Get all products.
   - GET '/api/products/:id': Get a specific product by ID.

3. CommentList:
   - POST '/api/comment': Add a new comment to the database.
   - GET '/api/comment': Get all comments.
   - PUT '/api/comment/:id': update comment.
   - DELETE '/api/comment/:id': delete comment.

## API Request and Response

#Videos

**POST /videos**

Adds a new video to the database.

 * **URL Params** :
   None
 * **Data Params:**
```typescript
{
  title: string,
  seller: string,
  hotOffer: [string],
  live: boolean,
  watchCount: number,
  videoUrl: string,
  thumbnail: string
}

```
* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 201
* **Content:**

```yaml
{
  _id: string,
  title: string,
  seller: string,
  hotOffer: [string],
  live: boolean,
  watchCount: number,
  videoUrl: string,
  thumbnail: string,
  createdAt: string,
  updatedAt: string
}

```

**GET/videos**

Get all videos from database.

 * **URL Params** : None
 * **Data Params** : None
* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 200
* **Content:**

```yaml
{
  data: [
    {
      _id: string,
      title: string,
      seller: string,
      hotOffer: [string],
      live: boolean,
      watchCount: number,
      videoUrl: string,
      thumbnail: string,
      createdAt: string,
      updatedAt: string
    },
    //...
  ]
}

```

**GET/videos/:id**

Get video by id from database.

 * **URL Params** :
  *Required:* `id=[integer]`
 * **Data Params:**
none
* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 200
* **Content:**

```yaml
    {
      _id: string,
      title: string,
      seller: string,
      hotOffer: [string],
      live: boolean,
      watchCount: number,
      videoUrl: string,
      thumbnail: string,
      createdAt: string,
      updatedAt: string
    }

```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: "Video not found" }` 


#product

**POST /product**

Adds a new product to the database.

 * **URL Params** :
   None
 * **Data Params:**
```typescript
{
  name: string,
  price: number,
  imageUrl: string,
  productUrl: string,
  discount: number
}
```

* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 201
* **Content:**

```yaml
{
  _id: string,
  name: string,
  price: number,
  imageUrl: string,
  productUrl: string,
  discount: number,
  createdAt: string,
  updatedAt: string
}


```

**GET/products**

Get all product from database.

 * **URL Params** :
   None
 * **Data Params:**
None
* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 200
* **Content:**

```yaml
{
  data: [
    {
      _id: string,
      name: string,
      price: number,
      imageUrl: string,
      productUrl: string,
      discount: number,
      createdAt: string,
      updatedAt: string
    },
    //...
  ]
}

```

**GET/product/:id**

Get product by id from database.

 * **URL Params** :
  *Required:* `id=[integer]`
 * **Data Params:** none
* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 200
* **Content:**

```yaml
{
  _id: string,
  name: string,
  price: number,
  imageUrl: string,
  productUrl: string,
  discount: number,
  createdAt: string,
  updatedAt: string
}

```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: "product not found" }`


#comment

**POST /comment**

Adds a new comment to the database.

 * **URL Params** :
   None
 * **Data Params:**
```typescript
{
  name: string,
  content: string
}

```

* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 201
* **Content:**

```yaml
{
  _id: string,
  name: string,
  content: string,
  created_at: string,
  updated_at: string,
  video: string 
}


```

**GET/comments**

Get all comment from database.

 * **URL Params** :
   None
 * **Data Params:**
None
* **Headers**
Content-Type: application/json
* **Success Response:**
    Code: 200
* **Content:**

```yaml
{
  data: [
    {
      _id: string,
      name: string,
      content: string,
      created_at: string,
      updated_at: string,
      video: string // ID of the associated video
    },
    //...
  ]
}
```

**PUT /comment/:id**
----
  Updates fields on the specified comment and returns the updated object.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
```
  {
    name: string,
    content: string
  }
```
* **Headers**  
  Content-Type: application/json 
* **Success Response:** 
* **Code:** 200  
  **Content:**  
  ```yaml
    {
      _id: string,
      name: string,
      content: string,
      created_at: string,
      updated_at: string,
      video: string // ID of the associated video
    }
  
  ```  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: 'Comment not found' }`

**DELETE /comment/:id**
----
  Updates fields on the specified comment and returns the updated object.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**none
* **Headers**  
  Content-Type: application/json 
* **Success Response:** 
* **Code:** 204  
  **Content:**  
  ```yaml
    {
      _id: string,
      name: string,
      content: string,
      created_at: string,
      updated_at: string,
      video: string // ID of the associated video
    }
  
  ```  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: 'Comment not found' }`





## How to Run Locally

To run this API locally, follow the steps below:

1. Clone this repository to your local machine.

2. Install the required dependencies by running the following command in the project root directory:
```
npm install
```

3. Make sure you have MongoDB installed and running on your local machine.

4. Create a .env file in the project root directory and add the following environment variables:
```
PORT=<port_number>
DATABASE_URL=<your_mongodb_connection_string>
```

5. Start the development server by running the following command:
```npm start```


6. The API will now be running on http://localhost:<port_number>.

7. You can use tools like Postman or curl to make API requests to the endpoints mentioned in the API structure section.

Please replace <port_number> and <your_mongodb_connection_string> with your preferred port number and MongoDB connection string.

Note: Before sharing the actual .env file, make sure to add it to .gitignore so that sensitive information like the database connection string is not exposed in the version control.
