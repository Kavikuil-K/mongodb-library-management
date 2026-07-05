# 📚 MongoDB Library Management System

A MongoDB project that demonstrates core database operations using a **Library Management System**. This project covers CRUD operations, aggregation pipelines, and collection relationships using `$lookup`.

## 📖 Project Overview

The Library Management System is designed to manage books, library members, and borrowing records. It showcases how MongoDB stores and manages data using collections and documents while demonstrating commonly used database queries.

## 🚀 Features

* Create and manage a MongoDB database
* Perform CRUD (Create, Read, Update, Delete) operations
* Filter and sort documents
* Update and delete records
* Use aggregation pipelines for data analysis
* Join collections using `$lookup`
* Store related data using `ObjectId` references

---

## 🛠️ Technologies Used

* MongoDB Community Server
* MongoDB Compass
* MongoDB Shell (mongosh)

---

## 📂 Database Structure

### Books Collection

Stores information about library books.

Example fields:

* `_id`
* `title`
* `author`
* `genre`
* `price`
* `stock`
* `publishedYear`

---

### Members Collection

Stores information about library members.

Example fields:

* `_id`
* `memberId`
* `name`
* `email`
* `phone`
* `membershipType`

---

### Borrow Records Collection

Stores details about borrowed books.

Example fields:

* `_id`
* `bookId`
* `memberId`
* `borrowDate`
* `returnDate`
* `status`

---

## 📌 MongoDB Concepts Covered

### CRUD Operations

* Insert documents
* Find documents
* Update documents
* Delete documents

### Query Operators

* `$gt`
* `$lt`
* `$gte`
* `$lte`
* `$eq`
* `$ne`

### Update Operators

* `$set`
* `$inc`
* `$rename`
* `$unset`

### Aggregation Pipeline

* `$match`
* `$group`
* `$avg`
* `$sum`
* `$sort`
* `$project`
* `$limit`
* `$lookup`

---

## 📁 Project Structure

```text
mongodb-library-management/
│
├── README.md
├── commands/
│   ├── 01-create-database.md
│   ├── 02-insert-documents.md
│   ├── 03-find-queries.md
│   ├── 04-update-queries.md
│   ├── 05-delete-queries.md
│   ├── 06-aggregation.md
│   └── 07-lookup.md
│
├── sample-data/
│   ├── books.json
│   ├── members.json
│   └── borrowRecords.json
│
└── screenshots/
```

---

## 📊 Sample Operations

### Find Programming Books

```javascript
db.books.find({
  genre: "Programming"
})
```

### Update Book Price

```javascript
db.books.updateOne(
  { title: "Atomic Habits" },
  {
    $set: {
      price: 549
    }
  }
)
```

### Count Books by Genre

```javascript
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      totalBooks: { $sum: 1 }
    }
  }
])
```

### Join Collections Using `$lookup`

```javascript
db.borrowRecords.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "bookId",
      foreignField: "_id",
      as: "bookDetails"
    }
  }
])
```

---

## 📷 Screenshots

Add screenshots of the following:

* Database created
* Books collection
* Members collection
* Borrow records collection
* CRUD operations
* Aggregation pipeline results
* `$lookup` query results

---

## 🎯 Learning Outcomes

Through this project, I learned how to:

* Design MongoDB collections
* Store and retrieve documents
* Perform CRUD operations
* Filter and sort data
* Use aggregation pipelines
* Build relationships between collections using `ObjectId`
* Join collections using `$lookup`
* Work with MongoDB Compass and MongoDB Shell

---

## 👨‍💻 Author

**Kavikuil K**

If you found this project useful, feel free to ⭐ the repository.
