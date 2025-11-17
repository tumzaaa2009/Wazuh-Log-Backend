import { Elysia } from 'elysia'

export const app = new Elysia()
    .get('/', () => `Hello from Worker ${process.pid}`)
    .get('/health', () => ({ status: 'ok', pid: process.pid }))
