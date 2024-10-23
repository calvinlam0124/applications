import {serveStatic} from 'hono/bun'
import exampleRoute from './routes/example'
import jsxRoute from './routes/jsx'
import snippetsRoute from './routes/snippets'
import openapiRoute from './routes/openapi'
import {OpenAPIHono} from "@hono/zod-openapi";
import {prettyJSON} from 'hono/pretty-json'
import {getRouterName, showRoutes} from 'hono/dev'
import {swaggerUI} from '@hono/swagger-ui'

const app = new OpenAPIHono();

app.use('/public/*', serveStatic({root: './'}))
// app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.use('*', prettyJSON())


// custom router
app.route('/', exampleRoute)
app.route('/', jsxRoute)
app.route('/users', snippetsRoute)
app.route('/openapi', openapiRoute)
app.get('/env', (c) => c.text(JSON.stringify(process.env, null, 4)))

// openapi
app.doc('/doc', {openapi: '3.0.0', info: {version: '1.0.0', title: 'My API',}})
app.get('/ui', swaggerUI({url: '/doc'}))

// before end of app
app.onError((err, c) => {
    console.error(`${err}`);
    return c.text('Custom Error Message', 500);
})

app.notFound((c) => {
    return c.text('Custom 404 Message', 404);
})


if (!!process.env.DEBUG_ROUTES) {
    console.log(getRouterName(app))
    showRoutes(app, {
        verbose: true,
    })
}
export default {
    port: Number(process.env.PORT) || 3000,
    fetch: app.fetch,
}