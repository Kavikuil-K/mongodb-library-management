# Lookup Queries

## Join Borrow Records with Books

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

## Join Borrow Records with Members

```javascript
db.borrowRecords.aggregate([
  {
    $lookup: {
      from: "members",
      localField: "memberId",
      foreignField: "_id",
      as: "memberDetails"
    }
  }
])
```

## Join Books and Members

```javascript
db.borrowRecords.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "bookId",
      foreignField: "_id",
      as: "book"
    }
  },
  {
    $lookup: {
      from: "members",
      localField: "memberId",
      foreignField: "_id",
      as: "member"
    }
  },
  {
    $project: {
      _id: 0,
      memberName: { $arrayElemAt: ["$member.name", 0] },
      bookTitle: { $arrayElemAt: ["$book.title", 0] },
      borrowDate: 1,
      returnDate: 1,
      status: 1
    }
  }
])
```
