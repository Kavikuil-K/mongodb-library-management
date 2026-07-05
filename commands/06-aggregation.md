# Aggregation Pipeline

## Match

```javascript
db.books.aggregate([
  {
    $match: {
      genre: "Programming"
    }
  }
])
```

## Group

```javascript
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      totalBooks: {
        $sum: 1
      }
    }
  }
])
```

## Average Price

```javascript
db.books.aggregate([
  {
    $group: {
      _id: null,
      averagePrice: {
        $avg: "$price"
      }
    }
  }
])
```

## Sort by Price

```javascript
db.books.aggregate([
  {
    $sort: {
      price: -1
    }
  }
])
```

## Project Fields

```javascript
db.books.aggregate([
  {
    $project: {
      _id: 0,
      title: 1,
      price: 1
    }
  }
])
```

## Top 3 Expensive Books

```javascript
db.books.aggregate([
  {
    $sort: {
      price: -1
    }
  },
  {
    $limit: 3
  }
])
```
