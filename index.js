var gplay = require('google-play-scraper');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const getData = async (name) => {
  const data = await gplay.reviews({
    appId: name,
    sort: gplay.sort.RATING,
  })
  
  const dataArray = await data.map(item => {
    return item.text
  }) 
  const writer = await createCsvWriter({
    path: './csv/'+name+dataArray.length+'.csv',
    header: [
      {id: 'text', title: dataArray},
    ]
  })

  writer.writeRecords(dataArray)  
}
getData('forqan.tech.babypuzzles_edu.ads')