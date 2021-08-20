[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.12.80

Summary:
  Total:	300.0279 secs
  Slowest:	0.1380 secs
  Fastest:	0.0096 secs
  Average:	0.0289 secs
  Requests/sec:	1727.5195
  
  Total data:	121283136 bytes
  Size/request:	234 bytes

Response time histogram:
  0.010 [1]	|
  0.022 [718]	|
  0.035 [473524]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.048 [31459]	|■■■
  0.061 [11048]	|■
  0.074 [1024]	|
  0.087 [417]	|
  0.100 [80]	|
  0.112 [16]	|
  0.125 [13]	|
  0.138 [4]	|


Latency distribution:
  10% in 0.0250 secs
  25% in 0.0259 secs
  50% in 0.0275 secs
  75% in 0.0294 secs
  90% in 0.0335 secs
  95% in 0.0403 secs
  99% in 0.0556 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0096 secs, 0.1380 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0018 secs
  resp wait:	0.0289 secs, 0.0096 secs, 0.1379 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0014 secs

Status code distribution:
  [200]	518304 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.12.80

Summary:
  Total:	300.0290 secs
  Slowest:	0.1161 secs
  Fastest:	0.0070 secs
  Average:	0.0293 secs
  Requests/sec:	1704.0720
  
  Total data:	119637414 bytes
  Size/request:	234 bytes

Response time histogram:
  0.007 [1]	|
  0.018 [766]	|
  0.029 [323319]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.040 [159806]	|■■■■■■■■■■■■■■■■■■■■
  0.051 [16152]	|■■
  0.062 [9866]	|■
  0.072 [795]	|
  0.083 [430]	|
  0.094 [121]	|
  0.105 [8]	|
  0.116 [7]	|


Latency distribution:
  10% in 0.0253 secs
  25% in 0.0264 secs
  50% in 0.0279 secs
  75% in 0.0300 secs
  90% in 0.0341 secs
  95% in 0.0402 secs
  99% in 0.0564 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0070 secs, 0.1161 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0027 secs
  resp wait:	0.0292 secs, 0.0069 secs, 0.1160 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0055 secs

Status code distribution:
  [200]	511271 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.12.80

Summary:
  Total:	300.0310 secs
  Slowest:	0.1170 secs
  Fastest:	0.0087 secs
  Average:	0.0299 secs
  Requests/sec:	1673.1703
  
  Total data:	117468702 bytes
  Size/request:	234 bytes

Response time histogram:
  0.009 [1]	|
  0.019 [442]	|
  0.030 [368201]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.041 [109860]	|■■■■■■■■■■■■
  0.052 [12974]	|■
  0.063 [9150]	|■
  0.074 [791]	|
  0.085 [451]	|
  0.095 [117]	|
  0.106 [10]	|
  0.117 [6]	|


Latency distribution:
  10% in 0.0258 secs
  25% in 0.0269 secs
  50% in 0.0283 secs
  75% in 0.0305 secs
  90% in 0.0349 secs
  95% in 0.0408 secs
  99% in 0.0573 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0087 secs, 0.1170 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0065 secs
  resp wait:	0.0298 secs, 0.0086 secs, 0.1169 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0021 secs

Status code distribution:
  [200]	502003 responses

{
  avgLatency: 0.029366666666666666,
  avgRegSec: 1701.5872666666667,
  avgReqs: 510526
}
