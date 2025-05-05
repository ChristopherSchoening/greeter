# Prerequisites
Deno -> https://deno.com/

# Run these commands to get started

## Run the program
deno run src/main.ts

## Run the program and watch for file changes
deno task dev

## Run the tests
deno test

# What the program should do

A server that accepts a request (string) and responds with the inverted string.
If the string contains "foo" the server should respond with a bad input code.