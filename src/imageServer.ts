const cors = require('cors');
const duck = require('duckduckgo-images-api');
const express = require('express');

const app = express();
app.use(cors());

app.get('/', async (req: any, res: any) => {
  const images: any = [];
  const query  = '짤 ' + req.query.q;
  for await (const resultSet of await duck.image_search_generator({ query, moderate: true , iterations : 1})) {
      // @ts-ignore
      resultSet.forEach((element: Images) => {
        images.push(element);
      });
  }
  res.json(images);
});

app.listen(3000, () => {
  console.log('App listening on port http://localhost:3000 !');
});
