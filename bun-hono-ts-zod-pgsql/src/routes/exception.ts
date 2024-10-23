import {Hono} from 'hono'
import {z} from 'zod'
import {zValidator} from '@hono/zod-validator'
import {HTTPException} from 'hono/http-exception'

const app = new Hono()


app
    .post
    ('/auth', async (c
        , next
    ) => {
        // authentication
        if (authorized
            === false) {
            throw new HTTPException
            (401, {
                message: 'Custom error message'
            })
        }
        await next
        ()
    })