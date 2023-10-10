import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { Sequelize } from 'sequelize';

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

app.get('/db', async ()=>{
    const DB_CONNECTION = process.env.DB_CONNECTION || 'mysql';
    const DB_HOST = process.env.DB_HOST || 'localhost';
    const DB_DATABASE = process.env.DB_DATABASE || 'app';
    const DB_USERNAME = process.env.DB_USERNAME || 'root';
    const DB_PASSWORD = process.env.DB_PASSWORD || 'pw';

    const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
        logging: (...msg) => console.log(msg),
        host: DB_HOST,
        dialect: DB_CONNECTION
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})


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
