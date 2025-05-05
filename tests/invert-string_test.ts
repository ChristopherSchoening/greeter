import { assertEquals } from '@std/assert'
import { invertString } from '../src/lib/invert-string.ts'

Deno.test(function invertStringWorks() {
  assertEquals(invertString('foobar'), 'foobar'.split('').reverse().join(''))
})

Deno.test(function invertStringWorks2() {
  assertEquals(invertString('barfoo'), 'barfoo'.split('').reverse().join(''))
})
