# Delete Queries

## Delete One Document

```javascript
db.books.deleteOne({
  title: "The Alchemist"
})
```

## Delete Multiple Documents

```javascript
db.books.deleteMany({
  genre: "Finance"
})
```

## Delete All Documents

```javascript
db.books.deleteMany({})
```

## Drop Collection

```javascript
db.books.drop()
```

## Drop Database

```javascript
db.dropDatabase()
```
