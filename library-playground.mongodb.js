/* global use, db */

// Select the database
use('libraryDB');

// View all books
db.getCollection('books').find();

// Find all Programming books
db.getCollection('books').find({
  genre: "Programming"
});

// Update the price of Atomic Habits
db.getCollection('books').updateOne(
  { title: "Atomic Habits" },
  {
    $set: {
      price: 549
    }
  }
);

// Increase stock of Programming books
db.getCollection('books').updateMany(
  { genre: "Programming" },
  {
    $inc: {
      stock: 10
    }
  }
);

// Show all books
db.getCollection('books').find();


//AGGREGATION PIPELINE
// Count books by genre

db.getCollection('books').aggregate([
  {
    $group: {
      _id: "$genre",
      totalBooks: {
        $sum: 1
      }
    }
  }
]);


//LOOKUP

// Join Borrow Records with Books

db.getCollection('borrowRecords').aggregate([
  {
    $lookup: {
      from: "books",
      localField: "bookId",
      foreignField: "_id",
      as: "bookDetails"
    }
  }
]);