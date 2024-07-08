const express = require('express');
const app = express();
const pug = require('pug');
const apiRouter = require('./api');
const authRouter = require('./auth');
const furnitureDesignsController = require('./controllers/furniture-designs');
const materialsController = require('./controllers/materials');
const suppliersController = require('./controllers/suppliers');

app.get('/suppliers', suppliersController.index);
app.post('/suppliers', suppliersController.create);
app.get('/suppliers/:id/edit', suppliersController.edit);
app.put('/suppliers/:id', suppliersController.update);
app.delete('/suppliers/:id', suppliersController.delete);
app.get('/materials', materialsController.index);
app.post('/materials', materialsController.create);
app.get('/materials/:id/edit', materialsController.edit);
app.put('/materials/:id', materialsController.update);
app.delete('/materials/:id', materialsController.delete);
app.get('/furniture-designs', furnitureDesignsController.index);
app.post('/furniture-designs', furnitureDesignsController.create);
app.get('/furniture-designs/:id/edit', furnitureDesignsController.edit);
app.put('/furniture-designs/:id', furnitureDesignsController.update);
app.delete('/furniture-designs/:id', furnitureDesignsController.delete);
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use('/api', apiRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});