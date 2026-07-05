# Insert Documents

## Insert One Book

```javascript
db.books.insertOne({
  title: "Atomic Habits",
  author: "James Clear",
  genre: "Self Help",
  price: 499,
  stock: 20,
  publishedYear: 2018
})
```

## Insert Multiple Books

```javascript
db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    price: 350,
    stock: 15,
    publishedYear: 1988
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    price: 650,
    stock: 10,
    publishedYear: 2008
  }
])
```

## Insert Member

```javascript
db.members.insertOne({
  memberId: "M001",
  name: "Kavi",
  email: "kavi@example.com",
  phone: "9876543210",
  membershipType: "Student"
})
```

## Insert Borrow Record

```javascript
db.borrowRecords.insertOne({
  bookId: ObjectId("BOOK_ID"),
  memberId: ObjectId("MEMBER_ID"),
  borrowDate: new Date(),
  returnDate: new Date(),
  status: "Borrowed"
})
```
