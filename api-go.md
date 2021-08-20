# docker run --rm -it rcmorano/docker-hey -z 1m -c 100 -q 30000 -t 65 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80
Summary:
  Total:	61.9915 secs
  Slowest:	8.4097 secs
  Fastest:	0.2951 secs
  Average:	3.6188 secs
  Requests/sec:	27.3425
  

Response time histogram:
  0.295 [1]	|
  1.107 [2]	|
  1.918 [18]	|■
  2.729 [293]	|■■■■■■■■■■■■■■■■■■■■■■
  3.541 [506]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  4.352 [543]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  5.164 [231]	|■■■■■■■■■■■■■■■■■
  5.975 [73]	|■■■■■
  6.787 [25]	|■■
  7.598 [1]	|
  8.410 [2]	|


Latency distribution:
  10% in 2.4405 secs
  25% in 2.9421 secs
  50% in 3.5854 secs
  75% in 4.1865 secs
  90% in 4.8652 secs
  95% in 5.2393 secs
  99% in 6.3444 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0004 secs, 0.2951 secs, 8.4097 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0001 secs, 0.0000 secs, 0.0158 secs
  resp wait:	2.8678 secs, 0.1897 secs, 7.6625 secs
  resp read:	0.7502 secs, 0.0027 secs, 2.1976 secs

Status code distribution:
  [200]	1695 responses

# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80

Summary:
  Total:	300.9496 secs
  Slowest:	5.1835 secs
  Fastest:	0.2513 secs
  Average:	1.8190 secs
  Requests/sec:	27.4531
  

Response time histogram:
  0.251 [1]	|
  0.744 [72]	|■
  1.238 [996]	|■■■■■■■■■■■■■■
  1.731 [2813]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.224 [2654]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.717 [1216]	|■■■■■■■■■■■■■■■■■
  3.211 [401]	|■■■■■■
  3.704 [90]	|■
  4.197 [12]	|
  4.690 [6]	|
  5.183 [1]	|


Latency distribution:
  10% in 1.1794 secs
  25% in 1.4355 secs
  50% in 1.7722 secs
  75% in 2.1452 secs
  90% in 2.5244 secs
  95% in 2.7955 secs
  99% in 3.2726 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.2513 secs, 5.1835 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0005 secs
  resp wait:	1.5901 secs, 0.1546 secs, 4.4228 secs
  resp read:	0.2288 secs, 0.0024 secs, 1.6403 secs

Status code distribution:
  [200]	8262 responses



# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80
Summary:
  Total:	300.8367 secs
  Slowest:	4.8786 secs
  Fastest:	0.1192 secs
  Average:	1.8215 secs
  Requests/sec:	27.4135
  

Response time histogram:
  0.119 [1]	|
  0.595 [36]	|■
  1.071 [549]	|■■■■■■■■
  1.547 [2212]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.023 [2721]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.499 [1772]	|■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.975 [671]	|■■■■■■■■■■
  3.451 [214]	|■■■
  3.927 [54]	|■
  4.403 [12]	|
  4.879 [5]	|


Latency distribution:
  10% in 1.1486 secs
  25% in 1.4221 secs
  50% in 1.7681 secs
  75% in 2.1593 secs
  90% in 2.5699 secs
  95% in 2.8398 secs
  99% in 3.3951 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.1192 secs, 4.8786 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0005 secs
  resp wait:	1.6214 secs, 0.0931 secs, 4.6373 secs
  resp read:	0.2000 secs, 0.0024 secs, 1.3270 secs

Status code distribution:
  [200]	8247 responses


# docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ authors { id fullName books { title author { id fullName } } } }" }' -T "application/json" http://172.31.12.80
Summary:
  Total:	301.0078 secs
  Slowest:	4.6758 secs
  Fastest:	0.1218 secs
  Average:	1.8219 secs
  Requests/sec:	27.4146
  

Response time histogram:
  0.122 [1]	|
  0.577 [37]	|■
  1.033 [424]	|■■■■■■
  1.488 [1996]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  1.943 [2673]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.399 [1898]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  2.854 [807]	|■■■■■■■■■■■■
  3.310 [309]	|■■■■■
  3.765 [82]	|■
  4.220 [21]	|
  4.676 [4]	|


Latency distribution:
  10% in 1.1505 secs
  25% in 1.4211 secs
  50% in 1.7682 secs
  75% in 2.1635 secs
  90% in 2.5689 secs
  95% in 2.8581 secs
  99% in 3.4040 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.1218 secs, 4.6758 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0013 secs
  resp wait:	1.6033 secs, 0.0725 secs, 4.2041 secs
  resp read:	0.2185 secs, 0.0027 secs, 1.3986 secs

Status code distribution:
  [200]	8252 responses
