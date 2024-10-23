# questions

### coding
- able to implement within a single file (as flatten as possible)
- (rules) use single action controller
- set DB migration and seeder if possible
- able to apply git convention to comment and create MR 
- (bonus: consider performance and security)

### documentation
- able to draw a diagram (bonus: mermaid)

### unit test and integration test
- able to implement unit test with data provider
- able to use curl for integration test

# general question

### general
- able to understand and analyst the user story / task

# HTTP headers
- Accept-Encoding header
- Language / i18n
- compress
- cors header


##### curl
base on below curl command to set up a backend server and provide a sequence diagram
```sh
curl 'https://localhost/test?' \
  -X POST \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0' \
  -H 'Accept: text/html' \
  -H 'Accept-Language: zh-Hant-HK,en;q=0.5' \
  -H 'Accept-Encoding: gzip, deflate, br, zstd' \
  -H 'content-type: application/json' \
  -H 'Origin: http://localhost:8080' \
  -H 'Referer: http://localhost:8080' \
  -H 'Cookie: abc=123' \
  -H 'Cookie: _ga_LE9GHTERHJ=GS1.1.1729484738.4.1.1729484784.0.0.0; _ga=GA1.1.1985016729.1729243485; _fbp=fb.1.1729243485516.90676191845644303; XSRF-TOKEN=eyJpdiI6IjNGSWx5NkZhRHptUTFKNktGaUZzbmc9PSIsInZhbHVlIjoicFNEWFV2VWN2bCswWk5uM0xGakExS0RIVWNEWkI0c1Q2c2tRdUZJOG5OV1lFM01WNGVWT09XSXdrcTA3UWp5QmJYTnFNZ2tXaFdxd1FIb2xBSDhGVkRZSG9meG82MTNhdk5oRFBGS0l5VTVUQkhHWFVlN25rMEhzTVM3MkVPeHAiLCJtYWMiOiI5MDEzYzRjNWUwYWY1YzdhYzVmMWI3ZWQwMDMxMTZmMzY1YTdlMGRlZDIzMmFhZTlmMzQ3ZGU3OGIyNWJjNzBmIiwidGFnIjoiIn0%3D; laravel_news_session=eyJpdiI6InVzOWpOcUQ4SFpDUnpqcGJXOStEM3c9PSIsInZhbHVlIjoic3IvZmZCcWFZbzVhRGlTaDlyT214MldSVzc1c2VWWExucDhpTVVmYnJZYWdiZkZPOTYwWEpxc05SSlRPdlVoMkhCTTU5bEVzS1lYSmxpYUVyOUpXcVZvUzlLb1d3ZjkvSngzbms2cWU2TVNyMzM4Mm1zY2lndVhDS2FETU4xekUiLCJtYWMiOiIzN2Q4ODE5MzRjOTM2ZWViYWJiYjE1NzU1MmRiNmM0NjFmMDY3YTU3ZjQyODE3ZGZjMTExYjcwZWRlNTRhZDBmIiwidGFnIjoiIn0%3D' \
  -H 'TE: gzip' \
  --data-raw '{"memory":{},"resources":[],"referrer":"https://laravel-news.com/","eventType":1,"firstPaint":0,"firstContentfulPaint":635,"startTime":1729484784018,"versions":{"fl":"2024.10.1","js":"2024.6.1","timings":2},"pageloadId":"eea1007b-e3c9-47d6-a8af-6ce83e1c1b0e","location":"https://laravel-news.com/always-render-api-exceptions-as-json-in-laravel","nt":"reload","serverTimings":[{"name":"cfCacheStatus","dur":0,"desc":"DYNAMIC"}],"timingsV2":{"unloadEventStart":515,"unloadEventEnd":520,"domInteractive":631,"domContentLoadedEventStart":653,"domContentLoadedEventEnd":656,"domComplete":1005,"loadEventStart":1005,"loadEventEnd":1005,"type":"reload","redirectCount":0,"initiatorType":"navigation","nextHopProtocol":"h2","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":1,"domainLookupStart":27,"domainLookupEnd":28,"connectStart":28,"connectEnd":36,"secureConnectionStart":36,"requestStart":36,"responseStart":493,"responseEnd":493,"transferSize":11929,"encodedBodySize":11629,"decodedBodySize":68552,"responseStatus":200,"contentType":"text/html","name":"https://laravel-news.com/always-render-api-exceptions-as-json-in-laravel","entryType":"navigation","startTime":0,"duration":1005},"siteToken":"036ae43092b6429fbf4c640fd73dc0e2","st":2}'
```