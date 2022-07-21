import jsonData from "./resources/data.json";

const fetchData = () => {
	return Promise.resolve(jsonData);
};

export const fetchOffer = (id) => {
	return fetchData().then((data) => {
		const offer = data.find((offer) => {
			return offer.id === Number(id);
		});
		if (!offer) {
			throw new Error("not found");
		}
		return offer;
	});
};

export default fetchData;
