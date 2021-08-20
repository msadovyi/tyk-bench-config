
Summary:
  Total:	300.0700 secs
  Slowest:	0.2559 secs
  Fastest:	0.0598 secs
  Average:	0.1020 secs
  Requests/sec:	490.3557
  
  Total data:	32812443 bytes
  Size/request:	223 bytes

Response time histogram:
  0.060 [1]	|
  0.079 [2767]	|■■
  0.099 [65557]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.119 [68538]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.138 [4865]	|■■■
  0.158 [2308]	|■
  0.177 [2211]	|■
  0.197 [731]	|
  0.217 [84]	|
  0.236 [65]	|
  0.256 [14]	|


Latency distribution:
  10% in 0.0878 secs
  25% in 0.0933 secs
  50% in 0.0999 secs
  75% in 0.1066 secs
  90% in 0.1143 secs
  95% in 0.1258 secs
  99% in 0.1716 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0598 secs, 0.2559 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0047 secs
  resp wait:	0.1019 secs, 0.0597 secs, 0.2544 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0067 secs

Status code distribution:
  [200]	147141 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.16.156/graphql

Summary:
  Total:	300.0725 secs
  Slowest:	0.2580 secs
  Fastest:	0.0522 secs
  Average:	0.1025 secs
  Requests/sec:	487.9821
  
  Total data:	32653890 bytes
  Size/request:	223 bytes

Response time histogram:
  0.052 [1]	|
  0.073 [231]	|
  0.093 [35097]	|■■■■■■■■■■■■■■■
  0.114 [95148]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.135 [9451]	|■■■■
  0.155 [2631]	|■
  0.176 [2604]	|■
  0.196 [1062]	|
  0.217 [104]	|
  0.237 [77]	|
  0.258 [24]	|


Latency distribution:
  10% in 0.0881 secs
  25% in 0.0936 secs
  50% in 0.1000 secs
  75% in 0.1068 secs
  90% in 0.1149 secs
  95% in 0.1290 secs
  99% in 0.1739 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0522 secs, 0.2580 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0020 secs
  resp wait:	0.1024 secs, 0.0521 secs, 0.2544 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0012 secs

Status code distribution:
  [200]	146430 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.16.156/graphql

Summary:
  Total:	300.0571 secs
  Slowest:	0.2038 secs
  Fastest:	0.0524 secs
  Average:	0.1007 secs
  Requests/sec:	496.4922
  
  Total data:	33221648 bytes
  Size/request:	223 bytes

Response time histogram:
  0.052 [1]	|
  0.068 [77]	|
  0.083 [6534]	|■■■■
  0.098 [62162]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.113 [66292]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.128 [8014]	|■■■■■
  0.143 [1442]	|■
  0.158 [1558]	|■
  0.174 [1921]	|■
  0.189 [881]	|■
  0.204 [94]	|


Latency distribution:
  10% in 0.0871 secs
  25% in 0.0925 secs
  50% in 0.0988 secs
  75% in 0.1053 secs
  90% in 0.1124 secs
  95% in 0.1210 secs
  99% in 0.1692 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0524 secs, 0.2038 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0008 secs
  resp wait:	0.1006 secs, 0.0523 secs, 0.2037 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0008 secs

Status code distribution:
  [200]	148976 responses



