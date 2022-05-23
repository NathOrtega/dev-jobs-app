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
		const offer = data.find((offer) => {
			return offer.id === Number(id)
		})
		if(!offer) {
			throw new Error("not found")
		} 
		return offer
	})
}

export default fetchData;
