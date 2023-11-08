const options = { method: "GET", headers: { accept: "application/json" } };

export const fetchProducts = async (userSearch, page) => {
  try {
    const response = await fetch(
      `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&resultsFormat=native&resultsPerPage=24&page=${page}&redirectResponse=direct&q=${userSearch}`,
      options
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Return the data received from the API
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// fetchProducts("shoes");
