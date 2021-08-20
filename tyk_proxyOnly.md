# docker run --rm -it rcmorano/docker-hey -z 1m -c 100 -q 30000 -t 65 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://34.220.111.154/api

Summary:
Total: 64.1180 secs
Slowest: 9.1692 secs
Fastest: 0.2529 secs
Average: 4.5156 secs
Requests/sec: 22.0531

Total data: 300038074 bytes
Size/request: 212191 bytes

Response time histogram:
0.253 [1] |
1.145 [41] |■■
2.036 [2] |
2.928 [22] |■
3.819 [11] |■
4.711 [832] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
5.603 [468] |■■■■■■■■■■■■■■■■■■■■■■■
6.494 [0] |
7.386 [0] |
8.278 [0] |
9.169 [37] |■■

Latency distribution:
10% in 4.2173 secs
25% in 4.2925 secs
50% in 4.5155 secs
75% in 4.7742 secs
90% in 4.9392 secs
95% in 5.3014 secs
99% in 9.0483 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0005 secs, 0.2529 secs, 9.1692 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0001 secs, 0.0000 secs, 0.0124 secs
resp wait: 2.4370 secs, 0.0662 secs, 4.6976 secs
resp read: 2.0779 secs, 0.0034 secs, 5.1077 secs

Status code distribution:
[200] 1414 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
Total: 302.2114 secs
Slowest: 8.4889 secs
Fastest: 0.3476 secs
Average: 2.2111 secs
Requests/sec: 22.5306

Total data: 1444808519 bytes
Size/request: 212191 bytes

Response time histogram:
0.348 [1] |
1.162 [125] |■
1.976 [561] |■■■■
2.790 [5749] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
3.604 [158] |■
4.418 [128] |■
5.232 [45] |
6.046 [11] |
6.861 [12] |
7.675 [7] |
8.489 [12] |

Latency distribution:
10% in 1.9737 secs
25% in 2.1207 secs
50% in 2.1626 secs
75% in 2.1771 secs
90% in 2.2947 secs
95% in 2.9283 secs
99% in 4.5347 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0000 secs, 0.3476 secs, 8.4889 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0000 secs, 0.0000 secs, 0.0006 secs
resp wait: 2.0319 secs, 0.0580 secs, 4.4001 secs
resp read: 0.1791 secs, 0.0024 secs, 4.2477 secs

Status code distribution:
[200] 6809 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
Total: 302.2192 secs
Slowest: 8.5545 secs
Fastest: 0.2483 secs
Average: 2.2089 secs
Requests/sec: 22.5499

Total data: 1446081665 bytes
Size/request: 212191 bytes

Response time histogram:
0.248 [1] |
1.079 [67] |
1.910 [671] |■■■■■
2.740 [5609] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
3.571 [229] |■■
4.401 [186] |■
5.232 [24] |
6.063 [8] |
6.893 [5] |
7.724 [2] |
8.555 [13] |

Latency distribution:
10% in 1.8379 secs
25% in 2.1263 secs
50% in 2.1595 secs
75% in 2.1766 secs
90% in 2.2355 secs
95% in 3.3207 secs
99% in 4.3479 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0000 secs, 0.2483 secs, 8.5545 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0000 secs, 0.0000 secs, 0.0007 secs
resp wait: 2.0757 secs, 0.0694 secs, 4.4445 secs
resp read: 0.1331 secs, 0.0025 secs, 4.2864 secs

Status code distribution:
[200] 6815 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
Total: 302.1972 secs
Slowest: 8.3750 secs
Fastest: 0.4337 secs
Average: 2.2152 secs
Requests/sec: 22.4886

Total data: 1442050036 bytes
Size/request: 212191 bytes

Response time histogram:
0.434 [1] |
1.228 [98] |■
2.022 [695] |■■■■■
2.816 [5521] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
3.610 [224] |■■
4.404 [173] |■
5.198 [36] |
5.993 [11] |
6.787 [11] |
7.581 [2] |
8.375 [24] |

Latency distribution:
10% in 1.9285 secs
25% in 2.0944 secs
50% in 2.1574 secs
75% in 2.1754 secs
90% in 2.2511 secs
95% in 3.2517 secs
99% in 4.8251 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0000 secs, 0.4337 secs, 8.3750 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0000 secs, 0.0000 secs, 0.0017 secs
resp wait: 2.0688 secs, 0.1153 secs, 4.4889 secs
resp read: 0.1462 secs, 0.0026 secs, 4.2098 secs

Status code distribution:
[200] 6796 responses
