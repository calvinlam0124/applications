import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono({strict: false})

// app.get('/', (c) => c.text('Hello Hono!'))
app.get('/health', (c) => c.text('ok'))
app.get('/ping', (c) => c.text('pong'))
app.get('/test', (c) => {c.text('pong'); throw Error('23123');})
// // @ts-ignore // process
// app.get('/env', (c) => c.text(JSON.stringify(process.env)))
//
// app.post(
//     '/todo',
//     zValidator(
//         'form',
//         z.object({
//             title: z.string().min(1)
//         })
//     ),
//     async (c) => {
//         const { title } = c.req.valid('form')
//         const id = crypto.randomUUID()
//         return c.html(id)
//     }
// )
app.get('/', (c) => c.text('Hello Hono!'))

// app.onError((err, c) => {
//     console.error(`${err}`)
//     return c.text('Custom Error Message', 500)
// })
//
// app.notFound((c) => {
//     return c.text('Custom 404 Message', 404)
// })
//
// console.log(app.showRoutes())
export default app
