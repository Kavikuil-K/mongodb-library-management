# Update Queries

## Update One Document

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

## Update Multiple Documents

```javascript
db.books.updateMany(
  { genre: "Programming" },
  {
    $inc: {
      stock: 10
    }
  }
)
```

## Rename a Field

```javascript
db.books.updateMany(
  {},
  {
    $rename: {
      "publishedYear": "year"
    }
  }
)
```

## Remove a Field

```javascript
db.books.updateOne(
  { title: "Clean Code" },
  {
    $unset: {
      publisher: ""
    }
  }
)
```
