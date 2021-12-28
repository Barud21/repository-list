"use strict";

async function fetchAPIObject(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        method: "GET",
      }
    );
    const APIObject = await response.json();
    return APIObject;
  } catch (error) {
    console.log(error);
  }
}

function mapObjectToDTO(externalDTO) {
  const internalDTO = [];
  for (let i = 0; i < externalDTO.length; i++) {
    const repo = {
      name: externalDTO[i].name,
      stars: externalDTO[i].stargazers_count,
    };
    internalDTO.push(repo);
  }
  return internalDTO;
}

function sortArray(array) {
  array.sort(function (a, b) {
    return b.stars - a.stars;
  });
}

const externalAPIObject = await fetchAPIObject("allegro");
console.log(externalAPIObject);

const internalDTO = mapObjectToDTO(externalAPIObject);
console.log(internalDTO);

sortArray(internalDTO);
console.log("Sorted array");
console.log(internalDTO);
