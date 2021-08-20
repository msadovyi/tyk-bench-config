# docker run --rm -it rcmorano/docker-hey -z 1m -c 100 -q 30000 -t 65 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/graphql
Summary:
  Total:	66.5086 secs
  Slowest:	11.7294 secs
  Fastest:	0.9693 secs
  Average:	10.7792 secs
  Requests/sec:	9.2319
  
  Total data:	130284660 bytes
  Size/request:	212190 bytes

Response time histogram:
  0.969 [1]	|
  2.045 [7]	|■
  3.121 [3]	|
  4.197 [0]	|
  5.273 [2]	|
  6.349 [1]	|
  7.425 [3]	|
  8.501 [0]	|
  9.577 [0]	|
  10.653 [52]	|■■■■
  11.729 [545]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


Latency distribution:
  10% in 10.5909 secs
  25% in 10.7605 secs
  50% in 10.8289 secs
  75% in 11.1615 secs
  90% in 11.6444 secs
  95% in 11.6734 secs
  99% in 11.7009 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0004 secs, 0.9693 secs, 11.7294 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0006 secs
  resp wait:	7.7351 secs, 0.9602 secs, 11.3102 secs
  resp read:	3.0435 secs, 0.0036 secs, 6.4231 secs

Status code distribution:
  [200]	614 responses


# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api
Summary:
  Total:	303.1274 secs
  Slowest:	8.3573 secs
  Fastest:	2.5659 secs
  Average:	5.3120 secs
  Requests/sec:	9.3624
  
  Total data:	602195220 bytes
  Size/request:	212190 bytes

Response time histogram:
  2.566 [1]	|
  3.145 [31]	|■
  3.724 [80]	|■■■
  4.303 [168]	|■■■■■■
  4.882 [499]	|■■■■■■■■■■■■■■■■■■
  5.462 [1113]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  6.041 [511]	|■■■■■■■■■■■■■■■■■■
  6.620 [149]	|■■■■■
  7.199 [200]	|■■■■■■■
  7.778 [73]	|■■■
  8.357 [13]	|


Latency distribution:
  10% in 4.3096 secs
  25% in 4.7628 secs
  50% in 5.3680 secs
  75% in 5.5805 secs
  90% in 6.6696 secs
  95% in 7.0797 secs
  99% in 7.4978 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 2.5659 secs, 8.3573 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0005 secs
  resp wait:	4.9021 secs, 2.3502 secs, 8.3530 secs
  resp read:	0.4098 secs, 0.0023 secs, 3.0591 secs

Status code distribution:
  [200]	2838 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api
Summary:
  Total:	303.6476 secs
  Slowest:	8.3805 secs
  Fastest:	0.9225 secs
  Average:	5.2704 secs
  Requests/sec:	9.4254
  
  Total data:	607287780 bytes
  Size/request:	212190 bytes

Response time histogram:
  0.922 [1]	|
  1.668 [0]	|
  2.414 [1]	|
  3.160 [54]	|■■
  3.906 [110]	|■■■■
  4.652 [417]	|■■■■■■■■■■■■■■■■
  5.397 [1073]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  6.143 [816]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  6.889 [214]	|■■■■■■■■
  7.635 [153]	|■■■■■■
  8.381 [23]	|■


Latency distribution:
  10% in 4.2216 secs
  25% in 4.7776 secs
  50% in 5.3288 secs
  75% in 5.6822 secs
  90% in 6.5124 secs
  95% in 6.9946 secs
  99% in 7.5766 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.9225 secs, 8.3805 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0015 secs
  resp wait:	4.8791 secs, 0.9185 secs, 8.3762 secs
  resp read:	0.3912 secs, 0.0024 secs, 3.2377 secs

Status code distribution:
  [200]	2862 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.16.156/api
Summary:
  Total:	303.3600 secs
  Slowest:	8.3670 secs
  Fastest:	1.6768 secs
  Average:	5.3150 secs
  Requests/sec:	9.3519
  
  Total data:	601983030 bytes
  Size/request:	212190 bytes

Response time histogram:
  1.677 [1]	|
  2.346 [1]	|
  3.015 [14]	|
  3.684 [78]	|■■
  4.353 [160]	|■■■■
  5.022 [544]	|■■■■■■■■■■■■■■
  5.691 [1544]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  6.360 [214]	|■■■■■■
  7.029 [165]	|■■■■
  7.698 [88]	|■■
  8.367 [28]	|■


Latency distribution:
  10% in 4.4189 secs
  25% in 4.9195 secs
  50% in 5.3370 secs
  75% in 5.5231 secs
  90% in 6.3369 secs
  95% in 6.9347 secs
  99% in 7.7067 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 1.6768 secs, 8.3670 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0025 secs
  resp wait:	4.8282 secs, 1.6641 secs, 8.3628 secs
  resp read:	0.4867 secs, 0.0023 secs, 3.2874 secs

Status code distribution:
  [200]	2837 responses