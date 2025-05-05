# What the program should do

A server that accepts a request (string) and responds with the inverted string.
If the string contains "foo" the server should respond with a bad request code (400).

# Prerequisites

* Deno -> https://deno.com/
* curl should be installed

# Run these commands to get started

### Run the program on default port (8000)
deno run --allow-net src/main.ts

### Run the program on a specific port (here 8080)
deno run --allow-net src/main.ts 8080

### Run the program on default port and watch for file changes
deno task dev

### Run the tests
deno test --allow-net --allow-run

### Example Request (on port 8000)
curl -X POST -d "hello" http://localhost:8000/

### Example Failing Request (on port 8000)
curl -X POST -d "foobar" http://localhost:8000/
