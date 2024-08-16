
class Runes {
	static GetRunes(quantity = 1) {
		let res = [], idxs = [];

		while (res.length < quantity) {
			let rNum = Math.floor(Math.random() * RuneTable.length),
			upsidedown = Boolean(Math.round(Math.random())),
			rune = RuneTable[rNum];
			
			if (idxs.includes(rNum) === false) { 
				res.push({
					runeNumber: rNum,
					folder: rune.folder,
					fileName: `${rune.baseName}${rNum}.jpg`,
					upsidedown: upsidedown,
					title: rune.title,
					description: rune.description
				})
			}
			idxs.push(rNum);
		} 

		return res;
	}
}

export default Runes;

const RuneTable = [
	{ id: 0, title: "Fehu", folder: "runes", baseName: 'Rune', description: "Livestock/Wealth. Property, prosperity, fertility, increase, social success." },
	{ id: 1, title: "Uruz", folder: "runes", baseName: 'Rune', description: "Auroch/Wild Ox. Energy, health, strength, tenacity, courage." },
	{ id: 2, title: "Thurisaz", folder: "runes", baseName: 'Rune', description: "Thor/Giant. Reactionary, defensive destruction. Instinct, willpower,  and regeneration; lightning, electricity." },
	{ id: 3, title: "Ansuz", folder: "runes", baseName: 'Rune', description: "Ancestral Spirit/A God. Revelation, insight, power of words/names; divine intervention." },
	{ id: 4, title: "Raido", folder: "runes", baseName: 'Rune', description: "Wagon/Journey. Travel, evolution, moving forward, gaining perspective." },
	{ id: 5, title: "Kenaz", folder: "runes", baseName: 'Rune', description: "Beacon/Torch. Creativity, inspiration, harnessed power, world-changing ability." },
	{ id: 6, title: "Gebo", folder: "runes", baseName: 'Rune', description: "Gift/Exchanges. Generosity, balance, contracts, relationships, partnerships." },
	{ id: 7, title: "Wunjo", folder: "runes", baseName: 'Rune', description: "Joy/Happiness. Harmony, spiritual reward, pleasure, comfort, glory." },
	{ id: 8, title: "Hagalaz", folder: "runes", baseName: 'Rune', description: "Hail/Weather. Uncontrollable forces, (nature, the subconscious); crisis before harmony." },
	{ id: 9, title: "Naudiz", folder: "runes", baseName: 'Rune', description: "Need/Distress. Resistance, requirements to be met, endurance, patience, survival, trial, test." },
	{ id: 10, title: "Isaz", folder: "runes", baseName: 'Rune', description: "Ice/Frustration. Mental blocks; confusion to be unravelled; stalled until knowledge is gained." },
	{ id: 11, title: "Jera", folder: "runes", baseName: 'Rune', description: "Good Year/Harvest. Eff  ort realized, fruitful results, hope, earned success, cycles of time or life." },
	{ id: 12, title: "Eihwaz", folder: "runes", baseName: 'Rune', description: "Yew Tree/Reliability. Dependability, trustworthiness; protection; honesty; well-chosen, achievable goals." },
	{ id: 13, title: "Perthro", folder: "runes", baseName: 'Rune', description: "Dice Cup/Mystery. Chance, secrets, the occult; initiation, destiny; setting out on the path." },
	{ id: 14, title: "Algiz", folder: "runes", baseName: 'Rune', description: "Elk/Protection. Shield, shelter, wards against evil, a guardian; connection to the gods." },
	{ id: 15, title: "Sowilo", folder: "runes", baseName: 'Rune', description: "The Sun/Life-Force. Success, honor, life, positive changes, victory; cleansing fire, power." },
	{ id: 16, title: "Tiwaz", folder: "runes", baseName: 'Rune', description: "Tyr/Leadership. Authority, justice, rationality, success in competition, self-sacrivce." },
	{ id: 17, title: "Berkano", folder: "runes", baseName: 'Rune', description: "Birch Tree/Birth. Fertility, birth, growth, liberation; renewal, new beginnings, love, family." },
	{ id: 18, title: "Ehwaz", folder: "runes", baseName: 'Rune', description: "Horses/Travel. Physical transportation; slow but steady progress; teamwork, trust, ideal marriage or partnership." },
	{ id: 19, title: "Mannaz", folder: "runes", baseName: 'Rune', description: "Mankind/The Self. The individual, skill, forethought, ability; humanity, social order." },
	{ id: 20, title: "Lagiz", folder: "runes", baseName: 'Rune', description: "Water/Regeneration. Healing, rest, renewal; dreams, the underworld, the imagination." },
	{ id: 21, title: "Ingwaz", folder: "runes", baseName: 'Rune', description: "Monarch/Seat of Power. Control, answering to nobody; authority without implying justice." },
	{ id: 22, title: "Dagaz", folder: "runes", baseName: 'Rune', description: "Dawn/Day. Awakening, breakthrough; a new venture, positive change; hope, security." },
	{ id: 23, title: "Othala", folder: "runes", baseName: 'Rune', description: "Birthright/Home. Inheritance, spiritual heritage, fundamental rights, source of safety, the most important thing." }
]

