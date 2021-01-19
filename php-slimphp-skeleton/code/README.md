# Slim Framework 4 Skeleton Application

To run the application in development, you can run these commands 
```bash
# set document root as "public/"
chmod -R 777 logs/
composer start
composer test
```


### Route
```php
var_dump(
    $app->getRouteCollector()->getRoutes()
);
die("die");

```

### Twig
https://www.slimframework.com/docs/v4/objects/routing.html#container-resolution

### Console
https://odan.github.io/slim4-skeleton/console.html
