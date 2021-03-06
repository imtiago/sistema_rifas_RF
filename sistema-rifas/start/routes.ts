/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/temperature/calculate', 'UsersController.calculateTemp')
Route.post('/users/login', 'UsersController.login')
Route.group(() => {
    Route.post('/add', 'UsersController.store')
    Route.get('/', 'UsersController.index')
  })
  .prefix('/users')
Route.group(() => {
    Route.post('/add', 'ProductsController.store')
    Route.get('/', 'ProductsController.index')
    Route.get('/:name', 'ProductsController.index')
  })
  .prefix('/products')
Route.group(() => {
    // Route.post('/add', 'ProductsController.store')
    Route.get('/', 'ConcursosController.index')
    // Route.get('/:name', 'ProductsController.index')
  })
  .prefix('/concursos')
Route.group(() => {
    Route.post('/add', 'AddressController.store')
    Route.get('/', 'AddressController.index')
  })
  .prefix('/address')

Route.get('/', async () => {
  return { hello: 'world' }
})
