const axios = require('axios');

axios.get('')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });


  // https://gameinfo.albiononline.com/api/gameinfo/search?q=vanaxx