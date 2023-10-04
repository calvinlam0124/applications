import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono({strict: false})

const customErrorMap = (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
        if (issue.expected === "string") {
            return { message: "bad type!" };
        }
    }
    if (issue.code === z.ZodIssueCode.custom) {
        return { message: `less-than-${(issue.params || {}).minimum}` };
    }
    return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
app.get('/', (c) => c.text('Hello Hono!'))
app.get('/health', (c) => c.text('ok'))
app.get('/ping', (c) => c.text('pong'))
app.get('/error', (c) => {c.text('nothing'); throw Error('default-error'); })
// @ts-ignore // process
app.get('/env', (c) => c.text(JSON.stringify(process.env, null, 4)))


app.post(
    '/todo',
    zValidator(
        'form',
        z.object({
            title: z.string().min(1)
        })
    ),
    async (c) => {
        const { title } = c.req.valid('form')
        const id = crypto.randomUUID()
        return c.html(id)
    }
)

app.onError((err, c) => { console.error(`${err}`); return c.text('Custom Error Message', 500);})

app.notFound((c) => { return c.text('Custom 404 Message', 404);})

app.showRoutes() // @TODO: for local debug only, or move it to any console repl
export default app
