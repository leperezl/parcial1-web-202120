const { response, request } = require('express');
const axios = require('axios')


const pData = "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players";

async function getRequest(link) {
  const response = await axios.get(link)
  //console.log(response.data)
  return response.data;
};



const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  const r = await getRequest(pData)
  //console.log("it seems to read")
  let number=5
  return resp.json({ message: r});
};
1
const getPairs = (dat)=>{
  return dat
}
module.exports = { getPairsOfPlayers , getRequest};