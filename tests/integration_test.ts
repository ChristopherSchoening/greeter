import { assertEquals } from 'https://deno.land/std@0.192.0/testing/asserts.ts'

Deno.test("POST / with 'hello' should return 'olleh'", async () => {
  const command = new Deno.Command('deno', {
    args: ['run', '--allow-net', '../src/main.ts'],
    cwd: './src',
    stdout: 'null',
    stderr: 'null',
  })
  const process = command.spawn()

  // Wait for the server to start
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const response = await fetch('http://localhost:8000', {
      method: 'POST',
      body: 'hello',
    })

    assertEquals(response.status, 200)
    const text = await response.text()
    assertEquals(text, 'olleh')
  } finally {
    // Ensure the process is terminated
    if (process.pid) {
      process.kill()
      await process.status // Wait for the process to terminate
    }
  }
})

Deno.test("POST / with 'olleh' should return 'hello'", async () => {
  const command = new Deno.Command('deno', {
    args: ['run', '--allow-net', '../src/main.ts'],
    cwd: './src',
    stdout: 'null',
    stderr: 'null',
  })
  const process = command.spawn()

  // Wait for the server to start
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const response = await fetch('http://localhost:8000', {
      method: 'POST',
      body: 'olleh',
    })

    assertEquals(response.status, 200)
    const text = await response.text()
    assertEquals(text, 'hello')
  } finally {
    // Ensure the process is terminated
    if (process.pid) {
      process.kill()
      await process.status // Wait for the process to terminate
    }
  }
})
