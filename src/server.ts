import { app } from './elysia'
 
app.listen(  process.env.PORT)

console.log(`Server running on port 3000 (PID: ${process.pid})`)
