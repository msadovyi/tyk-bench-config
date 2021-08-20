docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.12.80

# Summary:
  Total:	300.0133 secs
  Slowest:	0.1962 secs
  Fastest:	0.0007 secs
  Average:	0.0150 secs
  Requests/sec:	4057.8537
  
  Total data:	519834070 bytes
  Size/request:	519 bytes

Response time histogram:
  0.001 [1]	|
  0.020 [812974]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.040 [116934]	|■■■■■■
  0.059 [52637]	|■■■
  0.079 [12558]	|■
  0.098 [3541]	|
  0.118 [1008]	|
  0.138 [264]	|
  0.157 [59]	|
  0.177 [17]	|
  0.196 [7]	|


Latency distribution:
  10% in 0.0017 secs
  25% in 0.0033 secs
  50% in 0.0067 secs
  75% in 0.0139 secs
  90% in 0.0339 secs
  95% in 0.0445 secs
  99% in 0.0678 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0007 secs, 0.1962 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0083 secs
  resp wait:	0.0149 secs, 0.0006 secs, 0.1962 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0064 secs

Status code distribution:
  [200]	1000000 responses

# Summary:
  Total:	300.0105 secs
  Slowest:	0.2299 secs
  Fastest:	0.0007 secs
  Average:	0.0150 secs
  Requests/sec:	3995.8865
  
  Total data:	511891016 bytes
  Size/request:	511 bytes

Response time histogram:
  0.001 [1]	|
  0.024 [835038]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.047 [123009]	|■■■■■■
  0.069 [33131]	|■■
  0.092 [6887]	|
  0.115 [1523]	|
  0.138 [319]	|
  0.161 [76]	|
  0.184 [12]	|
  0.207 [2]	|
  0.230 [2]	|


Latency distribution:
  10% in 0.0018 secs
  25% in 0.0034 secs
  50% in 0.0070 secs
  75% in 0.0147 secs
  90% in 0.0336 secs
  95% in 0.0441 secs
  99% in 0.0675 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0007 secs, 0.2299 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0029 secs
  resp wait:	0.0149 secs, 0.0006 secs, 0.2298 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0030 secs

Status code distribution:
  [200]	1000000 responses

# Summary:
  Total:	300.0126 secs
  Slowest:	0.1944 secs
  Fastest:	0.0007 secs
  Average:	0.0150 secs
  Requests/sec:	4056.2169
  
  Total data:	519623132 bytes
  Size/request:	519 bytes

Response time histogram:
  0.001 [1]	|
  0.020 [812888]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.039 [118307]	|■■■■■■
  0.059 [51617]	|■■■
  0.078 [12419]	|■
  0.098 [3458]	|
  0.117 [969]	|
  0.136 [252]	|
  0.156 [62]	|
  0.175 [21]	|
  0.194 [6]	|


Latency distribution:
  10% in 0.0017 secs
  25% in 0.0034 secs
  50% in 0.0068 secs
  75% in 0.0142 secs
  90% in 0.0333 secs
  95% in 0.0439 secs
  99% in 0.0669 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0007 secs, 0.1944 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0020 secs
  resp wait:	0.0149 secs, 0.0006 secs, 0.1943 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0062 secs

Status code distribution:
  [200]	1000000 responses

{ avgLatency: 0.015, avgRegSec: 4036.6523666666667, avgReqs: 1000000 }