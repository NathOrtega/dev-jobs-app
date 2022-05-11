const fetchData = (endpoint) => {
	const data = fetch(endpoint).then((response) => {
		return response.json();
	});
  return data
};

export default fetchData;
