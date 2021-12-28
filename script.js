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
  const repositoryList = [];
  for (let i = 0; i < externalDTO.length; i++) {
    const repo = {
      name: externalDTO[i].name,
      stars: externalDTO[i].stargazers_count,
    };
    repositoryList.push(repo);
  }
  return repositoryList;
}

function sortArray(array) {
  array.sort(function (a, b) {
    return b.stars - a.stars;
  });
}

const externalAPIObject = await fetchAPIObject("allegro");
console.log(externalAPIObject);

const repositoryList = mapObjectToDTO(externalAPIObject);

sortArray(repositoryList);
console.log("Sorted array");
console.log(repositoryList);
