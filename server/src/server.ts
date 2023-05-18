import fastify from "fastify";

const app = fastify();

app.post('/hello', () => {
  return 'Hello World'
});

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running on!!');
});
