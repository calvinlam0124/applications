### Usage
```sh

make start
open http://localhost/test.php

```

### nginx-vhost
```bash
# health check
# curl http://localhost:12345/ping

curl site1.localhost.tld:8080
curl site2.localhost.tld:8080
curl app.localhost.tld:8080/test.php
curl app.localhost.tld:8080/public/index.html
curl app.localhost.tld:8080/public/
```