import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  let body: any;

  try{
    body = await c.req.json();
  }catch{}
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  //Added the link to slides of this class serverless function - https://projects.100xdevs.com/tracks/eooSv7lnuwBO6wl9YA5w/serverless-3
  return c.text('Hello Hono!')
})

export default app
