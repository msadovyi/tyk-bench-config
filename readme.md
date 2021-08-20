EC2 t2.medium vCPUS - 2, Memory (GiB) - 4

# 1
### 1500 requests per second per worker, 50 workers for 5 min
Request body - `{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }`
|          -          | API          | Mesh         | Portal | Tyk (proxy)  | Tyk (exec)   |
| ------------------- | ------------ | ------------ | ------ | ------------ | ------------ |
| Avg. latency (secs) | 2.1313       | 5.2991       | 4.2955 | 2.2117       | 2.1451       |
| Responses count     | 7063         | 2846         | 3519   | 6807         | 7018         |
| Request/second      | 23.3796      | 9.3799       | 11.600 | 22.5230      | 23.23        |

# 2
### 30000 requests per second per worker, 100 workers for 1 min
Request body - `{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }`

|          -          | API          | Mesh         | Portal | Tyk (proxy)  | Tyk (exec)   |
| ------------------- | ------------ | ------------ | ------ | ------------ | ------------ |
| Avg. latency (secs) | 4.2732       | 10.7792      | 8.7314 | 4.5156       | 4.3684       |
| Responses count     | 1435         | 614          | 709    | 1414         | 1406         |
| Request/second      | 22.9514      | 9.2319       | 11.4365| 22.0531      | 22.3922      |

API - Apollo Server Express
Schema - 
```
type Query {
  hello: String
  authors: [Author]!
  author(id: Int!): Author
  books: [Book]!
}
type Book {
  title: String!
  author: Author!
}
type Author {
  id: Int!
  fullName: String!
  books: [Book]!
}
```