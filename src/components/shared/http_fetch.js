export default async function fetchData(apiPath, payload, method) {
	let option = {}
	let retData = {}
	if(method === "post") {
		option = {
			body: JSON.stringify(payload),
			method: method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': "Bearer 3e1838b7db632cad0d48874d59f6391642adca8881d0001750225af576330de3",
			}
		}
	} else if(method === "get") {
		option = {
			method: method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': "Bearer 3e1838b7db632cad0d48874d59f6391642adca8881d0001750225af576330de3",
			}
		}
	}
	await fetch("https://gorest.co.in/public/v2/" + apiPath, option)
	.then((res) => res.json())
	.then((data) => {
		retData = data;
	})
	.catch((err) => {
        console.info(err);
    });

	return retData;
}