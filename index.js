var gplay = require('google-play-scraper');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const getData = async (name) => {
  const data = await gplay.reviews({
    appId: name,
    sort: gplay.sort.RATING,
  })
  
  const d = await data.map(item => {
    return item.text
  }) 
  const writer = await createCsvWriter({
    path: './csv/'+name+d.length+'.csv',
    header: [
      {id: 'text', title: d},
    ]
  })

  writer
  .writeRecords(d)
  
}
getData('passar ID URL')