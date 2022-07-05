const controller = {
  getOneLegendary: (request, response) => {
      return response.json({
          name:'Pineco',
          category:'Bagworm',
          type:'bug',
      });
  }
}

module.exports = controller;