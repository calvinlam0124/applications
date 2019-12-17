### run
```sh
docker build -t calvinlam/helloworld-php .
docker push calvinlam/helloworld-php

docker build -t calvin/helloworld-php .
docker tag calvin/helloworld-php localhost:5000/calvin/helloworld-php
docker push localhost:5000/calvin/helloworld-php
```
