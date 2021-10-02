const app = require('axios')
async function getRequest(link) {
    const response = await app.get(link)
    console.log(response.data)
    return response.data;
  };
const pData = "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players";

getRequest(pData)