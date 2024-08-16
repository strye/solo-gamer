
class DeckOfTales {
	static GetCards(quantity = 1) {
		let res = [];

		for (let i = 0; i < quantity; i++) {
			let cNum = Math.floor((Math.random() * DeckSpecs.count) + DeckSpecs.start);
			res.push({
				cardNumber: cNum,
				folder: DeckSpecs.folder,
				fileName: `${DeckSpecs.baseName}${cNum.toString().padStart(3,"0")}.jpg`
			})
		}
		return res;
	}
}

export default DeckOfTales;

const DeckSpecs = {
	title: "Deck of Tales",
	start: 5,
	count: 120,
	folder: "GMA_DoT",
	baseName: 'Deck of Tales_Page_' 
}

