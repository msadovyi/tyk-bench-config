EC2 t2.medium vCPUS - 2, Memory (GiB) - 4
# 1
### 1500 requests per second per worker, 50 workers for 5 min
Gateways are configured to call NodeJS GraphQL API
Request body - `{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }`
Response body - Array of 500 authors
|          -          | API Node     | API Go       | Mesh         | Portal | Tyk (proxy)  | Tyk (exec)   |
| ------------------- | ------------ | ------------ | ------------ | ------ | ------------ | ------------ |
| Avg. latency (secs) | 2.1313       | 1.8208       | 5.2991       | 4.2955 | 2.2117       | 2.1451       |
| Responses count     | 7063         | 8254         | 2846         | 3519   | 6807         | 7018         |
| Request/second      | 23.3796      | 27.4270      | 9.3799       | 11.600 | 22.5230      | 23.23        |

# 2
### 30000 requests per second per worker, 100 workers for 1 min
Gateways are configured to call NodeJS GraphQL API
Request body - `{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }`
Response body - Array of 500 authors

|          -          | API Node     | API Go       | Mesh         | Portal | Tyk (proxy)  | Tyk (exec)   |
| ------------------- | ------------ | ------------ | ------------ | ------ | ------------ | ------------ |
| Avg. latency (secs) | 4.2732       | 3.6188       | 10.7792      | 8.7314 | 4.5156       | 4.3684       |
| Responses count     | 1435         | 1695         | 614          | 709    | 1414         | 1406         |
| Request/second      | 22.9514      | 27.3425      | 9.2319       | 11.4365| 22.0531      | 22.3922      |
# 3
### 1500 requests per second per worker, 50 workers for 5 min
Gateways are configured to call Go GraphQL API
Request body - `{ "query": "{ author { id books { author { fullName } } } }" }`
Response body - Single author object with 5 books

|          -          | API Node     | API Go       | Mesh       | Portal      | Tyk (exec)     |
| ------------------- | ------------ | ------------ | ---------- | ----------  | -------------- |
| Avg. latency (secs) | 0.0294       | 0.015        | 0.1017     | 0.1038      | 0.0157         |
| Responses count     | 510526       | 1000000      | 147515     | 144522      | 957552         |
| Request/second      | 1701.5873    | 4036.6524    | 491.6100   | 481.6591    | 3191.9793      |

* Schema - 
```
type Query {
  hello: String
  authors: [Author]
  author: Author
  books: [Book]
}
type Book {
  title: String
  author: Author
}
type Author {
  id: Int
  fullName: String
  books: [Book]
}
```