import IconTable from './iconTable.mjs';
const folder = "icons";


class GameIcons {
	static GetIcons(quantity = 1) {
		// console.log('GetIcons - start', quantity)
		let res = [];

		for (let i = 0; i < quantity; i++) {
			let iconIdx = Math.floor((Math.random() * Object.keys(IconTable).length) + 1),
			iconId = "icon_" + iconIdx.toString().padStart(4,"0"),
			chosenFile = IconTable[iconId],
			file = {
				imageNumber: chosenFile.idx,
				folder: folder,
				fileName: chosenFile.fileName
			};
			
			res.push(file)
			// console.log(iconId)
		}
		
		// console.log('GetIcons - end')
		return res;
	}
	static GetMythicIconSet() {
		let res = GameIcons.GetIcons(3);
		res[0].title = "Subject"
		res[1].title = "Action"
		res[2].title = "Outcome"
		return res;
	}
	static GetPPMIconSet() {
		let res = GameIcons.GetIcons(2);
		res[0].title = "Action"
		res[1].title = "Subject"
		return res;
	}
}

export default GameIcons;

const SetSpecs = {
	title: "Random Game Icons",
	count: 4003,
	folder: "icons",
	baseName: 'Game Icons' 
}

