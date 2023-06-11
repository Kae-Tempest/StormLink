import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ inertia }) => {
  return inertia.render("Home");
});

Route.get("/post/:id", async ({ inertia }) => {
  return inertia.render("Post");
});

Route.get("/login", async({ inertia }) => {
  return inertia.render("Login")
})

Route.post("/postimg", "PostsController.storeimg");
Route.post("/posttxt", "PostsController.storetxt");
Route.get("/post", "PostsController.index");
Route.get("/postinfo/:id", "PostsController.show");

Route.get("/user/:id", "UsersController.show");
