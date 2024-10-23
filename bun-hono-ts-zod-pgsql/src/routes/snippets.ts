import {Hono} from 'hono'
import {drizzle} from 'drizzle-orm/node-postgres'
import {zValidator} from '@hono/zod-validator'
import {usersTable, insertUserSchema, updateUserSchema} from '../db/schema';
import {eq} from "drizzle-orm";
import db from '../db/connection'


const app = new Hono()

app.get('/', async (c) => {
    // const db = drizzle(process.env.DATABASE_URL!);
    const users = await db.select().from(usersTable);
    return c.json(users)
})

app.get('/:id', async (c) => {
    const {id} = c.req.param()
    const db = drizzle(process.env.DATABASE_URL!);
    const user = await db.select().from(usersTable).where(eq(usersTable.id, Number(id))).limit(1)
    return c.json(user)
})

app.post('/', zValidator('json', insertUserSchema), async (c) => {
    const user = c.req.valid('json')
    const db = drizzle(process.env.DATABASE_URL!);
    await db.insert(usersTable).values(user)
    return c.json(user)
})

app.put('/:id', zValidator('json', updateUserSchema), async (c) => {
    const {id} = c.req.param()
    const user = c.req.valid('json')
    const db = drizzle(process.env.DATABASE_URL!);
    await db.update(usersTable)
        .set(user)
        .where(eq(usersTable.id, Number(id)));
    return c.json(user)
})

app.delete('/:id', async (c) => {
    const {id} = c.req.param()
    const db = drizzle(process.env.DATABASE_URL!);
    await db.delete(usersTable).where(eq(usersTable.id, Number(id)));
    return c.text('ok')
})


export default app
