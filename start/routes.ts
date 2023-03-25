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
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";
import Application from '@ioc:Adonis/Core/Application'

Route.get("/", async ({ inertia }) => {
  return inertia.render("Home");
});

Route.post('/postimg', async ({ request, response}) => {
  console.log({
    body: request.body(),
    file: request.file('file',{
      size: '5mb',
      extnames: ['jpg','png','gif']
    })
  })
  const postInfo = request.body()
  const postFile = request.file('file', {
    size: '5mb',
    extnames: ['jpg','png','gif']
  })
  if (!postFile) return
  if (!postFile.isValid) return postInfo.errors

  // Voir ce que fais le .move et voir si le path ./ est a la racine de C:
  await postFile.move(Application.tmpPath('uploads'))
  await postFile.moveToDisk('./')

  return response
})
