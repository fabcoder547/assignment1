export const getAllEpisodes = () => {
  return fetch(`https://rickandmortyapi.com/api/episode/`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const pagination = (url) => {
  if (url === undefined) {
    return;
  } else {
    return fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const filterByName = (name) => {
  console.log(name);
  if (name === undefined) {
    return;
  } else {
    return fetch(`https://rickandmortyapi.com/api/episode/?name=${name}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
