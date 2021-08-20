# docker run --rm -it rcmorano/docker-hey -z 1m -c 100 -q 30000 -t 65 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80
Summary:
Total: 62.5233 secs
Slowest: 9.8859 secs
Fastest: 0.5528 secs
Average: 4.2732 secs
Requests/sec: 22.9514

Total data: 304494085 bytes
Size/request: 212191 bytes

Response time histogram:
0.553 [1] |
1.486 [106] |■■■■■■■■
2.419 [63] |■■■■■
3.353 [108] |■■■■■■■■■
4.286 [501] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
5.219 [236] |■■■■■■■■■■■■■■■■■■■
6.153 [348] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■
7.086 [5] |
8.019 [46] |■■■■
8.953 [17] |■
9.886 [4] |

Latency distribution:
10% in 2.0246 secs
25% in 3.6937 secs
50% in 4.1268 secs
75% in 5.4749 secs
90% in 5.8628 secs
95% in 6.2710 secs
99% in 8.3888 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0009 secs, 0.5528 secs, 9.8859 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0001 secs, 0.0000 secs, 0.0245 secs
resp wait: 2.7533 secs, 0.1107 secs, 5.2731 secs
resp read: 1.5189 secs, 0.0019 secs, 4.9452 secs

Status code distribution:
[200] 1435 responses


11:55
# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80
Summary:
  Total:	302.1488 secs
  Slowest:	5.5267 secs
  Fastest:	0.4037 secs
  Average:	2.1475 secs
  Requests/sec:	23.2005
  
  Total data:	1484465640 bytes
  Size/request:	211764 bytes

Response time histogram:
  0.404 [1]	|
  0.916 [10]	|
  1.428 [303]	|■■
  1.941 [677]	|■■■■■
  2.453 [5383]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.965 [200]	|■
  3.477 [165]	|■
  3.990 [90]	|■
  4.502 [143]	|■
  5.014 [28]	|
  5.527 [10]	|


Latency distribution:
  10% in 1.8023 secs
  25% in 2.0790 secs
  50% in 2.1003 secs
  75% in 2.1163 secs
  90% in 2.3530 secs
  95% in 3.2649 secs
  99% in 4.2328 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.4037 secs, 5.5267 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0022 secs
  resp wait:	2.0149 secs, 0.0413 secs, 4.2872 secs
  resp read:	0.1325 secs, 0.0016 secs, 2.4435 secs

Status code distribution:
  [200]	7010 responses

12:03
# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80
Summary:
  Total:	302.0988 secs
  Slowest:	5.7868 secs
  Fastest:	0.1793 secs
  Average:	2.1439 secs
  Requests/sec:	23.2407
  
  Total data:	1489793011 bytes
  Size/request:	212191 bytes

Response time histogram:
  0.179 [1]	|
  0.740 [17]	|
  1.301 [184]	|■
  1.862 [353]	|■■
  2.422 [5944]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.983 [217]	|■
  3.544 [68]	|
  4.105 [84]	|■
  4.665 [141]	|■
  5.226 [9]	|
  5.787 [3]	|


Latency distribution:
  10% in 2.0318 secs
  25% in 2.0886 secs
  50% in 2.1042 secs
  75% in 2.1169 secs
  90% in 2.1761 secs
  95% in 2.7809 secs
  99% in 4.2134 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.1793 secs, 5.7868 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0013 secs
  resp wait:	2.0270 secs, 0.0526 secs, 4.2864 secs
  resp read:	0.1167 secs, 0.0017 secs, 2.3651 secs

Status code distribution:
  [200]	7021 responses

12:10
# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80
Summary:
  Total:	302.0979 secs
  Slowest:	8.0951 secs
  Fastest:	0.1807 secs
  Average:	2.1026 secs
  Requests/sec:	23.6976
  
  Total data:	1519075369 bytes
  Size/request:	212191 bytes

Response time histogram:
  0.181 [1]	|
  0.972 [103]	|■
  1.764 [435]	|■■■
  2.555 [6170]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  3.346 [199]	|■
  4.138 [155]	|■
  4.929 [51]	|
  5.721 [10]	|
  6.512 [5]	|
  7.304 [3]	|
  8.095 [27]	|


Latency distribution:
  10% in 1.9155 secs
  25% in 2.0091 secs
  50% in 2.0483 secs
  75% in 2.0666 secs
  90% in 2.0924 secs
  95% in 3.1053 secs
  99% in 4.5489 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.1807 secs, 8.0951 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0004 secs
  resp wait:	1.9783 secs, 0.1064 secs, 4.1743 secs
  resp read:	0.1241 secs, 0.0012 secs, 4.0501 secs

Status code distribution:
  [200]	7159 responses