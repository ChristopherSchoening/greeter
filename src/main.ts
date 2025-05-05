import { serve } from 'https://deno.land/std@0.192.0/http/server.ts'
import { invertString } from './lib/invert-string.ts'
import { validateInput } from './lib/validate-input.ts'

if (import.meta.main) {
  const defaultPort = 8000
  const portArg = Deno.args[0]
  const port = portArg ? Number(portArg) : defaultPort

  console.log(`HTTP server is running. Access it at: http://localhost:${port}/`)

  serve(
    async (req) => {
      if (req.method === 'POST') {
        try {
          const body = await req.text()

          const isInvalidInput = validateInput(body)
          if (isInvalidInput) throw `Invalid input: ${body}`

          const inverted = invertString(body)

          return new Response(inverted, { status: 200 })
        } catch (_err) {
          return new Response('Invalid request', { status: 500 })
        }
      } else {
        return new Response('Only POST requests are supported', { status: 405 })
      }
    },
    { port }
  )
}
