import {Hono} from 'hono'
import {z} from 'zod'
import {zValidator} from '@hono/zod-validator'

const app = new Hono()


app.get('/', (c) => {
    return c.text('Hello Hono!')
})

app.get('/hello', (c) => {
    return c.json({message: `Hello!`,})
})


const route = app.get(
    '/hello2',
    zValidator(
        'query',
        z.object({
            name: z.string(),
        })
    ),
    (c) => {
        const {name} = c.req.valid('query')
        c.header('X-Message', 'Hi!')
        return c.json({
            ok: true,
            message: `Hello! ${name}`,
        })
    }
)


export default app
