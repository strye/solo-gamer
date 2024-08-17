import {DeckOfTales, GameIcons, Tarot} from './artifacts/index.mjs'

const writeLog = false

class SoloRolls {
	static rollDice(sides = 6, D = 1, mod = 0) {
		var val = 0;
		for (var i = D; i >= 1; i--) {
			val += Math.floor((Math.random() * sides) + 1);
		}
		return val += mod;
	}
	static D6() {
		return Math.floor((Math.random() * 6) + 1);
	}
	static D100() {
		return Math.floor((Math.random() * 100) + 1);
	}
	static D6Array(dice = 1) {
		let rolls = [];
		for (let d = 0; d < dice; d++) { rolls.push(SoloRolls.D6()); }
		return rolls;
	}

	static fuV1Roll(adv = 0, dis = 0) {
		let dice = 1, extra = adv - dis, passive = true;
		if (extra < 0) { extra = extra*-1; passive = false;}
		dice += extra;

		let diceRolls = SoloRolls.D6Array(dice),
		cur = 0;

		diceRolls.forEach(roll => {
			if (passive) {
				cur = (roll > cur)? roll: cur;
			} else {
				cur = (cur === 0 || roll < cur)? roll: cur;
			}
		});

		return cur;
	}

	static fuV2Roll(adv = 0, dis = 0) {
		// roll action dice
		let actDice = SoloRolls.D6Array(adv+1);

		// roll danger dice
		for (let d = 0; d < dis; d++) {
			let dd = SoloRolls.D6(),
			i = actDice.findIndex(dice => dice === dd);

			if (i > -1) { actDice.splice(i, 1); }
		}

		return Math.max(...actDice);
	}


	static askYesNo(adv = 0, dis = 0) {
		let roll = SoloRolls.fuV2Roll(adv, dis),
		res = { actDice: adv, danDice: dis, final: roll, display: ''};

		switch (res.final) {
			case 6: res.display = "Yes, and..."; break;
			case 5: res.display = "Yes"; break;
			case 4: res.display = "Yes, but..."; break;
			case 3: res.display = "No, but..."; break;
			case 2: res.display = "No"; break;
			case 1: res.display = "No, and..."; break;
		}

		return res;
	}
	static askComplex(adv = 0, dis = 0) {
		let res = SoloRolls.askYesNo(adv, dis);
		res.images = SoloRolls.getInspired();
		return res;
	}
	static getInspired(count = 2, deck = "icons") {
		let res = [];
		switch (deck) {
			case "DoT": res = DeckOfTales.GetCards(count); break;
			case "tarot": res = Tarot.GetCards(count); break;
			default: res = GameIcons.GetIcons(count); break;
		}

		if (writeLog) console.log(res);
		res.forEach(card => {
			card.source = `./assets/${card.folder}/${card.fileName}`;
			if (writeLog) console.log(card);
		});

		return res;
	}

	static getSentiment(disposition = 'n') {
		// -16-0 Hostile, 1-25 unfriendly, 26-75 neutral, 76-100 friendly, 100-16 helpful
		let curve = SoloRolls.D100(), dispo = 'Neutral';
		if (disposition.toLowerCase() === 'u') {curve -= 16; dispo = 'Unfriendly' };
		if (disposition.toLowerCase() === 'f') {curve += 16; dispo = 'Friendly' };

		let res = {sentiment: "Neutral", disposition: dispo, roll: curve};

		if (curve <= 0) { res.sentiment = "Hostile"; }
		if (curve >= 1 & curve <= 25) { res.sentiment = "Unfriendly"; }
		// if (curve >= 26 & curve <= 75) { res.sentiment = "Neutral"; }
		if (curve >= 76 & curve <= 100) { res.sentiment = "Friendly"; }
		if (curve > 100) { res.sentiment = "Helpful"; }

		return res;
	}

}


export default SoloRolls;