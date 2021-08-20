
Summary:
  Total:	300.0419 secs
  Slowest:	0.9635 secs
  Fastest:	0.0210 secs
  Average:	0.1034 secs
  Requests/sec:	483.2926
  
  Total data:	32336784 bytes
  Size/request:	223 bytes

Response time histogram:
  0.021 [1]	|
  0.115 [131234]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.209 [13630]	|■■■■
  0.304 [119]	|
  0.398 [5]	|
  0.492 [4]	|
  0.586 [4]	|
  0.681 [2]	|
  0.775 [3]	|
  0.869 [2]	|
  0.963 [4]	|


Latency distribution:
  10% in 0.0896 secs
  25% in 0.0948 secs
  50% in 0.1007 secs
  75% in 0.1072 secs
  90% in 0.1147 secs
  95% in 0.1268 secs
  99% in 0.1885 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0210 secs, 0.9635 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0011 secs
  resp wait:	0.1033 secs, 0.0157 secs, 0.9622 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0057 secs

Status code distribution:
  [200]	145008 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
  Total:	300.0508 secs
  Slowest:	0.6697 secs
  Fastest:	0.0118 secs
  Average:	0.1031 secs
  Requests/sec:	484.9245
  
  Total data:	32446946 bytes
  Size/request:	223 bytes

Response time histogram:
  0.012 [1]	|
  0.078 [1111]	|
  0.143 [139543]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.209 [4716]	|■
  0.275 [110]	|
  0.341 [5]	|
  0.407 [4]	|
  0.472 [3]	|
  0.538 [3]	|
  0.604 [3]	|
  0.670 [3]	|


Latency distribution:
  10% in 0.0893 secs
  25% in 0.0947 secs
  50% in 0.1007 secs
  75% in 0.1072 secs
  90% in 0.1140 secs
  95% in 0.1218 secs
  99% in 0.1889 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0118 secs, 0.6697 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0007 secs
  resp wait:	0.1030 secs, 0.0075 secs, 0.6690 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0011 secs

Status code distribution:
  [200]	145502 responses



[ec2-user@ip-172-31-6-65 ~]$ docker run --rm -it rcmorano/docker-hey -z 5m -q 1500 -m POST -d '{ "query": "{ author { id books { author { fullName } } } }" }' -T "application/json" http://172.31.16.156/api

Summary:
  Total:	300.0586 secs
  Slowest:	0.9169 secs
  Fastest:	0.0230 secs
  Average:	0.1049 secs
  Requests/sec:	476.7602
  
  Total data:	31901488 bytes
  Size/request:	223 bytes

Response time histogram:
  0.023 [1]	|
  0.112 [122311]	|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.202 [20291]	|■■■■■■■
  0.291 [430]	|
  0.381 [3]	|
  0.470 [2]	|
  0.559 [4]	|
  0.649 [4]	|
  0.738 [3]	|
  0.828 [3]	|
  0.917 [4]	|


Latency distribution:
  10% in 0.0914 secs
  25% in 0.0966 secs
  50% in 0.1028 secs
  75% in 0.1087 secs
  90% in 0.1149 secs
  95% in 0.1226 secs
  99% in 0.1883 secs

Details (average, fastest, slowest):
  DNS+dialup:	0.0000 secs, 0.0230 secs, 0.9169 secs
  DNS-lookup:	0.0000 secs, 0.0000 secs, 0.0000 secs
  req write:	0.0000 secs, 0.0000 secs, 0.0013 secs
  resp wait:	0.1048 secs, 0.0171 secs, 0.9159 secs
  resp read:	0.0000 secs, 0.0000 secs, 0.0009 secs

Status code distribution:
  [200]	143056 responses



[ec2-user@ip-172-31-6-65 ~]$ 
