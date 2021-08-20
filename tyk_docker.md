change host in api_test.json

docker run -p 80:8080 -d --name tyk_gateway --ulimit nofile=80000:80000 --log-opt max-size=10m --network tyk --log-opt max-file=5 -e GOGC=1600 -v $(pwd)/tyk.standalone.conf:/opt/tyk-gateway/tyk.conf -v $(pwd)/apps:/opt/tyk-gateway/apps tykio/tyk-gateway:latest