import { Router } from "@layer0/core/router";
import { nextRoutes } from "@layer0/next";

let prerenderPages = ["/"];
export default new Router()
	.prerender(prerenderPages.map((page) => ({ path: page })))
	.match("/service-worker.js", ({ serviceWorker }) => {
		return serviceWorker(".next/static/service-worker.js");
	})
	.use(nextRoutes);
