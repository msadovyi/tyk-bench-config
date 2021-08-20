# docker run --rm -it rcmorano/docker-hey -z 1m -c 100 -q 30000 -t 65 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://34.220.111.154/api

Summary:
Total: 61.9944 secs
Slowest: 9.9039 secs
Fastest: 0.4599 secs
Average: 8.7314 secs
Requests/sec: 11.4365

Total data: 150442710 bytes
Size/request: 212190 bytes

Response time histogram:
0.460 [1] |
1.404 [3] |
2.349 [1] |
3.293 [0] |
4.237 [0] |
5.182 [8] |■
6.126 [0] |
7.071 [0] |
8.015 [2] |
8.959 [497] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
9.904 [197] |■■■■■■■■■■■■■■■■

Latency distribution:
10% in 8.4858 secs
25% in 8.6180 secs
50% in 8.7345 secs
75% in 9.1863 secs
90% in 9.3745 secs
95% in 9.3866 secs
99% in 9.4153 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0005 secs, 0.4599 secs, 9.9039 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0001 secs, 0.0000 secs, 0.0172 secs
resp wait: 6.7319 secs, 0.4523 secs, 9.2890 secs
resp read: 1.9988 secs, 0.0052 secs, 4.1619 secs

Status code distribution:
[200] 709 responses

---

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
Total: 303.3201 secs
Slowest: 6.4082 secs
Fastest: 0.6142 secs
Average: 4.3541 secs
Requests/sec: 11.4467

Total data: 736723680 bytes
Size/request: 212190 bytes

Response time histogram:
0.614 [1] |
1.194 [0] |
1.773 [1] |
2.352 [14] |
2.932 [34] |■
3.511 [210] |■■■■■
4.091 [820] |■■■■■■■■■■■■■■■■■■■■
4.670 [1679] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
5.249 [349] |■■■■■■■■
5.829 [299] |■■■■■■■
6.408 [65] |■■

Latency distribution:
10% in 3.6244 secs
25% in 3.9964 secs
50% in 4.3502 secs
75% in 4.6035 secs
90% in 5.2776 secs
95% in 5.5529 secs
99% in 5.9034 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0000 secs, 0.6142 secs, 6.4082 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0000 secs, 0.0000 secs, 0.0007 secs
resp wait: 4.0515 secs, 0.6059 secs, 6.4038 secs
resp read: 0.3025 secs, 0.0023 secs, 2.2442 secs

Status code distribution:
[200] 3472 responses

---

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
Total: 304.0629 secs
Slowest: 6.3469 secs
Fastest: 1.1696 secs
Average: 4.2620 secs
Requests/sec: 11.6851

Total data: 753911070 bytes
Size/request: 212190 bytes

Response time histogram:
1.170 [1] |
1.687 [0] |
2.205 [16] |
2.723 [53] |■■
3.241 [109] |■■■
3.758 [438] |■■■■■■■■■■■■■■
4.276 [1286] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
4.794 [1021] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
5.311 [293] |■■■■■■■■■
5.829 [286] |■■■■■■■■■
6.347 [50] |■■

Latency distribution:
10% in 3.5968 secs
25% in 3.9301 secs
50% in 4.2419 secs
75% in 4.4388 secs
90% in 5.2694 secs
95% in 5.5504 secs
99% in 5.9033 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0000 secs, 1.1696 secs, 6.3469 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0000 secs, 0.0000 secs, 0.0010 secs
resp wait: 4.0551 secs, 1.1660 secs, 6.3426 secs
resp read: 0.2068 secs, 0.0023 secs, 2.0956 secs

Status code distribution:
[200] 3553 responses

---

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
Total: 302.5816 secs
Slowest: 6.3260 secs
Fastest: 1.0107 secs
Average: 4.2705 secs
Requests/sec: 11.6696

Total data: 749242890 bytes
Size/request: 212190 bytes

Response time histogram:
1.011 [1] |
1.542 [3] |
2.074 [15] |
2.605 [44] |■
3.137 [128] |■■■
3.668 [297] |■■■■■■■
4.200 [865] |■■■■■■■■■■■■■■■■■■■■■
4.731 [1628] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
5.263 [257] |■■■■■■
5.794 [237] |■■■■■■
6.326 [56] |■

Latency distribution:
10% in 3.5060 secs
25% in 3.9205 secs
50% in 4.3241 secs
75% in 4.5301 secs
90% in 5.1686 secs
95% in 5.5301 secs
99% in 5.8879 secs

Details (average, fastest, slowest):
DNS+dialup: 0.0000 secs, 1.0107 secs, 6.3260 secs
DNS-lookup: 0.0000 secs, 0.0000 secs, 0.0000 secs
req write: 0.0000 secs, 0.0000 secs, 0.0006 secs
resp wait: 4.0511 secs, 1.0062 secs, 6.3226 secs
resp read: 0.2192 secs, 0.0023 secs, 2.0383 secs

Status code distribution:
[200] 3531 responses
