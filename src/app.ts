import express, { Express, Request, Response } from "express";
// import { Test } from "./client/Test";
import { Success } from "./client/Sucess";
import { renderToPipeableStream } from "react-dom/server";
const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
	// console.log(_req);
	// debugger;
	res.setHeader("Content-type", "text/html; charset=utf-8");
	// res.send("Express + TypeScript Server");
	// console.log(res);
	renderToPipeableStream(Success(), {
		onShellError(error) {
			console.log(error);
			// Something errored before we could complete the shell so we emit an alternative shell.
			res.statusCode = 500;
			res.send(
				'<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
			);
		},
		onAllReady() {
			// If you don't want streaming, use this instead of onShellReady.
			// This will fire after the entire page content is ready.
			// You can use this for crawlers or static generation.
			// res.statusCode = didError ? 500 : 200;
			// res.setHeader('Content-type', 'text/html');
			// stream.pipe(res);
		},
		onError(err) {
			console.error(err);
			res.statusCode = 500;
			// res.send(FiveHundredPage())
		},
	}).pipe(res);
});

app.post("/portfolio-submission", (_req: Request, res: Response) => {
    // TODO: validate all form fields are valid, use zod?
    // TODO: If any fields are invalid, pass props to RetryFormSubmit component
    // TODO: if all fields are valid, attempt to send email
    // TODO: if email is successful respond with Success component 
	res.setHeader("Content-type", "text/html; charset=utf-8");
	// res.send("Express + TypeScript Server");
	// console.log(res);
	renderToPipeableStream(Success(), {
		onShellError(error) {
			console.log(error);
			// Something errored before we could complete the shell so we emit an alternative shell.
			res.statusCode = 500;
			res.send(
				'<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
			);
		},
		onAllReady() {
			// If you don't want streaming, use this instead of onShellReady.
			// This will fire after the entire page content is ready.
			// You can use this for crawlers or static generation.
			// res.statusCode = didError ? 500 : 200;
			// res.setHeader('Content-type', 'text/html');
			// stream.pipe(res);
		},
		onError(err) {
			console.error(err);
			res.statusCode = 500;
			// res.send(FiveHundredPage())
		},
	}).pipe(res);
});
export { app };
