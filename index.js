const gplay = require("google-play-scraper");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const getData = async name => {
	const data = await gplay.reviews({
		appId: name,
		sort: gplay.sort.NEWEST
		// sort: gplay.sort.HELPFULNESS
		// sort: gplay.sort.RATING
	});

	const dataArray = await data.map(item => {
		return item.text + ";";
	});
	const writer = await createCsvWriter({
		path:
			"./csv/NEWEST/" + name + " - " + dataArray.length + " - NEWEST" + ".csv",
		recordDelimiter: "\n",
		header: [{ id: "text", title: dataArray }]
	});

	writer.writeRecords(dataArray);
};

getData("forqan.tech.babypuzzles_edu.ads");
