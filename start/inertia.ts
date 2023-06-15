import Inertia from "@ioc:EidelLev/Inertia";

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get("errors");
  },
  params: ({ params }) => params,
  currentUser: (ctx) => {
    return ctx.auth.user
  },
}).version(() => Inertia.manifestFile("public/assets/manifest.json"));
