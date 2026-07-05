# Find Queries

## View All Books

```javascript
db.books.find()
```

## View Formatted Documents

```javascript
db.books.find().pretty()
```

## Find One Book

```javascript
db.books.findOne()
```

## Find by Title

```javascript
db.books.find({
  title: "Atomic Habits"
})
```

## Find by Genre

```javascript
db.books.find({
  genre: "Programming"
})
```

## Books with Price Greater Than 500

```javascript
db.books.find({
  price: {
    $gt: 500
  }
})
```

## Books with Stock Less Than 20

```javascript
db.books.find({
  stock: {
    $lt: 20
  }
})
```

## Display Selected Fields

```javascript
db.books.find(
  {},
  {
    _id: 0,
    title: 1,
    author: 1
  }
)
```

## Count Documents

```javascript
db.books.countDocuments()
```
