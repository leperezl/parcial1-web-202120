const { response, request } = require('express');
const axios = require('axios')


const pData = "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players";

async function getRequest(link) {
  const response = await app.get(link)
  return response.values;
};


const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  const data = await getRequest(pData)
  return resp.json({ message: 'To be implemented ' + data});
};

module.exports = { getPairsOfPlayers , getRequest};