import tarotTable from './tarotTable.mjs';

class Tarot {
	static GetCards(quantity = 1) {
		let res = [], idxs = [];

		while (res.length < quantity) {
			let tarotIdx = Math.floor(Math.random() * Object.keys(tarotTable).length +1),
			upsidedown = Boolean(Math.round(Math.random()-0.2)),
			cardId = "tarot_" + tarotIdx.toString().padStart(4,"0"),
			chosenCard = tarotTable[cardId];

			// console.log(upsidedown,rando)

			if (idxs.includes(tarotIdx) === false) { 
				res.push({
					cardIndex: chosenCard.idx,
					folder: 'tarot',
					fileName: chosenCard.fileName,
					upsidedown: upsidedown,
					title: chosenCard.title,
					category: chosenCard.category
				})
			}
			idxs.push(tarotIdx);
		}

		return res;
	}

}

export default Tarot;

const DeckSpecs = {
	title: "Tarot Deck",
	start: 1,
	count: 124,
	folder: "tarot",
	baseName: 'Deck of Tales_Page_' 
}

