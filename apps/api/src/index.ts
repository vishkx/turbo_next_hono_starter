import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS configuration with environment variable support
const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3001']

app.use('*', cors({
  origin: allowedOrigins,
}))

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Root endpoint
app.get('/', (c) => {
  return c.text('Hello Hono! 🔥')
})

// JSON API endpoint
app.get('/api', (c) => {
  return c.json({
    message: 'Welcome to the Hono API! 🔥',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      root: '/',
      api: '/api'
    }
  })
})

export default app
