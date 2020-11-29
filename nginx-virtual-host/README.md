### Setup
set below domain in your hosts file `/etc/hosts`
```txt
127.0.0.1       server-a.tld
127.0.0.1       server-b.tld
```

### Run
```sh
docker-compose up
```

### Test
```sh
# curl --head --compress http://server-a.tld:8080/
curl -H "Accept-Encoding: gzip" -I http://default.localhost:8080/
curl -H "Accept-Encoding: gzip" -I http://server-a.tld:8080/
curl -H "Accept-Encoding: gzip" -I http://server-b.tld:8080/
```
