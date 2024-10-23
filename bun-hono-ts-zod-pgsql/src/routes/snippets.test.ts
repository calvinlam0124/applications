import { describe, expect, test } from 'bun:test'
import app from './snippets'


describe('Snippets routes', () => {
    test('GET /', async () => {
        const res = await app.request('/')
        expect(res.status).toBe(200)
        expect(await res.text()).toBe('[{"id":1,"name":"John","age":123,"email":"Rigoberto.Pacocha69@hotmail.com"}]')
    })
})