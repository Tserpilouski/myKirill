async function searchEdamamAPI(query) {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.EDAMAM_API_APP}&app_key=${process.env.EDAMAM_API_KEY}&ingr=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during API request:', error);
    return null;
  }
}

export default searchEdamamAPI;