/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		//
		if (request.method === 'POST') {
			console.dir('---1---',request.method)
			return httpPostHandler(request);
		} else {
			return httpGetHandler();
		}
		//
	},
};


const httpGetConstantString = `<h3>Welcome. this is HTML page.</h3>
<form method="post" action="."><input type="text" name="name"><input type="submit"></form>`;

async function httpGetHandler() {
	return new Response(httpGetConstantString, {
		headers: {
			"content-type": "text/html;charset=UTF-8",
		}
	})
}

async function httpPostHandler(request) {
	let body= {};
	const contentType = request.headers.get("content-type");
	if (contentType.includes("application/json")) {
		let json = JSON.stringify(await request.json());
	} else if (contentType.includes("application/text")) {
		let text = request.text();
	} else if (contentType.includes("text/html")) {
		let text = request.text();
	} else if (contentType.includes("form")) {
		const formData = await request.formData();
		const formBody = {};
		for (const entry of formData.entries()) {
			formBody[entry[0]] = entry[1];
		}
		body = formBody
	} else {
		let file = "a file";
	}

	let httpPostReturnString = `<h3>Welcome ${body.name}. this is HTML page.</h3>`;
	return new Response(httpPostReturnString + JSON.stringify(body), {
		headers: {
			"content-type": "text/html;charset=UTF-8",
		}
	})
}
