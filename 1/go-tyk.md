
Summary:
  Total:	300.0108 secs
  Slowest:	0.2341 secs
  Fastest:	0.0020 secs
  Average:	0.0150 secs
  Requests/sec:	3334.6233
  
  Total data:	223094329 bytes
  Size/request:	223 bytes

Response time histogram:
  0.002 [1]	|
  0.025 [972257]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.048 [27695]	|■
  0.072 [43]	|
  0.095 [2]	|
  0.118 [0]	|
  0.141 [0]	|
  0.164 [0]	|
  0.188 [0]	|
  0.211 [0]	|
  0.234 [2]	|


Latency distribution:
  10% in 0.0088 secs
  25% in 0.0108 secs
  50% in 0.0149 secs
  75% in 0.0185 secs
  90% in 0.0211 secs
  95% in 0.0233 secs
  99% in 0.0285 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0020 secs, 0.2341 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0075 secs
  resp wait:	0.0149 secs, 0.0019 secs, 0.2340 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0030 secs

Status code distribution:
  [200]	1000000 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
  Total:	300.0095 secs
  Slowest:	0.0509 secs
  Fastest:	0.0022 secs
  Average:	0.0150 secs
  Requests/sec:	3330.2507
  
  Total data:	222800861 bytes
  Size/request:	223 bytes

Response time histogram:
  0.002 [1]	|
  0.007 [18529]	|■■
  0.012 [312243]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.017 [285297]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.022 [301699]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.027 [63485]	|■■■■■■■■
  0.031 [13965]	|■■
  0.036 [3163]	|
  0.041 [606]	|
  0.046 [109]	|
  0.051 [10]	|


Latency distribution:
  10% in 0.0088 secs
  25% in 0.0109 secs
  50% in 0.0149 secs
  75% in 0.0185 secs
  90% in 0.0211 secs
  95% in 0.0232 secs
  99% in 0.0284 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0022 secs, 0.0509 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0021 secs
  resp wait:	0.0149 secs, 0.0021 secs, 0.0508 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0071 secs

Status code distribution:
  [200]	999107 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
  Total:	300.0793 secs
  Slowest:	0.5861 secs
  Fastest:	0.0018 secs
  Average:	0.0172 secs
  Requests/sec:	2911.0638
  
  Total data:	194801650 bytes
  Size/request:	223 bytes

Response time histogram:
  0.002 [1]	|
  0.060 [860905]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.119 [7013]	|
  0.177 [3085]	|
  0.236 [1522]	|
  0.294 [595]	|
  0.352 [261]	|
  0.411 [109]	|
  0.469 [43]	|
  0.528 [9]	|
  0.586 [7]	|


Latency distribution:
  10% in 0.0089 secs
  25% in 0.0110 secs
  50% in 0.0153 secs
  75% in 0.0189 secs
  90% in 0.0223 secs
  95% in 0.0263 secs
  99% in 0.0828 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0018 secs, 0.5861 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0048 secs
  resp wait:	0.0171 secs, 0.0018 secs, 0.5860 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0020 secs

Status code distribution:
  [200]	873550 responses



[ec2-user@ip-172-31-6-65 ~]$ 
