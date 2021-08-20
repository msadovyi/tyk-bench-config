# docker run --rm -it rcmorano/docker-hey -z 1m -c 100 -q 30000 -t 65 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
  Total:	62.7897 secs
  Slowest:	10.6482 secs
  Fastest:	0.1847 secs
  Average:	4.3684 secs
  Requests/sec:	22.3922
  

Response time histogram:
  0.185 [1]	|
  1.231 [9]	|■
  2.277 [100]	|■■■■■■■■
  3.324 [328]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  4.370 [193]	|■■■■■■■■■■■■■■■■
  5.416 [474]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  6.463 [184]	|■■■■■■■■■■■■■■■■
  7.509 [103]	|■■■■■■■■■
  8.556 [5]	|
  9.602 [1]	|
  10.648 [8]	|■


Latency distribution:
  10% in 2.3400 secs
  25% in 3.0090 secs
  50% in 4.7060 secs
  75% in 5.1963 secs
  90% in 6.3775 secs
  95% in 6.7072 secs
  99% in 7.5854 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0002 secs, 0.1847 secs, 10.6482 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0156 secs
  resp wait:	4.3147 secs, 0.1822 secs, 10.5276 secs
  resp read:	0.0534 secs, 0.0020 secs, 0.6594 secs

Status code distribution:
  [200]	1406 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api
Summary:
  Total:	302.0966 secs
  Slowest:	5.9453 secs
  Fastest:	0.1421 secs
  Average:	2.1242 secs
  Requests/sec:	23.4561
  

Response time histogram:
  0.142 [1]	|
  0.722 [81]	|■
  1.303 [89]	|■
  1.883 [252]	|■■
  2.463 [6155]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  3.044 [322]	|■■
  3.624 [39]	|
  4.204 [113]	|■
  4.785 [25]	|
  5.365 [5]	|
  5.945 [4]	|


Latency distribution:
  10% in 2.0140 secs
  25% in 2.0693 secs
  50% in 2.0849 secs
  75% in 2.1027 secs
  90% in 2.3301 secs
  95% in 2.6066 secs
  99% in 4.1741 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.1421 secs, 5.9453 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0005 secs
  resp wait:	2.1166 secs, 0.1402 secs, 5.9424 secs
  resp read:	0.0075 secs, 0.0013 secs, 0.2754 secs

Status code distribution:
  [200]	7086 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api
Summary:
  Total:	302.1131 secs
  Slowest:	8.1055 secs
  Fastest:	0.1352 secs
  Average:	2.1349 secs
  Requests/sec:	23.3389
  

Response time histogram:
  0.135 [1]	|
  0.932 [48]	|
  1.729 [453]	|■■■
  2.526 [5986]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  3.323 [324]	|■■
  4.120 [102]	|■
  4.917 [118]	|■
  5.714 [10]	|
  6.511 [2]	|
  7.308 [2]	|
  8.106 [5]	|


Latency distribution:
  10% in 1.9172 secs
  25% in 2.0757 secs
  50% in 2.0910 secs
  75% in 2.1050 secs
  90% in 2.2207 secs
  95% in 3.0074 secs
  99% in 4.1978 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.1352 secs, 8.1055 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0024 secs
  resp wait:	2.1298 secs, 0.1323 secs, 8.1029 secs
  resp read:	0.0050 secs, 0.0020 secs, 0.2238 secs

Status code distribution:
  [200]	7051 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
  Total:	302.1567 secs
  Slowest:	5.5783 secs
  Fastest:	0.1856 secs
  Average:	2.1763 secs
  Requests/sec:	22.8921
  

Response time histogram:
  0.186 [1]	|
  0.725 [57]	|
  1.264 [123]	|■
  1.803 [268]	|■■
  2.343 [5805]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.882 [225]	|■■
  3.421 [210]	|■
  3.960 [68]	|
  4.500 [139]	|■
  5.039 [15]	|
  5.578 [6]	|


Latency distribution:
  10% in 1.9805 secs
  25% in 2.1135 secs
  50% in 2.1317 secs
  75% in 2.1473 secs
  90% in 2.2800 secs
  95% in 2.9961 secs
  99% in 4.2748 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.1856 secs, 5.5783 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0015 secs
  resp wait:	2.1690 secs, 0.1759 secs, 5.5757 secs
  resp read:	0.0072 secs, 0.0016 secs, 0.2254 secs

Status code distribution:
  [200]	6917 responses
