const DATA_URL = "/data.json";

const fetchData = () => { 
	const data = fetch(DATA_URL).then((response) => {
		return response.json();
	});
  return data
};

export const fetchOffer = (id) => {
	return fetchData()
	.then(data => {
		return data.filter((offer) => {
			return offer.id === Number(id)
		})[0]
	})
	.catch((error) => console.log(error))
}

export default fetchData;
