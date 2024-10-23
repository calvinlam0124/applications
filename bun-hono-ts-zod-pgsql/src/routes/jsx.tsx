import {Hono} from 'hono'

const app = new Hono()

const View = () => {
    return (
        <html>
        <body>
        <h1>Hello JSX!</h1>
        </body>
        </html>
    )
}

app.get('/jsx', (c) => {
    return c.html(<View />)
})

export default app