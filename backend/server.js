import express from 'express'
import data from './data.js';
//import { useParams } from 'react-router';

const app = express();

app.get('/api/products/{:id}:id', (req, res) => {
    const product = data.products.find((x) => number(x._id === req.params.id));
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

const port = process.env.PORT || 5000;

app.get('/api/products', (req,res)=>{
    res.send(data.products);
});

app.get('/', (req,res)=>{
    res.send('Server is ready!!!!!')
});

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`)
});
