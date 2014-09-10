import vibe.d;
import std.stdio;

import api;

void index(HTTPServerRequest req, HTTPServerResponse res)
{
    res.render!("index.dt", req);
}

shared static this()
{
    auto router = new URLRouter;
    router.get("/", &index);
    auto fsettings = new HTTPFileServerSettings;
    fsettings.serverPathPrefix = "/static";
    router.get("/static/*", serveStaticFiles("public/", fsettings));

    auto catRouter = new URLRouter("/api/cat");
    catRouter.registerRestInterface(new Cat());

    router.any("*", catRouter);

    auto settings = new HTTPServerSettings();
    settings.port = 8080;
    listenHTTP(settings, router);
}
