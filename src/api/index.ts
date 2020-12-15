export const getEvents = (category: string, past: number) => {
  return fetch(
    `https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${category}?days=${past}`
  ).then(function(response) {
    return response.json();
  });
};

export const getCategories = () => {
  return fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories`).then(
    function(response) {
      return response.json();
    }
  );
};

/* MapBox API key */

export const ApiToken = process.env.REACT_APP_MAPBOX_TOKEN || "Your token";
