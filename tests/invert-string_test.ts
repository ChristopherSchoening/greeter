import { assertEquals } from '@std/assert'
import { invertString } from '../src/lib/invert-string.ts'

Deno.test(function invertStringWorks() {
  const inputs = ['foobar', 'barfoo', 'bazbar']
  for (const input in inputs) {
    const inverted = input.split('').reverse().join('')
    assertEquals(invertString(input), inverted)
  }
})
