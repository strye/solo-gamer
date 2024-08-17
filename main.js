'use strict';

var obsidian$1 = require('obsidian');

const obsidian = require("obsidian");

class TinySoloSettingTab extends obsidian.PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display() {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h2", { text: "Settings for the Solo Gamer." });

		new obsidian.Setting(containerEl)
		.setName("Image Set")
		.setDesc("Select the default image set.")
		.addDropdown((dropDown) => {
			dropDown.addOption('icons', 'Icons')
			.addOption('DoT', 'Deck of Tales')
			.addOption('tarot', 'Tarot Deck')
			.setValue(this.plugin.settings.imageSet)
			.onChange(async (value) =>	{
				this.plugin.settings.imageSet = value;
				await this.plugin.saveSettings();
			});
		});


		// No. of Cards?: <input type="number" id="cardCnt" value="1" style="width: 30px" />
		new obsidian.Setting(containerEl)
		.setName("Number of items")
		.setDesc("Select how many images to return.")
		.addSlider((slider) => {
			slider.setLimits(1,5,1) // min, max, step
			.setValue(this.plugin.settings.imageCount)
			.onChange(async (value) =>	{
				this.plugin.settings.imageCount = value;
				await this.plugin.saveSettings();
			});
		});


		new obsidian.Setting(containerEl)
		.setName("Size factor")
		.setDesc("Select the dispaly size (px-width) of images.")
		.addDropdown((dropDown) => {
			dropDown.addOption('wmicro', 'micro (70)')
			.addOption('wtiny', 'tiny (100)')
			.addOption('wsmall', 'small (200)')
			.addOption('ws-med', 'small-med (300)')
			.addOption('wm-sm', 'med-small (400)')
			.addOption('wmed', 'medium (500)')
			.addOption('wm-tl', 'med-tall (600)')
			.addOption('wtall', 'tall (700)')
			.addOption('wfull', 'full (100%)')
			.setValue(this.plugin.settings.imageSize)
			.onChange(async (value) =>	{
				this.plugin.settings.imageSize = value;
				await this.plugin.saveSettings();
			});
		});

		new obsidian.Setting(containerEl)
		.setName("Size factor")
		.setDesc("Select the dispaly size (px-width) of cards.")
		.addDropdown((dropDown) => {
			dropDown.addOption('wmicro', 'micro (70)')
			.addOption('wtiny', 'tiny (100)')
			.addOption('wsmall', 'small (200)')
			.addOption('ws-med', 'small-med (300)')
			.addOption('wm-sm', 'med-small (400)')
			.addOption('wmed', 'medium (500)')
			.addOption('wm-tl', 'med-tall (600)')
			.addOption('wtall', 'tall (700)')
			.addOption('wfull', 'full (100%)')
			.setValue(this.plugin.settings.cardSize)
			.onChange(async (value) =>	{
				this.plugin.settings.cardSize = value;
				await this.plugin.saveSettings();
			});
		});

	}
}

const iconTable = {
  "icon_0001": {
    "idx": 1,
    "fileName": "3d-glasses.svg"
  },
  "icon_0002": {
    "idx": 2,
    "fileName": "3d-hammer.svg"
  },
  "icon_0003": {
    "idx": 3,
    "fileName": "3d-meeple.svg"
  },
  "icon_0004": {
    "idx": 4,
    "fileName": "3d-stairs.svg"
  },
  "icon_0005": {
    "idx": 5,
    "fileName": "abacus.svg"
  },
  "icon_0006": {
    "idx": 6,
    "fileName": "abbot-meeple.svg"
  },
  "icon_0007": {
    "idx": 7,
    "fileName": "abdominal-armor.svg"
  },
  "icon_0008": {
    "idx": 8,
    "fileName": "abstract-001.svg"
  },
  "icon_0009": {
    "idx": 9,
    "fileName": "abstract-002.svg"
  },
  "icon_0010": {
    "idx": 10,
    "fileName": "abstract-003.svg"
  },
  "icon_0011": {
    "idx": 11,
    "fileName": "abstract-004.svg"
  },
  "icon_0012": {
    "idx": 12,
    "fileName": "abstract-005.svg"
  },
  "icon_0013": {
    "idx": 13,
    "fileName": "abstract-006.svg"
  },
  "icon_0014": {
    "idx": 14,
    "fileName": "abstract-007.svg"
  },
  "icon_0015": {
    "idx": 15,
    "fileName": "abstract-008.svg"
  },
  "icon_0016": {
    "idx": 16,
    "fileName": "abstract-009.svg"
  },
  "icon_0017": {
    "idx": 17,
    "fileName": "abstract-010.svg"
  },
  "icon_0018": {
    "idx": 18,
    "fileName": "abstract-011.svg"
  },
  "icon_0019": {
    "idx": 19,
    "fileName": "abstract-012.svg"
  },
  "icon_0020": {
    "idx": 20,
    "fileName": "abstract-013.svg"
  },
  "icon_0021": {
    "idx": 21,
    "fileName": "abstract-014.svg"
  },
  "icon_0022": {
    "idx": 22,
    "fileName": "abstract-015.svg"
  },
  "icon_0023": {
    "idx": 23,
    "fileName": "abstract-016.svg"
  },
  "icon_0024": {
    "idx": 24,
    "fileName": "abstract-017.svg"
  },
  "icon_0025": {
    "idx": 25,
    "fileName": "abstract-018.svg"
  },
  "icon_0026": {
    "idx": 26,
    "fileName": "abstract-019.svg"
  },
  "icon_0027": {
    "idx": 27,
    "fileName": "abstract-020.svg"
  },
  "icon_0028": {
    "idx": 28,
    "fileName": "abstract-021.svg"
  },
  "icon_0029": {
    "idx": 29,
    "fileName": "abstract-022.svg"
  },
  "icon_0030": {
    "idx": 30,
    "fileName": "abstract-023.svg"
  },
  "icon_0031": {
    "idx": 31,
    "fileName": "abstract-024.svg"
  },
  "icon_0032": {
    "idx": 32,
    "fileName": "abstract-025.svg"
  },
  "icon_0033": {
    "idx": 33,
    "fileName": "abstract-026.svg"
  },
  "icon_0034": {
    "idx": 34,
    "fileName": "abstract-027.svg"
  },
  "icon_0035": {
    "idx": 35,
    "fileName": "abstract-028.svg"
  },
  "icon_0036": {
    "idx": 36,
    "fileName": "abstract-029.svg"
  },
  "icon_0037": {
    "idx": 37,
    "fileName": "abstract-030.svg"
  },
  "icon_0038": {
    "idx": 38,
    "fileName": "abstract-031.svg"
  },
  "icon_0039": {
    "idx": 39,
    "fileName": "abstract-032.svg"
  },
  "icon_0040": {
    "idx": 40,
    "fileName": "abstract-033.svg"
  },
  "icon_0041": {
    "idx": 41,
    "fileName": "abstract-034.svg"
  },
  "icon_0042": {
    "idx": 42,
    "fileName": "abstract-035.svg"
  },
  "icon_0043": {
    "idx": 43,
    "fileName": "abstract-036.svg"
  },
  "icon_0044": {
    "idx": 44,
    "fileName": "abstract-037.svg"
  },
  "icon_0045": {
    "idx": 45,
    "fileName": "abstract-038.svg"
  },
  "icon_0046": {
    "idx": 46,
    "fileName": "abstract-039.svg"
  },
  "icon_0047": {
    "idx": 47,
    "fileName": "abstract-040.svg"
  },
  "icon_0048": {
    "idx": 48,
    "fileName": "abstract-041.svg"
  },
  "icon_0049": {
    "idx": 49,
    "fileName": "abstract-042.svg"
  },
  "icon_0050": {
    "idx": 50,
    "fileName": "abstract-043.svg"
  },
  "icon_0051": {
    "idx": 51,
    "fileName": "abstract-044.svg"
  },
  "icon_0052": {
    "idx": 52,
    "fileName": "abstract-045.svg"
  },
  "icon_0053": {
    "idx": 53,
    "fileName": "abstract-046.svg"
  },
  "icon_0054": {
    "idx": 54,
    "fileName": "abstract-047.svg"
  },
  "icon_0055": {
    "idx": 55,
    "fileName": "abstract-048.svg"
  },
  "icon_0056": {
    "idx": 56,
    "fileName": "abstract-049.svg"
  },
  "icon_0057": {
    "idx": 57,
    "fileName": "abstract-050.svg"
  },
  "icon_0058": {
    "idx": 58,
    "fileName": "abstract-051.svg"
  },
  "icon_0059": {
    "idx": 59,
    "fileName": "abstract-052.svg"
  },
  "icon_0060": {
    "idx": 60,
    "fileName": "abstract-053.svg"
  },
  "icon_0061": {
    "idx": 61,
    "fileName": "abstract-054.svg"
  },
  "icon_0062": {
    "idx": 62,
    "fileName": "abstract-055.svg"
  },
  "icon_0063": {
    "idx": 63,
    "fileName": "abstract-056.svg"
  },
  "icon_0064": {
    "idx": 64,
    "fileName": "abstract-057.svg"
  },
  "icon_0065": {
    "idx": 65,
    "fileName": "abstract-058.svg"
  },
  "icon_0066": {
    "idx": 66,
    "fileName": "abstract-059.svg"
  },
  "icon_0067": {
    "idx": 67,
    "fileName": "abstract-060.svg"
  },
  "icon_0068": {
    "idx": 68,
    "fileName": "abstract-061.svg"
  },
  "icon_0069": {
    "idx": 69,
    "fileName": "abstract-062.svg"
  },
  "icon_0070": {
    "idx": 70,
    "fileName": "abstract-063.svg"
  },
  "icon_0071": {
    "idx": 71,
    "fileName": "abstract-064.svg"
  },
  "icon_0072": {
    "idx": 72,
    "fileName": "abstract-065.svg"
  },
  "icon_0073": {
    "idx": 73,
    "fileName": "abstract-066.svg"
  },
  "icon_0074": {
    "idx": 74,
    "fileName": "abstract-067.svg"
  },
  "icon_0075": {
    "idx": 75,
    "fileName": "abstract-068.svg"
  },
  "icon_0076": {
    "idx": 76,
    "fileName": "abstract-069.svg"
  },
  "icon_0077": {
    "idx": 77,
    "fileName": "abstract-070.svg"
  },
  "icon_0078": {
    "idx": 78,
    "fileName": "abstract-071.svg"
  },
  "icon_0079": {
    "idx": 79,
    "fileName": "abstract-072.svg"
  },
  "icon_0080": {
    "idx": 80,
    "fileName": "abstract-073.svg"
  },
  "icon_0081": {
    "idx": 81,
    "fileName": "abstract-074.svg"
  },
  "icon_0082": {
    "idx": 82,
    "fileName": "abstract-075.svg"
  },
  "icon_0083": {
    "idx": 83,
    "fileName": "abstract-076.svg"
  },
  "icon_0084": {
    "idx": 84,
    "fileName": "abstract-077.svg"
  },
  "icon_0085": {
    "idx": 85,
    "fileName": "abstract-078.svg"
  },
  "icon_0086": {
    "idx": 86,
    "fileName": "abstract-079.svg"
  },
  "icon_0087": {
    "idx": 87,
    "fileName": "abstract-080.svg"
  },
  "icon_0088": {
    "idx": 88,
    "fileName": "abstract-081.svg"
  },
  "icon_0089": {
    "idx": 89,
    "fileName": "abstract-082.svg"
  },
  "icon_0090": {
    "idx": 90,
    "fileName": "abstract-083.svg"
  },
  "icon_0091": {
    "idx": 91,
    "fileName": "abstract-084.svg"
  },
  "icon_0092": {
    "idx": 92,
    "fileName": "abstract-085.svg"
  },
  "icon_0093": {
    "idx": 93,
    "fileName": "abstract-086.svg"
  },
  "icon_0094": {
    "idx": 94,
    "fileName": "abstract-087.svg"
  },
  "icon_0095": {
    "idx": 95,
    "fileName": "abstract-088.svg"
  },
  "icon_0096": {
    "idx": 96,
    "fileName": "abstract-089.svg"
  },
  "icon_0097": {
    "idx": 97,
    "fileName": "abstract-090.svg"
  },
  "icon_0098": {
    "idx": 98,
    "fileName": "abstract-091.svg"
  },
  "icon_0099": {
    "idx": 99,
    "fileName": "abstract-092.svg"
  },
  "icon_0100": {
    "idx": 100,
    "fileName": "abstract-093.svg"
  },
  "icon_0101": {
    "idx": 101,
    "fileName": "abstract-094.svg"
  },
  "icon_0102": {
    "idx": 102,
    "fileName": "abstract-095.svg"
  },
  "icon_0103": {
    "idx": 103,
    "fileName": "abstract-096.svg"
  },
  "icon_0104": {
    "idx": 104,
    "fileName": "abstract-097.svg"
  },
  "icon_0105": {
    "idx": 105,
    "fileName": "abstract-098.svg"
  },
  "icon_0106": {
    "idx": 106,
    "fileName": "abstract-099.svg"
  },
  "icon_0107": {
    "idx": 107,
    "fileName": "abstract-100.svg"
  },
  "icon_0108": {
    "idx": 108,
    "fileName": "abstract-101.svg"
  },
  "icon_0109": {
    "idx": 109,
    "fileName": "abstract-102.svg"
  },
  "icon_0110": {
    "idx": 110,
    "fileName": "abstract-103.svg"
  },
  "icon_0111": {
    "idx": 111,
    "fileName": "abstract-104.svg"
  },
  "icon_0112": {
    "idx": 112,
    "fileName": "abstract-105.svg"
  },
  "icon_0113": {
    "idx": 113,
    "fileName": "abstract-106.svg"
  },
  "icon_0114": {
    "idx": 114,
    "fileName": "abstract-107.svg"
  },
  "icon_0115": {
    "idx": 115,
    "fileName": "abstract-108.svg"
  },
  "icon_0116": {
    "idx": 116,
    "fileName": "abstract-109.svg"
  },
  "icon_0117": {
    "idx": 117,
    "fileName": "abstract-110.svg"
  },
  "icon_0118": {
    "idx": 118,
    "fileName": "abstract-111.svg"
  },
  "icon_0119": {
    "idx": 119,
    "fileName": "abstract-112.svg"
  },
  "icon_0120": {
    "idx": 120,
    "fileName": "abstract-113.svg"
  },
  "icon_0121": {
    "idx": 121,
    "fileName": "abstract-114.svg"
  },
  "icon_0122": {
    "idx": 122,
    "fileName": "abstract-115.svg"
  },
  "icon_0123": {
    "idx": 123,
    "fileName": "abstract-116.svg"
  },
  "icon_0124": {
    "idx": 124,
    "fileName": "abstract-117.svg"
  },
  "icon_0125": {
    "idx": 125,
    "fileName": "abstract-118.svg"
  },
  "icon_0126": {
    "idx": 126,
    "fileName": "abstract-119.svg"
  },
  "icon_0127": {
    "idx": 127,
    "fileName": "abstract-120.svg"
  },
  "icon_0128": {
    "idx": 128,
    "fileName": "abstract-121.svg"
  },
  "icon_0129": {
    "idx": 129,
    "fileName": "ace.svg"
  },
  "icon_0130": {
    "idx": 130,
    "fileName": "achievement.svg"
  },
  "icon_0131": {
    "idx": 131,
    "fileName": "achilles-heel.svg"
  },
  "icon_0132": {
    "idx": 132,
    "fileName": "acid-blob.svg"
  },
  "icon_0133": {
    "idx": 133,
    "fileName": "acid-tube.svg"
  },
  "icon_0134": {
    "idx": 134,
    "fileName": "acid.svg"
  },
  "icon_0135": {
    "idx": 135,
    "fileName": "acorn.svg"
  },
  "icon_0136": {
    "idx": 136,
    "fileName": "acoustic-megaphone.svg"
  },
  "icon_0137": {
    "idx": 137,
    "fileName": "acrobatic.svg"
  },
  "icon_0138": {
    "idx": 138,
    "fileName": "aerial-signal.svg"
  },
  "icon_0139": {
    "idx": 139,
    "fileName": "aerodynamic-harpoon.svg"
  },
  "icon_0140": {
    "idx": 140,
    "fileName": "aerosol.svg"
  },
  "icon_0141": {
    "idx": 141,
    "fileName": "africa.svg"
  },
  "icon_0142": {
    "idx": 142,
    "fileName": "afterburn.svg"
  },
  "icon_0143": {
    "idx": 143,
    "fileName": "agave.svg"
  },
  "icon_0144": {
    "idx": 144,
    "fileName": "ages.svg"
  },
  "icon_0145": {
    "idx": 145,
    "fileName": "air-balloon.svg"
  },
  "icon_0146": {
    "idx": 146,
    "fileName": "air-force.svg"
  },
  "icon_0147": {
    "idx": 147,
    "fileName": "air-man.svg"
  },
  "icon_0148": {
    "idx": 148,
    "fileName": "air-zigzag.svg"
  },
  "icon_0149": {
    "idx": 149,
    "fileName": "airplane-arrival.svg"
  },
  "icon_0150": {
    "idx": 150,
    "fileName": "airplane-departure.svg"
  },
  "icon_0151": {
    "idx": 151,
    "fileName": "airplane.svg"
  },
  "icon_0152": {
    "idx": 152,
    "fileName": "airtight-hatch.svg"
  },
  "icon_0153": {
    "idx": 153,
    "fileName": "ak47.svg"
  },
  "icon_0154": {
    "idx": 154,
    "fileName": "ak47u.svg"
  },
  "icon_0155": {
    "idx": 155,
    "fileName": "akhet.svg"
  },
  "icon_0156": {
    "idx": 156,
    "fileName": "alarm-clock.svg"
  },
  "icon_0157": {
    "idx": 157,
    "fileName": "algae.svg"
  },
  "icon_0158": {
    "idx": 158,
    "fileName": "algeria.svg"
  },
  "icon_0159": {
    "idx": 159,
    "fileName": "alien-bug.svg"
  },
  "icon_0160": {
    "idx": 160,
    "fileName": "alien-egg.svg"
  },
  "icon_0161": {
    "idx": 161,
    "fileName": "alien-fire.svg"
  },
  "icon_0162": {
    "idx": 162,
    "fileName": "alien-skull.svg"
  },
  "icon_0163": {
    "idx": 163,
    "fileName": "alien-stare.svg"
  },
  "icon_0164": {
    "idx": 164,
    "fileName": "all-for-one.svg"
  },
  "icon_0165": {
    "idx": 165,
    "fileName": "all-seeing-eye.svg"
  },
  "icon_0166": {
    "idx": 166,
    "fileName": "allied-star.svg"
  },
  "icon_0167": {
    "idx": 167,
    "fileName": "alligator-clip.svg"
  },
  "icon_0168": {
    "idx": 168,
    "fileName": "almond.svg"
  },
  "icon_0169": {
    "idx": 169,
    "fileName": "amber-mosquito.svg"
  },
  "icon_0170": {
    "idx": 170,
    "fileName": "ambulance.svg"
  },
  "icon_0171": {
    "idx": 171,
    "fileName": "american-football-ball.svg"
  },
  "icon_0172": {
    "idx": 172,
    "fileName": "american-football-helmet.svg"
  },
  "icon_0173": {
    "idx": 173,
    "fileName": "american-football-player.svg"
  },
  "icon_0174": {
    "idx": 174,
    "fileName": "american-shield.svg"
  },
  "icon_0175": {
    "idx": 175,
    "fileName": "amethyst.svg"
  },
  "icon_0176": {
    "idx": 176,
    "fileName": "ammo-box.svg"
  },
  "icon_0177": {
    "idx": 177,
    "fileName": "ammonite-fossil.svg"
  },
  "icon_0178": {
    "idx": 178,
    "fileName": "ammonite.svg"
  },
  "icon_0179": {
    "idx": 179,
    "fileName": "amphora.svg"
  },
  "icon_0180": {
    "idx": 180,
    "fileName": "ample-dress.svg"
  },
  "icon_0181": {
    "idx": 181,
    "fileName": "amplitude.svg"
  },
  "icon_0182": {
    "idx": 182,
    "fileName": "amputation.svg"
  },
  "icon_0183": {
    "idx": 183,
    "fileName": "anarchy.svg"
  },
  "icon_0184": {
    "idx": 184,
    "fileName": "anatomy.svg"
  },
  "icon_0185": {
    "idx": 185,
    "fileName": "anchor.svg"
  },
  "icon_0186": {
    "idx": 186,
    "fileName": "ancient-columns.svg"
  },
  "icon_0187": {
    "idx": 187,
    "fileName": "ancient-ruins.svg"
  },
  "icon_0188": {
    "idx": 188,
    "fileName": "ancient-screw.svg"
  },
  "icon_0189": {
    "idx": 189,
    "fileName": "ancient-sword.svg"
  },
  "icon_0190": {
    "idx": 190,
    "fileName": "android-mask.svg"
  },
  "icon_0191": {
    "idx": 191,
    "fileName": "andromeda-chain.svg"
  },
  "icon_0192": {
    "idx": 192,
    "fileName": "angel-outfit.svg"
  },
  "icon_0193": {
    "idx": 193,
    "fileName": "angel-wings.svg"
  },
  "icon_0194": {
    "idx": 194,
    "fileName": "angler-fish.svg"
  },
  "icon_0195": {
    "idx": 195,
    "fileName": "angola.svg"
  },
  "icon_0196": {
    "idx": 196,
    "fileName": "angry-eyes.svg"
  },
  "icon_0197": {
    "idx": 197,
    "fileName": "angular-spider.svg"
  },
  "icon_0198": {
    "idx": 198,
    "fileName": "animal-hide.svg"
  },
  "icon_0199": {
    "idx": 199,
    "fileName": "animal-skull.svg"
  },
  "icon_0200": {
    "idx": 200,
    "fileName": "ankh.svg"
  },
  "icon_0201": {
    "idx": 201,
    "fileName": "annexation.svg"
  },
  "icon_0202": {
    "idx": 202,
    "fileName": "ant.svg"
  },
  "icon_0203": {
    "idx": 203,
    "fileName": "antarctica.svg"
  },
  "icon_0204": {
    "idx": 204,
    "fileName": "anthem.svg"
  },
  "icon_0205": {
    "idx": 205,
    "fileName": "anti-aircraft-gun.svg"
  },
  "icon_0206": {
    "idx": 206,
    "fileName": "antibody.svg"
  },
  "icon_0207": {
    "idx": 207,
    "fileName": "anticlockwise-rotation.svg"
  },
  "icon_0208": {
    "idx": 208,
    "fileName": "ants.svg"
  },
  "icon_0209": {
    "idx": 209,
    "fileName": "anubis.svg"
  },
  "icon_0210": {
    "idx": 210,
    "fileName": "anvil-impact.svg"
  },
  "icon_0211": {
    "idx": 211,
    "fileName": "anvil.svg"
  },
  "icon_0212": {
    "idx": 212,
    "fileName": "apc.svg"
  },
  "icon_0213": {
    "idx": 213,
    "fileName": "apollo-capsule.svg"
  },
  "icon_0214": {
    "idx": 214,
    "fileName": "apothecary.svg"
  },
  "icon_0215": {
    "idx": 215,
    "fileName": "apple-core.svg"
  },
  "icon_0216": {
    "idx": 216,
    "fileName": "apple-maggot.svg"
  },
  "icon_0217": {
    "idx": 217,
    "fileName": "apple-seeds.svg"
  },
  "icon_0218": {
    "idx": 218,
    "fileName": "aquarium.svg"
  },
  "icon_0219": {
    "idx": 219,
    "fileName": "aquarius.svg"
  },
  "icon_0220": {
    "idx": 220,
    "fileName": "aqueduct.svg"
  },
  "icon_0221": {
    "idx": 221,
    "fileName": "arabic-door.svg"
  },
  "icon_0222": {
    "idx": 222,
    "fileName": "arc-triomphe.svg"
  },
  "icon_0223": {
    "idx": 223,
    "fileName": "arch-bridge.svg"
  },
  "icon_0224": {
    "idx": 224,
    "fileName": "archer.svg"
  },
  "icon_0225": {
    "idx": 225,
    "fileName": "archery-target.svg"
  },
  "icon_0226": {
    "idx": 226,
    "fileName": "architect-mask.svg"
  },
  "icon_0227": {
    "idx": 227,
    "fileName": "archive-register.svg"
  },
  "icon_0228": {
    "idx": 228,
    "fileName": "archive-research.svg"
  },
  "icon_0229": {
    "idx": 229,
    "fileName": "arcing-bolt.svg"
  },
  "icon_0230": {
    "idx": 230,
    "fileName": "arena.svg"
  },
  "icon_0231": {
    "idx": 231,
    "fileName": "aries.svg"
  },
  "icon_0232": {
    "idx": 232,
    "fileName": "arm-bandage.svg"
  },
  "icon_0233": {
    "idx": 233,
    "fileName": "arm-sling.svg"
  },
  "icon_0234": {
    "idx": 234,
    "fileName": "arm.svg"
  },
  "icon_0235": {
    "idx": 235,
    "fileName": "armadillo-tail.svg"
  },
  "icon_0236": {
    "idx": 236,
    "fileName": "armadillo.svg"
  },
  "icon_0237": {
    "idx": 237,
    "fileName": "armor-downgrade.svg"
  },
  "icon_0238": {
    "idx": 238,
    "fileName": "armor-punch.svg"
  },
  "icon_0239": {
    "idx": 239,
    "fileName": "armor-upgrade.svg"
  },
  "icon_0240": {
    "idx": 240,
    "fileName": "armor-vest.svg"
  },
  "icon_0241": {
    "idx": 241,
    "fileName": "armored-boomerang.svg"
  },
  "icon_0242": {
    "idx": 242,
    "fileName": "armored-pants.svg"
  },
  "icon_0243": {
    "idx": 243,
    "fileName": "armoured-shell.svg"
  },
  "icon_0244": {
    "idx": 244,
    "fileName": "arrest.svg"
  },
  "icon_0245": {
    "idx": 245,
    "fileName": "arrow-cluster.svg"
  },
  "icon_0246": {
    "idx": 246,
    "fileName": "arrow-cursor.svg"
  },
  "icon_0247": {
    "idx": 247,
    "fileName": "arrow-dunk.svg"
  },
  "icon_0248": {
    "idx": 248,
    "fileName": "arrow-flights.svg"
  },
  "icon_0249": {
    "idx": 249,
    "fileName": "arrow-scope.svg"
  },
  "icon_0250": {
    "idx": 250,
    "fileName": "arrow-wings.svg"
  },
  "icon_0251": {
    "idx": 251,
    "fileName": "arrowed.svg"
  },
  "icon_0252": {
    "idx": 252,
    "fileName": "arrowhead.svg"
  },
  "icon_0253": {
    "idx": 253,
    "fileName": "arrows-shield.svg"
  },
  "icon_0254": {
    "idx": 254,
    "fileName": "arson.svg"
  },
  "icon_0255": {
    "idx": 255,
    "fileName": "artificial-hive.svg"
  },
  "icon_0256": {
    "idx": 256,
    "fileName": "artificial-intelligence.svg"
  },
  "icon_0257": {
    "idx": 257,
    "fileName": "artillery-shell.svg"
  },
  "icon_0258": {
    "idx": 258,
    "fileName": "ascending-block.svg"
  },
  "icon_0259": {
    "idx": 259,
    "fileName": "asian-lantern.svg"
  },
  "icon_0260": {
    "idx": 260,
    "fileName": "asparagus.svg"
  },
  "icon_0261": {
    "idx": 261,
    "fileName": "aspergillum.svg"
  },
  "icon_0262": {
    "idx": 262,
    "fileName": "assassin-pocket.svg"
  },
  "icon_0263": {
    "idx": 263,
    "fileName": "asteroid.svg"
  },
  "icon_0264": {
    "idx": 264,
    "fileName": "astronaut-helmet.svg"
  },
  "icon_0265": {
    "idx": 265,
    "fileName": "at-sea.svg"
  },
  "icon_0266": {
    "idx": 266,
    "fileName": "atlas.svg"
  },
  "icon_0267": {
    "idx": 267,
    "fileName": "atom-core.svg"
  },
  "icon_0268": {
    "idx": 268,
    "fileName": "atom.svg"
  },
  "icon_0269": {
    "idx": 269,
    "fileName": "atomic-slashes.svg"
  },
  "icon_0270": {
    "idx": 270,
    "fileName": "attached-shield.svg"
  },
  "icon_0271": {
    "idx": 271,
    "fileName": "aubergine.svg"
  },
  "icon_0272": {
    "idx": 272,
    "fileName": "audio-cassette.svg"
  },
  "icon_0273": {
    "idx": 273,
    "fileName": "aura.svg"
  },
  "icon_0274": {
    "idx": 274,
    "fileName": "australia.svg"
  },
  "icon_0275": {
    "idx": 275,
    "fileName": "auto-repair.svg"
  },
  "icon_0276": {
    "idx": 276,
    "fileName": "autogun.svg"
  },
  "icon_0277": {
    "idx": 277,
    "fileName": "automatic-sas.svg"
  },
  "icon_0278": {
    "idx": 278,
    "fileName": "avocado.svg"
  },
  "icon_0279": {
    "idx": 279,
    "fileName": "avoidance.svg"
  },
  "icon_0280": {
    "idx": 280,
    "fileName": "awareness.svg"
  },
  "icon_0281": {
    "idx": 281,
    "fileName": "axe-in-log.svg"
  },
  "icon_0282": {
    "idx": 282,
    "fileName": "axe-in-stump.svg"
  },
  "icon_0283": {
    "idx": 283,
    "fileName": "axe-swing.svg"
  },
  "icon_0284": {
    "idx": 284,
    "fileName": "axe-sword.svg"
  },
  "icon_0285": {
    "idx": 285,
    "fileName": "aztec-calendar-sun.svg"
  },
  "icon_0286": {
    "idx": 286,
    "fileName": "azul-flake.svg"
  },
  "icon_0287": {
    "idx": 287,
    "fileName": "baby-bottle.svg"
  },
  "icon_0288": {
    "idx": 288,
    "fileName": "baby-face.svg"
  },
  "icon_0289": {
    "idx": 289,
    "fileName": "babyfoot-players.svg"
  },
  "icon_0290": {
    "idx": 290,
    "fileName": "back-forth.svg"
  },
  "icon_0291": {
    "idx": 291,
    "fileName": "back-pain.svg"
  },
  "icon_0292": {
    "idx": 292,
    "fileName": "backbone-shell.svg"
  },
  "icon_0293": {
    "idx": 293,
    "fileName": "backgammon.svg"
  },
  "icon_0294": {
    "idx": 294,
    "fileName": "backpack.svg"
  },
  "icon_0295": {
    "idx": 295,
    "fileName": "backstab.svg"
  },
  "icon_0296": {
    "idx": 296,
    "fileName": "backup.svg"
  },
  "icon_0297": {
    "idx": 297,
    "fileName": "backward-time.svg"
  },
  "icon_0298": {
    "idx": 298,
    "fileName": "bacon.svg"
  },
  "icon_0299": {
    "idx": 299,
    "fileName": "bad-breath.svg"
  },
  "icon_0300": {
    "idx": 300,
    "fileName": "bad-gnome.svg"
  },
  "icon_0301": {
    "idx": 301,
    "fileName": "bagpipes.svg"
  },
  "icon_0302": {
    "idx": 302,
    "fileName": "balaclava.svg"
  },
  "icon_0303": {
    "idx": 303,
    "fileName": "balkenkreuz.svg"
  },
  "icon_0304": {
    "idx": 304,
    "fileName": "ball-glow.svg"
  },
  "icon_0305": {
    "idx": 305,
    "fileName": "ball-heart.svg"
  },
  "icon_0306": {
    "idx": 306,
    "fileName": "ball-pyramid.svg"
  },
  "icon_0307": {
    "idx": 307,
    "fileName": "ballerina-shoes.svg"
  },
  "icon_0308": {
    "idx": 308,
    "fileName": "ballista.svg"
  },
  "icon_0309": {
    "idx": 309,
    "fileName": "balloon-dog.svg"
  },
  "icon_0310": {
    "idx": 310,
    "fileName": "balloons.svg"
  },
  "icon_0311": {
    "idx": 311,
    "fileName": "bamboo-fountain.svg"
  },
  "icon_0312": {
    "idx": 312,
    "fileName": "bamboo.svg"
  },
  "icon_0313": {
    "idx": 313,
    "fileName": "banana-bunch.svg"
  },
  "icon_0314": {
    "idx": 314,
    "fileName": "banana-peel.svg"
  },
  "icon_0315": {
    "idx": 315,
    "fileName": "banana-peeled.svg"
  },
  "icon_0316": {
    "idx": 316,
    "fileName": "banana.svg"
  },
  "icon_0317": {
    "idx": 317,
    "fileName": "bandage-roll.svg"
  },
  "icon_0318": {
    "idx": 318,
    "fileName": "bandaged.svg"
  },
  "icon_0319": {
    "idx": 319,
    "fileName": "bandana.svg"
  },
  "icon_0320": {
    "idx": 320,
    "fileName": "bandit.svg"
  },
  "icon_0321": {
    "idx": 321,
    "fileName": "banging-gavel.svg"
  },
  "icon_0322": {
    "idx": 322,
    "fileName": "banjo.svg"
  },
  "icon_0323": {
    "idx": 323,
    "fileName": "bank.svg"
  },
  "icon_0324": {
    "idx": 324,
    "fileName": "banknote.svg"
  },
  "icon_0325": {
    "idx": 325,
    "fileName": "baobab.svg"
  },
  "icon_0326": {
    "idx": 326,
    "fileName": "bar-stool.svg"
  },
  "icon_0327": {
    "idx": 327,
    "fileName": "barbarian.svg"
  },
  "icon_0328": {
    "idx": 328,
    "fileName": "barbecue.svg"
  },
  "icon_0329": {
    "idx": 329,
    "fileName": "barbed-arrow.svg"
  },
  "icon_0330": {
    "idx": 330,
    "fileName": "barbed-coil.svg"
  },
  "icon_0331": {
    "idx": 331,
    "fileName": "barbed-nails.svg"
  },
  "icon_0332": {
    "idx": 332,
    "fileName": "barbed-spear.svg"
  },
  "icon_0333": {
    "idx": 333,
    "fileName": "barbed-star.svg"
  },
  "icon_0334": {
    "idx": 334,
    "fileName": "barbed-sun.svg"
  },
  "icon_0335": {
    "idx": 335,
    "fileName": "barbed-wire.svg"
  },
  "icon_0336": {
    "idx": 336,
    "fileName": "barbute.svg"
  },
  "icon_0337": {
    "idx": 337,
    "fileName": "barefoot.svg"
  },
  "icon_0338": {
    "idx": 338,
    "fileName": "barn.svg"
  },
  "icon_0339": {
    "idx": 339,
    "fileName": "barracks-tent.svg"
  },
  "icon_0340": {
    "idx": 340,
    "fileName": "barracks.svg"
  },
  "icon_0341": {
    "idx": 341,
    "fileName": "barrel-leak.svg"
  },
  "icon_0342": {
    "idx": 342,
    "fileName": "barrel.svg"
  },
  "icon_0343": {
    "idx": 343,
    "fileName": "barricade.svg"
  },
  "icon_0344": {
    "idx": 344,
    "fileName": "barrier.svg"
  },
  "icon_0345": {
    "idx": 345,
    "fileName": "base-dome.svg"
  },
  "icon_0346": {
    "idx": 346,
    "fileName": "baseball-bat.svg"
  },
  "icon_0347": {
    "idx": 347,
    "fileName": "baseball-glove.svg"
  },
  "icon_0348": {
    "idx": 348,
    "fileName": "basket.svg"
  },
  "icon_0349": {
    "idx": 349,
    "fileName": "basketball-ball.svg"
  },
  "icon_0350": {
    "idx": 350,
    "fileName": "basketball-basket.svg"
  },
  "icon_0351": {
    "idx": 351,
    "fileName": "basketball-jersey.svg"
  },
  "icon_0352": {
    "idx": 352,
    "fileName": "basset-hound-head.svg"
  },
  "icon_0353": {
    "idx": 353,
    "fileName": "bastet.svg"
  },
  "icon_0354": {
    "idx": 354,
    "fileName": "bat-blade.svg"
  },
  "icon_0355": {
    "idx": 355,
    "fileName": "bat-leth.svg"
  },
  "icon_0356": {
    "idx": 356,
    "fileName": "bat-mask.svg"
  },
  "icon_0357": {
    "idx": 357,
    "fileName": "bat-wing.svg"
  },
  "icon_0358": {
    "idx": 358,
    "fileName": "bat.svg"
  },
  "icon_0359": {
    "idx": 359,
    "fileName": "bathtub.svg"
  },
  "icon_0360": {
    "idx": 360,
    "fileName": "baton.svg"
  },
  "icon_0361": {
    "idx": 361,
    "fileName": "battered-axe.svg"
  },
  "icon_0362": {
    "idx": 362,
    "fileName": "batteries.svg"
  },
  "icon_0363": {
    "idx": 363,
    "fileName": "battery-0.svg"
  },
  "icon_0364": {
    "idx": 364,
    "fileName": "battery-100.svg"
  },
  "icon_0365": {
    "idx": 365,
    "fileName": "battery-25.svg"
  },
  "icon_0366": {
    "idx": 366,
    "fileName": "battery-50.svg"
  },
  "icon_0367": {
    "idx": 367,
    "fileName": "battery-75.svg"
  },
  "icon_0368": {
    "idx": 368,
    "fileName": "battery-minus.svg"
  },
  "icon_0369": {
    "idx": 369,
    "fileName": "battery-pack-alt.svg"
  },
  "icon_0370": {
    "idx": 370,
    "fileName": "battery-pack.svg"
  },
  "icon_0371": {
    "idx": 371,
    "fileName": "battery-plus.svg"
  },
  "icon_0372": {
    "idx": 372,
    "fileName": "battle-axe.svg"
  },
  "icon_0373": {
    "idx": 373,
    "fileName": "battle-gear.svg"
  },
  "icon_0374": {
    "idx": 374,
    "fileName": "battle-mech.svg"
  },
  "icon_0375": {
    "idx": 375,
    "fileName": "battle-tank.svg"
  },
  "icon_0376": {
    "idx": 376,
    "fileName": "battleship.svg"
  },
  "icon_0377": {
    "idx": 377,
    "fileName": "batwing-emblem.svg"
  },
  "icon_0378": {
    "idx": 378,
    "fileName": "bayonet.svg"
  },
  "icon_0379": {
    "idx": 379,
    "fileName": "beach-bag.svg"
  },
  "icon_0380": {
    "idx": 380,
    "fileName": "beach-ball.svg"
  },
  "icon_0381": {
    "idx": 381,
    "fileName": "beach-bucket.svg"
  },
  "icon_0382": {
    "idx": 382,
    "fileName": "beam-satellite.svg"
  },
  "icon_0383": {
    "idx": 383,
    "fileName": "beam-wake.svg"
  },
  "icon_0384": {
    "idx": 384,
    "fileName": "beams-aura.svg"
  },
  "icon_0385": {
    "idx": 385,
    "fileName": "beanstalk.svg"
  },
  "icon_0386": {
    "idx": 386,
    "fileName": "bear-face.svg"
  },
  "icon_0387": {
    "idx": 387,
    "fileName": "bear-head.svg"
  },
  "icon_0388": {
    "idx": 388,
    "fileName": "beard.svg"
  },
  "icon_0389": {
    "idx": 389,
    "fileName": "beast-eye.svg"
  },
  "icon_0390": {
    "idx": 390,
    "fileName": "beaver.svg"
  },
  "icon_0391": {
    "idx": 391,
    "fileName": "bed-lamp.svg"
  },
  "icon_0392": {
    "idx": 392,
    "fileName": "bed.svg"
  },
  "icon_0393": {
    "idx": 393,
    "fileName": "bee.svg"
  },
  "icon_0394": {
    "idx": 394,
    "fileName": "beech.svg"
  },
  "icon_0395": {
    "idx": 395,
    "fileName": "beehive.svg"
  },
  "icon_0396": {
    "idx": 396,
    "fileName": "beer-bottle.svg"
  },
  "icon_0397": {
    "idx": 397,
    "fileName": "beer-horn.svg"
  },
  "icon_0398": {
    "idx": 398,
    "fileName": "beer-stein.svg"
  },
  "icon_0399": {
    "idx": 399,
    "fileName": "beet.svg"
  },
  "icon_0400": {
    "idx": 400,
    "fileName": "beetle-shell.svg"
  },
  "icon_0401": {
    "idx": 401,
    "fileName": "behold.svg"
  },
  "icon_0402": {
    "idx": 402,
    "fileName": "belgium.svg"
  },
  "icon_0403": {
    "idx": 403,
    "fileName": "bell-pepper.svg"
  },
  "icon_0404": {
    "idx": 404,
    "fileName": "bell-shield.svg"
  },
  "icon_0405": {
    "idx": 405,
    "fileName": "bellows.svg"
  },
  "icon_0406": {
    "idx": 406,
    "fileName": "belt-armor.svg"
  },
  "icon_0407": {
    "idx": 407,
    "fileName": "belt-buckles.svg"
  },
  "icon_0408": {
    "idx": 408,
    "fileName": "belt.svg"
  },
  "icon_0409": {
    "idx": 409,
    "fileName": "berries-bowl.svg"
  },
  "icon_0410": {
    "idx": 410,
    "fileName": "berry-bush.svg"
  },
  "icon_0411": {
    "idx": 411,
    "fileName": "bestial-fangs.svg"
  },
  "icon_0412": {
    "idx": 412,
    "fileName": "beveled-star.svg"
  },
  "icon_0413": {
    "idx": 413,
    "fileName": "biceps.svg"
  },
  "icon_0414": {
    "idx": 414,
    "fileName": "big-diamond-ring.svg"
  },
  "icon_0415": {
    "idx": 415,
    "fileName": "big-egg.svg"
  },
  "icon_0416": {
    "idx": 416,
    "fileName": "big-gear.svg"
  },
  "icon_0417": {
    "idx": 417,
    "fileName": "big-wave.svg"
  },
  "icon_0418": {
    "idx": 418,
    "fileName": "billed-cap.svg"
  },
  "icon_0419": {
    "idx": 419,
    "fileName": "bindle.svg"
  },
  "icon_0420": {
    "idx": 420,
    "fileName": "binoculars.svg"
  },
  "icon_0421": {
    "idx": 421,
    "fileName": "biohazard.svg"
  },
  "icon_0422": {
    "idx": 422,
    "fileName": "biplane.svg"
  },
  "icon_0423": {
    "idx": 423,
    "fileName": "bird-cage.svg"
  },
  "icon_0424": {
    "idx": 424,
    "fileName": "bird-claw.svg"
  },
  "icon_0425": {
    "idx": 425,
    "fileName": "bird-house.svg"
  },
  "icon_0426": {
    "idx": 426,
    "fileName": "bird-limb.svg"
  },
  "icon_0427": {
    "idx": 427,
    "fileName": "bird-mask.svg"
  },
  "icon_0428": {
    "idx": 428,
    "fileName": "bird-twitter.svg"
  },
  "icon_0429": {
    "idx": 429,
    "fileName": "bison.svg"
  },
  "icon_0430": {
    "idx": 430,
    "fileName": "black-bar.svg"
  },
  "icon_0431": {
    "idx": 431,
    "fileName": "black-belt.svg"
  },
  "icon_0432": {
    "idx": 432,
    "fileName": "black-book.svg"
  },
  "icon_0433": {
    "idx": 433,
    "fileName": "black-bridge.svg"
  },
  "icon_0434": {
    "idx": 434,
    "fileName": "black-flag.svg"
  },
  "icon_0435": {
    "idx": 435,
    "fileName": "black-hand-shield.svg"
  },
  "icon_0436": {
    "idx": 436,
    "fileName": "black-hole-bolas.svg"
  },
  "icon_0437": {
    "idx": 437,
    "fileName": "black-knight-helm.svg"
  },
  "icon_0438": {
    "idx": 438,
    "fileName": "black-sea.svg"
  },
  "icon_0439": {
    "idx": 439,
    "fileName": "blackball.svg"
  },
  "icon_0440": {
    "idx": 440,
    "fileName": "blackcurrant.svg"
  },
  "icon_0441": {
    "idx": 441,
    "fileName": "blacksmith.svg"
  },
  "icon_0442": {
    "idx": 442,
    "fileName": "blade-bite.svg"
  },
  "icon_0443": {
    "idx": 443,
    "fileName": "blade-drag.svg"
  },
  "icon_0444": {
    "idx": 444,
    "fileName": "blade-fall.svg"
  },
  "icon_0445": {
    "idx": 445,
    "fileName": "blast.svg"
  },
  "icon_0446": {
    "idx": 446,
    "fileName": "blaster.svg"
  },
  "icon_0447": {
    "idx": 447,
    "fileName": "bleeding-eye.svg"
  },
  "icon_0448": {
    "idx": 448,
    "fileName": "bleeding-heart.svg"
  },
  "icon_0449": {
    "idx": 449,
    "fileName": "bleeding-wound.svg"
  },
  "icon_0450": {
    "idx": 450,
    "fileName": "blindfold.svg"
  },
  "icon_0451": {
    "idx": 451,
    "fileName": "block-house.svg"
  },
  "icon_0452": {
    "idx": 452,
    "fileName": "blood.svg"
  },
  "icon_0453": {
    "idx": 453,
    "fileName": "bloody-stash.svg"
  },
  "icon_0454": {
    "idx": 454,
    "fileName": "bloody-sword.svg"
  },
  "icon_0455": {
    "idx": 455,
    "fileName": "blunderbuss.svg"
  },
  "icon_0456": {
    "idx": 456,
    "fileName": "bo.svg"
  },
  "icon_0457": {
    "idx": 457,
    "fileName": "boar-ensign.svg"
  },
  "icon_0458": {
    "idx": 458,
    "fileName": "boar-tusks.svg"
  },
  "icon_0459": {
    "idx": 459,
    "fileName": "boat-engine.svg"
  },
  "icon_0460": {
    "idx": 460,
    "fileName": "boat-fishing.svg"
  },
  "icon_0461": {
    "idx": 461,
    "fileName": "boat-horizon.svg"
  },
  "icon_0462": {
    "idx": 462,
    "fileName": "boat-propeller.svg"
  },
  "icon_0463": {
    "idx": 463,
    "fileName": "body-balance.svg"
  },
  "icon_0464": {
    "idx": 464,
    "fileName": "body-height.svg"
  },
  "icon_0465": {
    "idx": 465,
    "fileName": "body-swapping.svg"
  },
  "icon_0466": {
    "idx": 466,
    "fileName": "boiling-bubbles.svg"
  },
  "icon_0467": {
    "idx": 467,
    "fileName": "bolas.svg"
  },
  "icon_0468": {
    "idx": 468,
    "fileName": "bolivia.svg"
  },
  "icon_0469": {
    "idx": 469,
    "fileName": "bolt-bomb.svg"
  },
  "icon_0470": {
    "idx": 470,
    "fileName": "bolt-cutter.svg"
  },
  "icon_0471": {
    "idx": 471,
    "fileName": "bolt-drop.svg"
  },
  "icon_0472": {
    "idx": 472,
    "fileName": "bolt-eye.svg"
  },
  "icon_0473": {
    "idx": 473,
    "fileName": "bolt-saw.svg"
  },
  "icon_0474": {
    "idx": 474,
    "fileName": "bolt-shield.svg"
  },
  "icon_0475": {
    "idx": 475,
    "fileName": "bolt-spell-cast.svg"
  },
  "icon_0476": {
    "idx": 476,
    "fileName": "bolter-gun.svg"
  },
  "icon_0477": {
    "idx": 477,
    "fileName": "bomber.svg"
  },
  "icon_0478": {
    "idx": 478,
    "fileName": "bombing-run.svg"
  },
  "icon_0479": {
    "idx": 479,
    "fileName": "bone-gnawer.svg"
  },
  "icon_0480": {
    "idx": 480,
    "fileName": "bone-knife.svg"
  },
  "icon_0481": {
    "idx": 481,
    "fileName": "bone-mace.svg"
  },
  "icon_0482": {
    "idx": 482,
    "fileName": "bonsai-tree.svg"
  },
  "icon_0483": {
    "idx": 483,
    "fileName": "book-aura.svg"
  },
  "icon_0484": {
    "idx": 484,
    "fileName": "book-cover.svg"
  },
  "icon_0485": {
    "idx": 485,
    "fileName": "book-pile.svg"
  },
  "icon_0486": {
    "idx": 486,
    "fileName": "book-storm.svg"
  },
  "icon_0487": {
    "idx": 487,
    "fileName": "bookmark.svg"
  },
  "icon_0488": {
    "idx": 488,
    "fileName": "bookmarklet.svg"
  },
  "icon_0489": {
    "idx": 489,
    "fileName": "bookshelf.svg"
  },
  "icon_0490": {
    "idx": 490,
    "fileName": "boombox.svg"
  },
  "icon_0491": {
    "idx": 491,
    "fileName": "boomerang-cross.svg"
  },
  "icon_0492": {
    "idx": 492,
    "fileName": "boomerang-sun.svg"
  },
  "icon_0493": {
    "idx": 493,
    "fileName": "boomerang.svg"
  },
  "icon_0494": {
    "idx": 494,
    "fileName": "boot-kick.svg"
  },
  "icon_0495": {
    "idx": 495,
    "fileName": "boot-prints.svg"
  },
  "icon_0496": {
    "idx": 496,
    "fileName": "boot-stomp.svg"
  },
  "icon_0497": {
    "idx": 497,
    "fileName": "boots.svg"
  },
  "icon_0498": {
    "idx": 498,
    "fileName": "booze.svg"
  },
  "icon_0499": {
    "idx": 499,
    "fileName": "bordered-shield.svg"
  },
  "icon_0500": {
    "idx": 500,
    "fileName": "boss-key.svg"
  },
  "icon_0501": {
    "idx": 501,
    "fileName": "bottle-cap.svg"
  },
  "icon_0502": {
    "idx": 502,
    "fileName": "bottle-vapors.svg"
  },
  "icon_0503": {
    "idx": 503,
    "fileName": "bottled-bolt.svg"
  },
  "icon_0504": {
    "idx": 504,
    "fileName": "bottled-shadow.svg"
  },
  "icon_0505": {
    "idx": 505,
    "fileName": "bottom-right-3d-arrow.svg"
  },
  "icon_0506": {
    "idx": 506,
    "fileName": "boulder-dash.svg"
  },
  "icon_0507": {
    "idx": 507,
    "fileName": "bouncing-spring.svg"
  },
  "icon_0508": {
    "idx": 508,
    "fileName": "bouncing-sword.svg"
  },
  "icon_0509": {
    "idx": 509,
    "fileName": "bow-arrow.svg"
  },
  "icon_0510": {
    "idx": 510,
    "fileName": "bow-string.svg"
  },
  "icon_0511": {
    "idx": 511,
    "fileName": "bow-tie-ribbon.svg"
  },
  "icon_0512": {
    "idx": 512,
    "fileName": "bow-tie.svg"
  },
  "icon_0513": {
    "idx": 513,
    "fileName": "bowels.svg"
  },
  "icon_0514": {
    "idx": 514,
    "fileName": "bowen-knot.svg"
  },
  "icon_0515": {
    "idx": 515,
    "fileName": "bowie-knife.svg"
  },
  "icon_0516": {
    "idx": 516,
    "fileName": "bowl-spiral.svg"
  },
  "icon_0517": {
    "idx": 517,
    "fileName": "bowling-alley.svg"
  },
  "icon_0518": {
    "idx": 518,
    "fileName": "bowling-pin.svg"
  },
  "icon_0519": {
    "idx": 519,
    "fileName": "bowling-propulsion.svg"
  },
  "icon_0520": {
    "idx": 520,
    "fileName": "bowling-strike.svg"
  },
  "icon_0521": {
    "idx": 521,
    "fileName": "bowman.svg"
  },
  "icon_0522": {
    "idx": 522,
    "fileName": "box-cutter.svg"
  },
  "icon_0523": {
    "idx": 523,
    "fileName": "box-trap.svg"
  },
  "icon_0524": {
    "idx": 524,
    "fileName": "box-unpacking.svg"
  },
  "icon_0525": {
    "idx": 525,
    "fileName": "boxing-glove-surprise.svg"
  },
  "icon_0526": {
    "idx": 526,
    "fileName": "boxing-glove.svg"
  },
  "icon_0527": {
    "idx": 527,
    "fileName": "boxing-ring.svg"
  },
  "icon_0528": {
    "idx": 528,
    "fileName": "bracer.svg"
  },
  "icon_0529": {
    "idx": 529,
    "fileName": "bracers.svg"
  },
  "icon_0530": {
    "idx": 530,
    "fileName": "brain-dump.svg"
  },
  "icon_0531": {
    "idx": 531,
    "fileName": "brain-freeze.svg"
  },
  "icon_0532": {
    "idx": 532,
    "fileName": "brain-leak.svg"
  },
  "icon_0533": {
    "idx": 533,
    "fileName": "brain-stem.svg"
  },
  "icon_0534": {
    "idx": 534,
    "fileName": "brain-tentacle.svg"
  },
  "icon_0535": {
    "idx": 535,
    "fileName": "brain.svg"
  },
  "icon_0536": {
    "idx": 536,
    "fileName": "brainstorm.svg"
  },
  "icon_0537": {
    "idx": 537,
    "fileName": "branch-arrow.svg"
  },
  "icon_0538": {
    "idx": 538,
    "fileName": "brandy-bottle.svg"
  },
  "icon_0539": {
    "idx": 539,
    "fileName": "brasero.svg"
  },
  "icon_0540": {
    "idx": 540,
    "fileName": "brass-eye.svg"
  },
  "icon_0541": {
    "idx": 541,
    "fileName": "brass-knuckles.svg"
  },
  "icon_0542": {
    "idx": 542,
    "fileName": "brazil-flag.svg"
  },
  "icon_0543": {
    "idx": 543,
    "fileName": "brazil.svg"
  },
  "icon_0544": {
    "idx": 544,
    "fileName": "bread-slice.svg"
  },
  "icon_0545": {
    "idx": 545,
    "fileName": "bread.svg"
  },
  "icon_0546": {
    "idx": 546,
    "fileName": "breaking-chain.svg"
  },
  "icon_0547": {
    "idx": 547,
    "fileName": "breastplate.svg"
  },
  "icon_0548": {
    "idx": 548,
    "fileName": "brick-pile.svg"
  },
  "icon_0549": {
    "idx": 549,
    "fileName": "brick-wall.svg"
  },
  "icon_0550": {
    "idx": 550,
    "fileName": "bridge.svg"
  },
  "icon_0551": {
    "idx": 551,
    "fileName": "briefcase.svg"
  },
  "icon_0552": {
    "idx": 552,
    "fileName": "bright-explosion.svg"
  },
  "icon_0553": {
    "idx": 553,
    "fileName": "broad-dagger.svg"
  },
  "icon_0554": {
    "idx": 554,
    "fileName": "broadhead-arrow.svg"
  },
  "icon_0555": {
    "idx": 555,
    "fileName": "broadsword.svg"
  },
  "icon_0556": {
    "idx": 556,
    "fileName": "broccoli.svg"
  },
  "icon_0557": {
    "idx": 557,
    "fileName": "brodie-helmet.svg"
  },
  "icon_0558": {
    "idx": 558,
    "fileName": "broken-arrow.svg"
  },
  "icon_0559": {
    "idx": 559,
    "fileName": "broken-axe.svg"
  },
  "icon_0560": {
    "idx": 560,
    "fileName": "broken-bone.svg"
  },
  "icon_0561": {
    "idx": 561,
    "fileName": "broken-bottle.svg"
  },
  "icon_0562": {
    "idx": 562,
    "fileName": "broken-heart-zone.svg"
  },
  "icon_0563": {
    "idx": 563,
    "fileName": "broken-heart.svg"
  },
  "icon_0564": {
    "idx": 564,
    "fileName": "broken-pottery.svg"
  },
  "icon_0565": {
    "idx": 565,
    "fileName": "broken-ribbon.svg"
  },
  "icon_0566": {
    "idx": 566,
    "fileName": "broken-shield.svg"
  },
  "icon_0567": {
    "idx": 567,
    "fileName": "broken-skull.svg"
  },
  "icon_0568": {
    "idx": 568,
    "fileName": "broken-tablet.svg"
  },
  "icon_0569": {
    "idx": 569,
    "fileName": "broken-wall.svg"
  },
  "icon_0570": {
    "idx": 570,
    "fileName": "broom.svg"
  },
  "icon_0571": {
    "idx": 571,
    "fileName": "brutal-helm.svg"
  },
  "icon_0572": {
    "idx": 572,
    "fileName": "brute.svg"
  },
  "icon_0573": {
    "idx": 573,
    "fileName": "bubble-field.svg"
  },
  "icon_0574": {
    "idx": 574,
    "fileName": "bubbles.svg"
  },
  "icon_0575": {
    "idx": 575,
    "fileName": "bubbling-beam.svg"
  },
  "icon_0576": {
    "idx": 576,
    "fileName": "bubbling-bowl.svg"
  },
  "icon_0577": {
    "idx": 577,
    "fileName": "bubbling-flask.svg"
  },
  "icon_0578": {
    "idx": 578,
    "fileName": "bud.svg"
  },
  "icon_0579": {
    "idx": 579,
    "fileName": "buffalo-head.svg"
  },
  "icon_0580": {
    "idx": 580,
    "fileName": "bug-net.svg"
  },
  "icon_0581": {
    "idx": 581,
    "fileName": "bugle-call.svg"
  },
  "icon_0582": {
    "idx": 582,
    "fileName": "bulb.svg"
  },
  "icon_0583": {
    "idx": 583,
    "fileName": "bulgaria.svg"
  },
  "icon_0584": {
    "idx": 584,
    "fileName": "bull-horns.svg"
  },
  "icon_0585": {
    "idx": 585,
    "fileName": "bull.svg"
  },
  "icon_0586": {
    "idx": 586,
    "fileName": "bulldozer.svg"
  },
  "icon_0587": {
    "idx": 587,
    "fileName": "bullet-bill.svg"
  },
  "icon_0588": {
    "idx": 588,
    "fileName": "bullet-impacts.svg"
  },
  "icon_0589": {
    "idx": 589,
    "fileName": "bullets.svg"
  },
  "icon_0590": {
    "idx": 590,
    "fileName": "bullseye.svg"
  },
  "icon_0591": {
    "idx": 591,
    "fileName": "bully-minion.svg"
  },
  "icon_0592": {
    "idx": 592,
    "fileName": "bundle-grenade.svg"
  },
  "icon_0593": {
    "idx": 593,
    "fileName": "bunk-beds.svg"
  },
  "icon_0594": {
    "idx": 594,
    "fileName": "bunker-assault.svg"
  },
  "icon_0595": {
    "idx": 595,
    "fileName": "bunker.svg"
  },
  "icon_0596": {
    "idx": 596,
    "fileName": "buoy.svg"
  },
  "icon_0597": {
    "idx": 597,
    "fileName": "burn.svg"
  },
  "icon_0598": {
    "idx": 598,
    "fileName": "burning-blobs.svg"
  },
  "icon_0599": {
    "idx": 599,
    "fileName": "burning-book.svg"
  },
  "icon_0600": {
    "idx": 600,
    "fileName": "burning-dot.svg"
  },
  "icon_0601": {
    "idx": 601,
    "fileName": "burning-embers.svg"
  },
  "icon_0602": {
    "idx": 602,
    "fileName": "burning-eye.svg"
  },
  "icon_0603": {
    "idx": 603,
    "fileName": "burning-forest.svg"
  },
  "icon_0604": {
    "idx": 604,
    "fileName": "burning-meteor.svg"
  },
  "icon_0605": {
    "idx": 605,
    "fileName": "burning-passion.svg"
  },
  "icon_0606": {
    "idx": 606,
    "fileName": "burning-round-shot.svg"
  },
  "icon_0607": {
    "idx": 607,
    "fileName": "burning-skull.svg"
  },
  "icon_0608": {
    "idx": 608,
    "fileName": "burning-tree.svg"
  },
  "icon_0609": {
    "idx": 609,
    "fileName": "burst-blob.svg"
  },
  "icon_0610": {
    "idx": 610,
    "fileName": "bus-doors.svg"
  },
  "icon_0611": {
    "idx": 611,
    "fileName": "bus.svg"
  },
  "icon_0612": {
    "idx": 612,
    "fileName": "butter-toast.svg"
  },
  "icon_0613": {
    "idx": 613,
    "fileName": "butter.svg"
  },
  "icon_0614": {
    "idx": 614,
    "fileName": "butterfly-flower.svg"
  },
  "icon_0615": {
    "idx": 615,
    "fileName": "butterfly-knife.svg"
  },
  "icon_0616": {
    "idx": 616,
    "fileName": "butterfly-warning.svg"
  },
  "icon_0617": {
    "idx": 617,
    "fileName": "butterfly.svg"
  },
  "icon_0618": {
    "idx": 618,
    "fileName": "button-finger.svg"
  },
  "icon_0619": {
    "idx": 619,
    "fileName": "buy-card.svg"
  },
  "icon_0620": {
    "idx": 620,
    "fileName": "byzantin-temple.svg"
  },
  "icon_0621": {
    "idx": 621,
    "fileName": "c96.svg"
  },
  "icon_0622": {
    "idx": 622,
    "fileName": "cabbage.svg"
  },
  "icon_0623": {
    "idx": 623,
    "fileName": "cable-stayed-bridge.svg"
  },
  "icon_0624": {
    "idx": 624,
    "fileName": "cactus-pot.svg"
  },
  "icon_0625": {
    "idx": 625,
    "fileName": "cactus-tap.svg"
  },
  "icon_0626": {
    "idx": 626,
    "fileName": "cactus.svg"
  },
  "icon_0627": {
    "idx": 627,
    "fileName": "cadillac-helm.svg"
  },
  "icon_0628": {
    "idx": 628,
    "fileName": "caduceus.svg"
  },
  "icon_0629": {
    "idx": 629,
    "fileName": "caesar.svg"
  },
  "icon_0630": {
    "idx": 630,
    "fileName": "cage.svg"
  },
  "icon_0631": {
    "idx": 631,
    "fileName": "caged-ball.svg"
  },
  "icon_0632": {
    "idx": 632,
    "fileName": "cake-slice.svg"
  },
  "icon_0633": {
    "idx": 633,
    "fileName": "calavera.svg"
  },
  "icon_0634": {
    "idx": 634,
    "fileName": "calculator.svg"
  },
  "icon_0635": {
    "idx": 635,
    "fileName": "caldera.svg"
  },
  "icon_0636": {
    "idx": 636,
    "fileName": "calendar-half-year.svg"
  },
  "icon_0637": {
    "idx": 637,
    "fileName": "calendar.svg"
  },
  "icon_0638": {
    "idx": 638,
    "fileName": "caltrops.svg"
  },
  "icon_0639": {
    "idx": 639,
    "fileName": "camargue-cross.svg"
  },
  "icon_0640": {
    "idx": 640,
    "fileName": "cambodia.svg"
  },
  "icon_0641": {
    "idx": 641,
    "fileName": "camel-head.svg"
  },
  "icon_0642": {
    "idx": 642,
    "fileName": "camel.svg"
  },
  "icon_0643": {
    "idx": 643,
    "fileName": "camp-cooking-pot.svg"
  },
  "icon_0644": {
    "idx": 644,
    "fileName": "campfire.svg"
  },
  "icon_0645": {
    "idx": 645,
    "fileName": "camping-tent.svg"
  },
  "icon_0646": {
    "idx": 646,
    "fileName": "cancel.svg"
  },
  "icon_0647": {
    "idx": 647,
    "fileName": "cancer.svg"
  },
  "icon_0648": {
    "idx": 648,
    "fileName": "candle-flame.svg"
  },
  "icon_0649": {
    "idx": 649,
    "fileName": "candle-holder.svg"
  },
  "icon_0650": {
    "idx": 650,
    "fileName": "candle-light.svg"
  },
  "icon_0651": {
    "idx": 651,
    "fileName": "candle-skull.svg"
  },
  "icon_0652": {
    "idx": 652,
    "fileName": "candlebright.svg"
  },
  "icon_0653": {
    "idx": 653,
    "fileName": "candles.svg"
  },
  "icon_0654": {
    "idx": 654,
    "fileName": "candlestick-phone.svg"
  },
  "icon_0655": {
    "idx": 655,
    "fileName": "candy-canes.svg"
  },
  "icon_0656": {
    "idx": 656,
    "fileName": "canned-fish.svg"
  },
  "icon_0657": {
    "idx": 657,
    "fileName": "cannister.svg"
  },
  "icon_0658": {
    "idx": 658,
    "fileName": "cannon-ball.svg"
  },
  "icon_0659": {
    "idx": 659,
    "fileName": "cannon-shot.svg"
  },
  "icon_0660": {
    "idx": 660,
    "fileName": "cannon.svg"
  },
  "icon_0661": {
    "idx": 661,
    "fileName": "canoe.svg"
  },
  "icon_0662": {
    "idx": 662,
    "fileName": "cantua.svg"
  },
  "icon_0663": {
    "idx": 663,
    "fileName": "cape-armor.svg"
  },
  "icon_0664": {
    "idx": 664,
    "fileName": "cape.svg"
  },
  "icon_0665": {
    "idx": 665,
    "fileName": "capitol.svg"
  },
  "icon_0666": {
    "idx": 666,
    "fileName": "capricorn.svg"
  },
  "icon_0667": {
    "idx": 667,
    "fileName": "captain-hat-profile.svg"
  },
  "icon_0668": {
    "idx": 668,
    "fileName": "car-battery.svg"
  },
  "icon_0669": {
    "idx": 669,
    "fileName": "car-door.svg"
  },
  "icon_0670": {
    "idx": 670,
    "fileName": "car-key.svg"
  },
  "icon_0671": {
    "idx": 671,
    "fileName": "car-seat.svg"
  },
  "icon_0672": {
    "idx": 672,
    "fileName": "car-wheel.svg"
  },
  "icon_0673": {
    "idx": 673,
    "fileName": "carabiner.svg"
  },
  "icon_0674": {
    "idx": 674,
    "fileName": "carambola.svg"
  },
  "icon_0675": {
    "idx": 675,
    "fileName": "caravan.svg"
  },
  "icon_0676": {
    "idx": 676,
    "fileName": "caravel.svg"
  },
  "icon_0677": {
    "idx": 677,
    "fileName": "card-10-clubs.svg"
  },
  "icon_0678": {
    "idx": 678,
    "fileName": "card-10-diamonds.svg"
  },
  "icon_0679": {
    "idx": 679,
    "fileName": "card-10-hearts.svg"
  },
  "icon_0680": {
    "idx": 680,
    "fileName": "card-10-spades.svg"
  },
  "icon_0681": {
    "idx": 681,
    "fileName": "card-2-clubs.svg"
  },
  "icon_0682": {
    "idx": 682,
    "fileName": "card-2-diamonds.svg"
  },
  "icon_0683": {
    "idx": 683,
    "fileName": "card-2-hearts.svg"
  },
  "icon_0684": {
    "idx": 684,
    "fileName": "card-2-spades.svg"
  },
  "icon_0685": {
    "idx": 685,
    "fileName": "card-3-clubs.svg"
  },
  "icon_0686": {
    "idx": 686,
    "fileName": "card-3-diamonds.svg"
  },
  "icon_0687": {
    "idx": 687,
    "fileName": "card-3-hearts.svg"
  },
  "icon_0688": {
    "idx": 688,
    "fileName": "card-3-spades.svg"
  },
  "icon_0689": {
    "idx": 689,
    "fileName": "card-4-clubs.svg"
  },
  "icon_0690": {
    "idx": 690,
    "fileName": "card-4-diamonds.svg"
  },
  "icon_0691": {
    "idx": 691,
    "fileName": "card-4-hearts.svg"
  },
  "icon_0692": {
    "idx": 692,
    "fileName": "card-4-spades.svg"
  },
  "icon_0693": {
    "idx": 693,
    "fileName": "card-5-clubs.svg"
  },
  "icon_0694": {
    "idx": 694,
    "fileName": "card-5-diamonds.svg"
  },
  "icon_0695": {
    "idx": 695,
    "fileName": "card-5-hearts.svg"
  },
  "icon_0696": {
    "idx": 696,
    "fileName": "card-5-spades.svg"
  },
  "icon_0697": {
    "idx": 697,
    "fileName": "card-6-clubs.svg"
  },
  "icon_0698": {
    "idx": 698,
    "fileName": "card-6-diamonds.svg"
  },
  "icon_0699": {
    "idx": 699,
    "fileName": "card-6-hearts.svg"
  },
  "icon_0700": {
    "idx": 700,
    "fileName": "card-6-spades.svg"
  },
  "icon_0701": {
    "idx": 701,
    "fileName": "card-7-clubs.svg"
  },
  "icon_0702": {
    "idx": 702,
    "fileName": "card-7-diamonds.svg"
  },
  "icon_0703": {
    "idx": 703,
    "fileName": "card-7-hearts.svg"
  },
  "icon_0704": {
    "idx": 704,
    "fileName": "card-7-spades.svg"
  },
  "icon_0705": {
    "idx": 705,
    "fileName": "card-8-clubs.svg"
  },
  "icon_0706": {
    "idx": 706,
    "fileName": "card-8-diamonds.svg"
  },
  "icon_0707": {
    "idx": 707,
    "fileName": "card-8-hearts.svg"
  },
  "icon_0708": {
    "idx": 708,
    "fileName": "card-8-spades.svg"
  },
  "icon_0709": {
    "idx": 709,
    "fileName": "card-9-clubs.svg"
  },
  "icon_0710": {
    "idx": 710,
    "fileName": "card-9-diamonds.svg"
  },
  "icon_0711": {
    "idx": 711,
    "fileName": "card-9-hearts.svg"
  },
  "icon_0712": {
    "idx": 712,
    "fileName": "card-9-spades.svg"
  },
  "icon_0713": {
    "idx": 713,
    "fileName": "card-ace-clubs.svg"
  },
  "icon_0714": {
    "idx": 714,
    "fileName": "card-ace-diamonds.svg"
  },
  "icon_0715": {
    "idx": 715,
    "fileName": "card-ace-hearts.svg"
  },
  "icon_0716": {
    "idx": 716,
    "fileName": "card-ace-spades.svg"
  },
  "icon_0717": {
    "idx": 717,
    "fileName": "card-burn.svg"
  },
  "icon_0718": {
    "idx": 718,
    "fileName": "card-discard.svg"
  },
  "icon_0719": {
    "idx": 719,
    "fileName": "card-draw.svg"
  },
  "icon_0720": {
    "idx": 720,
    "fileName": "card-exchange.svg"
  },
  "icon_0721": {
    "idx": 721,
    "fileName": "card-jack-clubs.svg"
  },
  "icon_0722": {
    "idx": 722,
    "fileName": "card-jack-diamonds.svg"
  },
  "icon_0723": {
    "idx": 723,
    "fileName": "card-jack-hearts.svg"
  },
  "icon_0724": {
    "idx": 724,
    "fileName": "card-jack-spades.svg"
  },
  "icon_0725": {
    "idx": 725,
    "fileName": "card-joker.svg"
  },
  "icon_0726": {
    "idx": 726,
    "fileName": "card-king-clubs.svg"
  },
  "icon_0727": {
    "idx": 727,
    "fileName": "card-king-diamonds.svg"
  },
  "icon_0728": {
    "idx": 728,
    "fileName": "card-king-hearts.svg"
  },
  "icon_0729": {
    "idx": 729,
    "fileName": "card-king-spades.svg"
  },
  "icon_0730": {
    "idx": 730,
    "fileName": "card-pick.svg"
  },
  "icon_0731": {
    "idx": 731,
    "fileName": "card-pickup.svg"
  },
  "icon_0732": {
    "idx": 732,
    "fileName": "card-play.svg"
  },
  "icon_0733": {
    "idx": 733,
    "fileName": "card-queen-clubs.svg"
  },
  "icon_0734": {
    "idx": 734,
    "fileName": "card-queen-diamonds.svg"
  },
  "icon_0735": {
    "idx": 735,
    "fileName": "card-queen-hearts.svg"
  },
  "icon_0736": {
    "idx": 736,
    "fileName": "card-queen-spades.svg"
  },
  "icon_0737": {
    "idx": 737,
    "fileName": "card-random.svg"
  },
  "icon_0738": {
    "idx": 738,
    "fileName": "cardboard-box-closed.svg"
  },
  "icon_0739": {
    "idx": 739,
    "fileName": "cardboard-box.svg"
  },
  "icon_0740": {
    "idx": 740,
    "fileName": "cargo-crane.svg"
  },
  "icon_0741": {
    "idx": 741,
    "fileName": "cargo-crate.svg"
  },
  "icon_0742": {
    "idx": 742,
    "fileName": "cargo-ship.svg"
  },
  "icon_0743": {
    "idx": 743,
    "fileName": "carillon.svg"
  },
  "icon_0744": {
    "idx": 744,
    "fileName": "carnival-mask.svg"
  },
  "icon_0745": {
    "idx": 745,
    "fileName": "carnivore-mouth.svg"
  },
  "icon_0746": {
    "idx": 746,
    "fileName": "carnivorous-plant.svg"
  },
  "icon_0747": {
    "idx": 747,
    "fileName": "carnyx.svg"
  },
  "icon_0748": {
    "idx": 748,
    "fileName": "carousel.svg"
  },
  "icon_0749": {
    "idx": 749,
    "fileName": "carpet-bombing.svg"
  },
  "icon_0750": {
    "idx": 750,
    "fileName": "carrier.svg"
  },
  "icon_0751": {
    "idx": 751,
    "fileName": "carrion.svg"
  },
  "icon_0752": {
    "idx": 752,
    "fileName": "carrot.svg"
  },
  "icon_0753": {
    "idx": 753,
    "fileName": "cartwheel.svg"
  },
  "icon_0754": {
    "idx": 754,
    "fileName": "cash.svg"
  },
  "icon_0755": {
    "idx": 755,
    "fileName": "cassowary-head.svg"
  },
  "icon_0756": {
    "idx": 756,
    "fileName": "castle-ruins.svg"
  },
  "icon_0757": {
    "idx": 757,
    "fileName": "castle.svg"
  },
  "icon_0758": {
    "idx": 758,
    "fileName": "cat.svg"
  },
  "icon_0759": {
    "idx": 759,
    "fileName": "catapult.svg"
  },
  "icon_0760": {
    "idx": 760,
    "fileName": "catch.svg"
  },
  "icon_0761": {
    "idx": 761,
    "fileName": "caterpillar.svg"
  },
  "icon_0762": {
    "idx": 762,
    "fileName": "cauldron.svg"
  },
  "icon_0763": {
    "idx": 763,
    "fileName": "cavalry.svg"
  },
  "icon_0764": {
    "idx": 764,
    "fileName": "cave-entrance.svg"
  },
  "icon_0765": {
    "idx": 765,
    "fileName": "caveman.svg"
  },
  "icon_0766": {
    "idx": 766,
    "fileName": "cctv-camera.svg"
  },
  "icon_0767": {
    "idx": 767,
    "fileName": "ceiling-barnacle.svg"
  },
  "icon_0768": {
    "idx": 768,
    "fileName": "ceiling-light.svg"
  },
  "icon_0769": {
    "idx": 769,
    "fileName": "celebration-fire.svg"
  },
  "icon_0770": {
    "idx": 770,
    "fileName": "cellar-barrels.svg"
  },
  "icon_0771": {
    "idx": 771,
    "fileName": "cement-shoes.svg"
  },
  "icon_0772": {
    "idx": 772,
    "fileName": "centaur.svg"
  },
  "icon_0773": {
    "idx": 773,
    "fileName": "centipede.svg"
  },
  "icon_0774": {
    "idx": 774,
    "fileName": "ceremonial-mask.svg"
  },
  "icon_0775": {
    "idx": 775,
    "fileName": "chain-lightning.svg"
  },
  "icon_0776": {
    "idx": 776,
    "fileName": "chain-mail.svg"
  },
  "icon_0777": {
    "idx": 777,
    "fileName": "chained-arrow-heads.svg"
  },
  "icon_0778": {
    "idx": 778,
    "fileName": "chained-heart.svg"
  },
  "icon_0779": {
    "idx": 779,
    "fileName": "chaingun.svg"
  },
  "icon_0780": {
    "idx": 780,
    "fileName": "chainsaw.svg"
  },
  "icon_0781": {
    "idx": 781,
    "fileName": "chakram.svg"
  },
  "icon_0782": {
    "idx": 782,
    "fileName": "chalice-drops.svg"
  },
  "icon_0783": {
    "idx": 783,
    "fileName": "chalk-outline-murder.svg"
  },
  "icon_0784": {
    "idx": 784,
    "fileName": "chameleon-glyph.svg"
  },
  "icon_0785": {
    "idx": 785,
    "fileName": "champagne-cork.svg"
  },
  "icon_0786": {
    "idx": 786,
    "fileName": "champions.svg"
  },
  "icon_0787": {
    "idx": 787,
    "fileName": "chanterelles.svg"
  },
  "icon_0788": {
    "idx": 788,
    "fileName": "character.svg"
  },
  "icon_0789": {
    "idx": 789,
    "fileName": "charged-arrow.svg"
  },
  "icon_0790": {
    "idx": 790,
    "fileName": "charging-bull.svg"
  },
  "icon_0791": {
    "idx": 791,
    "fileName": "charging.svg"
  },
  "icon_0792": {
    "idx": 792,
    "fileName": "chariot.svg"
  },
  "icon_0793": {
    "idx": 793,
    "fileName": "charm.svg"
  },
  "icon_0794": {
    "idx": 794,
    "fileName": "chart.svg"
  },
  "icon_0795": {
    "idx": 795,
    "fileName": "chat-bubble.svg"
  },
  "icon_0796": {
    "idx": 796,
    "fileName": "check-mark.svg"
  },
  "icon_0797": {
    "idx": 797,
    "fileName": "checkbox-tree.svg"
  },
  "icon_0798": {
    "idx": 798,
    "fileName": "checked-shield.svg"
  },
  "icon_0799": {
    "idx": 799,
    "fileName": "checkered-diamond.svg"
  },
  "icon_0800": {
    "idx": 800,
    "fileName": "checkered-flag.svg"
  },
  "icon_0801": {
    "idx": 801,
    "fileName": "checklist.svg"
  },
  "icon_0802": {
    "idx": 802,
    "fileName": "cheerful.svg"
  },
  "icon_0803": {
    "idx": 803,
    "fileName": "cheese-wedge.svg"
  },
  "icon_0804": {
    "idx": 804,
    "fileName": "chef-toque.svg"
  },
  "icon_0805": {
    "idx": 805,
    "fileName": "chelsea-boot.svg"
  },
  "icon_0806": {
    "idx": 806,
    "fileName": "chemical-arrow.svg"
  },
  "icon_0807": {
    "idx": 807,
    "fileName": "chemical-bolt.svg"
  },
  "icon_0808": {
    "idx": 808,
    "fileName": "chemical-drop.svg"
  },
  "icon_0809": {
    "idx": 809,
    "fileName": "chemical-tank.svg"
  },
  "icon_0810": {
    "idx": 810,
    "fileName": "cherish.svg"
  },
  "icon_0811": {
    "idx": 811,
    "fileName": "cherry.svg"
  },
  "icon_0812": {
    "idx": 812,
    "fileName": "chess-bishop.svg"
  },
  "icon_0813": {
    "idx": 813,
    "fileName": "chess-king.svg"
  },
  "icon_0814": {
    "idx": 814,
    "fileName": "chess-knight.svg"
  },
  "icon_0815": {
    "idx": 815,
    "fileName": "chess-pawn.svg"
  },
  "icon_0816": {
    "idx": 816,
    "fileName": "chess-queen.svg"
  },
  "icon_0817": {
    "idx": 817,
    "fileName": "chess-rook.svg"
  },
  "icon_0818": {
    "idx": 818,
    "fileName": "chest-armor.svg"
  },
  "icon_0819": {
    "idx": 819,
    "fileName": "chest.svg"
  },
  "icon_0820": {
    "idx": 820,
    "fileName": "chestnut-leaf.svg"
  },
  "icon_0821": {
    "idx": 821,
    "fileName": "chewed-heart.svg"
  },
  "icon_0822": {
    "idx": 822,
    "fileName": "chewed-skull.svg"
  },
  "icon_0823": {
    "idx": 823,
    "fileName": "chicken-leg.svg"
  },
  "icon_0824": {
    "idx": 824,
    "fileName": "chicken-oven.svg"
  },
  "icon_0825": {
    "idx": 825,
    "fileName": "chicken.svg"
  },
  "icon_0826": {
    "idx": 826,
    "fileName": "chili-pepper.svg"
  },
  "icon_0827": {
    "idx": 827,
    "fileName": "chimney.svg"
  },
  "icon_0828": {
    "idx": 828,
    "fileName": "chips-bag.svg"
  },
  "icon_0829": {
    "idx": 829,
    "fileName": "chisel.svg"
  },
  "icon_0830": {
    "idx": 830,
    "fileName": "chocolate-bar.svg"
  },
  "icon_0831": {
    "idx": 831,
    "fileName": "choice.svg"
  },
  "icon_0832": {
    "idx": 832,
    "fileName": "chopped-skull.svg"
  },
  "icon_0833": {
    "idx": 833,
    "fileName": "church.svg"
  },
  "icon_0834": {
    "idx": 834,
    "fileName": "cigale.svg"
  },
  "icon_0835": {
    "idx": 835,
    "fileName": "cigar.svg"
  },
  "icon_0836": {
    "idx": 836,
    "fileName": "cigarette.svg"
  },
  "icon_0837": {
    "idx": 837,
    "fileName": "circle-cage.svg"
  },
  "icon_0838": {
    "idx": 838,
    "fileName": "circle-claws.svg"
  },
  "icon_0839": {
    "idx": 839,
    "fileName": "circle-forest.svg"
  },
  "icon_0840": {
    "idx": 840,
    "fileName": "circle-sparks.svg"
  },
  "icon_0841": {
    "idx": 841,
    "fileName": "circle.svg"
  },
  "icon_0842": {
    "idx": 842,
    "fileName": "circling-fish.svg"
  },
  "icon_0843": {
    "idx": 843,
    "fileName": "circuitry.svg"
  },
  "icon_0844": {
    "idx": 844,
    "fileName": "circular-saw.svg"
  },
  "icon_0845": {
    "idx": 845,
    "fileName": "circular-sawblade.svg"
  },
  "icon_0846": {
    "idx": 846,
    "fileName": "city-car.svg"
  },
  "icon_0847": {
    "idx": 847,
    "fileName": "clamp.svg"
  },
  "icon_0848": {
    "idx": 848,
    "fileName": "clapperboard.svg"
  },
  "icon_0849": {
    "idx": 849,
    "fileName": "classical-knowledge.svg"
  },
  "icon_0850": {
    "idx": 850,
    "fileName": "claw-hammer.svg"
  },
  "icon_0851": {
    "idx": 851,
    "fileName": "claw-slashes.svg"
  },
  "icon_0852": {
    "idx": 852,
    "fileName": "claw-string.svg"
  },
  "icon_0853": {
    "idx": 853,
    "fileName": "claw.svg"
  },
  "icon_0854": {
    "idx": 854,
    "fileName": "claws.svg"
  },
  "icon_0855": {
    "idx": 855,
    "fileName": "clay-brick.svg"
  },
  "icon_0856": {
    "idx": 856,
    "fileName": "claymore-explosive.svg"
  },
  "icon_0857": {
    "idx": 857,
    "fileName": "cleaver.svg"
  },
  "icon_0858": {
    "idx": 858,
    "fileName": "cleopatra.svg"
  },
  "icon_0859": {
    "idx": 859,
    "fileName": "click.svg"
  },
  "icon_0860": {
    "idx": 860,
    "fileName": "cliff-crossing.svg"
  },
  "icon_0861": {
    "idx": 861,
    "fileName": "cloak-dagger.svg"
  },
  "icon_0862": {
    "idx": 862,
    "fileName": "cloak.svg"
  },
  "icon_0863": {
    "idx": 863,
    "fileName": "clockwise-rotation.svg"
  },
  "icon_0864": {
    "idx": 864,
    "fileName": "clockwork.svg"
  },
  "icon_0865": {
    "idx": 865,
    "fileName": "closed-barbute.svg"
  },
  "icon_0866": {
    "idx": 866,
    "fileName": "closed-doors.svg"
  },
  "icon_0867": {
    "idx": 867,
    "fileName": "cloth-jar.svg"
  },
  "icon_0868": {
    "idx": 868,
    "fileName": "clothes.svg"
  },
  "icon_0869": {
    "idx": 869,
    "fileName": "clothespin.svg"
  },
  "icon_0870": {
    "idx": 870,
    "fileName": "cloud-download.svg"
  },
  "icon_0871": {
    "idx": 871,
    "fileName": "cloud-ring.svg"
  },
  "icon_0872": {
    "idx": 872,
    "fileName": "cloud-upload.svg"
  },
  "icon_0873": {
    "idx": 873,
    "fileName": "cloudy-fork.svg"
  },
  "icon_0874": {
    "idx": 874,
    "fileName": "clout.svg"
  },
  "icon_0875": {
    "idx": 875,
    "fileName": "clover-spiked.svg"
  },
  "icon_0876": {
    "idx": 876,
    "fileName": "clover.svg"
  },
  "icon_0877": {
    "idx": 877,
    "fileName": "clown.svg"
  },
  "icon_0878": {
    "idx": 878,
    "fileName": "clownfish.svg"
  },
  "icon_0879": {
    "idx": 879,
    "fileName": "clubs.svg"
  },
  "icon_0880": {
    "idx": 880,
    "fileName": "cluster-bomb.svg"
  },
  "icon_0881": {
    "idx": 881,
    "fileName": "coa-de-jima.svg"
  },
  "icon_0882": {
    "idx": 882,
    "fileName": "coal-pile.svg"
  },
  "icon_0883": {
    "idx": 883,
    "fileName": "coal-wagon.svg"
  },
  "icon_0884": {
    "idx": 884,
    "fileName": "cobra.svg"
  },
  "icon_0885": {
    "idx": 885,
    "fileName": "cobweb.svg"
  },
  "icon_0886": {
    "idx": 886,
    "fileName": "coconuts.svg"
  },
  "icon_0887": {
    "idx": 887,
    "fileName": "coffee-beans.svg"
  },
  "icon_0888": {
    "idx": 888,
    "fileName": "coffee-cup.svg"
  },
  "icon_0889": {
    "idx": 889,
    "fileName": "coffee-mug.svg"
  },
  "icon_0890": {
    "idx": 890,
    "fileName": "coffee-pot.svg"
  },
  "icon_0891": {
    "idx": 891,
    "fileName": "coffin.svg"
  },
  "icon_0892": {
    "idx": 892,
    "fileName": "cog-lock.svg"
  },
  "icon_0893": {
    "idx": 893,
    "fileName": "cog.svg"
  },
  "icon_0894": {
    "idx": 894,
    "fileName": "cogsplosion.svg"
  },
  "icon_0895": {
    "idx": 895,
    "fileName": "coiled-nail.svg"
  },
  "icon_0896": {
    "idx": 896,
    "fileName": "coiling-curl.svg"
  },
  "icon_0897": {
    "idx": 897,
    "fileName": "coins-pile.svg"
  },
  "icon_0898": {
    "idx": 898,
    "fileName": "coins.svg"
  },
  "icon_0899": {
    "idx": 899,
    "fileName": "cold-heart.svg"
  },
  "icon_0900": {
    "idx": 900,
    "fileName": "coliseum.svg"
  },
  "icon_0901": {
    "idx": 901,
    "fileName": "colombia.svg"
  },
  "icon_0902": {
    "idx": 902,
    "fileName": "colombian-statue.svg"
  },
  "icon_0903": {
    "idx": 903,
    "fileName": "colt-m1911.svg"
  },
  "icon_0904": {
    "idx": 904,
    "fileName": "column-vase.svg"
  },
  "icon_0905": {
    "idx": 905,
    "fileName": "coma.svg"
  },
  "icon_0906": {
    "idx": 906,
    "fileName": "comb.svg"
  },
  "icon_0907": {
    "idx": 907,
    "fileName": "combination-lock.svg"
  },
  "icon_0908": {
    "idx": 908,
    "fileName": "comet-spark.svg"
  },
  "icon_0909": {
    "idx": 909,
    "fileName": "commercial-airplane.svg"
  },
  "icon_0910": {
    "idx": 910,
    "fileName": "compact-disc.svg"
  },
  "icon_0911": {
    "idx": 911,
    "fileName": "companion-cube.svg"
  },
  "icon_0912": {
    "idx": 912,
    "fileName": "compass.svg"
  },
  "icon_0913": {
    "idx": 913,
    "fileName": "computer-fan.svg"
  },
  "icon_0914": {
    "idx": 914,
    "fileName": "computing.svg"
  },
  "icon_0915": {
    "idx": 915,
    "fileName": "concentration-orb.svg"
  },
  "icon_0916": {
    "idx": 916,
    "fileName": "concentric-crescents.svg"
  },
  "icon_0917": {
    "idx": 917,
    "fileName": "concrete-bag.svg"
  },
  "icon_0918": {
    "idx": 918,
    "fileName": "condor-emblem.svg"
  },
  "icon_0919": {
    "idx": 919,
    "fileName": "condylura-skull.svg"
  },
  "icon_0920": {
    "idx": 920,
    "fileName": "confirmed.svg"
  },
  "icon_0921": {
    "idx": 921,
    "fileName": "confrontation.svg"
  },
  "icon_0922": {
    "idx": 922,
    "fileName": "congress.svg"
  },
  "icon_0923": {
    "idx": 923,
    "fileName": "conqueror.svg"
  },
  "icon_0924": {
    "idx": 924,
    "fileName": "console-controller.svg"
  },
  "icon_0925": {
    "idx": 925,
    "fileName": "contortionist.svg"
  },
  "icon_0926": {
    "idx": 926,
    "fileName": "contract.svg"
  },
  "icon_0927": {
    "idx": 927,
    "fileName": "control-tower.svg"
  },
  "icon_0928": {
    "idx": 928,
    "fileName": "convergence-target.svg"
  },
  "icon_0929": {
    "idx": 929,
    "fileName": "conversation.svg"
  },
  "icon_0930": {
    "idx": 930,
    "fileName": "converse-shoe.svg"
  },
  "icon_0931": {
    "idx": 931,
    "fileName": "convict.svg"
  },
  "icon_0932": {
    "idx": 932,
    "fileName": "convince.svg"
  },
  "icon_0933": {
    "idx": 933,
    "fileName": "conway-life-glider.svg"
  },
  "icon_0934": {
    "idx": 934,
    "fileName": "cook.svg"
  },
  "icon_0935": {
    "idx": 935,
    "fileName": "cookie.svg"
  },
  "icon_0936": {
    "idx": 936,
    "fileName": "cooking-glove.svg"
  },
  "icon_0937": {
    "idx": 937,
    "fileName": "cooking-pot.svg"
  },
  "icon_0938": {
    "idx": 938,
    "fileName": "cool-spices.svg"
  },
  "icon_0939": {
    "idx": 939,
    "fileName": "coral.svg"
  },
  "icon_0940": {
    "idx": 940,
    "fileName": "cork-hat.svg"
  },
  "icon_0941": {
    "idx": 941,
    "fileName": "corked-tube.svg"
  },
  "icon_0942": {
    "idx": 942,
    "fileName": "corkscrew.svg"
  },
  "icon_0943": {
    "idx": 943,
    "fileName": "corn.svg"
  },
  "icon_0944": {
    "idx": 944,
    "fileName": "corner-explosion.svg"
  },
  "icon_0945": {
    "idx": 945,
    "fileName": "corner-flag.svg"
  },
  "icon_0946": {
    "idx": 946,
    "fileName": "cornucopia.svg"
  },
  "icon_0947": {
    "idx": 947,
    "fileName": "coronation.svg"
  },
  "icon_0948": {
    "idx": 948,
    "fileName": "corporal.svg"
  },
  "icon_0949": {
    "idx": 949,
    "fileName": "corset.svg"
  },
  "icon_0950": {
    "idx": 950,
    "fileName": "corsica.svg"
  },
  "icon_0951": {
    "idx": 951,
    "fileName": "cotton-flower.svg"
  },
  "icon_0952": {
    "idx": 952,
    "fileName": "covered-jar.svg"
  },
  "icon_0953": {
    "idx": 953,
    "fileName": "cow.svg"
  },
  "icon_0954": {
    "idx": 954,
    "fileName": "cowboy-boot.svg"
  },
  "icon_0955": {
    "idx": 955,
    "fileName": "cowboy-holster.svg"
  },
  "icon_0956": {
    "idx": 956,
    "fileName": "cowled.svg"
  },
  "icon_0957": {
    "idx": 957,
    "fileName": "cpu-shot.svg"
  },
  "icon_0958": {
    "idx": 958,
    "fileName": "cpu.svg"
  },
  "icon_0959": {
    "idx": 959,
    "fileName": "crab-claw.svg"
  },
  "icon_0960": {
    "idx": 960,
    "fileName": "crab.svg"
  },
  "icon_0961": {
    "idx": 961,
    "fileName": "cracked-alien-skull.svg"
  },
  "icon_0962": {
    "idx": 962,
    "fileName": "cracked-ball-dunk.svg"
  },
  "icon_0963": {
    "idx": 963,
    "fileName": "cracked-disc.svg"
  },
  "icon_0964": {
    "idx": 964,
    "fileName": "cracked-glass.svg"
  },
  "icon_0965": {
    "idx": 965,
    "fileName": "cracked-helm.svg"
  },
  "icon_0966": {
    "idx": 966,
    "fileName": "cracked-mask.svg"
  },
  "icon_0967": {
    "idx": 967,
    "fileName": "cracked-saber.svg"
  },
  "icon_0968": {
    "idx": 968,
    "fileName": "cracked-shield.svg"
  },
  "icon_0969": {
    "idx": 969,
    "fileName": "crafting.svg"
  },
  "icon_0970": {
    "idx": 970,
    "fileName": "crags.svg"
  },
  "icon_0971": {
    "idx": 971,
    "fileName": "crane.svg"
  },
  "icon_0972": {
    "idx": 972,
    "fileName": "credits-currency.svg"
  },
  "icon_0973": {
    "idx": 973,
    "fileName": "crenel-crown.svg"
  },
  "icon_0974": {
    "idx": 974,
    "fileName": "crenulated-shield.svg"
  },
  "icon_0975": {
    "idx": 975,
    "fileName": "crescent-blade.svg"
  },
  "icon_0976": {
    "idx": 976,
    "fileName": "crescent-staff.svg"
  },
  "icon_0977": {
    "idx": 977,
    "fileName": "crested-helmet.svg"
  },
  "icon_0978": {
    "idx": 978,
    "fileName": "cricket-bat.svg"
  },
  "icon_0979": {
    "idx": 979,
    "fileName": "cricket.svg"
  },
  "icon_0980": {
    "idx": 980,
    "fileName": "crime-scene-tape.svg"
  },
  "icon_0981": {
    "idx": 981,
    "fileName": "croc-jaws.svg"
  },
  "icon_0982": {
    "idx": 982,
    "fileName": "croc-sword.svg"
  },
  "icon_0983": {
    "idx": 983,
    "fileName": "croissant.svg"
  },
  "icon_0984": {
    "idx": 984,
    "fileName": "croissants-pupil.svg"
  },
  "icon_0985": {
    "idx": 985,
    "fileName": "crook-flail.svg"
  },
  "icon_0986": {
    "idx": 986,
    "fileName": "cross-flare.svg"
  },
  "icon_0987": {
    "idx": 987,
    "fileName": "cross-mark.svg"
  },
  "icon_0988": {
    "idx": 988,
    "fileName": "cross-shield.svg"
  },
  "icon_0989": {
    "idx": 989,
    "fileName": "crossbow.svg"
  },
  "icon_0990": {
    "idx": 990,
    "fileName": "crosscut-saw.svg"
  },
  "icon_0991": {
    "idx": 991,
    "fileName": "crossed-air-flows.svg"
  },
  "icon_0992": {
    "idx": 992,
    "fileName": "crossed-axes.svg"
  },
  "icon_0993": {
    "idx": 993,
    "fileName": "crossed-bones.svg"
  },
  "icon_0994": {
    "idx": 994,
    "fileName": "crossed-chains.svg"
  },
  "icon_0995": {
    "idx": 995,
    "fileName": "crossed-claws.svg"
  },
  "icon_0996": {
    "idx": 996,
    "fileName": "crossed-pistols.svg"
  },
  "icon_0997": {
    "idx": 997,
    "fileName": "crossed-sabres.svg"
  },
  "icon_0998": {
    "idx": 998,
    "fileName": "crossed-slashes.svg"
  },
  "icon_0999": {
    "idx": 999,
    "fileName": "crossed-swords.svg"
  },
  "icon_1000": {
    "idx": 1000,
    "fileName": "crosshair-arrow.svg"
  },
  "icon_1001": {
    "idx": 1001,
    "fileName": "crosshair.svg"
  },
  "icon_1002": {
    "idx": 1002,
    "fileName": "crossroad.svg"
  },
  "icon_1003": {
    "idx": 1003,
    "fileName": "crow-dive.svg"
  },
  "icon_1004": {
    "idx": 1004,
    "fileName": "crow-nest.svg"
  },
  "icon_1005": {
    "idx": 1005,
    "fileName": "crowbar.svg"
  },
  "icon_1006": {
    "idx": 1006,
    "fileName": "crown-coin.svg"
  },
  "icon_1007": {
    "idx": 1007,
    "fileName": "crown-of-thorns.svg"
  },
  "icon_1008": {
    "idx": 1008,
    "fileName": "crown.svg"
  },
  "icon_1009": {
    "idx": 1009,
    "fileName": "crowned-explosion.svg"
  },
  "icon_1010": {
    "idx": 1010,
    "fileName": "crowned-heart.svg"
  },
  "icon_1011": {
    "idx": 1011,
    "fileName": "crowned-skull.svg"
  },
  "icon_1012": {
    "idx": 1012,
    "fileName": "crucifix.svg"
  },
  "icon_1013": {
    "idx": 1013,
    "fileName": "cruiser.svg"
  },
  "icon_1014": {
    "idx": 1014,
    "fileName": "crumbling-ball.svg"
  },
  "icon_1015": {
    "idx": 1015,
    "fileName": "crush.svg"
  },
  "icon_1016": {
    "idx": 1016,
    "fileName": "cryo-chamber.svg"
  },
  "icon_1017": {
    "idx": 1017,
    "fileName": "crypt-entrance.svg"
  },
  "icon_1018": {
    "idx": 1018,
    "fileName": "crystal-ball.svg"
  },
  "icon_1019": {
    "idx": 1019,
    "fileName": "crystal-bars.svg"
  },
  "icon_1020": {
    "idx": 1020,
    "fileName": "crystal-cluster.svg"
  },
  "icon_1021": {
    "idx": 1021,
    "fileName": "crystal-earrings.svg"
  },
  "icon_1022": {
    "idx": 1022,
    "fileName": "crystal-eye.svg"
  },
  "icon_1023": {
    "idx": 1023,
    "fileName": "crystal-growth.svg"
  },
  "icon_1024": {
    "idx": 1024,
    "fileName": "crystal-shine.svg"
  },
  "icon_1025": {
    "idx": 1025,
    "fileName": "crystal-shrine.svg"
  },
  "icon_1026": {
    "idx": 1026,
    "fileName": "crystal-wand.svg"
  },
  "icon_1027": {
    "idx": 1027,
    "fileName": "crystalize.svg"
  },
  "icon_1028": {
    "idx": 1028,
    "fileName": "cuauhtli.svg"
  },
  "icon_1029": {
    "idx": 1029,
    "fileName": "cube.svg"
  },
  "icon_1030": {
    "idx": 1030,
    "fileName": "cubeforce.svg"
  },
  "icon_1031": {
    "idx": 1031,
    "fileName": "cubes.svg"
  },
  "icon_1032": {
    "idx": 1032,
    "fileName": "cuckoo-clock.svg"
  },
  "icon_1033": {
    "idx": 1033,
    "fileName": "cultist.svg"
  },
  "icon_1034": {
    "idx": 1034,
    "fileName": "cupcake.svg"
  },
  "icon_1035": {
    "idx": 1035,
    "fileName": "cupidon-arrow.svg"
  },
  "icon_1036": {
    "idx": 1036,
    "fileName": "curled-leaf.svg"
  },
  "icon_1037": {
    "idx": 1037,
    "fileName": "curled-tentacle.svg"
  },
  "icon_1038": {
    "idx": 1038,
    "fileName": "curling-stone.svg"
  },
  "icon_1039": {
    "idx": 1039,
    "fileName": "curling-vines.svg"
  },
  "icon_1040": {
    "idx": 1040,
    "fileName": "curly-mask.svg"
  },
  "icon_1041": {
    "idx": 1041,
    "fileName": "curly-wing.svg"
  },
  "icon_1042": {
    "idx": 1042,
    "fileName": "cursed-star.svg"
  },
  "icon_1043": {
    "idx": 1043,
    "fileName": "curvy-knife.svg"
  },
  "icon_1044": {
    "idx": 1044,
    "fileName": "custodian-helmet.svg"
  },
  "icon_1045": {
    "idx": 1045,
    "fileName": "cut-diamond.svg"
  },
  "icon_1046": {
    "idx": 1046,
    "fileName": "cut-lemon.svg"
  },
  "icon_1047": {
    "idx": 1047,
    "fileName": "cut-palm.svg"
  },
  "icon_1048": {
    "idx": 1048,
    "fileName": "cyber-eye.svg"
  },
  "icon_1049": {
    "idx": 1049,
    "fileName": "cyborg-face.svg"
  },
  "icon_1050": {
    "idx": 1050,
    "fileName": "cycle.svg"
  },
  "icon_1051": {
    "idx": 1051,
    "fileName": "cycling.svg"
  },
  "icon_1052": {
    "idx": 1052,
    "fileName": "cyclops.svg"
  },
  "icon_1053": {
    "idx": 1053,
    "fileName": "cz-skorpion.svg"
  },
  "icon_1054": {
    "idx": 1054,
    "fileName": "d10.svg"
  },
  "icon_1055": {
    "idx": 1055,
    "fileName": "d12.svg"
  },
  "icon_1056": {
    "idx": 1056,
    "fileName": "d4.svg"
  },
  "icon_1057": {
    "idx": 1057,
    "fileName": "daemon-pull.svg"
  },
  "icon_1058": {
    "idx": 1058,
    "fileName": "daemon-skull.svg"
  },
  "icon_1059": {
    "idx": 1059,
    "fileName": "dagger-rose.svg"
  },
  "icon_1060": {
    "idx": 1060,
    "fileName": "daggers.svg"
  },
  "icon_1061": {
    "idx": 1061,
    "fileName": "daisy.svg"
  },
  "icon_1062": {
    "idx": 1062,
    "fileName": "dam.svg"
  },
  "icon_1063": {
    "idx": 1063,
    "fileName": "damaged-house.svg"
  },
  "icon_1064": {
    "idx": 1064,
    "fileName": "dandelion-flower.svg"
  },
  "icon_1065": {
    "idx": 1065,
    "fileName": "dango.svg"
  },
  "icon_1066": {
    "idx": 1066,
    "fileName": "dark-squad.svg"
  },
  "icon_1067": {
    "idx": 1067,
    "fileName": "dart.svg"
  },
  "icon_1068": {
    "idx": 1068,
    "fileName": "database.svg"
  },
  "icon_1069": {
    "idx": 1069,
    "fileName": "dead-eye.svg"
  },
  "icon_1070": {
    "idx": 1070,
    "fileName": "dead-head.svg"
  },
  "icon_1071": {
    "idx": 1071,
    "fileName": "dead-wood.svg"
  },
  "icon_1072": {
    "idx": 1072,
    "fileName": "deadly-strike.svg"
  },
  "icon_1073": {
    "idx": 1073,
    "fileName": "death-juice.svg"
  },
  "icon_1074": {
    "idx": 1074,
    "fileName": "death-note.svg"
  },
  "icon_1075": {
    "idx": 1075,
    "fileName": "death-skull.svg"
  },
  "icon_1076": {
    "idx": 1076,
    "fileName": "death-star.svg"
  },
  "icon_1077": {
    "idx": 1077,
    "fileName": "death-zone.svg"
  },
  "icon_1078": {
    "idx": 1078,
    "fileName": "deathcab.svg"
  },
  "icon_1079": {
    "idx": 1079,
    "fileName": "decapitation.svg"
  },
  "icon_1080": {
    "idx": 1080,
    "fileName": "deer-track.svg"
  },
  "icon_1081": {
    "idx": 1081,
    "fileName": "defense-satellite.svg"
  },
  "icon_1082": {
    "idx": 1082,
    "fileName": "defensive-wall.svg"
  },
  "icon_1083": {
    "idx": 1083,
    "fileName": "defibrilate.svg"
  },
  "icon_1084": {
    "idx": 1084,
    "fileName": "deku-tree.svg"
  },
  "icon_1085": {
    "idx": 1085,
    "fileName": "delicate-perfume.svg"
  },
  "icon_1086": {
    "idx": 1086,
    "fileName": "delighted.svg"
  },
  "icon_1087": {
    "idx": 1087,
    "fileName": "delivery-drone.svg"
  },
  "icon_1088": {
    "idx": 1088,
    "fileName": "demolish.svg"
  },
  "icon_1089": {
    "idx": 1089,
    "fileName": "dervish-swords.svg"
  },
  "icon_1090": {
    "idx": 1090,
    "fileName": "desert-eagle.svg"
  },
  "icon_1091": {
    "idx": 1091,
    "fileName": "desert-skull.svg"
  },
  "icon_1092": {
    "idx": 1092,
    "fileName": "desert.svg"
  },
  "icon_1093": {
    "idx": 1093,
    "fileName": "deshret-red-crown.svg"
  },
  "icon_1094": {
    "idx": 1094,
    "fileName": "desk-lamp.svg"
  },
  "icon_1095": {
    "idx": 1095,
    "fileName": "desk.svg"
  },
  "icon_1096": {
    "idx": 1096,
    "fileName": "despair.svg"
  },
  "icon_1097": {
    "idx": 1097,
    "fileName": "detonator.svg"
  },
  "icon_1098": {
    "idx": 1098,
    "fileName": "detour.svg"
  },
  "icon_1099": {
    "idx": 1099,
    "fileName": "devil-mask.svg"
  },
  "icon_1100": {
    "idx": 1100,
    "fileName": "dew.svg"
  },
  "icon_1101": {
    "idx": 1101,
    "fileName": "diablo-skull.svg"
  },
  "icon_1102": {
    "idx": 1102,
    "fileName": "diagram.svg"
  },
  "icon_1103": {
    "idx": 1103,
    "fileName": "dial-padlock.svg"
  },
  "icon_1104": {
    "idx": 1104,
    "fileName": "diamond-hard.svg"
  },
  "icon_1105": {
    "idx": 1105,
    "fileName": "diamond-hilt.svg"
  },
  "icon_1106": {
    "idx": 1106,
    "fileName": "diamond-ring.svg"
  },
  "icon_1107": {
    "idx": 1107,
    "fileName": "diamond-trophy.svg"
  },
  "icon_1108": {
    "idx": 1108,
    "fileName": "diamonds-smile.svg"
  },
  "icon_1109": {
    "idx": 1109,
    "fileName": "diamonds.svg"
  },
  "icon_1110": {
    "idx": 1110,
    "fileName": "dice-eight-faces-eight.svg"
  },
  "icon_1111": {
    "idx": 1111,
    "fileName": "dice-fire.svg"
  },
  "icon_1112": {
    "idx": 1112,
    "fileName": "dice-shield.svg"
  },
  "icon_1113": {
    "idx": 1113,
    "fileName": "dice-six-faces-five.svg"
  },
  "icon_1114": {
    "idx": 1114,
    "fileName": "dice-six-faces-four.svg"
  },
  "icon_1115": {
    "idx": 1115,
    "fileName": "dice-six-faces-one.svg"
  },
  "icon_1116": {
    "idx": 1116,
    "fileName": "dice-six-faces-six.svg"
  },
  "icon_1117": {
    "idx": 1117,
    "fileName": "dice-six-faces-three.svg"
  },
  "icon_1118": {
    "idx": 1118,
    "fileName": "dice-six-faces-two.svg"
  },
  "icon_1119": {
    "idx": 1119,
    "fileName": "dice-target.svg"
  },
  "icon_1120": {
    "idx": 1120,
    "fileName": "dice-twenty-faces-one.svg"
  },
  "icon_1121": {
    "idx": 1121,
    "fileName": "dice-twenty-faces-twenty.svg"
  },
  "icon_1122": {
    "idx": 1122,
    "fileName": "dig-dug.svg"
  },
  "icon_1123": {
    "idx": 1123,
    "fileName": "dig-hole.svg"
  },
  "icon_1124": {
    "idx": 1124,
    "fileName": "digital-trace.svg"
  },
  "icon_1125": {
    "idx": 1125,
    "fileName": "dimetrodon.svg"
  },
  "icon_1126": {
    "idx": 1126,
    "fileName": "dinosaur-bones.svg"
  },
  "icon_1127": {
    "idx": 1127,
    "fileName": "dinosaur-egg.svg"
  },
  "icon_1128": {
    "idx": 1128,
    "fileName": "dinosaur-rex.svg"
  },
  "icon_1129": {
    "idx": 1129,
    "fileName": "diplodocus.svg"
  },
  "icon_1130": {
    "idx": 1130,
    "fileName": "diploma.svg"
  },
  "icon_1131": {
    "idx": 1131,
    "fileName": "direction-sign.svg"
  },
  "icon_1132": {
    "idx": 1132,
    "fileName": "direction-signs.svg"
  },
  "icon_1133": {
    "idx": 1133,
    "fileName": "director-chair.svg"
  },
  "icon_1134": {
    "idx": 1134,
    "fileName": "direwolf.svg"
  },
  "icon_1135": {
    "idx": 1135,
    "fileName": "disc-golf-bag.svg"
  },
  "icon_1136": {
    "idx": 1136,
    "fileName": "disc-golf-basket.svg"
  },
  "icon_1137": {
    "idx": 1137,
    "fileName": "disc.svg"
  },
  "icon_1138": {
    "idx": 1138,
    "fileName": "discobolus.svg"
  },
  "icon_1139": {
    "idx": 1139,
    "fileName": "discussion.svg"
  },
  "icon_1140": {
    "idx": 1140,
    "fileName": "disintegrate.svg"
  },
  "icon_1141": {
    "idx": 1141,
    "fileName": "distraction.svg"
  },
  "icon_1142": {
    "idx": 1142,
    "fileName": "distress-signal.svg"
  },
  "icon_1143": {
    "idx": 1143,
    "fileName": "divergence.svg"
  },
  "icon_1144": {
    "idx": 1144,
    "fileName": "divert.svg"
  },
  "icon_1145": {
    "idx": 1145,
    "fileName": "divided-spiral.svg"
  },
  "icon_1146": {
    "idx": 1146,
    "fileName": "divided-square.svg"
  },
  "icon_1147": {
    "idx": 1147,
    "fileName": "diving-dagger.svg"
  },
  "icon_1148": {
    "idx": 1148,
    "fileName": "diving-helmet.svg"
  },
  "icon_1149": {
    "idx": 1149,
    "fileName": "djed-pillar.svg"
  },
  "icon_1150": {
    "idx": 1150,
    "fileName": "djembe.svg"
  },
  "icon_1151": {
    "idx": 1151,
    "fileName": "djinn.svg"
  },
  "icon_1152": {
    "idx": 1152,
    "fileName": "dna1.svg"
  },
  "icon_1153": {
    "idx": 1153,
    "fileName": "dna2.svg"
  },
  "icon_1154": {
    "idx": 1154,
    "fileName": "doctor-face.svg"
  },
  "icon_1155": {
    "idx": 1155,
    "fileName": "dodge.svg"
  },
  "icon_1156": {
    "idx": 1156,
    "fileName": "dodging.svg"
  },
  "icon_1157": {
    "idx": 1157,
    "fileName": "dog-bowl.svg"
  },
  "icon_1158": {
    "idx": 1158,
    "fileName": "dog-house.svg"
  },
  "icon_1159": {
    "idx": 1159,
    "fileName": "dolmen.svg"
  },
  "icon_1160": {
    "idx": 1160,
    "fileName": "dolphin.svg"
  },
  "icon_1161": {
    "idx": 1161,
    "fileName": "domino-mask.svg"
  },
  "icon_1162": {
    "idx": 1162,
    "fileName": "domino-tiles.svg"
  },
  "icon_1163": {
    "idx": 1163,
    "fileName": "doner-kebab.svg"
  },
  "icon_1164": {
    "idx": 1164,
    "fileName": "donkey.svg"
  },
  "icon_1165": {
    "idx": 1165,
    "fileName": "donut.svg"
  },
  "icon_1166": {
    "idx": 1166,
    "fileName": "door-handle.svg"
  },
  "icon_1167": {
    "idx": 1167,
    "fileName": "door-ring-handle.svg"
  },
  "icon_1168": {
    "idx": 1168,
    "fileName": "door-watcher.svg"
  },
  "icon_1169": {
    "idx": 1169,
    "fileName": "door.svg"
  },
  "icon_1170": {
    "idx": 1170,
    "fileName": "doorway.svg"
  },
  "icon_1171": {
    "idx": 1171,
    "fileName": "dorsal-scales.svg"
  },
  "icon_1172": {
    "idx": 1172,
    "fileName": "double-diaphragm.svg"
  },
  "icon_1173": {
    "idx": 1173,
    "fileName": "double-dragon.svg"
  },
  "icon_1174": {
    "idx": 1174,
    "fileName": "double-face-mask.svg"
  },
  "icon_1175": {
    "idx": 1175,
    "fileName": "double-fish.svg"
  },
  "icon_1176": {
    "idx": 1176,
    "fileName": "double-necklace.svg"
  },
  "icon_1177": {
    "idx": 1177,
    "fileName": "double-quaver.svg"
  },
  "icon_1178": {
    "idx": 1178,
    "fileName": "double-ringed-orb.svg"
  },
  "icon_1179": {
    "idx": 1179,
    "fileName": "double-shot.svg"
  },
  "icon_1180": {
    "idx": 1180,
    "fileName": "double-street-lights.svg"
  },
  "icon_1181": {
    "idx": 1181,
    "fileName": "doubled.svg"
  },
  "icon_1182": {
    "idx": 1182,
    "fileName": "dough-roller.svg"
  },
  "icon_1183": {
    "idx": 1183,
    "fileName": "dove.svg"
  },
  "icon_1184": {
    "idx": 1184,
    "fileName": "dozen.svg"
  },
  "icon_1185": {
    "idx": 1185,
    "fileName": "dragon-balls.svg"
  },
  "icon_1186": {
    "idx": 1186,
    "fileName": "dragon-breath.svg"
  },
  "icon_1187": {
    "idx": 1187,
    "fileName": "dragon-head.svg"
  },
  "icon_1188": {
    "idx": 1188,
    "fileName": "dragon-orb.svg"
  },
  "icon_1189": {
    "idx": 1189,
    "fileName": "dragon-shield.svg"
  },
  "icon_1190": {
    "idx": 1190,
    "fileName": "dragon-spiral.svg"
  },
  "icon_1191": {
    "idx": 1191,
    "fileName": "dragonfly.svg"
  },
  "icon_1192": {
    "idx": 1192,
    "fileName": "drakkar-dragon.svg"
  },
  "icon_1193": {
    "idx": 1193,
    "fileName": "drakkar.svg"
  },
  "icon_1194": {
    "idx": 1194,
    "fileName": "drama-masks.svg"
  },
  "icon_1195": {
    "idx": 1195,
    "fileName": "drawbridge.svg"
  },
  "icon_1196": {
    "idx": 1196,
    "fileName": "dread-skull.svg"
  },
  "icon_1197": {
    "idx": 1197,
    "fileName": "dread.svg"
  },
  "icon_1198": {
    "idx": 1198,
    "fileName": "dreadnought.svg"
  },
  "icon_1199": {
    "idx": 1199,
    "fileName": "dream-catcher.svg"
  },
  "icon_1200": {
    "idx": 1200,
    "fileName": "dress.svg"
  },
  "icon_1201": {
    "idx": 1201,
    "fileName": "drill.svg"
  },
  "icon_1202": {
    "idx": 1202,
    "fileName": "drink-me.svg"
  },
  "icon_1203": {
    "idx": 1203,
    "fileName": "drinking.svg"
  },
  "icon_1204": {
    "idx": 1204,
    "fileName": "dripping-blade.svg"
  },
  "icon_1205": {
    "idx": 1205,
    "fileName": "dripping-goo.svg"
  },
  "icon_1206": {
    "idx": 1206,
    "fileName": "dripping-honey.svg"
  },
  "icon_1207": {
    "idx": 1207,
    "fileName": "dripping-knife.svg"
  },
  "icon_1208": {
    "idx": 1208,
    "fileName": "dripping-star.svg"
  },
  "icon_1209": {
    "idx": 1209,
    "fileName": "dripping-stone.svg"
  },
  "icon_1210": {
    "idx": 1210,
    "fileName": "dripping-sword.svg"
  },
  "icon_1211": {
    "idx": 1211,
    "fileName": "dripping-tube.svg"
  },
  "icon_1212": {
    "idx": 1212,
    "fileName": "drop-earrings.svg"
  },
  "icon_1213": {
    "idx": 1213,
    "fileName": "drop-weapon.svg"
  },
  "icon_1214": {
    "idx": 1214,
    "fileName": "drop.svg"
  },
  "icon_1215": {
    "idx": 1215,
    "fileName": "droplet-splash.svg"
  },
  "icon_1216": {
    "idx": 1216,
    "fileName": "droplets.svg"
  },
  "icon_1217": {
    "idx": 1217,
    "fileName": "drowning.svg"
  },
  "icon_1218": {
    "idx": 1218,
    "fileName": "drum.svg"
  },
  "icon_1219": {
    "idx": 1219,
    "fileName": "duality-mask.svg"
  },
  "icon_1220": {
    "idx": 1220,
    "fileName": "duality.svg"
  },
  "icon_1221": {
    "idx": 1221,
    "fileName": "duck-palm.svg"
  },
  "icon_1222": {
    "idx": 1222,
    "fileName": "duck.svg"
  },
  "icon_1223": {
    "idx": 1223,
    "fileName": "duel.svg"
  },
  "icon_1224": {
    "idx": 1224,
    "fileName": "duffel-bag.svg"
  },
  "icon_1225": {
    "idx": 1225,
    "fileName": "dunce-cap.svg"
  },
  "icon_1226": {
    "idx": 1226,
    "fileName": "dungeon-gate.svg"
  },
  "icon_1227": {
    "idx": 1227,
    "fileName": "dungeon-light.svg"
  },
  "icon_1228": {
    "idx": 1228,
    "fileName": "duration.svg"
  },
  "icon_1229": {
    "idx": 1229,
    "fileName": "dust-cloud.svg"
  },
  "icon_1230": {
    "idx": 1230,
    "fileName": "dutch-bike.svg"
  },
  "icon_1231": {
    "idx": 1231,
    "fileName": "dwarf-face.svg"
  },
  "icon_1232": {
    "idx": 1232,
    "fileName": "dwarf-helmet.svg"
  },
  "icon_1233": {
    "idx": 1233,
    "fileName": "dwarf-king.svg"
  },
  "icon_1234": {
    "idx": 1234,
    "fileName": "dwennimmen.svg"
  },
  "icon_1235": {
    "idx": 1235,
    "fileName": "dynamite.svg"
  },
  "icon_1236": {
    "idx": 1236,
    "fileName": "eagle-emblem.svg"
  },
  "icon_1237": {
    "idx": 1237,
    "fileName": "eagle-head.svg"
  },
  "icon_1238": {
    "idx": 1238,
    "fileName": "earrings.svg"
  },
  "icon_1239": {
    "idx": 1239,
    "fileName": "earth-africa-europe.svg"
  },
  "icon_1240": {
    "idx": 1240,
    "fileName": "earth-america.svg"
  },
  "icon_1241": {
    "idx": 1241,
    "fileName": "earth-asia-oceania.svg"
  },
  "icon_1242": {
    "idx": 1242,
    "fileName": "earth-crack.svg"
  },
  "icon_1243": {
    "idx": 1243,
    "fileName": "earth-spit.svg"
  },
  "icon_1244": {
    "idx": 1244,
    "fileName": "earth-worm.svg"
  },
  "icon_1245": {
    "idx": 1245,
    "fileName": "earwig.svg"
  },
  "icon_1246": {
    "idx": 1246,
    "fileName": "easter-egg.svg"
  },
  "icon_1247": {
    "idx": 1247,
    "fileName": "eating-pelican.svg"
  },
  "icon_1248": {
    "idx": 1248,
    "fileName": "eating.svg"
  },
  "icon_1249": {
    "idx": 1249,
    "fileName": "echo-ripples.svg"
  },
  "icon_1250": {
    "idx": 1250,
    "fileName": "eclipse-flare.svg"
  },
  "icon_1251": {
    "idx": 1251,
    "fileName": "eclipse-saw.svg"
  },
  "icon_1252": {
    "idx": 1252,
    "fileName": "eclipse.svg"
  },
  "icon_1253": {
    "idx": 1253,
    "fileName": "ecology.svg"
  },
  "icon_1254": {
    "idx": 1254,
    "fileName": "edge-crack.svg"
  },
  "icon_1255": {
    "idx": 1255,
    "fileName": "edged-shield.svg"
  },
  "icon_1256": {
    "idx": 1256,
    "fileName": "eel.svg"
  },
  "icon_1257": {
    "idx": 1257,
    "fileName": "egg-clutch.svg"
  },
  "icon_1258": {
    "idx": 1258,
    "fileName": "egg-defense.svg"
  },
  "icon_1259": {
    "idx": 1259,
    "fileName": "egg-eye.svg"
  },
  "icon_1260": {
    "idx": 1260,
    "fileName": "egg-pod.svg"
  },
  "icon_1261": {
    "idx": 1261,
    "fileName": "egypt.svg"
  },
  "icon_1262": {
    "idx": 1262,
    "fileName": "egyptian-bird.svg"
  },
  "icon_1263": {
    "idx": 1263,
    "fileName": "egyptian-profile.svg"
  },
  "icon_1264": {
    "idx": 1264,
    "fileName": "egyptian-pyramids.svg"
  },
  "icon_1265": {
    "idx": 1265,
    "fileName": "egyptian-sphinx.svg"
  },
  "icon_1266": {
    "idx": 1266,
    "fileName": "egyptian-temple.svg"
  },
  "icon_1267": {
    "idx": 1267,
    "fileName": "egyptian-urns.svg"
  },
  "icon_1268": {
    "idx": 1268,
    "fileName": "egyptian-walk.svg"
  },
  "icon_1269": {
    "idx": 1269,
    "fileName": "eight-ball.svg"
  },
  "icon_1270": {
    "idx": 1270,
    "fileName": "elbow-pad.svg"
  },
  "icon_1271": {
    "idx": 1271,
    "fileName": "elderberry.svg"
  },
  "icon_1272": {
    "idx": 1272,
    "fileName": "electric-whip.svg"
  },
  "icon_1273": {
    "idx": 1273,
    "fileName": "electric.svg"
  },
  "icon_1274": {
    "idx": 1274,
    "fileName": "electrical-crescent.svg"
  },
  "icon_1275": {
    "idx": 1275,
    "fileName": "electrical-resistance.svg"
  },
  "icon_1276": {
    "idx": 1276,
    "fileName": "electrical-socket.svg"
  },
  "icon_1277": {
    "idx": 1277,
    "fileName": "elephant-head.svg"
  },
  "icon_1278": {
    "idx": 1278,
    "fileName": "elephant.svg"
  },
  "icon_1279": {
    "idx": 1279,
    "fileName": "elevator.svg"
  },
  "icon_1280": {
    "idx": 1280,
    "fileName": "elf-ear.svg"
  },
  "icon_1281": {
    "idx": 1281,
    "fileName": "elf-helmet.svg"
  },
  "icon_1282": {
    "idx": 1282,
    "fileName": "elven-castle.svg"
  },
  "icon_1283": {
    "idx": 1283,
    "fileName": "ember-shot.svg"
  },
  "icon_1284": {
    "idx": 1284,
    "fileName": "embrassed-energy.svg"
  },
  "icon_1285": {
    "idx": 1285,
    "fileName": "embryo.svg"
  },
  "icon_1286": {
    "idx": 1286,
    "fileName": "emerald-necklace.svg"
  },
  "icon_1287": {
    "idx": 1287,
    "fileName": "emerald.svg"
  },
  "icon_1288": {
    "idx": 1288,
    "fileName": "empty-chessboard.svg"
  },
  "icon_1289": {
    "idx": 1289,
    "fileName": "empty-hourglass.svg"
  },
  "icon_1290": {
    "idx": 1290,
    "fileName": "empty-metal-bucket-handle.svg"
  },
  "icon_1291": {
    "idx": 1291,
    "fileName": "empty-metal-bucket.svg"
  },
  "icon_1292": {
    "idx": 1292,
    "fileName": "empty-wood-bucket-handle.svg"
  },
  "icon_1293": {
    "idx": 1293,
    "fileName": "empty-wood-bucket.svg"
  },
  "icon_1294": {
    "idx": 1294,
    "fileName": "encirclement.svg"
  },
  "icon_1295": {
    "idx": 1295,
    "fileName": "energise.svg"
  },
  "icon_1296": {
    "idx": 1296,
    "fileName": "energy-arrow.svg"
  },
  "icon_1297": {
    "idx": 1297,
    "fileName": "energy-breath.svg"
  },
  "icon_1298": {
    "idx": 1298,
    "fileName": "energy-shield.svg"
  },
  "icon_1299": {
    "idx": 1299,
    "fileName": "energy-sword.svg"
  },
  "icon_1300": {
    "idx": 1300,
    "fileName": "energy-tank.svg"
  },
  "icon_1301": {
    "idx": 1301,
    "fileName": "engagement-ring.svg"
  },
  "icon_1302": {
    "idx": 1302,
    "fileName": "enlightenment.svg"
  },
  "icon_1303": {
    "idx": 1303,
    "fileName": "enrage.svg"
  },
  "icon_1304": {
    "idx": 1304,
    "fileName": "ent-mouth.svg"
  },
  "icon_1305": {
    "idx": 1305,
    "fileName": "entangled-typhoon.svg"
  },
  "icon_1306": {
    "idx": 1306,
    "fileName": "entry-door.svg"
  },
  "icon_1307": {
    "idx": 1307,
    "fileName": "envelope.svg"
  },
  "icon_1308": {
    "idx": 1308,
    "fileName": "erlenmeyer.svg"
  },
  "icon_1309": {
    "idx": 1309,
    "fileName": "ermine.svg"
  },
  "icon_1310": {
    "idx": 1310,
    "fileName": "eruption.svg"
  },
  "icon_1311": {
    "idx": 1311,
    "fileName": "escalator.svg"
  },
  "icon_1312": {
    "idx": 1312,
    "fileName": "eskimo.svg"
  },
  "icon_1313": {
    "idx": 1313,
    "fileName": "eternal-love.svg"
  },
  "icon_1314": {
    "idx": 1314,
    "fileName": "european-flag.svg"
  },
  "icon_1315": {
    "idx": 1315,
    "fileName": "evasion.svg"
  },
  "icon_1316": {
    "idx": 1316,
    "fileName": "evil-bat.svg"
  },
  "icon_1317": {
    "idx": 1317,
    "fileName": "evil-book.svg"
  },
  "icon_1318": {
    "idx": 1318,
    "fileName": "evil-bud.svg"
  },
  "icon_1319": {
    "idx": 1319,
    "fileName": "evil-comet.svg"
  },
  "icon_1320": {
    "idx": 1320,
    "fileName": "evil-eyes.svg"
  },
  "icon_1321": {
    "idx": 1321,
    "fileName": "evil-fork.svg"
  },
  "icon_1322": {
    "idx": 1322,
    "fileName": "evil-hand.svg"
  },
  "icon_1323": {
    "idx": 1323,
    "fileName": "evil-love.svg"
  },
  "icon_1324": {
    "idx": 1324,
    "fileName": "evil-minion.svg"
  },
  "icon_1325": {
    "idx": 1325,
    "fileName": "evil-moon.svg"
  },
  "icon_1326": {
    "idx": 1326,
    "fileName": "evil-tower.svg"
  },
  "icon_1327": {
    "idx": 1327,
    "fileName": "evil-tree.svg"
  },
  "icon_1328": {
    "idx": 1328,
    "fileName": "evil-wings.svg"
  },
  "icon_1329": {
    "idx": 1329,
    "fileName": "executioner-hood.svg"
  },
  "icon_1330": {
    "idx": 1330,
    "fileName": "exit-door.svg"
  },
  "icon_1331": {
    "idx": 1331,
    "fileName": "expand.svg"
  },
  "icon_1332": {
    "idx": 1332,
    "fileName": "expanded-rays.svg"
  },
  "icon_1333": {
    "idx": 1333,
    "fileName": "expander.svg"
  },
  "icon_1334": {
    "idx": 1334,
    "fileName": "expense.svg"
  },
  "icon_1335": {
    "idx": 1335,
    "fileName": "exploding-planet.svg"
  },
  "icon_1336": {
    "idx": 1336,
    "fileName": "explosion-rays.svg"
  },
  "icon_1337": {
    "idx": 1337,
    "fileName": "explosive-materials.svg"
  },
  "icon_1338": {
    "idx": 1338,
    "fileName": "explosive-meeting.svg"
  },
  "icon_1339": {
    "idx": 1339,
    "fileName": "extra-lucid.svg"
  },
  "icon_1340": {
    "idx": 1340,
    "fileName": "extra-time.svg"
  },
  "icon_1341": {
    "idx": 1341,
    "fileName": "extraction-orb.svg"
  },
  "icon_1342": {
    "idx": 1342,
    "fileName": "eye-of-horus.svg"
  },
  "icon_1343": {
    "idx": 1343,
    "fileName": "eye-shield.svg"
  },
  "icon_1344": {
    "idx": 1344,
    "fileName": "eye-target.svg"
  },
  "icon_1345": {
    "idx": 1345,
    "fileName": "eyeball.svg"
  },
  "icon_1346": {
    "idx": 1346,
    "fileName": "eyedropper.svg"
  },
  "icon_1347": {
    "idx": 1347,
    "fileName": "eyelashes.svg"
  },
  "icon_1348": {
    "idx": 1348,
    "fileName": "eyepatch.svg"
  },
  "icon_1349": {
    "idx": 1349,
    "fileName": "eyestalk.svg"
  },
  "icon_1350": {
    "idx": 1350,
    "fileName": "f-clef.svg"
  },
  "icon_1351": {
    "idx": 1351,
    "fileName": "f1-car.svg"
  },
  "icon_1352": {
    "idx": 1352,
    "fileName": "face-to-face.svg"
  },
  "icon_1353": {
    "idx": 1353,
    "fileName": "factory-arm.svg"
  },
  "icon_1354": {
    "idx": 1354,
    "fileName": "factory.svg"
  },
  "icon_1355": {
    "idx": 1355,
    "fileName": "fairy-wand.svg"
  },
  "icon_1356": {
    "idx": 1356,
    "fileName": "fairy-wings.svg"
  },
  "icon_1357": {
    "idx": 1357,
    "fileName": "fairy.svg"
  },
  "icon_1358": {
    "idx": 1358,
    "fileName": "falcon-moon.svg"
  },
  "icon_1359": {
    "idx": 1359,
    "fileName": "fall-down.svg"
  },
  "icon_1360": {
    "idx": 1360,
    "fileName": "falling-blob.svg"
  },
  "icon_1361": {
    "idx": 1361,
    "fileName": "falling-bomb.svg"
  },
  "icon_1362": {
    "idx": 1362,
    "fileName": "falling-boulder.svg"
  },
  "icon_1363": {
    "idx": 1363,
    "fileName": "falling-eye.svg"
  },
  "icon_1364": {
    "idx": 1364,
    "fileName": "falling-leaf.svg"
  },
  "icon_1365": {
    "idx": 1365,
    "fileName": "falling-ovoid.svg"
  },
  "icon_1366": {
    "idx": 1366,
    "fileName": "falling-rocks.svg"
  },
  "icon_1367": {
    "idx": 1367,
    "fileName": "falling-star.svg"
  },
  "icon_1368": {
    "idx": 1368,
    "fileName": "falling.svg"
  },
  "icon_1369": {
    "idx": 1369,
    "fileName": "fallout-shelter.svg"
  },
  "icon_1370": {
    "idx": 1370,
    "fileName": "famas.svg"
  },
  "icon_1371": {
    "idx": 1371,
    "fileName": "family-house.svg"
  },
  "icon_1372": {
    "idx": 1372,
    "fileName": "family-tree.svg"
  },
  "icon_1373": {
    "idx": 1373,
    "fileName": "fanged-skull.svg"
  },
  "icon_1374": {
    "idx": 1374,
    "fileName": "fangs-circle.svg"
  },
  "icon_1375": {
    "idx": 1375,
    "fileName": "fangs.svg"
  },
  "icon_1376": {
    "idx": 1376,
    "fileName": "farm-tractor.svg"
  },
  "icon_1377": {
    "idx": 1377,
    "fileName": "farmer.svg"
  },
  "icon_1378": {
    "idx": 1378,
    "fileName": "fast-arrow.svg"
  },
  "icon_1379": {
    "idx": 1379,
    "fileName": "fast-backward-button.svg"
  },
  "icon_1380": {
    "idx": 1380,
    "fileName": "fast-forward-button.svg"
  },
  "icon_1381": {
    "idx": 1381,
    "fileName": "fast-noodles.svg"
  },
  "icon_1382": {
    "idx": 1382,
    "fileName": "fat.svg"
  },
  "icon_1383": {
    "idx": 1383,
    "fileName": "feather-necklace.svg"
  },
  "icon_1384": {
    "idx": 1384,
    "fileName": "feather-wound.svg"
  },
  "icon_1385": {
    "idx": 1385,
    "fileName": "feather.svg"
  },
  "icon_1386": {
    "idx": 1386,
    "fileName": "feathered-wing.svg"
  },
  "icon_1387": {
    "idx": 1387,
    "fileName": "fedora.svg"
  },
  "icon_1388": {
    "idx": 1388,
    "fileName": "feline.svg"
  },
  "icon_1389": {
    "idx": 1389,
    "fileName": "female-legs.svg"
  },
  "icon_1390": {
    "idx": 1390,
    "fileName": "female-vampire.svg"
  },
  "icon_1391": {
    "idx": 1391,
    "fileName": "female.svg"
  },
  "icon_1392": {
    "idx": 1392,
    "fileName": "fencer.svg"
  },
  "icon_1393": {
    "idx": 1393,
    "fileName": "fern.svg"
  },
  "icon_1394": {
    "idx": 1394,
    "fileName": "fertilizer-bag.svg"
  },
  "icon_1395": {
    "idx": 1395,
    "fileName": "fetus.svg"
  },
  "icon_1396": {
    "idx": 1396,
    "fileName": "fez.svg"
  },
  "icon_1397": {
    "idx": 1397,
    "fileName": "field-gun.svg"
  },
  "icon_1398": {
    "idx": 1398,
    "fileName": "field.svg"
  },
  "icon_1399": {
    "idx": 1399,
    "fileName": "figurehead.svg"
  },
  "icon_1400": {
    "idx": 1400,
    "fileName": "files.svg"
  },
  "icon_1401": {
    "idx": 1401,
    "fileName": "film-projector.svg"
  },
  "icon_1402": {
    "idx": 1402,
    "fileName": "film-spool.svg"
  },
  "icon_1403": {
    "idx": 1403,
    "fileName": "film-strip.svg"
  },
  "icon_1404": {
    "idx": 1404,
    "fileName": "finch.svg"
  },
  "icon_1405": {
    "idx": 1405,
    "fileName": "finger-print.svg"
  },
  "icon_1406": {
    "idx": 1406,
    "fileName": "fingernail.svg"
  },
  "icon_1407": {
    "idx": 1407,
    "fileName": "fingers-crossed.svg"
  },
  "icon_1408": {
    "idx": 1408,
    "fileName": "finish-line.svg"
  },
  "icon_1409": {
    "idx": 1409,
    "fileName": "fire-ace.svg"
  },
  "icon_1410": {
    "idx": 1410,
    "fileName": "fire-axe.svg"
  },
  "icon_1411": {
    "idx": 1411,
    "fileName": "fire-bomb.svg"
  },
  "icon_1412": {
    "idx": 1412,
    "fileName": "fire-bottle.svg"
  },
  "icon_1413": {
    "idx": 1413,
    "fileName": "fire-bowl.svg"
  },
  "icon_1414": {
    "idx": 1414,
    "fileName": "fire-breath.svg"
  },
  "icon_1415": {
    "idx": 1415,
    "fileName": "fire-dash.svg"
  },
  "icon_1416": {
    "idx": 1416,
    "fileName": "fire-extinguisher.svg"
  },
  "icon_1417": {
    "idx": 1417,
    "fileName": "fire-flower.svg"
  },
  "icon_1418": {
    "idx": 1418,
    "fileName": "fire-gem.svg"
  },
  "icon_1419": {
    "idx": 1419,
    "fileName": "fire-punch.svg"
  },
  "icon_1420": {
    "idx": 1420,
    "fileName": "fire-ray.svg"
  },
  "icon_1421": {
    "idx": 1421,
    "fileName": "fire-ring.svg"
  },
  "icon_1422": {
    "idx": 1422,
    "fileName": "fire-shield.svg"
  },
  "icon_1423": {
    "idx": 1423,
    "fileName": "fire-shrine.svg"
  },
  "icon_1424": {
    "idx": 1424,
    "fileName": "fire-silhouette.svg"
  },
  "icon_1425": {
    "idx": 1425,
    "fileName": "fire-spell-cast.svg"
  },
  "icon_1426": {
    "idx": 1426,
    "fileName": "fire-tail.svg"
  },
  "icon_1427": {
    "idx": 1427,
    "fileName": "fire-wave.svg"
  },
  "icon_1428": {
    "idx": 1428,
    "fileName": "fire-zone.svg"
  },
  "icon_1429": {
    "idx": 1429,
    "fileName": "fire.svg"
  },
  "icon_1430": {
    "idx": 1430,
    "fileName": "fireball.svg"
  },
  "icon_1431": {
    "idx": 1431,
    "fileName": "fireflake.svg"
  },
  "icon_1432": {
    "idx": 1432,
    "fileName": "fireplace.svg"
  },
  "icon_1433": {
    "idx": 1433,
    "fileName": "firewall.svg"
  },
  "icon_1434": {
    "idx": 1434,
    "fileName": "firework-rocket.svg"
  },
  "icon_1435": {
    "idx": 1435,
    "fileName": "first-aid-kit.svg"
  },
  "icon_1436": {
    "idx": 1436,
    "fileName": "fish-bucket.svg"
  },
  "icon_1437": {
    "idx": 1437,
    "fileName": "fish-cooked.svg"
  },
  "icon_1438": {
    "idx": 1438,
    "fileName": "fish-corpse.svg"
  },
  "icon_1439": {
    "idx": 1439,
    "fileName": "fish-eggs.svg"
  },
  "icon_1440": {
    "idx": 1440,
    "fileName": "fish-escape.svg"
  },
  "icon_1441": {
    "idx": 1441,
    "fileName": "fish-monster.svg"
  },
  "icon_1442": {
    "idx": 1442,
    "fileName": "fish-scales.svg"
  },
  "icon_1443": {
    "idx": 1443,
    "fileName": "fish-smoking.svg"
  },
  "icon_1444": {
    "idx": 1444,
    "fileName": "fishbone.svg"
  },
  "icon_1445": {
    "idx": 1445,
    "fileName": "fishhook-fork.svg"
  },
  "icon_1446": {
    "idx": 1446,
    "fileName": "fishing-boat.svg"
  },
  "icon_1447": {
    "idx": 1447,
    "fileName": "fishing-hook.svg"
  },
  "icon_1448": {
    "idx": 1448,
    "fileName": "fishing-jig.svg"
  },
  "icon_1449": {
    "idx": 1449,
    "fileName": "fishing-lure.svg"
  },
  "icon_1450": {
    "idx": 1450,
    "fileName": "fishing-net.svg"
  },
  "icon_1451": {
    "idx": 1451,
    "fileName": "fishing-pole.svg"
  },
  "icon_1452": {
    "idx": 1452,
    "fileName": "fishing-spoon.svg"
  },
  "icon_1453": {
    "idx": 1453,
    "fileName": "fishing.svg"
  },
  "icon_1454": {
    "idx": 1454,
    "fileName": "fission.svg"
  },
  "icon_1455": {
    "idx": 1455,
    "fileName": "fist.svg"
  },
  "icon_1456": {
    "idx": 1456,
    "fileName": "fizzing-flask.svg"
  },
  "icon_1457": {
    "idx": 1457,
    "fileName": "flag-objective.svg"
  },
  "icon_1458": {
    "idx": 1458,
    "fileName": "flail.svg"
  },
  "icon_1459": {
    "idx": 1459,
    "fileName": "flake.svg"
  },
  "icon_1460": {
    "idx": 1460,
    "fileName": "flame-claws.svg"
  },
  "icon_1461": {
    "idx": 1461,
    "fileName": "flame-spin.svg"
  },
  "icon_1462": {
    "idx": 1462,
    "fileName": "flame-tunnel.svg"
  },
  "icon_1463": {
    "idx": 1463,
    "fileName": "flame.svg"
  },
  "icon_1464": {
    "idx": 1464,
    "fileName": "flamed-leaf.svg"
  },
  "icon_1465": {
    "idx": 1465,
    "fileName": "flamer.svg"
  },
  "icon_1466": {
    "idx": 1466,
    "fileName": "flamethrower-soldier.svg"
  },
  "icon_1467": {
    "idx": 1467,
    "fileName": "flamethrower.svg"
  },
  "icon_1468": {
    "idx": 1468,
    "fileName": "flaming-arrow.svg"
  },
  "icon_1469": {
    "idx": 1469,
    "fileName": "flaming-claw.svg"
  },
  "icon_1470": {
    "idx": 1470,
    "fileName": "flaming-sheet.svg"
  },
  "icon_1471": {
    "idx": 1471,
    "fileName": "flaming-trident.svg"
  },
  "icon_1472": {
    "idx": 1472,
    "fileName": "flamingo.svg"
  },
  "icon_1473": {
    "idx": 1473,
    "fileName": "flanged-mace.svg"
  },
  "icon_1474": {
    "idx": 1474,
    "fileName": "flash-grenade.svg"
  },
  "icon_1475": {
    "idx": 1475,
    "fileName": "flashlight.svg"
  },
  "icon_1476": {
    "idx": 1476,
    "fileName": "flat-hammer.svg"
  },
  "icon_1477": {
    "idx": 1477,
    "fileName": "flat-paw-print.svg"
  },
  "icon_1478": {
    "idx": 1478,
    "fileName": "flat-platform.svg"
  },
  "icon_1479": {
    "idx": 1479,
    "fileName": "flat-star.svg"
  },
  "icon_1480": {
    "idx": 1480,
    "fileName": "flat-tire.svg"
  },
  "icon_1481": {
    "idx": 1481,
    "fileName": "flatbed-covered.svg"
  },
  "icon_1482": {
    "idx": 1482,
    "fileName": "flatbed.svg"
  },
  "icon_1483": {
    "idx": 1483,
    "fileName": "flatfish.svg"
  },
  "icon_1484": {
    "idx": 1484,
    "fileName": "flax.svg"
  },
  "icon_1485": {
    "idx": 1485,
    "fileName": "fleshy-mass.svg"
  },
  "icon_1486": {
    "idx": 1486,
    "fileName": "fleur-de-lys.svg"
  },
  "icon_1487": {
    "idx": 1487,
    "fileName": "flexible-lamp.svg"
  },
  "icon_1488": {
    "idx": 1488,
    "fileName": "flexible-star.svg"
  },
  "icon_1489": {
    "idx": 1489,
    "fileName": "flint-spark.svg"
  },
  "icon_1490": {
    "idx": 1490,
    "fileName": "flip-flops.svg"
  },
  "icon_1491": {
    "idx": 1491,
    "fileName": "floating-crystal.svg"
  },
  "icon_1492": {
    "idx": 1492,
    "fileName": "floating-ghost.svg"
  },
  "icon_1493": {
    "idx": 1493,
    "fileName": "floating-platforms.svg"
  },
  "icon_1494": {
    "idx": 1494,
    "fileName": "floating-tentacles.svg"
  },
  "icon_1495": {
    "idx": 1495,
    "fileName": "flood.svg"
  },
  "icon_1496": {
    "idx": 1496,
    "fileName": "floor-hatch.svg"
  },
  "icon_1497": {
    "idx": 1497,
    "fileName": "floor-polisher.svg"
  },
  "icon_1498": {
    "idx": 1498,
    "fileName": "flour.svg"
  },
  "icon_1499": {
    "idx": 1499,
    "fileName": "flower-emblem.svg"
  },
  "icon_1500": {
    "idx": 1500,
    "fileName": "flower-hat.svg"
  },
  "icon_1501": {
    "idx": 1501,
    "fileName": "flower-pot.svg"
  },
  "icon_1502": {
    "idx": 1502,
    "fileName": "flower-star.svg"
  },
  "icon_1503": {
    "idx": 1503,
    "fileName": "flower-twirl.svg"
  },
  "icon_1504": {
    "idx": 1504,
    "fileName": "flowers.svg"
  },
  "icon_1505": {
    "idx": 1505,
    "fileName": "fluffy-cloud.svg"
  },
  "icon_1506": {
    "idx": 1506,
    "fileName": "fluffy-flame.svg"
  },
  "icon_1507": {
    "idx": 1507,
    "fileName": "fluffy-swirl.svg"
  },
  "icon_1508": {
    "idx": 1508,
    "fileName": "fluffy-trefoil.svg"
  },
  "icon_1509": {
    "idx": 1509,
    "fileName": "fluffy-wing.svg"
  },
  "icon_1510": {
    "idx": 1510,
    "fileName": "flute.svg"
  },
  "icon_1511": {
    "idx": 1511,
    "fileName": "fly.svg"
  },
  "icon_1512": {
    "idx": 1512,
    "fileName": "flying-beetle.svg"
  },
  "icon_1513": {
    "idx": 1513,
    "fileName": "flying-dagger.svg"
  },
  "icon_1514": {
    "idx": 1514,
    "fileName": "flying-flag.svg"
  },
  "icon_1515": {
    "idx": 1515,
    "fileName": "flying-fox.svg"
  },
  "icon_1516": {
    "idx": 1516,
    "fileName": "flying-shuriken.svg"
  },
  "icon_1517": {
    "idx": 1517,
    "fileName": "flying-target.svg"
  },
  "icon_1518": {
    "idx": 1518,
    "fileName": "flying-trout.svg"
  },
  "icon_1519": {
    "idx": 1519,
    "fileName": "fn-fal.svg"
  },
  "icon_1520": {
    "idx": 1520,
    "fileName": "foam.svg"
  },
  "icon_1521": {
    "idx": 1521,
    "fileName": "foamy-disc.svg"
  },
  "icon_1522": {
    "idx": 1522,
    "fileName": "focused-lightning.svg"
  },
  "icon_1523": {
    "idx": 1523,
    "fileName": "fog-light.svg"
  },
  "icon_1524": {
    "idx": 1524,
    "fileName": "fog.svg"
  },
  "icon_1525": {
    "idx": 1525,
    "fileName": "folded-paper.svg"
  },
  "icon_1526": {
    "idx": 1526,
    "fileName": "fomorian.svg"
  },
  "icon_1527": {
    "idx": 1527,
    "fileName": "food-chain.svg"
  },
  "icon_1528": {
    "idx": 1528,
    "fileName": "food-truck.svg"
  },
  "icon_1529": {
    "idx": 1529,
    "fileName": "foot-plaster.svg"
  },
  "icon_1530": {
    "idx": 1530,
    "fileName": "foot-trip.svg"
  },
  "icon_1531": {
    "idx": 1531,
    "fileName": "footprint.svg"
  },
  "icon_1532": {
    "idx": 1532,
    "fileName": "footsteps.svg"
  },
  "icon_1533": {
    "idx": 1533,
    "fileName": "footy-field.svg"
  },
  "icon_1534": {
    "idx": 1534,
    "fileName": "forearm.svg"
  },
  "icon_1535": {
    "idx": 1535,
    "fileName": "forest-camp.svg"
  },
  "icon_1536": {
    "idx": 1536,
    "fileName": "forest-entrance.svg"
  },
  "icon_1537": {
    "idx": 1537,
    "fileName": "forest.svg"
  },
  "icon_1538": {
    "idx": 1538,
    "fileName": "fork-knife-spoon.svg"
  },
  "icon_1539": {
    "idx": 1539,
    "fileName": "forklift.svg"
  },
  "icon_1540": {
    "idx": 1540,
    "fileName": "forward-field.svg"
  },
  "icon_1541": {
    "idx": 1541,
    "fileName": "forward-sun.svg"
  },
  "icon_1542": {
    "idx": 1542,
    "fileName": "fossil.svg"
  },
  "icon_1543": {
    "idx": 1543,
    "fileName": "foundry-bucket.svg"
  },
  "icon_1544": {
    "idx": 1544,
    "fileName": "fountain-pen.svg"
  },
  "icon_1545": {
    "idx": 1545,
    "fileName": "fountain.svg"
  },
  "icon_1546": {
    "idx": 1546,
    "fileName": "fox-head.svg"
  },
  "icon_1547": {
    "idx": 1547,
    "fileName": "fox-tail.svg"
  },
  "icon_1548": {
    "idx": 1548,
    "fileName": "fragmented-meteor.svg"
  },
  "icon_1549": {
    "idx": 1549,
    "fileName": "fragmented-sword.svg"
  },
  "icon_1550": {
    "idx": 1550,
    "fileName": "fragrance.svg"
  },
  "icon_1551": {
    "idx": 1551,
    "fileName": "france.svg"
  },
  "icon_1552": {
    "idx": 1552,
    "fileName": "frankenstein-creature.svg"
  },
  "icon_1553": {
    "idx": 1553,
    "fileName": "frayed-arrow.svg"
  },
  "icon_1554": {
    "idx": 1554,
    "fileName": "freedom-dove.svg"
  },
  "icon_1555": {
    "idx": 1555,
    "fileName": "freemasonry.svg"
  },
  "icon_1556": {
    "idx": 1556,
    "fileName": "french-fries.svg"
  },
  "icon_1557": {
    "idx": 1557,
    "fileName": "fried-eggs.svg"
  },
  "icon_1558": {
    "idx": 1558,
    "fileName": "fried-fish.svg"
  },
  "icon_1559": {
    "idx": 1559,
    "fileName": "frisbee.svg"
  },
  "icon_1560": {
    "idx": 1560,
    "fileName": "frog-foot.svg"
  },
  "icon_1561": {
    "idx": 1561,
    "fileName": "frog-prince.svg"
  },
  "icon_1562": {
    "idx": 1562,
    "fileName": "frog.svg"
  },
  "icon_1563": {
    "idx": 1563,
    "fileName": "front-teeth.svg"
  },
  "icon_1564": {
    "idx": 1564,
    "fileName": "frontal-lobe.svg"
  },
  "icon_1565": {
    "idx": 1565,
    "fileName": "frostfire.svg"
  },
  "icon_1566": {
    "idx": 1566,
    "fileName": "frozen-arrow.svg"
  },
  "icon_1567": {
    "idx": 1567,
    "fileName": "frozen-block.svg"
  },
  "icon_1568": {
    "idx": 1568,
    "fileName": "frozen-body.svg"
  },
  "icon_1569": {
    "idx": 1569,
    "fileName": "frozen-orb.svg"
  },
  "icon_1570": {
    "idx": 1570,
    "fileName": "frozen-ring.svg"
  },
  "icon_1571": {
    "idx": 1571,
    "fileName": "fruit-bowl.svg"
  },
  "icon_1572": {
    "idx": 1572,
    "fileName": "fruit-tree.svg"
  },
  "icon_1573": {
    "idx": 1573,
    "fileName": "fruiting.svg"
  },
  "icon_1574": {
    "idx": 1574,
    "fileName": "fuel-tank.svg"
  },
  "icon_1575": {
    "idx": 1575,
    "fileName": "fuji.svg"
  },
  "icon_1576": {
    "idx": 1576,
    "fileName": "fulguro-punch.svg"
  },
  "icon_1577": {
    "idx": 1577,
    "fileName": "full-folder.svg"
  },
  "icon_1578": {
    "idx": 1578,
    "fileName": "full-metal-bucket-handle.svg"
  },
  "icon_1579": {
    "idx": 1579,
    "fileName": "full-metal-bucket.svg"
  },
  "icon_1580": {
    "idx": 1580,
    "fileName": "full-motorcycle-helmet.svg"
  },
  "icon_1581": {
    "idx": 1581,
    "fileName": "full-pizza.svg"
  },
  "icon_1582": {
    "idx": 1582,
    "fileName": "full-wood-bucket-handle.svg"
  },
  "icon_1583": {
    "idx": 1583,
    "fileName": "full-wood-bucket.svg"
  },
  "icon_1584": {
    "idx": 1584,
    "fileName": "funnel.svg"
  },
  "icon_1585": {
    "idx": 1585,
    "fileName": "fur-boot.svg"
  },
  "icon_1586": {
    "idx": 1586,
    "fileName": "fur-shirt.svg"
  },
  "icon_1587": {
    "idx": 1587,
    "fileName": "furnace.svg"
  },
  "icon_1588": {
    "idx": 1588,
    "fileName": "g-clef.svg"
  },
  "icon_1589": {
    "idx": 1589,
    "fileName": "galaxy.svg"
  },
  "icon_1590": {
    "idx": 1590,
    "fileName": "galea.svg"
  },
  "icon_1591": {
    "idx": 1591,
    "fileName": "galleon.svg"
  },
  "icon_1592": {
    "idx": 1592,
    "fileName": "galley.svg"
  },
  "icon_1593": {
    "idx": 1593,
    "fileName": "game-console.svg"
  },
  "icon_1594": {
    "idx": 1594,
    "fileName": "gamepad-cross.svg"
  },
  "icon_1595": {
    "idx": 1595,
    "fileName": "gamepad.svg"
  },
  "icon_1596": {
    "idx": 1596,
    "fileName": "gardening-shears.svg"
  },
  "icon_1597": {
    "idx": 1597,
    "fileName": "gargoyle.svg"
  },
  "icon_1598": {
    "idx": 1598,
    "fileName": "garlic.svg"
  },
  "icon_1599": {
    "idx": 1599,
    "fileName": "gas-mask.svg"
  },
  "icon_1600": {
    "idx": 1600,
    "fileName": "gas-pump.svg"
  },
  "icon_1601": {
    "idx": 1601,
    "fileName": "gas-stove.svg"
  },
  "icon_1602": {
    "idx": 1602,
    "fileName": "gate.svg"
  },
  "icon_1603": {
    "idx": 1603,
    "fileName": "gauls-helm.svg"
  },
  "icon_1604": {
    "idx": 1604,
    "fileName": "gauntlet.svg"
  },
  "icon_1605": {
    "idx": 1605,
    "fileName": "gavel.svg"
  },
  "icon_1606": {
    "idx": 1606,
    "fileName": "gaze.svg"
  },
  "icon_1607": {
    "idx": 1607,
    "fileName": "gear-hammer.svg"
  },
  "icon_1608": {
    "idx": 1608,
    "fileName": "gear-stick-pattern.svg"
  },
  "icon_1609": {
    "idx": 1609,
    "fileName": "gear-stick.svg"
  },
  "icon_1610": {
    "idx": 1610,
    "fileName": "gears.svg"
  },
  "icon_1611": {
    "idx": 1611,
    "fileName": "gecko.svg"
  },
  "icon_1612": {
    "idx": 1612,
    "fileName": "gem-chain.svg"
  },
  "icon_1613": {
    "idx": 1613,
    "fileName": "gem-necklace.svg"
  },
  "icon_1614": {
    "idx": 1614,
    "fileName": "gem-pendant.svg"
  },
  "icon_1615": {
    "idx": 1615,
    "fileName": "gemini.svg"
  },
  "icon_1616": {
    "idx": 1616,
    "fileName": "gems.svg"
  },
  "icon_1617": {
    "idx": 1617,
    "fileName": "ghost-ally.svg"
  },
  "icon_1618": {
    "idx": 1618,
    "fileName": "ghost.svg"
  },
  "icon_1619": {
    "idx": 1619,
    "fileName": "giant-squid.svg"
  },
  "icon_1620": {
    "idx": 1620,
    "fileName": "giant.svg"
  },
  "icon_1621": {
    "idx": 1621,
    "fileName": "gibbet.svg"
  },
  "icon_1622": {
    "idx": 1622,
    "fileName": "gift-of-knowledge.svg"
  },
  "icon_1623": {
    "idx": 1623,
    "fileName": "gift-trap.svg"
  },
  "icon_1624": {
    "idx": 1624,
    "fileName": "gingerbread-man.svg"
  },
  "icon_1625": {
    "idx": 1625,
    "fileName": "ginkgo-leaf.svg"
  },
  "icon_1626": {
    "idx": 1626,
    "fileName": "gladius.svg"
  },
  "icon_1627": {
    "idx": 1627,
    "fileName": "glaive.svg"
  },
  "icon_1628": {
    "idx": 1628,
    "fileName": "glass-ball.svg"
  },
  "icon_1629": {
    "idx": 1629,
    "fileName": "glass-celebration.svg"
  },
  "icon_1630": {
    "idx": 1630,
    "fileName": "glass-heart.svg"
  },
  "icon_1631": {
    "idx": 1631,
    "fileName": "glass-shot.svg"
  },
  "icon_1632": {
    "idx": 1632,
    "fileName": "glider.svg"
  },
  "icon_1633": {
    "idx": 1633,
    "fileName": "globe-ring.svg"
  },
  "icon_1634": {
    "idx": 1634,
    "fileName": "globe.svg"
  },
  "icon_1635": {
    "idx": 1635,
    "fileName": "glock.svg"
  },
  "icon_1636": {
    "idx": 1636,
    "fileName": "gloop.svg"
  },
  "icon_1637": {
    "idx": 1637,
    "fileName": "gloves.svg"
  },
  "icon_1638": {
    "idx": 1638,
    "fileName": "glowing-hands.svg"
  },
  "icon_1639": {
    "idx": 1639,
    "fileName": "gluttonous-smile.svg"
  },
  "icon_1640": {
    "idx": 1640,
    "fileName": "gluttony.svg"
  },
  "icon_1641": {
    "idx": 1641,
    "fileName": "goal-keeper.svg"
  },
  "icon_1642": {
    "idx": 1642,
    "fileName": "goat.svg"
  },
  "icon_1643": {
    "idx": 1643,
    "fileName": "goblin-camp.svg"
  },
  "icon_1644": {
    "idx": 1644,
    "fileName": "goblin-head.svg"
  },
  "icon_1645": {
    "idx": 1645,
    "fileName": "gold-bar.svg"
  },
  "icon_1646": {
    "idx": 1646,
    "fileName": "gold-mine.svg"
  },
  "icon_1647": {
    "idx": 1647,
    "fileName": "gold-nuggets.svg"
  },
  "icon_1648": {
    "idx": 1648,
    "fileName": "gold-scarab.svg"
  },
  "icon_1649": {
    "idx": 1649,
    "fileName": "gold-shell.svg"
  },
  "icon_1650": {
    "idx": 1650,
    "fileName": "gold-stack.svg"
  },
  "icon_1651": {
    "idx": 1651,
    "fileName": "golem-head.svg"
  },
  "icon_1652": {
    "idx": 1652,
    "fileName": "golf-flag.svg"
  },
  "icon_1653": {
    "idx": 1653,
    "fileName": "golf-tee.svg"
  },
  "icon_1654": {
    "idx": 1654,
    "fileName": "gong.svg"
  },
  "icon_1655": {
    "idx": 1655,
    "fileName": "goo-explosion.svg"
  },
  "icon_1656": {
    "idx": 1656,
    "fileName": "goo-skull.svg"
  },
  "icon_1657": {
    "idx": 1657,
    "fileName": "goo-spurt.svg"
  },
  "icon_1658": {
    "idx": 1658,
    "fileName": "gooey-daemon.svg"
  },
  "icon_1659": {
    "idx": 1659,
    "fileName": "gooey-eyed-sun.svg"
  },
  "icon_1660": {
    "idx": 1660,
    "fileName": "gooey-impact.svg"
  },
  "icon_1661": {
    "idx": 1661,
    "fileName": "gooey-molecule.svg"
  },
  "icon_1662": {
    "idx": 1662,
    "fileName": "gooey-sword.svg"
  },
  "icon_1663": {
    "idx": 1663,
    "fileName": "goose.svg"
  },
  "icon_1664": {
    "idx": 1664,
    "fileName": "gorilla.svg"
  },
  "icon_1665": {
    "idx": 1665,
    "fileName": "gothic-cross.svg"
  },
  "icon_1666": {
    "idx": 1666,
    "fileName": "gps.svg"
  },
  "icon_1667": {
    "idx": 1667,
    "fileName": "grab.svg"
  },
  "icon_1668": {
    "idx": 1668,
    "fileName": "graduate-cap.svg"
  },
  "icon_1669": {
    "idx": 1669,
    "fileName": "grain-bundle.svg"
  },
  "icon_1670": {
    "idx": 1670,
    "fileName": "grain.svg"
  },
  "icon_1671": {
    "idx": 1671,
    "fileName": "granary.svg"
  },
  "icon_1672": {
    "idx": 1672,
    "fileName": "grapes.svg"
  },
  "icon_1673": {
    "idx": 1673,
    "fileName": "grapple.svg"
  },
  "icon_1674": {
    "idx": 1674,
    "fileName": "grasping-claws.svg"
  },
  "icon_1675": {
    "idx": 1675,
    "fileName": "grasping-slug.svg"
  },
  "icon_1676": {
    "idx": 1676,
    "fileName": "grass-mushroom.svg"
  },
  "icon_1677": {
    "idx": 1677,
    "fileName": "grass.svg"
  },
  "icon_1678": {
    "idx": 1678,
    "fileName": "grave-flowers.svg"
  },
  "icon_1679": {
    "idx": 1679,
    "fileName": "graveyard.svg"
  },
  "icon_1680": {
    "idx": 1680,
    "fileName": "grease-trap.svg"
  },
  "icon_1681": {
    "idx": 1681,
    "fileName": "great-pyramid.svg"
  },
  "icon_1682": {
    "idx": 1682,
    "fileName": "great-war-tank.svg"
  },
  "icon_1683": {
    "idx": 1683,
    "fileName": "greaves.svg"
  },
  "icon_1684": {
    "idx": 1684,
    "fileName": "greek-sphinx.svg"
  },
  "icon_1685": {
    "idx": 1685,
    "fileName": "greek-temple.svg"
  },
  "icon_1686": {
    "idx": 1686,
    "fileName": "green-power.svg"
  },
  "icon_1687": {
    "idx": 1687,
    "fileName": "greenhouse.svg"
  },
  "icon_1688": {
    "idx": 1688,
    "fileName": "grenade.svg"
  },
  "icon_1689": {
    "idx": 1689,
    "fileName": "griffin-shield.svg"
  },
  "icon_1690": {
    "idx": 1690,
    "fileName": "griffin-symbol.svg"
  },
  "icon_1691": {
    "idx": 1691,
    "fileName": "grim-reaper.svg"
  },
  "icon_1692": {
    "idx": 1692,
    "fileName": "ground-sprout.svg"
  },
  "icon_1693": {
    "idx": 1693,
    "fileName": "groundbreaker.svg"
  },
  "icon_1694": {
    "idx": 1694,
    "fileName": "grouped-drops.svg"
  },
  "icon_1695": {
    "idx": 1695,
    "fileName": "growth.svg"
  },
  "icon_1696": {
    "idx": 1696,
    "fileName": "guarded-tower.svg"
  },
  "icon_1697": {
    "idx": 1697,
    "fileName": "guards.svg"
  },
  "icon_1698": {
    "idx": 1698,
    "fileName": "guatemala.svg"
  },
  "icon_1699": {
    "idx": 1699,
    "fileName": "guillotine.svg"
  },
  "icon_1700": {
    "idx": 1700,
    "fileName": "guitar-bass-head.svg"
  },
  "icon_1701": {
    "idx": 1701,
    "fileName": "guitar-head.svg"
  },
  "icon_1702": {
    "idx": 1702,
    "fileName": "guitar.svg"
  },
  "icon_1703": {
    "idx": 1703,
    "fileName": "gun-rose.svg"
  },
  "icon_1704": {
    "idx": 1704,
    "fileName": "gun-stock.svg"
  },
  "icon_1705": {
    "idx": 1705,
    "fileName": "gunshot.svg"
  },
  "icon_1706": {
    "idx": 1706,
    "fileName": "gym-bag.svg"
  },
  "icon_1707": {
    "idx": 1707,
    "fileName": "h2o.svg"
  },
  "icon_1708": {
    "idx": 1708,
    "fileName": "habitat-dome.svg"
  },
  "icon_1709": {
    "idx": 1709,
    "fileName": "hair-strands.svg"
  },
  "icon_1710": {
    "idx": 1710,
    "fileName": "halberd-shuriken.svg"
  },
  "icon_1711": {
    "idx": 1711,
    "fileName": "halberd.svg"
  },
  "icon_1712": {
    "idx": 1712,
    "fileName": "half-body-crawling.svg"
  },
  "icon_1713": {
    "idx": 1713,
    "fileName": "half-dead.svg"
  },
  "icon_1714": {
    "idx": 1714,
    "fileName": "half-heart.svg"
  },
  "icon_1715": {
    "idx": 1715,
    "fileName": "half-log.svg"
  },
  "icon_1716": {
    "idx": 1716,
    "fileName": "half-tornado.svg"
  },
  "icon_1717": {
    "idx": 1717,
    "fileName": "halt.svg"
  },
  "icon_1718": {
    "idx": 1718,
    "fileName": "ham-shank.svg"
  },
  "icon_1719": {
    "idx": 1719,
    "fileName": "hamburger-menu.svg"
  },
  "icon_1720": {
    "idx": 1720,
    "fileName": "hamburger.svg"
  },
  "icon_1721": {
    "idx": 1721,
    "fileName": "hammer-break.svg"
  },
  "icon_1722": {
    "idx": 1722,
    "fileName": "hammer-drop.svg"
  },
  "icon_1723": {
    "idx": 1723,
    "fileName": "hammer-nails.svg"
  },
  "icon_1724": {
    "idx": 1724,
    "fileName": "hammer-sickle.svg"
  },
  "icon_1725": {
    "idx": 1725,
    "fileName": "hand-bag.svg"
  },
  "icon_1726": {
    "idx": 1726,
    "fileName": "hand-bandage.svg"
  },
  "icon_1727": {
    "idx": 1727,
    "fileName": "hand-grip.svg"
  },
  "icon_1728": {
    "idx": 1728,
    "fileName": "hand-of-god.svg"
  },
  "icon_1729": {
    "idx": 1729,
    "fileName": "hand-ok.svg"
  },
  "icon_1730": {
    "idx": 1730,
    "fileName": "hand-saw.svg"
  },
  "icon_1731": {
    "idx": 1731,
    "fileName": "hand-truck.svg"
  },
  "icon_1732": {
    "idx": 1732,
    "fileName": "hand-wing.svg"
  },
  "icon_1733": {
    "idx": 1733,
    "fileName": "hand.svg"
  },
  "icon_1734": {
    "idx": 1734,
    "fileName": "handcuffed.svg"
  },
  "icon_1735": {
    "idx": 1735,
    "fileName": "handcuffs.svg"
  },
  "icon_1736": {
    "idx": 1736,
    "fileName": "handheld-fan.svg"
  },
  "icon_1737": {
    "idx": 1737,
    "fileName": "hang-glider.svg"
  },
  "icon_1738": {
    "idx": 1738,
    "fileName": "hanger.svg"
  },
  "icon_1739": {
    "idx": 1739,
    "fileName": "hanging-sign.svg"
  },
  "icon_1740": {
    "idx": 1740,
    "fileName": "hanging-spider.svg"
  },
  "icon_1741": {
    "idx": 1741,
    "fileName": "happy-skull.svg"
  },
  "icon_1742": {
    "idx": 1742,
    "fileName": "harbor-dock.svg"
  },
  "icon_1743": {
    "idx": 1743,
    "fileName": "harp.svg"
  },
  "icon_1744": {
    "idx": 1744,
    "fileName": "harpoon-chain.svg"
  },
  "icon_1745": {
    "idx": 1745,
    "fileName": "harpoon-trident.svg"
  },
  "icon_1746": {
    "idx": 1746,
    "fileName": "harpy.svg"
  },
  "icon_1747": {
    "idx": 1747,
    "fileName": "harry-potter-skull.svg"
  },
  "icon_1748": {
    "idx": 1748,
    "fileName": "hasty-grave.svg"
  },
  "icon_1749": {
    "idx": 1749,
    "fileName": "hatchet.svg"
  },
  "icon_1750": {
    "idx": 1750,
    "fileName": "hatchets.svg"
  },
  "icon_1751": {
    "idx": 1751,
    "fileName": "haunting.svg"
  },
  "icon_1752": {
    "idx": 1752,
    "fileName": "hawk-emblem.svg"
  },
  "icon_1753": {
    "idx": 1753,
    "fileName": "hazard-sign.svg"
  },
  "icon_1754": {
    "idx": 1754,
    "fileName": "hazmat-suit.svg"
  },
  "icon_1755": {
    "idx": 1755,
    "fileName": "head-shot.svg"
  },
  "icon_1756": {
    "idx": 1756,
    "fileName": "headband-knot.svg"
  },
  "icon_1757": {
    "idx": 1757,
    "fileName": "headphones.svg"
  },
  "icon_1758": {
    "idx": 1758,
    "fileName": "headshot.svg"
  },
  "icon_1759": {
    "idx": 1759,
    "fileName": "healing-shield.svg"
  },
  "icon_1760": {
    "idx": 1760,
    "fileName": "healing.svg"
  },
  "icon_1761": {
    "idx": 1761,
    "fileName": "health-capsule.svg"
  },
  "icon_1762": {
    "idx": 1762,
    "fileName": "health-decrease.svg"
  },
  "icon_1763": {
    "idx": 1763,
    "fileName": "health-increase.svg"
  },
  "icon_1764": {
    "idx": 1764,
    "fileName": "health-normal.svg"
  },
  "icon_1765": {
    "idx": 1765,
    "fileName": "health-potion.svg"
  },
  "icon_1766": {
    "idx": 1766,
    "fileName": "hearing-disabled.svg"
  },
  "icon_1767": {
    "idx": 1767,
    "fileName": "heart-armor.svg"
  },
  "icon_1768": {
    "idx": 1768,
    "fileName": "heart-battery.svg"
  },
  "icon_1769": {
    "idx": 1769,
    "fileName": "heart-beats.svg"
  },
  "icon_1770": {
    "idx": 1770,
    "fileName": "heart-bottle.svg"
  },
  "icon_1771": {
    "idx": 1771,
    "fileName": "heart-drop.svg"
  },
  "icon_1772": {
    "idx": 1772,
    "fileName": "heart-earrings.svg"
  },
  "icon_1773": {
    "idx": 1773,
    "fileName": "heart-inside.svg"
  },
  "icon_1774": {
    "idx": 1774,
    "fileName": "heart-key.svg"
  },
  "icon_1775": {
    "idx": 1775,
    "fileName": "heart-minus.svg"
  },
  "icon_1776": {
    "idx": 1776,
    "fileName": "heart-necklace.svg"
  },
  "icon_1777": {
    "idx": 1777,
    "fileName": "heart-organ.svg"
  },
  "icon_1778": {
    "idx": 1778,
    "fileName": "heart-plus.svg"
  },
  "icon_1779": {
    "idx": 1779,
    "fileName": "heart-shield.svg"
  },
  "icon_1780": {
    "idx": 1780,
    "fileName": "heart-stake.svg"
  },
  "icon_1781": {
    "idx": 1781,
    "fileName": "heart-tower.svg"
  },
  "icon_1782": {
    "idx": 1782,
    "fileName": "heart-wings.svg"
  },
  "icon_1783": {
    "idx": 1783,
    "fileName": "heartburn.svg"
  },
  "icon_1784": {
    "idx": 1784,
    "fileName": "hearts.svg"
  },
  "icon_1785": {
    "idx": 1785,
    "fileName": "heat-haze.svg"
  },
  "icon_1786": {
    "idx": 1786,
    "fileName": "heaven-gate.svg"
  },
  "icon_1787": {
    "idx": 1787,
    "fileName": "heavy-arrow.svg"
  },
  "icon_1788": {
    "idx": 1788,
    "fileName": "heavy-bullets.svg"
  },
  "icon_1789": {
    "idx": 1789,
    "fileName": "heavy-collar.svg"
  },
  "icon_1790": {
    "idx": 1790,
    "fileName": "heavy-fall.svg"
  },
  "icon_1791": {
    "idx": 1791,
    "fileName": "heavy-fighter.svg"
  },
  "icon_1792": {
    "idx": 1792,
    "fileName": "heavy-helm.svg"
  },
  "icon_1793": {
    "idx": 1793,
    "fileName": "heavy-lightning.svg"
  },
  "icon_1794": {
    "idx": 1794,
    "fileName": "heavy-rain.svg"
  },
  "icon_1795": {
    "idx": 1795,
    "fileName": "heavy-thorny-triskelion.svg"
  },
  "icon_1796": {
    "idx": 1796,
    "fileName": "heavy-timer.svg"
  },
  "icon_1797": {
    "idx": 1797,
    "fileName": "hedjet-white-crown.svg"
  },
  "icon_1798": {
    "idx": 1798,
    "fileName": "helicoprion.svg"
  },
  "icon_1799": {
    "idx": 1799,
    "fileName": "helicopter-tail.svg"
  },
  "icon_1800": {
    "idx": 1800,
    "fileName": "helicopter.svg"
  },
  "icon_1801": {
    "idx": 1801,
    "fileName": "hell-crosses.svg"
  },
  "icon_1802": {
    "idx": 1802,
    "fileName": "helmet-head-shot.svg"
  },
  "icon_1803": {
    "idx": 1803,
    "fileName": "helmet.svg"
  },
  "icon_1804": {
    "idx": 1804,
    "fileName": "help.svg"
  },
  "icon_1805": {
    "idx": 1805,
    "fileName": "hemp.svg"
  },
  "icon_1806": {
    "idx": 1806,
    "fileName": "heptagram.svg"
  },
  "icon_1807": {
    "idx": 1807,
    "fileName": "herbs-bundle.svg"
  },
  "icon_1808": {
    "idx": 1808,
    "fileName": "hexagonal-nut.svg"
  },
  "icon_1809": {
    "idx": 1809,
    "fileName": "hexes.svg"
  },
  "icon_1810": {
    "idx": 1810,
    "fileName": "hidden.svg"
  },
  "icon_1811": {
    "idx": 1811,
    "fileName": "hieroglyph-legs.svg"
  },
  "icon_1812": {
    "idx": 1812,
    "fileName": "hieroglyph-y.svg"
  },
  "icon_1813": {
    "idx": 1813,
    "fileName": "high-five.svg"
  },
  "icon_1814": {
    "idx": 1814,
    "fileName": "high-grass.svg"
  },
  "icon_1815": {
    "idx": 1815,
    "fileName": "high-heel.svg"
  },
  "icon_1816": {
    "idx": 1816,
    "fileName": "high-kick.svg"
  },
  "icon_1817": {
    "idx": 1817,
    "fileName": "high-punch.svg"
  },
  "icon_1818": {
    "idx": 1818,
    "fileName": "high-shot.svg"
  },
  "icon_1819": {
    "idx": 1819,
    "fileName": "high-tide.svg"
  },
  "icon_1820": {
    "idx": 1820,
    "fileName": "highlighter.svg"
  },
  "icon_1821": {
    "idx": 1821,
    "fileName": "hiking.svg"
  },
  "icon_1822": {
    "idx": 1822,
    "fileName": "hill-conquest.svg"
  },
  "icon_1823": {
    "idx": 1823,
    "fileName": "hill-fort.svg"
  },
  "icon_1824": {
    "idx": 1824,
    "fileName": "hills.svg"
  },
  "icon_1825": {
    "idx": 1825,
    "fileName": "histogram.svg"
  },
  "icon_1826": {
    "idx": 1826,
    "fileName": "hive-mind.svg"
  },
  "icon_1827": {
    "idx": 1827,
    "fileName": "hive.svg"
  },
  "icon_1828": {
    "idx": 1828,
    "fileName": "hobbit-door.svg"
  },
  "icon_1829": {
    "idx": 1829,
    "fileName": "hobbit-dwelling.svg"
  },
  "icon_1830": {
    "idx": 1830,
    "fileName": "hockey.svg"
  },
  "icon_1831": {
    "idx": 1831,
    "fileName": "hole-ladder.svg"
  },
  "icon_1832": {
    "idx": 1832,
    "fileName": "hole.svg"
  },
  "icon_1833": {
    "idx": 1833,
    "fileName": "hollow-cat.svg"
  },
  "icon_1834": {
    "idx": 1834,
    "fileName": "holosphere.svg"
  },
  "icon_1835": {
    "idx": 1835,
    "fileName": "holy-grail.svg"
  },
  "icon_1836": {
    "idx": 1836,
    "fileName": "holy-hand-grenade.svg"
  },
  "icon_1837": {
    "idx": 1837,
    "fileName": "holy-oak.svg"
  },
  "icon_1838": {
    "idx": 1838,
    "fileName": "holy-symbol.svg"
  },
  "icon_1839": {
    "idx": 1839,
    "fileName": "holy-water.svg"
  },
  "icon_1840": {
    "idx": 1840,
    "fileName": "home-garage.svg"
  },
  "icon_1841": {
    "idx": 1841,
    "fileName": "honey-jar.svg"
  },
  "icon_1842": {
    "idx": 1842,
    "fileName": "honeycomb.svg"
  },
  "icon_1843": {
    "idx": 1843,
    "fileName": "honeypot.svg"
  },
  "icon_1844": {
    "idx": 1844,
    "fileName": "hood.svg"
  },
  "icon_1845": {
    "idx": 1845,
    "fileName": "hooded-assassin.svg"
  },
  "icon_1846": {
    "idx": 1846,
    "fileName": "hooded-figure.svg"
  },
  "icon_1847": {
    "idx": 1847,
    "fileName": "hoodie.svg"
  },
  "icon_1848": {
    "idx": 1848,
    "fileName": "hoof.svg"
  },
  "icon_1849": {
    "idx": 1849,
    "fileName": "hook.svg"
  },
  "icon_1850": {
    "idx": 1850,
    "fileName": "hops.svg"
  },
  "icon_1851": {
    "idx": 1851,
    "fileName": "horizontal-flip.svg"
  },
  "icon_1852": {
    "idx": 1852,
    "fileName": "horn-internal.svg"
  },
  "icon_1853": {
    "idx": 1853,
    "fileName": "horned-helm.svg"
  },
  "icon_1854": {
    "idx": 1854,
    "fileName": "horned-reptile.svg"
  },
  "icon_1855": {
    "idx": 1855,
    "fileName": "horned-skull.svg"
  },
  "icon_1856": {
    "idx": 1856,
    "fileName": "horse-head.svg"
  },
  "icon_1857": {
    "idx": 1857,
    "fileName": "horseshoe.svg"
  },
  "icon_1858": {
    "idx": 1858,
    "fileName": "horus.svg"
  },
  "icon_1859": {
    "idx": 1859,
    "fileName": "hospital-cross.svg"
  },
  "icon_1860": {
    "idx": 1860,
    "fileName": "hospital.svg"
  },
  "icon_1861": {
    "idx": 1861,
    "fileName": "hot-dog.svg"
  },
  "icon_1862": {
    "idx": 1862,
    "fileName": "hot-meal.svg"
  },
  "icon_1863": {
    "idx": 1863,
    "fileName": "hot-spices.svg"
  },
  "icon_1864": {
    "idx": 1864,
    "fileName": "hot-surface.svg"
  },
  "icon_1865": {
    "idx": 1865,
    "fileName": "hound.svg"
  },
  "icon_1866": {
    "idx": 1866,
    "fileName": "hourglass.svg"
  },
  "icon_1867": {
    "idx": 1867,
    "fileName": "house-keys.svg"
  },
  "icon_1868": {
    "idx": 1868,
    "fileName": "house.svg"
  },
  "icon_1869": {
    "idx": 1869,
    "fileName": "human-cannonball.svg"
  },
  "icon_1870": {
    "idx": 1870,
    "fileName": "human-ear.svg"
  },
  "icon_1871": {
    "idx": 1871,
    "fileName": "human-pyramid.svg"
  },
  "icon_1872": {
    "idx": 1872,
    "fileName": "human-target.svg"
  },
  "icon_1873": {
    "idx": 1873,
    "fileName": "hummingbird.svg"
  },
  "icon_1874": {
    "idx": 1874,
    "fileName": "hungary.svg"
  },
  "icon_1875": {
    "idx": 1875,
    "fileName": "hunter-eyes.svg"
  },
  "icon_1876": {
    "idx": 1876,
    "fileName": "hunting-bolas.svg"
  },
  "icon_1877": {
    "idx": 1877,
    "fileName": "hunting-horn.svg"
  },
  "icon_1878": {
    "idx": 1878,
    "fileName": "hut.svg"
  },
  "icon_1879": {
    "idx": 1879,
    "fileName": "huts-village.svg"
  },
  "icon_1880": {
    "idx": 1880,
    "fileName": "hydra-shot.svg"
  },
  "icon_1881": {
    "idx": 1881,
    "fileName": "hydra.svg"
  },
  "icon_1882": {
    "idx": 1882,
    "fileName": "hypersonic-bolt.svg"
  },
  "icon_1883": {
    "idx": 1883,
    "fileName": "hypersonic-melon.svg"
  },
  "icon_1884": {
    "idx": 1884,
    "fileName": "hypodermic-test.svg"
  },
  "icon_1885": {
    "idx": 1885,
    "fileName": "i-beam.svg"
  },
  "icon_1886": {
    "idx": 1886,
    "fileName": "i-brick.svg"
  },
  "icon_1887": {
    "idx": 1887,
    "fileName": "ibis.svg"
  },
  "icon_1888": {
    "idx": 1888,
    "fileName": "icarus.svg"
  },
  "icon_1889": {
    "idx": 1889,
    "fileName": "ice-bolt.svg"
  },
  "icon_1890": {
    "idx": 1890,
    "fileName": "ice-bomb.svg"
  },
  "icon_1891": {
    "idx": 1891,
    "fileName": "ice-cream-cone.svg"
  },
  "icon_1892": {
    "idx": 1892,
    "fileName": "ice-cream-scoop.svg"
  },
  "icon_1893": {
    "idx": 1893,
    "fileName": "ice-cube.svg"
  },
  "icon_1894": {
    "idx": 1894,
    "fileName": "ice-cubes.svg"
  },
  "icon_1895": {
    "idx": 1895,
    "fileName": "ice-golem.svg"
  },
  "icon_1896": {
    "idx": 1896,
    "fileName": "ice-iris.svg"
  },
  "icon_1897": {
    "idx": 1897,
    "fileName": "ice-pop.svg"
  },
  "icon_1898": {
    "idx": 1898,
    "fileName": "ice-shield.svg"
  },
  "icon_1899": {
    "idx": 1899,
    "fileName": "ice-skate.svg"
  },
  "icon_1900": {
    "idx": 1900,
    "fileName": "ice-spear.svg"
  },
  "icon_1901": {
    "idx": 1901,
    "fileName": "ice-spell-cast.svg"
  },
  "icon_1902": {
    "idx": 1902,
    "fileName": "iceberg.svg"
  },
  "icon_1903": {
    "idx": 1903,
    "fileName": "icebergs.svg"
  },
  "icon_1904": {
    "idx": 1904,
    "fileName": "iceland.svg"
  },
  "icon_1905": {
    "idx": 1905,
    "fileName": "icicles-aura.svg"
  },
  "icon_1906": {
    "idx": 1906,
    "fileName": "icicles-fence.svg"
  },
  "icon_1907": {
    "idx": 1907,
    "fileName": "id-card.svg"
  },
  "icon_1908": {
    "idx": 1908,
    "fileName": "idea.svg"
  },
  "icon_1909": {
    "idx": 1909,
    "fileName": "ifrit.svg"
  },
  "icon_1910": {
    "idx": 1910,
    "fileName": "igloo.svg"
  },
  "icon_1911": {
    "idx": 1911,
    "fileName": "imbricated-arrows.svg"
  },
  "icon_1912": {
    "idx": 1912,
    "fileName": "imp-laugh.svg"
  },
  "icon_1913": {
    "idx": 1913,
    "fileName": "imp.svg"
  },
  "icon_1914": {
    "idx": 1914,
    "fileName": "impact-point.svg"
  },
  "icon_1915": {
    "idx": 1915,
    "fileName": "imperial-crown.svg"
  },
  "icon_1916": {
    "idx": 1916,
    "fileName": "implosion.svg"
  },
  "icon_1917": {
    "idx": 1917,
    "fileName": "imprisoned.svg"
  },
  "icon_1918": {
    "idx": 1918,
    "fileName": "inauguration.svg"
  },
  "icon_1919": {
    "idx": 1919,
    "fileName": "incense.svg"
  },
  "icon_1920": {
    "idx": 1920,
    "fileName": "incisors.svg"
  },
  "icon_1921": {
    "idx": 1921,
    "fileName": "incoming-rocket.svg"
  },
  "icon_1922": {
    "idx": 1922,
    "fileName": "incubator.svg"
  },
  "icon_1923": {
    "idx": 1923,
    "fileName": "india-gate.svg"
  },
  "icon_1924": {
    "idx": 1924,
    "fileName": "indian-palace.svg"
  },
  "icon_1925": {
    "idx": 1925,
    "fileName": "infested-mass.svg"
  },
  "icon_1926": {
    "idx": 1926,
    "fileName": "infinity.svg"
  },
  "icon_1927": {
    "idx": 1927,
    "fileName": "info.svg"
  },
  "icon_1928": {
    "idx": 1928,
    "fileName": "injustice.svg"
  },
  "icon_1929": {
    "idx": 1929,
    "fileName": "ink-swirl.svg"
  },
  "icon_1930": {
    "idx": 1930,
    "fileName": "inner-self.svg"
  },
  "icon_1931": {
    "idx": 1931,
    "fileName": "insect-jaws.svg"
  },
  "icon_1932": {
    "idx": 1932,
    "fileName": "inspiration.svg"
  },
  "icon_1933": {
    "idx": 1933,
    "fileName": "interceptor-ship.svg"
  },
  "icon_1934": {
    "idx": 1934,
    "fileName": "interdiction.svg"
  },
  "icon_1935": {
    "idx": 1935,
    "fileName": "interlaced-tentacles.svg"
  },
  "icon_1936": {
    "idx": 1936,
    "fileName": "interleaved-arrows.svg"
  },
  "icon_1937": {
    "idx": 1937,
    "fileName": "interleaved-claws.svg"
  },
  "icon_1938": {
    "idx": 1938,
    "fileName": "internal-injury.svg"
  },
  "icon_1939": {
    "idx": 1939,
    "fileName": "internal-organ.svg"
  },
  "icon_1940": {
    "idx": 1940,
    "fileName": "interstellar-path.svg"
  },
  "icon_1941": {
    "idx": 1941,
    "fileName": "intricate-necklace.svg"
  },
  "icon_1942": {
    "idx": 1942,
    "fileName": "inverted-dice-1.svg"
  },
  "icon_1943": {
    "idx": 1943,
    "fileName": "inverted-dice-2.svg"
  },
  "icon_1944": {
    "idx": 1944,
    "fileName": "inverted-dice-3.svg"
  },
  "icon_1945": {
    "idx": 1945,
    "fileName": "inverted-dice-4.svg"
  },
  "icon_1946": {
    "idx": 1946,
    "fileName": "inverted-dice-5.svg"
  },
  "icon_1947": {
    "idx": 1947,
    "fileName": "inverted-dice-6.svg"
  },
  "icon_1948": {
    "idx": 1948,
    "fileName": "invisible-face.svg"
  },
  "icon_1949": {
    "idx": 1949,
    "fileName": "invisible.svg"
  },
  "icon_1950": {
    "idx": 1950,
    "fileName": "ion-cannon-blast.svg"
  },
  "icon_1951": {
    "idx": 1951,
    "fileName": "ionic-column.svg"
  },
  "icon_1952": {
    "idx": 1952,
    "fileName": "iraq.svg"
  },
  "icon_1953": {
    "idx": 1953,
    "fileName": "iron-cross.svg"
  },
  "icon_1954": {
    "idx": 1954,
    "fileName": "iron-hulled-warship.svg"
  },
  "icon_1955": {
    "idx": 1955,
    "fileName": "iron-mask.svg"
  },
  "icon_1956": {
    "idx": 1956,
    "fileName": "island.svg"
  },
  "icon_1957": {
    "idx": 1957,
    "fileName": "italia.svg"
  },
  "icon_1958": {
    "idx": 1958,
    "fileName": "ivory-tusks.svg"
  },
  "icon_1959": {
    "idx": 1959,
    "fileName": "j-brick.svg"
  },
  "icon_1960": {
    "idx": 1960,
    "fileName": "jack-plug.svg"
  },
  "icon_1961": {
    "idx": 1961,
    "fileName": "james-bond-aperture.svg"
  },
  "icon_1962": {
    "idx": 1962,
    "fileName": "japan.svg"
  },
  "icon_1963": {
    "idx": 1963,
    "fileName": "japanese-bridge.svg"
  },
  "icon_1964": {
    "idx": 1964,
    "fileName": "jasmine.svg"
  },
  "icon_1965": {
    "idx": 1965,
    "fileName": "jason-mask.svg"
  },
  "icon_1966": {
    "idx": 1966,
    "fileName": "jawbone.svg"
  },
  "icon_1967": {
    "idx": 1967,
    "fileName": "jawless-cyclop.svg"
  },
  "icon_1968": {
    "idx": 1968,
    "fileName": "jeep.svg"
  },
  "icon_1969": {
    "idx": 1969,
    "fileName": "jelly-beans.svg"
  },
  "icon_1970": {
    "idx": 1970,
    "fileName": "jelly.svg"
  },
  "icon_1971": {
    "idx": 1971,
    "fileName": "jellyfish.svg"
  },
  "icon_1972": {
    "idx": 1972,
    "fileName": "jerrycan.svg"
  },
  "icon_1973": {
    "idx": 1973,
    "fileName": "jerusalem-cross.svg"
  },
  "icon_1974": {
    "idx": 1974,
    "fileName": "jester-hat.svg"
  },
  "icon_1975": {
    "idx": 1975,
    "fileName": "jet-fighter.svg"
  },
  "icon_1976": {
    "idx": 1976,
    "fileName": "jet-pack.svg"
  },
  "icon_1977": {
    "idx": 1977,
    "fileName": "jetpack.svg"
  },
  "icon_1978": {
    "idx": 1978,
    "fileName": "jewel-crown.svg"
  },
  "icon_1979": {
    "idx": 1979,
    "fileName": "jeweled-chalice.svg"
  },
  "icon_1980": {
    "idx": 1980,
    "fileName": "jigsaw-box.svg"
  },
  "icon_1981": {
    "idx": 1981,
    "fileName": "jigsaw-piece.svg"
  },
  "icon_1982": {
    "idx": 1982,
    "fileName": "join.svg"
  },
  "icon_1983": {
    "idx": 1983,
    "fileName": "joint.svg"
  },
  "icon_1984": {
    "idx": 1984,
    "fileName": "journey.svg"
  },
  "icon_1985": {
    "idx": 1985,
    "fileName": "joystick.svg"
  },
  "icon_1986": {
    "idx": 1986,
    "fileName": "jug.svg"
  },
  "icon_1987": {
    "idx": 1987,
    "fileName": "juggler.svg"
  },
  "icon_1988": {
    "idx": 1988,
    "fileName": "juggling-clubs.svg"
  },
  "icon_1989": {
    "idx": 1989,
    "fileName": "juggling-seal.svg"
  },
  "icon_1990": {
    "idx": 1990,
    "fileName": "jump-across.svg"
  },
  "icon_1991": {
    "idx": 1991,
    "fileName": "jumping-dog.svg"
  },
  "icon_1992": {
    "idx": 1992,
    "fileName": "jumping-rope.svg"
  },
  "icon_1993": {
    "idx": 1993,
    "fileName": "jungle.svg"
  },
  "icon_1994": {
    "idx": 1994,
    "fileName": "jupiter.svg"
  },
  "icon_1995": {
    "idx": 1995,
    "fileName": "justice-star.svg"
  },
  "icon_1996": {
    "idx": 1996,
    "fileName": "kaleidoscope-pearls.svg"
  },
  "icon_1997": {
    "idx": 1997,
    "fileName": "kangaroo.svg"
  },
  "icon_1998": {
    "idx": 1998,
    "fileName": "katana.svg"
  },
  "icon_1999": {
    "idx": 1999,
    "fileName": "kebab-spit.svg"
  },
  "icon_2000": {
    "idx": 2000,
    "fileName": "kenku-head.svg"
  },
  "icon_2001": {
    "idx": 2001,
    "fileName": "kenya.svg"
  },
  "icon_2002": {
    "idx": 2002,
    "fileName": "ketchup.svg"
  },
  "icon_2003": {
    "idx": 2003,
    "fileName": "kevlar-vest.svg"
  },
  "icon_2004": {
    "idx": 2004,
    "fileName": "kevlar.svg"
  },
  "icon_2005": {
    "idx": 2005,
    "fileName": "key-card.svg"
  },
  "icon_2006": {
    "idx": 2006,
    "fileName": "key-lock.svg"
  },
  "icon_2007": {
    "idx": 2007,
    "fileName": "key.svg"
  },
  "icon_2008": {
    "idx": 2008,
    "fileName": "keyboard.svg"
  },
  "icon_2009": {
    "idx": 2009,
    "fileName": "keyring.svg"
  },
  "icon_2010": {
    "idx": 2010,
    "fileName": "kick-scooter.svg"
  },
  "icon_2011": {
    "idx": 2011,
    "fileName": "kid-slide.svg"
  },
  "icon_2012": {
    "idx": 2012,
    "fileName": "kidneys.svg"
  },
  "icon_2013": {
    "idx": 2013,
    "fileName": "kimono.svg"
  },
  "icon_2014": {
    "idx": 2014,
    "fileName": "kindle.svg"
  },
  "icon_2015": {
    "idx": 2015,
    "fileName": "king-ju-mask.svg"
  },
  "icon_2016": {
    "idx": 2016,
    "fileName": "king.svg"
  },
  "icon_2017": {
    "idx": 2017,
    "fileName": "kitchen-knives.svg"
  },
  "icon_2018": {
    "idx": 2018,
    "fileName": "kitchen-scale.svg"
  },
  "icon_2019": {
    "idx": 2019,
    "fileName": "kitchen-tap.svg"
  },
  "icon_2020": {
    "idx": 2020,
    "fileName": "kite.svg"
  },
  "icon_2021": {
    "idx": 2021,
    "fileName": "kiwi-bird.svg"
  },
  "icon_2022": {
    "idx": 2022,
    "fileName": "kiwi-fruit.svg"
  },
  "icon_2023": {
    "idx": 2023,
    "fileName": "klingon.svg"
  },
  "icon_2024": {
    "idx": 2024,
    "fileName": "knapsack.svg"
  },
  "icon_2025": {
    "idx": 2025,
    "fileName": "knee-bandage.svg"
  },
  "icon_2026": {
    "idx": 2026,
    "fileName": "knee-cap.svg"
  },
  "icon_2027": {
    "idx": 2027,
    "fileName": "knee-pad.svg"
  },
  "icon_2028": {
    "idx": 2028,
    "fileName": "kneeling.svg"
  },
  "icon_2029": {
    "idx": 2029,
    "fileName": "knife-fork.svg"
  },
  "icon_2030": {
    "idx": 2030,
    "fileName": "knife-thrust.svg"
  },
  "icon_2031": {
    "idx": 2031,
    "fileName": "knight-banner.svg"
  },
  "icon_2032": {
    "idx": 2032,
    "fileName": "knocked-out-stars.svg"
  },
  "icon_2033": {
    "idx": 2033,
    "fileName": "knockout.svg"
  },
  "icon_2034": {
    "idx": 2034,
    "fileName": "knot.svg"
  },
  "icon_2035": {
    "idx": 2035,
    "fileName": "koala.svg"
  },
  "icon_2036": {
    "idx": 2036,
    "fileName": "koholint-egg.svg"
  },
  "icon_2037": {
    "idx": 2037,
    "fileName": "kraken-tentacle.svg"
  },
  "icon_2038": {
    "idx": 2038,
    "fileName": "kusarigama.svg"
  },
  "icon_2039": {
    "idx": 2039,
    "fileName": "l-brick.svg"
  },
  "icon_2040": {
    "idx": 2040,
    "fileName": "lab-coat.svg"
  },
  "icon_2041": {
    "idx": 2041,
    "fileName": "labrador-head.svg"
  },
  "icon_2042": {
    "idx": 2042,
    "fileName": "ladder.svg"
  },
  "icon_2043": {
    "idx": 2043,
    "fileName": "ladders-platform.svg"
  },
  "icon_2044": {
    "idx": 2044,
    "fileName": "ladle.svg"
  },
  "icon_2045": {
    "idx": 2045,
    "fileName": "ladybug.svg"
  },
  "icon_2046": {
    "idx": 2046,
    "fileName": "lamellar.svg"
  },
  "icon_2047": {
    "idx": 2047,
    "fileName": "lamprey-mouth.svg"
  },
  "icon_2048": {
    "idx": 2048,
    "fileName": "land-mine.svg"
  },
  "icon_2049": {
    "idx": 2049,
    "fileName": "lantern-flame.svg"
  },
  "icon_2050": {
    "idx": 2050,
    "fileName": "lantern.svg"
  },
  "icon_2051": {
    "idx": 2051,
    "fileName": "laptop.svg"
  },
  "icon_2052": {
    "idx": 2052,
    "fileName": "large-dress.svg"
  },
  "icon_2053": {
    "idx": 2053,
    "fileName": "large-paint-brush.svg"
  },
  "icon_2054": {
    "idx": 2054,
    "fileName": "large-wound.svg"
  },
  "icon_2055": {
    "idx": 2055,
    "fileName": "laser-blast.svg"
  },
  "icon_2056": {
    "idx": 2056,
    "fileName": "laser-burst.svg"
  },
  "icon_2057": {
    "idx": 2057,
    "fileName": "laser-gun.svg"
  },
  "icon_2058": {
    "idx": 2058,
    "fileName": "laser-precision.svg"
  },
  "icon_2059": {
    "idx": 2059,
    "fileName": "laser-sparks.svg"
  },
  "icon_2060": {
    "idx": 2060,
    "fileName": "laser-turret.svg"
  },
  "icon_2061": {
    "idx": 2061,
    "fileName": "laser-warning.svg"
  },
  "icon_2062": {
    "idx": 2062,
    "fileName": "laserburn.svg"
  },
  "icon_2063": {
    "idx": 2063,
    "fileName": "lasso.svg"
  },
  "icon_2064": {
    "idx": 2064,
    "fileName": "latvia.svg"
  },
  "icon_2065": {
    "idx": 2065,
    "fileName": "laurel-crown.svg"
  },
  "icon_2066": {
    "idx": 2066,
    "fileName": "laurels-trophy.svg"
  },
  "icon_2067": {
    "idx": 2067,
    "fileName": "laurels.svg"
  },
  "icon_2068": {
    "idx": 2068,
    "fileName": "lava.svg"
  },
  "icon_2069": {
    "idx": 2069,
    "fileName": "law-star.svg"
  },
  "icon_2070": {
    "idx": 2070,
    "fileName": "layered-armor.svg"
  },
  "icon_2071": {
    "idx": 2071,
    "fileName": "lead-pipe.svg"
  },
  "icon_2072": {
    "idx": 2072,
    "fileName": "leaf-skeleton.svg"
  },
  "icon_2073": {
    "idx": 2073,
    "fileName": "leaf-swirl.svg"
  },
  "icon_2074": {
    "idx": 2074,
    "fileName": "leak.svg"
  },
  "icon_2075": {
    "idx": 2075,
    "fileName": "leaky-skull.svg"
  },
  "icon_2076": {
    "idx": 2076,
    "fileName": "leapfrog.svg"
  },
  "icon_2077": {
    "idx": 2077,
    "fileName": "leather-armor.svg"
  },
  "icon_2078": {
    "idx": 2078,
    "fileName": "leather-boot.svg"
  },
  "icon_2079": {
    "idx": 2079,
    "fileName": "leather-vest.svg"
  },
  "icon_2080": {
    "idx": 2080,
    "fileName": "led.svg"
  },
  "icon_2081": {
    "idx": 2081,
    "fileName": "lee-enfield.svg"
  },
  "icon_2082": {
    "idx": 2082,
    "fileName": "leeching-worm.svg"
  },
  "icon_2083": {
    "idx": 2083,
    "fileName": "leek.svg"
  },
  "icon_2084": {
    "idx": 2084,
    "fileName": "leg-armor.svg"
  },
  "icon_2085": {
    "idx": 2085,
    "fileName": "leg.svg"
  },
  "icon_2086": {
    "idx": 2086,
    "fileName": "lemon.svg"
  },
  "icon_2087": {
    "idx": 2087,
    "fileName": "leo.svg"
  },
  "icon_2088": {
    "idx": 2088,
    "fileName": "letter-bomb.svg"
  },
  "icon_2089": {
    "idx": 2089,
    "fileName": "level-crossing.svg"
  },
  "icon_2090": {
    "idx": 2090,
    "fileName": "level-end-flag.svg"
  },
  "icon_2091": {
    "idx": 2091,
    "fileName": "level-four-advanced.svg"
  },
  "icon_2092": {
    "idx": 2092,
    "fileName": "level-four.svg"
  },
  "icon_2093": {
    "idx": 2093,
    "fileName": "level-three-advanced.svg"
  },
  "icon_2094": {
    "idx": 2094,
    "fileName": "level-three.svg"
  },
  "icon_2095": {
    "idx": 2095,
    "fileName": "level-two-advanced.svg"
  },
  "icon_2096": {
    "idx": 2096,
    "fileName": "level-two.svg"
  },
  "icon_2097": {
    "idx": 2097,
    "fileName": "lever.svg"
  },
  "icon_2098": {
    "idx": 2098,
    "fileName": "liar.svg"
  },
  "icon_2099": {
    "idx": 2099,
    "fileName": "liberty-wing.svg"
  },
  "icon_2100": {
    "idx": 2100,
    "fileName": "libra.svg"
  },
  "icon_2101": {
    "idx": 2101,
    "fileName": "libya.svg"
  },
  "icon_2102": {
    "idx": 2102,
    "fileName": "life-bar.svg"
  },
  "icon_2103": {
    "idx": 2103,
    "fileName": "life-buoy.svg"
  },
  "icon_2104": {
    "idx": 2104,
    "fileName": "life-in-the-balance.svg"
  },
  "icon_2105": {
    "idx": 2105,
    "fileName": "life-jacket.svg"
  },
  "icon_2106": {
    "idx": 2106,
    "fileName": "life-support.svg"
  },
  "icon_2107": {
    "idx": 2107,
    "fileName": "life-tap.svg"
  },
  "icon_2108": {
    "idx": 2108,
    "fileName": "lift.svg"
  },
  "icon_2109": {
    "idx": 2109,
    "fileName": "light-backpack.svg"
  },
  "icon_2110": {
    "idx": 2110,
    "fileName": "light-bulb.svg"
  },
  "icon_2111": {
    "idx": 2111,
    "fileName": "light-fighter.svg"
  },
  "icon_2112": {
    "idx": 2112,
    "fileName": "light-helm.svg"
  },
  "icon_2113": {
    "idx": 2113,
    "fileName": "light-projector.svg"
  },
  "icon_2114": {
    "idx": 2114,
    "fileName": "light-sabers.svg"
  },
  "icon_2115": {
    "idx": 2115,
    "fileName": "light-thorny-triskelion.svg"
  },
  "icon_2116": {
    "idx": 2116,
    "fileName": "lighter.svg"
  },
  "icon_2117": {
    "idx": 2117,
    "fileName": "lighthouse.svg"
  },
  "icon_2118": {
    "idx": 2118,
    "fileName": "lightning-arc.svg"
  },
  "icon_2119": {
    "idx": 2119,
    "fileName": "lightning-bow.svg"
  },
  "icon_2120": {
    "idx": 2120,
    "fileName": "lightning-branches.svg"
  },
  "icon_2121": {
    "idx": 2121,
    "fileName": "lightning-dissipation.svg"
  },
  "icon_2122": {
    "idx": 2122,
    "fileName": "lightning-dome.svg"
  },
  "icon_2123": {
    "idx": 2123,
    "fileName": "lightning-electron.svg"
  },
  "icon_2124": {
    "idx": 2124,
    "fileName": "lightning-flame.svg"
  },
  "icon_2125": {
    "idx": 2125,
    "fileName": "lightning-frequency.svg"
  },
  "icon_2126": {
    "idx": 2126,
    "fileName": "lightning-helix.svg"
  },
  "icon_2127": {
    "idx": 2127,
    "fileName": "lightning-mask.svg"
  },
  "icon_2128": {
    "idx": 2128,
    "fileName": "lightning-saber.svg"
  },
  "icon_2129": {
    "idx": 2129,
    "fileName": "lightning-shadow.svg"
  },
  "icon_2130": {
    "idx": 2130,
    "fileName": "lightning-shield.svg"
  },
  "icon_2131": {
    "idx": 2131,
    "fileName": "lightning-shout.svg"
  },
  "icon_2132": {
    "idx": 2132,
    "fileName": "lightning-slashes.svg"
  },
  "icon_2133": {
    "idx": 2133,
    "fileName": "lightning-spanner.svg"
  },
  "icon_2134": {
    "idx": 2134,
    "fileName": "lightning-storm.svg"
  },
  "icon_2135": {
    "idx": 2135,
    "fileName": "lightning-tear.svg"
  },
  "icon_2136": {
    "idx": 2136,
    "fileName": "lightning-tree.svg"
  },
  "icon_2137": {
    "idx": 2137,
    "fileName": "lightning-trio.svg"
  },
  "icon_2138": {
    "idx": 2138,
    "fileName": "lily-pads.svg"
  },
  "icon_2139": {
    "idx": 2139,
    "fileName": "linden-leaf.svg"
  },
  "icon_2140": {
    "idx": 2140,
    "fileName": "linked-rings.svg"
  },
  "icon_2141": {
    "idx": 2141,
    "fileName": "lion.svg"
  },
  "icon_2142": {
    "idx": 2142,
    "fileName": "lips.svg"
  },
  "icon_2143": {
    "idx": 2143,
    "fileName": "lipstick.svg"
  },
  "icon_2144": {
    "idx": 2144,
    "fileName": "liquid-soap.svg"
  },
  "icon_2145": {
    "idx": 2145,
    "fileName": "lit-candelabra.svg"
  },
  "icon_2146": {
    "idx": 2146,
    "fileName": "liver.svg"
  },
  "icon_2147": {
    "idx": 2147,
    "fileName": "lizard-tongue.svg"
  },
  "icon_2148": {
    "idx": 2148,
    "fileName": "lizardman.svg"
  },
  "icon_2149": {
    "idx": 2149,
    "fileName": "load.svg"
  },
  "icon_2150": {
    "idx": 2150,
    "fileName": "lob-arrow.svg"
  },
  "icon_2151": {
    "idx": 2151,
    "fileName": "lock-picking.svg"
  },
  "icon_2152": {
    "idx": 2152,
    "fileName": "lock-spy.svg"
  },
  "icon_2153": {
    "idx": 2153,
    "fileName": "locked-box.svg"
  },
  "icon_2154": {
    "idx": 2154,
    "fileName": "locked-chest.svg"
  },
  "icon_2155": {
    "idx": 2155,
    "fileName": "locked-door.svg"
  },
  "icon_2156": {
    "idx": 2156,
    "fileName": "locked-fortress.svg"
  },
  "icon_2157": {
    "idx": 2157,
    "fileName": "locked-heart.svg"
  },
  "icon_2158": {
    "idx": 2158,
    "fileName": "lockers.svg"
  },
  "icon_2159": {
    "idx": 2159,
    "fileName": "lockpicks.svg"
  },
  "icon_2160": {
    "idx": 2160,
    "fileName": "log.svg"
  },
  "icon_2161": {
    "idx": 2161,
    "fileName": "logging.svg"
  },
  "icon_2162": {
    "idx": 2162,
    "fileName": "logic-gate-and.svg"
  },
  "icon_2163": {
    "idx": 2163,
    "fileName": "logic-gate-nand.svg"
  },
  "icon_2164": {
    "idx": 2164,
    "fileName": "logic-gate-nor.svg"
  },
  "icon_2165": {
    "idx": 2165,
    "fileName": "logic-gate-not.svg"
  },
  "icon_2166": {
    "idx": 2166,
    "fileName": "logic-gate-nxor.svg"
  },
  "icon_2167": {
    "idx": 2167,
    "fileName": "logic-gate-or.svg"
  },
  "icon_2168": {
    "idx": 2168,
    "fileName": "logic-gate-xor.svg"
  },
  "icon_2169": {
    "idx": 2169,
    "fileName": "loincloth.svg"
  },
  "icon_2170": {
    "idx": 2170,
    "fileName": "long-antennae-bug.svg"
  },
  "icon_2171": {
    "idx": 2171,
    "fileName": "long-legged-spider.svg"
  },
  "icon_2172": {
    "idx": 2172,
    "fileName": "look-at.svg"
  },
  "icon_2173": {
    "idx": 2173,
    "fileName": "lorc_bone-knife.svg"
  },
  "icon_2174": {
    "idx": 2174,
    "fileName": "lorc_book-cover.svg"
  },
  "icon_2175": {
    "idx": 2175,
    "fileName": "lorc_castle.svg"
  },
  "icon_2176": {
    "idx": 2176,
    "fileName": "lorc_cauldron.svg"
  },
  "icon_2177": {
    "idx": 2177,
    "fileName": "lorc_distraction.svg"
  },
  "icon_2178": {
    "idx": 2178,
    "fileName": "lorc_dragon-head.svg"
  },
  "icon_2179": {
    "idx": 2179,
    "fileName": "lorc_drill.svg"
  },
  "icon_2180": {
    "idx": 2180,
    "fileName": "lorc_fairy.svg"
  },
  "icon_2181": {
    "idx": 2181,
    "fileName": "lorc_horse-head.svg"
  },
  "icon_2182": {
    "idx": 2182,
    "fileName": "lorc_mouse.svg"
  },
  "icon_2183": {
    "idx": 2183,
    "fileName": "lorc_ram.svg"
  },
  "icon_2184": {
    "idx": 2184,
    "fileName": "lorc_rock.svg"
  },
  "icon_2185": {
    "idx": 2185,
    "fileName": "lorc_rss.svg"
  },
  "icon_2186": {
    "idx": 2186,
    "fileName": "lorc_scissors.svg"
  },
  "icon_2187": {
    "idx": 2187,
    "fileName": "lorc_screw.svg"
  },
  "icon_2188": {
    "idx": 2188,
    "fileName": "lorc_shuriken.svg"
  },
  "icon_2189": {
    "idx": 2189,
    "fileName": "lorc_sunrise.svg"
  },
  "icon_2190": {
    "idx": 2190,
    "fileName": "lorc_swallow.svg"
  },
  "icon_2191": {
    "idx": 2191,
    "fileName": "lorc_wolverine-claws.svg"
  },
  "icon_2192": {
    "idx": 2192,
    "fileName": "lorgnette.svg"
  },
  "icon_2193": {
    "idx": 2193,
    "fileName": "lost-limb.svg"
  },
  "icon_2194": {
    "idx": 2194,
    "fileName": "lotus-flower.svg"
  },
  "icon_2195": {
    "idx": 2195,
    "fileName": "lotus.svg"
  },
  "icon_2196": {
    "idx": 2196,
    "fileName": "louvre-pyramid.svg"
  },
  "icon_2197": {
    "idx": 2197,
    "fileName": "love-howl.svg"
  },
  "icon_2198": {
    "idx": 2198,
    "fileName": "love-injection.svg"
  },
  "icon_2199": {
    "idx": 2199,
    "fileName": "love-letter.svg"
  },
  "icon_2200": {
    "idx": 2200,
    "fileName": "love-mystery.svg"
  },
  "icon_2201": {
    "idx": 2201,
    "fileName": "love-song.svg"
  },
  "icon_2202": {
    "idx": 2202,
    "fileName": "lovers.svg"
  },
  "icon_2203": {
    "idx": 2203,
    "fileName": "low-tide.svg"
  },
  "icon_2204": {
    "idx": 2204,
    "fileName": "lucasms_trousers.svg"
  },
  "icon_2205": {
    "idx": 2205,
    "fileName": "luchador.svg"
  },
  "icon_2206": {
    "idx": 2206,
    "fileName": "lucifer-cannon.svg"
  },
  "icon_2207": {
    "idx": 2207,
    "fileName": "lucky-fisherman.svg"
  },
  "icon_2208": {
    "idx": 2208,
    "fileName": "luger.svg"
  },
  "icon_2209": {
    "idx": 2209,
    "fileName": "lunar-module.svg"
  },
  "icon_2210": {
    "idx": 2210,
    "fileName": "lunar-wand.svg"
  },
  "icon_2211": {
    "idx": 2211,
    "fileName": "lungs.svg"
  },
  "icon_2212": {
    "idx": 2212,
    "fileName": "lynx-head.svg"
  },
  "icon_2213": {
    "idx": 2213,
    "fileName": "lyre.svg"
  },
  "icon_2214": {
    "idx": 2214,
    "fileName": "m3-grease-gun.svg"
  },
  "icon_2215": {
    "idx": 2215,
    "fileName": "mac-10.svg"
  },
  "icon_2216": {
    "idx": 2216,
    "fileName": "mace-head.svg"
  },
  "icon_2217": {
    "idx": 2217,
    "fileName": "machete.svg"
  },
  "icon_2218": {
    "idx": 2218,
    "fileName": "machine-gun-magazine.svg"
  },
  "icon_2219": {
    "idx": 2219,
    "fileName": "machine-gun.svg"
  },
  "icon_2220": {
    "idx": 2220,
    "fileName": "mad-scientist.svg"
  },
  "icon_2221": {
    "idx": 2221,
    "fileName": "maggot.svg"
  },
  "icon_2222": {
    "idx": 2222,
    "fileName": "magic-axe.svg"
  },
  "icon_2223": {
    "idx": 2223,
    "fileName": "magic-broom.svg"
  },
  "icon_2224": {
    "idx": 2224,
    "fileName": "magic-gate.svg"
  },
  "icon_2225": {
    "idx": 2225,
    "fileName": "magic-hat.svg"
  },
  "icon_2226": {
    "idx": 2226,
    "fileName": "magic-lamp.svg"
  },
  "icon_2227": {
    "idx": 2227,
    "fileName": "magic-palm.svg"
  },
  "icon_2228": {
    "idx": 2228,
    "fileName": "magic-portal.svg"
  },
  "icon_2229": {
    "idx": 2229,
    "fileName": "magic-potion.svg"
  },
  "icon_2230": {
    "idx": 2230,
    "fileName": "magic-shield.svg"
  },
  "icon_2231": {
    "idx": 2231,
    "fileName": "magic-swirl.svg"
  },
  "icon_2232": {
    "idx": 2232,
    "fileName": "magic-trident.svg"
  },
  "icon_2233": {
    "idx": 2233,
    "fileName": "magick-trick.svg"
  },
  "icon_2234": {
    "idx": 2234,
    "fileName": "magnet-blast.svg"
  },
  "icon_2235": {
    "idx": 2235,
    "fileName": "magnet-man.svg"
  },
  "icon_2236": {
    "idx": 2236,
    "fileName": "magnet.svg"
  },
  "icon_2237": {
    "idx": 2237,
    "fileName": "magnifying-glass.svg"
  },
  "icon_2238": {
    "idx": 2238,
    "fileName": "mail-shirt.svg"
  },
  "icon_2239": {
    "idx": 2239,
    "fileName": "mailbox.svg"
  },
  "icon_2240": {
    "idx": 2240,
    "fileName": "mailed-fist.svg"
  },
  "icon_2241": {
    "idx": 2241,
    "fileName": "male.svg"
  },
  "icon_2242": {
    "idx": 2242,
    "fileName": "mammoth.svg"
  },
  "icon_2243": {
    "idx": 2243,
    "fileName": "manacles.svg"
  },
  "icon_2244": {
    "idx": 2244,
    "fileName": "mandrill-head.svg"
  },
  "icon_2245": {
    "idx": 2245,
    "fileName": "manta-ray.svg"
  },
  "icon_2246": {
    "idx": 2246,
    "fileName": "mantrap.svg"
  },
  "icon_2247": {
    "idx": 2247,
    "fileName": "manual-juicer.svg"
  },
  "icon_2248": {
    "idx": 2248,
    "fileName": "manual-meat-grinder.svg"
  },
  "icon_2249": {
    "idx": 2249,
    "fileName": "maple-leaf.svg"
  },
  "icon_2250": {
    "idx": 2250,
    "fileName": "maracas.svg"
  },
  "icon_2251": {
    "idx": 2251,
    "fileName": "marble-tap.svg"
  },
  "icon_2252": {
    "idx": 2252,
    "fileName": "marbles.svg"
  },
  "icon_2253": {
    "idx": 2253,
    "fileName": "marrow-drain.svg"
  },
  "icon_2254": {
    "idx": 2254,
    "fileName": "mars-curiosity.svg"
  },
  "icon_2255": {
    "idx": 2255,
    "fileName": "mars-pathfinder.svg"
  },
  "icon_2256": {
    "idx": 2256,
    "fileName": "marshmallows.svg"
  },
  "icon_2257": {
    "idx": 2257,
    "fileName": "martini.svg"
  },
  "icon_2258": {
    "idx": 2258,
    "fileName": "martyr-memorial.svg"
  },
  "icon_2259": {
    "idx": 2259,
    "fileName": "masked-spider.svg"
  },
  "icon_2260": {
    "idx": 2260,
    "fileName": "mass-driver.svg"
  },
  "icon_2261": {
    "idx": 2261,
    "fileName": "master-of-arms.svg"
  },
  "icon_2262": {
    "idx": 2262,
    "fileName": "match-head.svg"
  },
  "icon_2263": {
    "idx": 2263,
    "fileName": "match-tip.svg"
  },
  "icon_2264": {
    "idx": 2264,
    "fileName": "matchbox.svg"
  },
  "icon_2265": {
    "idx": 2265,
    "fileName": "materials-science.svg"
  },
  "icon_2266": {
    "idx": 2266,
    "fileName": "matryoshka-dolls.svg"
  },
  "icon_2267": {
    "idx": 2267,
    "fileName": "matter-states.svg"
  },
  "icon_2268": {
    "idx": 2268,
    "fileName": "mayan-pyramid.svg"
  },
  "icon_2269": {
    "idx": 2269,
    "fileName": "maze-cornea.svg"
  },
  "icon_2270": {
    "idx": 2270,
    "fileName": "maze-saw.svg"
  },
  "icon_2271": {
    "idx": 2271,
    "fileName": "maze.svg"
  },
  "icon_2272": {
    "idx": 2272,
    "fileName": "meal.svg"
  },
  "icon_2273": {
    "idx": 2273,
    "fileName": "meat-cleaver.svg"
  },
  "icon_2274": {
    "idx": 2274,
    "fileName": "meat-hook.svg"
  },
  "icon_2275": {
    "idx": 2275,
    "fileName": "meat.svg"
  },
  "icon_2276": {
    "idx": 2276,
    "fileName": "mecha-head.svg"
  },
  "icon_2277": {
    "idx": 2277,
    "fileName": "mecha-mask.svg"
  },
  "icon_2278": {
    "idx": 2278,
    "fileName": "mechanic-garage.svg"
  },
  "icon_2279": {
    "idx": 2279,
    "fileName": "mechanical-arm.svg"
  },
  "icon_2280": {
    "idx": 2280,
    "fileName": "medal-skull.svg"
  },
  "icon_2281": {
    "idx": 2281,
    "fileName": "medal.svg"
  },
  "icon_2282": {
    "idx": 2282,
    "fileName": "medallist.svg"
  },
  "icon_2283": {
    "idx": 2283,
    "fileName": "medical-drip.svg"
  },
  "icon_2284": {
    "idx": 2284,
    "fileName": "medical-pack-alt.svg"
  },
  "icon_2285": {
    "idx": 2285,
    "fileName": "medical-pack.svg"
  },
  "icon_2286": {
    "idx": 2286,
    "fileName": "medical-thermometer.svg"
  },
  "icon_2287": {
    "idx": 2287,
    "fileName": "medicine-pills.svg"
  },
  "icon_2288": {
    "idx": 2288,
    "fileName": "medicines.svg"
  },
  "icon_2289": {
    "idx": 2289,
    "fileName": "medieval-barracks.svg"
  },
  "icon_2290": {
    "idx": 2290,
    "fileName": "medieval-gate.svg"
  },
  "icon_2291": {
    "idx": 2291,
    "fileName": "medieval-pavilion.svg"
  },
  "icon_2292": {
    "idx": 2292,
    "fileName": "meditation.svg"
  },
  "icon_2293": {
    "idx": 2293,
    "fileName": "medusa-head.svg"
  },
  "icon_2294": {
    "idx": 2294,
    "fileName": "meeple-army.svg"
  },
  "icon_2295": {
    "idx": 2295,
    "fileName": "meeple-circle.svg"
  },
  "icon_2296": {
    "idx": 2296,
    "fileName": "meeple-group.svg"
  },
  "icon_2297": {
    "idx": 2297,
    "fileName": "meeple-king.svg"
  },
  "icon_2298": {
    "idx": 2298,
    "fileName": "meeple.svg"
  },
  "icon_2299": {
    "idx": 2299,
    "fileName": "megabot.svg"
  },
  "icon_2300": {
    "idx": 2300,
    "fileName": "megaphone.svg"
  },
  "icon_2301": {
    "idx": 2301,
    "fileName": "melting-ice-cube.svg"
  },
  "icon_2302": {
    "idx": 2302,
    "fileName": "melting-metal.svg"
  },
  "icon_2303": {
    "idx": 2303,
    "fileName": "menhir.svg"
  },
  "icon_2304": {
    "idx": 2304,
    "fileName": "mermaid.svg"
  },
  "icon_2305": {
    "idx": 2305,
    "fileName": "mesh-ball.svg"
  },
  "icon_2306": {
    "idx": 2306,
    "fileName": "mesh-network.svg"
  },
  "icon_2307": {
    "idx": 2307,
    "fileName": "metal-bar.svg"
  },
  "icon_2308": {
    "idx": 2308,
    "fileName": "metal-boot.svg"
  },
  "icon_2309": {
    "idx": 2309,
    "fileName": "metal-disc.svg"
  },
  "icon_2310": {
    "idx": 2310,
    "fileName": "metal-golem-head.svg"
  },
  "icon_2311": {
    "idx": 2311,
    "fileName": "metal-hand.svg"
  },
  "icon_2312": {
    "idx": 2312,
    "fileName": "metal-plate.svg"
  },
  "icon_2313": {
    "idx": 2313,
    "fileName": "metal-scales.svg"
  },
  "icon_2314": {
    "idx": 2314,
    "fileName": "metal-skirt.svg"
  },
  "icon_2315": {
    "idx": 2315,
    "fileName": "meteor-impact.svg"
  },
  "icon_2316": {
    "idx": 2316,
    "fileName": "metroid.svg"
  },
  "icon_2317": {
    "idx": 2317,
    "fileName": "metronome.svg"
  },
  "icon_2318": {
    "idx": 2318,
    "fileName": "mexico.svg"
  },
  "icon_2319": {
    "idx": 2319,
    "fileName": "microchip.svg"
  },
  "icon_2320": {
    "idx": 2320,
    "fileName": "microphone.svg"
  },
  "icon_2321": {
    "idx": 2321,
    "fileName": "microscope-lens.svg"
  },
  "icon_2322": {
    "idx": 2322,
    "fileName": "microscope.svg"
  },
  "icon_2323": {
    "idx": 2323,
    "fileName": "middle-arrow.svg"
  },
  "icon_2324": {
    "idx": 2324,
    "fileName": "midnight-claw.svg"
  },
  "icon_2325": {
    "idx": 2325,
    "fileName": "mighty-boosh.svg"
  },
  "icon_2326": {
    "idx": 2326,
    "fileName": "mighty-force.svg"
  },
  "icon_2327": {
    "idx": 2327,
    "fileName": "mighty-spanner.svg"
  },
  "icon_2328": {
    "idx": 2328,
    "fileName": "military-ambulance.svg"
  },
  "icon_2329": {
    "idx": 2329,
    "fileName": "military-fort.svg"
  },
  "icon_2330": {
    "idx": 2330,
    "fileName": "milk-carton.svg"
  },
  "icon_2331": {
    "idx": 2331,
    "fileName": "millenium-key.svg"
  },
  "icon_2332": {
    "idx": 2332,
    "fileName": "mimic-chest.svg"
  },
  "icon_2333": {
    "idx": 2333,
    "fileName": "mine-explosion.svg"
  },
  "icon_2334": {
    "idx": 2334,
    "fileName": "mine-truck.svg"
  },
  "icon_2335": {
    "idx": 2335,
    "fileName": "mine-wagon.svg"
  },
  "icon_2336": {
    "idx": 2336,
    "fileName": "minefield.svg"
  },
  "icon_2337": {
    "idx": 2337,
    "fileName": "miner.svg"
  },
  "icon_2338": {
    "idx": 2338,
    "fileName": "mineral-heart.svg"
  },
  "icon_2339": {
    "idx": 2339,
    "fileName": "mineral-pearls.svg"
  },
  "icon_2340": {
    "idx": 2340,
    "fileName": "minerals.svg"
  },
  "icon_2341": {
    "idx": 2341,
    "fileName": "mini-submarine.svg"
  },
  "icon_2342": {
    "idx": 2342,
    "fileName": "minigun.svg"
  },
  "icon_2343": {
    "idx": 2343,
    "fileName": "mining-helmet.svg"
  },
  "icon_2344": {
    "idx": 2344,
    "fileName": "mining.svg"
  },
  "icon_2345": {
    "idx": 2345,
    "fileName": "minions.svg"
  },
  "icon_2346": {
    "idx": 2346,
    "fileName": "minotaur.svg"
  },
  "icon_2347": {
    "idx": 2347,
    "fileName": "miracle-medecine.svg"
  },
  "icon_2348": {
    "idx": 2348,
    "fileName": "mirror-mirror.svg"
  },
  "icon_2349": {
    "idx": 2349,
    "fileName": "misdirection.svg"
  },
  "icon_2350": {
    "idx": 2350,
    "fileName": "missile-launcher.svg"
  },
  "icon_2351": {
    "idx": 2351,
    "fileName": "missile-mech.svg"
  },
  "icon_2352": {
    "idx": 2352,
    "fileName": "missile-pod.svg"
  },
  "icon_2353": {
    "idx": 2353,
    "fileName": "missile-swarm.svg"
  },
  "icon_2354": {
    "idx": 2354,
    "fileName": "mite-alt.svg"
  },
  "icon_2355": {
    "idx": 2355,
    "fileName": "mite.svg"
  },
  "icon_2356": {
    "idx": 2356,
    "fileName": "moai.svg"
  },
  "icon_2357": {
    "idx": 2357,
    "fileName": "modern-city.svg"
  },
  "icon_2358": {
    "idx": 2358,
    "fileName": "moebius-star.svg"
  },
  "icon_2359": {
    "idx": 2359,
    "fileName": "moebius-trefoil.svg"
  },
  "icon_2360": {
    "idx": 2360,
    "fileName": "moebius-triangle.svg"
  },
  "icon_2361": {
    "idx": 2361,
    "fileName": "moka-pot.svg"
  },
  "icon_2362": {
    "idx": 2362,
    "fileName": "moldova.svg"
  },
  "icon_2363": {
    "idx": 2363,
    "fileName": "molecule.svg"
  },
  "icon_2364": {
    "idx": 2364,
    "fileName": "molotov.svg"
  },
  "icon_2365": {
    "idx": 2365,
    "fileName": "mona-lisa.svg"
  },
  "icon_2366": {
    "idx": 2366,
    "fileName": "moncler-jacket.svg"
  },
  "icon_2367": {
    "idx": 2367,
    "fileName": "money-stack.svg"
  },
  "icon_2368": {
    "idx": 2368,
    "fileName": "mongolia.svg"
  },
  "icon_2369": {
    "idx": 2369,
    "fileName": "monk-face.svg"
  },
  "icon_2370": {
    "idx": 2370,
    "fileName": "monkey-wrench.svg"
  },
  "icon_2371": {
    "idx": 2371,
    "fileName": "monkey.svg"
  },
  "icon_2372": {
    "idx": 2372,
    "fileName": "mono-wheel-robot.svg"
  },
  "icon_2373": {
    "idx": 2373,
    "fileName": "monster-grasp.svg"
  },
  "icon_2374": {
    "idx": 2374,
    "fileName": "monstera-leaf.svg"
  },
  "icon_2375": {
    "idx": 2375,
    "fileName": "monument-valley.svg"
  },
  "icon_2376": {
    "idx": 2376,
    "fileName": "moon-bats.svg"
  },
  "icon_2377": {
    "idx": 2377,
    "fileName": "moon-claws.svg"
  },
  "icon_2378": {
    "idx": 2378,
    "fileName": "moon-orbit.svg"
  },
  "icon_2379": {
    "idx": 2379,
    "fileName": "moon.svg"
  },
  "icon_2380": {
    "idx": 2380,
    "fileName": "mooring-bollard.svg"
  },
  "icon_2381": {
    "idx": 2381,
    "fileName": "morbid-humour.svg"
  },
  "icon_2382": {
    "idx": 2382,
    "fileName": "morgue-feet.svg"
  },
  "icon_2383": {
    "idx": 2383,
    "fileName": "morph-ball.svg"
  },
  "icon_2384": {
    "idx": 2384,
    "fileName": "mortar.svg"
  },
  "icon_2385": {
    "idx": 2385,
    "fileName": "mountain-cave.svg"
  },
  "icon_2386": {
    "idx": 2386,
    "fileName": "mountain-road.svg"
  },
  "icon_2387": {
    "idx": 2387,
    "fileName": "mountains.svg"
  },
  "icon_2388": {
    "idx": 2388,
    "fileName": "mountaintop.svg"
  },
  "icon_2389": {
    "idx": 2389,
    "fileName": "mounted-knight.svg"
  },
  "icon_2390": {
    "idx": 2390,
    "fileName": "mouse.svg"
  },
  "icon_2391": {
    "idx": 2391,
    "fileName": "mouth-watering.svg"
  },
  "icon_2392": {
    "idx": 2392,
    "fileName": "move.svg"
  },
  "icon_2393": {
    "idx": 2393,
    "fileName": "movement-sensor.svg"
  },
  "icon_2394": {
    "idx": 2394,
    "fileName": "mp-40.svg"
  },
  "icon_2395": {
    "idx": 2395,
    "fileName": "mp5.svg"
  },
  "icon_2396": {
    "idx": 2396,
    "fileName": "mp5k.svg"
  },
  "icon_2397": {
    "idx": 2397,
    "fileName": "mucous-pillar.svg"
  },
  "icon_2398": {
    "idx": 2398,
    "fileName": "mug-shot.svg"
  },
  "icon_2399": {
    "idx": 2399,
    "fileName": "multiple-targets.svg"
  },
  "icon_2400": {
    "idx": 2400,
    "fileName": "mummy-head.svg"
  },
  "icon_2401": {
    "idx": 2401,
    "fileName": "muscle-fat.svg"
  },
  "icon_2402": {
    "idx": 2402,
    "fileName": "muscle-up.svg"
  },
  "icon_2403": {
    "idx": 2403,
    "fileName": "muscular-torso.svg"
  },
  "icon_2404": {
    "idx": 2404,
    "fileName": "mushroom-cloud.svg"
  },
  "icon_2405": {
    "idx": 2405,
    "fileName": "mushroom-gills.svg"
  },
  "icon_2406": {
    "idx": 2406,
    "fileName": "mushroom-house.svg"
  },
  "icon_2407": {
    "idx": 2407,
    "fileName": "mushroom.svg"
  },
  "icon_2408": {
    "idx": 2408,
    "fileName": "mushrooms-cluster.svg"
  },
  "icon_2409": {
    "idx": 2409,
    "fileName": "mushrooms.svg"
  },
  "icon_2410": {
    "idx": 2410,
    "fileName": "music-spell.svg"
  },
  "icon_2411": {
    "idx": 2411,
    "fileName": "musical-keyboard.svg"
  },
  "icon_2412": {
    "idx": 2412,
    "fileName": "musical-notes.svg"
  },
  "icon_2413": {
    "idx": 2413,
    "fileName": "musical-score.svg"
  },
  "icon_2414": {
    "idx": 2414,
    "fileName": "musket.svg"
  },
  "icon_2415": {
    "idx": 2415,
    "fileName": "mussel.svg"
  },
  "icon_2416": {
    "idx": 2416,
    "fileName": "mustache.svg"
  },
  "icon_2417": {
    "idx": 2417,
    "fileName": "mute.svg"
  },
  "icon_2418": {
    "idx": 2418,
    "fileName": "nachos.svg"
  },
  "icon_2419": {
    "idx": 2419,
    "fileName": "nailed-foot.svg"
  },
  "icon_2420": {
    "idx": 2420,
    "fileName": "nailed-head.svg"
  },
  "icon_2421": {
    "idx": 2421,
    "fileName": "nails.svg"
  },
  "icon_2422": {
    "idx": 2422,
    "fileName": "nano-bot.svg"
  },
  "icon_2423": {
    "idx": 2423,
    "fileName": "nautilus-shell.svg"
  },
  "icon_2424": {
    "idx": 2424,
    "fileName": "neck-bite.svg"
  },
  "icon_2425": {
    "idx": 2425,
    "fileName": "necklace-display.svg"
  },
  "icon_2426": {
    "idx": 2426,
    "fileName": "necklace.svg"
  },
  "icon_2427": {
    "idx": 2427,
    "fileName": "needle-drill.svg"
  },
  "icon_2428": {
    "idx": 2428,
    "fileName": "needle-jaws.svg"
  },
  "icon_2429": {
    "idx": 2429,
    "fileName": "nefertiti.svg"
  },
  "icon_2430": {
    "idx": 2430,
    "fileName": "nest-birds.svg"
  },
  "icon_2431": {
    "idx": 2431,
    "fileName": "nest-eggs.svg"
  },
  "icon_2432": {
    "idx": 2432,
    "fileName": "nested-eclipses.svg"
  },
  "icon_2433": {
    "idx": 2433,
    "fileName": "nested-hearts.svg"
  },
  "icon_2434": {
    "idx": 2434,
    "fileName": "nested-hexagons.svg"
  },
  "icon_2435": {
    "idx": 2435,
    "fileName": "network-bars.svg"
  },
  "icon_2436": {
    "idx": 2436,
    "fileName": "new-born.svg"
  },
  "icon_2437": {
    "idx": 2437,
    "fileName": "new-shoot.svg"
  },
  "icon_2438": {
    "idx": 2438,
    "fileName": "newspaper.svg"
  },
  "icon_2439": {
    "idx": 2439,
    "fileName": "next-button.svg"
  },
  "icon_2440": {
    "idx": 2440,
    "fileName": "nigeria.svg"
  },
  "icon_2441": {
    "idx": 2441,
    "fileName": "night-sky.svg"
  },
  "icon_2442": {
    "idx": 2442,
    "fileName": "night-sleep.svg"
  },
  "icon_2443": {
    "idx": 2443,
    "fileName": "night-vision.svg"
  },
  "icon_2444": {
    "idx": 2444,
    "fileName": "ninja-armor.svg"
  },
  "icon_2445": {
    "idx": 2445,
    "fileName": "ninja-head.svg"
  },
  "icon_2446": {
    "idx": 2446,
    "fileName": "ninja-heroic-stance.svg"
  },
  "icon_2447": {
    "idx": 2447,
    "fileName": "ninja-mask.svg"
  },
  "icon_2448": {
    "idx": 2448,
    "fileName": "ninja-star.svg"
  },
  "icon_2449": {
    "idx": 2449,
    "fileName": "ninja-velociraptor.svg"
  },
  "icon_2450": {
    "idx": 2450,
    "fileName": "nodular.svg"
  },
  "icon_2451": {
    "idx": 2451,
    "fileName": "noodle-ball.svg"
  },
  "icon_2452": {
    "idx": 2452,
    "fileName": "noodles.svg"
  },
  "icon_2453": {
    "idx": 2453,
    "fileName": "north-star-shuriken.svg"
  },
  "icon_2454": {
    "idx": 2454,
    "fileName": "nose-front.svg"
  },
  "icon_2455": {
    "idx": 2455,
    "fileName": "nose-side.svg"
  },
  "icon_2456": {
    "idx": 2456,
    "fileName": "nothing-to-say.svg"
  },
  "icon_2457": {
    "idx": 2457,
    "fileName": "nuclear-bomb.svg"
  },
  "icon_2458": {
    "idx": 2458,
    "fileName": "nuclear-plant.svg"
  },
  "icon_2459": {
    "idx": 2459,
    "fileName": "nuclear-waste.svg"
  },
  "icon_2460": {
    "idx": 2460,
    "fileName": "nuclear.svg"
  },
  "icon_2461": {
    "idx": 2461,
    "fileName": "nun-face.svg"
  },
  "icon_2462": {
    "idx": 2462,
    "fileName": "nunchaku.svg"
  },
  "icon_2463": {
    "idx": 2463,
    "fileName": "nurse-female.svg"
  },
  "icon_2464": {
    "idx": 2464,
    "fileName": "nurse-male.svg"
  },
  "icon_2465": {
    "idx": 2465,
    "fileName": "o-brick.svg"
  },
  "icon_2466": {
    "idx": 2466,
    "fileName": "oak-leaf.svg"
  },
  "icon_2467": {
    "idx": 2467,
    "fileName": "oak.svg"
  },
  "icon_2468": {
    "idx": 2468,
    "fileName": "oasis.svg"
  },
  "icon_2469": {
    "idx": 2469,
    "fileName": "oat.svg"
  },
  "icon_2470": {
    "idx": 2470,
    "fileName": "obelisk.svg"
  },
  "icon_2471": {
    "idx": 2471,
    "fileName": "observatory.svg"
  },
  "icon_2472": {
    "idx": 2472,
    "fileName": "ocarina.svg"
  },
  "icon_2473": {
    "idx": 2473,
    "fileName": "occupy.svg"
  },
  "icon_2474": {
    "idx": 2474,
    "fileName": "octogonal-eye.svg"
  },
  "icon_2475": {
    "idx": 2475,
    "fileName": "octoman.svg"
  },
  "icon_2476": {
    "idx": 2476,
    "fileName": "octopus.svg"
  },
  "icon_2477": {
    "idx": 2477,
    "fileName": "oden.svg"
  },
  "icon_2478": {
    "idx": 2478,
    "fileName": "office-chair.svg"
  },
  "icon_2479": {
    "idx": 2479,
    "fileName": "offshore-platform.svg"
  },
  "icon_2480": {
    "idx": 2480,
    "fileName": "ogre.svg"
  },
  "icon_2481": {
    "idx": 2481,
    "fileName": "oil-drum.svg"
  },
  "icon_2482": {
    "idx": 2482,
    "fileName": "oil-pump.svg"
  },
  "icon_2483": {
    "idx": 2483,
    "fileName": "oil-rig.svg"
  },
  "icon_2484": {
    "idx": 2484,
    "fileName": "oily-spiral.svg"
  },
  "icon_2485": {
    "idx": 2485,
    "fileName": "old-king.svg"
  },
  "icon_2486": {
    "idx": 2486,
    "fileName": "old-lantern.svg"
  },
  "icon_2487": {
    "idx": 2487,
    "fileName": "old-microphone.svg"
  },
  "icon_2488": {
    "idx": 2488,
    "fileName": "old-wagon.svg"
  },
  "icon_2489": {
    "idx": 2489,
    "fileName": "olive.svg"
  },
  "icon_2490": {
    "idx": 2490,
    "fileName": "omega.svg"
  },
  "icon_2491": {
    "idx": 2491,
    "fileName": "on-sight.svg"
  },
  "icon_2492": {
    "idx": 2492,
    "fileName": "on-target.svg"
  },
  "icon_2493": {
    "idx": 2493,
    "fileName": "one-eyed.svg"
  },
  "icon_2494": {
    "idx": 2494,
    "fileName": "oni.svg"
  },
  "icon_2495": {
    "idx": 2495,
    "fileName": "onigori.svg"
  },
  "icon_2496": {
    "idx": 2496,
    "fileName": "open-book.svg"
  },
  "icon_2497": {
    "idx": 2497,
    "fileName": "open-chest.svg"
  },
  "icon_2498": {
    "idx": 2498,
    "fileName": "open-folder.svg"
  },
  "icon_2499": {
    "idx": 2499,
    "fileName": "open-gate.svg"
  },
  "icon_2500": {
    "idx": 2500,
    "fileName": "open-palm.svg"
  },
  "icon_2501": {
    "idx": 2501,
    "fileName": "open-treasure-chest.svg"
  },
  "icon_2502": {
    "idx": 2502,
    "fileName": "open-wound.svg"
  },
  "icon_2503": {
    "idx": 2503,
    "fileName": "opened-food-can.svg"
  },
  "icon_2504": {
    "idx": 2504,
    "fileName": "opening-shell.svg"
  },
  "icon_2505": {
    "idx": 2505,
    "fileName": "ophiuchus.svg"
  },
  "icon_2506": {
    "idx": 2506,
    "fileName": "oppidum.svg"
  },
  "icon_2507": {
    "idx": 2507,
    "fileName": "opposite-hearts.svg"
  },
  "icon_2508": {
    "idx": 2508,
    "fileName": "oppression.svg"
  },
  "icon_2509": {
    "idx": 2509,
    "fileName": "orange-slice.svg"
  },
  "icon_2510": {
    "idx": 2510,
    "fileName": "orange.svg"
  },
  "icon_2511": {
    "idx": 2511,
    "fileName": "orb-direction.svg"
  },
  "icon_2512": {
    "idx": 2512,
    "fileName": "orb-wand.svg"
  },
  "icon_2513": {
    "idx": 2513,
    "fileName": "orbit.svg"
  },
  "icon_2514": {
    "idx": 2514,
    "fileName": "orbital-rays.svg"
  },
  "icon_2515": {
    "idx": 2515,
    "fileName": "orbital.svg"
  },
  "icon_2516": {
    "idx": 2516,
    "fileName": "orc-head.svg"
  },
  "icon_2517": {
    "idx": 2517,
    "fileName": "ore.svg"
  },
  "icon_2518": {
    "idx": 2518,
    "fileName": "organigram.svg"
  },
  "icon_2519": {
    "idx": 2519,
    "fileName": "ostrich.svg"
  },
  "icon_2520": {
    "idx": 2520,
    "fileName": "ouroboros.svg"
  },
  "icon_2521": {
    "idx": 2521,
    "fileName": "outback-hat.svg"
  },
  "icon_2522": {
    "idx": 2522,
    "fileName": "over-infinity.svg"
  },
  "icon_2523": {
    "idx": 2523,
    "fileName": "overdose.svg"
  },
  "icon_2524": {
    "idx": 2524,
    "fileName": "overdrive.svg"
  },
  "icon_2525": {
    "idx": 2525,
    "fileName": "overhead.svg"
  },
  "icon_2526": {
    "idx": 2526,
    "fileName": "overkill.svg"
  },
  "icon_2527": {
    "idx": 2527,
    "fileName": "overlord-helm.svg"
  },
  "icon_2528": {
    "idx": 2528,
    "fileName": "overmind.svg"
  },
  "icon_2529": {
    "idx": 2529,
    "fileName": "owl.svg"
  },
  "icon_2530": {
    "idx": 2530,
    "fileName": "oyster-pearl.svg"
  },
  "icon_2531": {
    "idx": 2531,
    "fileName": "oyster.svg"
  },
  "icon_2532": {
    "idx": 2532,
    "fileName": "p90.svg"
  },
  "icon_2533": {
    "idx": 2533,
    "fileName": "packed-planks.svg"
  },
  "icon_2534": {
    "idx": 2534,
    "fileName": "paddle-steamer.svg"
  },
  "icon_2535": {
    "idx": 2535,
    "fileName": "paddles.svg"
  },
  "icon_2536": {
    "idx": 2536,
    "fileName": "padlock-open.svg"
  },
  "icon_2537": {
    "idx": 2537,
    "fileName": "padlock.svg"
  },
  "icon_2538": {
    "idx": 2538,
    "fileName": "pagoda.svg"
  },
  "icon_2539": {
    "idx": 2539,
    "fileName": "paint-brush.svg"
  },
  "icon_2540": {
    "idx": 2540,
    "fileName": "paint-bucket.svg"
  },
  "icon_2541": {
    "idx": 2541,
    "fileName": "paint-roller.svg"
  },
  "icon_2542": {
    "idx": 2542,
    "fileName": "painted-pottery.svg"
  },
  "icon_2543": {
    "idx": 2543,
    "fileName": "palette.svg"
  },
  "icon_2544": {
    "idx": 2544,
    "fileName": "palisade.svg"
  },
  "icon_2545": {
    "idx": 2545,
    "fileName": "palm-tree.svg"
  },
  "icon_2546": {
    "idx": 2546,
    "fileName": "palm.svg"
  },
  "icon_2547": {
    "idx": 2547,
    "fileName": "pan-flute.svg"
  },
  "icon_2548": {
    "idx": 2548,
    "fileName": "panda.svg"
  },
  "icon_2549": {
    "idx": 2549,
    "fileName": "panzerfaust.svg"
  },
  "icon_2550": {
    "idx": 2550,
    "fileName": "paper-arrow.svg"
  },
  "icon_2551": {
    "idx": 2551,
    "fileName": "paper-boat.svg"
  },
  "icon_2552": {
    "idx": 2552,
    "fileName": "paper-bomb.svg"
  },
  "icon_2553": {
    "idx": 2553,
    "fileName": "paper-clip.svg"
  },
  "icon_2554": {
    "idx": 2554,
    "fileName": "paper-lantern.svg"
  },
  "icon_2555": {
    "idx": 2555,
    "fileName": "paper-plane.svg"
  },
  "icon_2556": {
    "idx": 2556,
    "fileName": "paper-tray.svg"
  },
  "icon_2557": {
    "idx": 2557,
    "fileName": "paper-windmill.svg"
  },
  "icon_2558": {
    "idx": 2558,
    "fileName": "paper.svg"
  },
  "icon_2559": {
    "idx": 2559,
    "fileName": "papers.svg"
  },
  "icon_2560": {
    "idx": 2560,
    "fileName": "papyrus.svg"
  },
  "icon_2561": {
    "idx": 2561,
    "fileName": "parachute.svg"
  },
  "icon_2562": {
    "idx": 2562,
    "fileName": "paraguay.svg"
  },
  "icon_2563": {
    "idx": 2563,
    "fileName": "paranoia.svg"
  },
  "icon_2564": {
    "idx": 2564,
    "fileName": "parasaurolophus.svg"
  },
  "icon_2565": {
    "idx": 2565,
    "fileName": "park-bench.svg"
  },
  "icon_2566": {
    "idx": 2566,
    "fileName": "parmecia.svg"
  },
  "icon_2567": {
    "idx": 2567,
    "fileName": "parrot-head.svg"
  },
  "icon_2568": {
    "idx": 2568,
    "fileName": "party-flags.svg"
  },
  "icon_2569": {
    "idx": 2569,
    "fileName": "party-hat.svg"
  },
  "icon_2570": {
    "idx": 2570,
    "fileName": "party-popper.svg"
  },
  "icon_2571": {
    "idx": 2571,
    "fileName": "passport.svg"
  },
  "icon_2572": {
    "idx": 2572,
    "fileName": "path-distance.svg"
  },
  "icon_2573": {
    "idx": 2573,
    "fileName": "path-tile.svg"
  },
  "icon_2574": {
    "idx": 2574,
    "fileName": "pauldrons.svg"
  },
  "icon_2575": {
    "idx": 2575,
    "fileName": "pause-button.svg"
  },
  "icon_2576": {
    "idx": 2576,
    "fileName": "paw-front.svg"
  },
  "icon_2577": {
    "idx": 2577,
    "fileName": "paw-heart.svg"
  },
  "icon_2578": {
    "idx": 2578,
    "fileName": "paw-print.svg"
  },
  "icon_2579": {
    "idx": 2579,
    "fileName": "paw.svg"
  },
  "icon_2580": {
    "idx": 2580,
    "fileName": "pawn.svg"
  },
  "icon_2581": {
    "idx": 2581,
    "fileName": "pay-money.svg"
  },
  "icon_2582": {
    "idx": 2582,
    "fileName": "pc.svg"
  },
  "icon_2583": {
    "idx": 2583,
    "fileName": "peace-dove.svg"
  },
  "icon_2584": {
    "idx": 2584,
    "fileName": "peach.svg"
  },
  "icon_2585": {
    "idx": 2585,
    "fileName": "peaks.svg"
  },
  "icon_2586": {
    "idx": 2586,
    "fileName": "peanut.svg"
  },
  "icon_2587": {
    "idx": 2587,
    "fileName": "pear.svg"
  },
  "icon_2588": {
    "idx": 2588,
    "fileName": "pearl-earring.svg"
  },
  "icon_2589": {
    "idx": 2589,
    "fileName": "pearl-necklace.svg"
  },
  "icon_2590": {
    "idx": 2590,
    "fileName": "peas.svg"
  },
  "icon_2591": {
    "idx": 2591,
    "fileName": "pegasus.svg"
  },
  "icon_2592": {
    "idx": 2592,
    "fileName": "pelvis-bone.svg"
  },
  "icon_2593": {
    "idx": 2593,
    "fileName": "pencil-brush.svg"
  },
  "icon_2594": {
    "idx": 2594,
    "fileName": "pencil-ruler.svg"
  },
  "icon_2595": {
    "idx": 2595,
    "fileName": "pencil.svg"
  },
  "icon_2596": {
    "idx": 2596,
    "fileName": "pendant-key.svg"
  },
  "icon_2597": {
    "idx": 2597,
    "fileName": "pendulum-swing.svg"
  },
  "icon_2598": {
    "idx": 2598,
    "fileName": "penguin.svg"
  },
  "icon_2599": {
    "idx": 2599,
    "fileName": "pentacle.svg"
  },
  "icon_2600": {
    "idx": 2600,
    "fileName": "pentagram-rose.svg"
  },
  "icon_2601": {
    "idx": 2601,
    "fileName": "pentarrows-tornado.svg"
  },
  "icon_2602": {
    "idx": 2602,
    "fileName": "perfume-bottle.svg"
  },
  "icon_2603": {
    "idx": 2603,
    "fileName": "periscope.svg"
  },
  "icon_2604": {
    "idx": 2604,
    "fileName": "perpendicular-rings.svg"
  },
  "icon_2605": {
    "idx": 2605,
    "fileName": "person-in-bed.svg"
  },
  "icon_2606": {
    "idx": 2606,
    "fileName": "person.svg"
  },
  "icon_2607": {
    "idx": 2607,
    "fileName": "perspective-dice-five.svg"
  },
  "icon_2608": {
    "idx": 2608,
    "fileName": "perspective-dice-four.svg"
  },
  "icon_2609": {
    "idx": 2609,
    "fileName": "perspective-dice-one.svg"
  },
  "icon_2610": {
    "idx": 2610,
    "fileName": "perspective-dice-six-faces-five.svg"
  },
  "icon_2611": {
    "idx": 2611,
    "fileName": "perspective-dice-six-faces-four.svg"
  },
  "icon_2612": {
    "idx": 2612,
    "fileName": "perspective-dice-six-faces-one.svg"
  },
  "icon_2613": {
    "idx": 2613,
    "fileName": "perspective-dice-six-faces-random.svg"
  },
  "icon_2614": {
    "idx": 2614,
    "fileName": "perspective-dice-six-faces-six.svg"
  },
  "icon_2615": {
    "idx": 2615,
    "fileName": "perspective-dice-six-faces-three.svg"
  },
  "icon_2616": {
    "idx": 2616,
    "fileName": "perspective-dice-six-faces-two.svg"
  },
  "icon_2617": {
    "idx": 2617,
    "fileName": "perspective-dice-six.svg"
  },
  "icon_2618": {
    "idx": 2618,
    "fileName": "perspective-dice-three.svg"
  },
  "icon_2619": {
    "idx": 2619,
    "fileName": "perspective-dice-two.svg"
  },
  "icon_2620": {
    "idx": 2620,
    "fileName": "peru.svg"
  },
  "icon_2621": {
    "idx": 2621,
    "fileName": "pestle-mortar.svg"
  },
  "icon_2622": {
    "idx": 2622,
    "fileName": "pharoah.svg"
  },
  "icon_2623": {
    "idx": 2623,
    "fileName": "phone.svg"
  },
  "icon_2624": {
    "idx": 2624,
    "fileName": "photo-camera.svg"
  },
  "icon_2625": {
    "idx": 2625,
    "fileName": "phrygian-cap.svg"
  },
  "icon_2626": {
    "idx": 2626,
    "fileName": "piano-keys.svg"
  },
  "icon_2627": {
    "idx": 2627,
    "fileName": "pick-of-destiny.svg"
  },
  "icon_2628": {
    "idx": 2628,
    "fileName": "pickelhaube.svg"
  },
  "icon_2629": {
    "idx": 2629,
    "fileName": "pickle.svg"
  },
  "icon_2630": {
    "idx": 2630,
    "fileName": "pie-chart.svg"
  },
  "icon_2631": {
    "idx": 2631,
    "fileName": "pie-slice.svg"
  },
  "icon_2632": {
    "idx": 2632,
    "fileName": "piece-skull.svg"
  },
  "icon_2633": {
    "idx": 2633,
    "fileName": "pierced-body.svg"
  },
  "icon_2634": {
    "idx": 2634,
    "fileName": "pierced-heart.svg"
  },
  "icon_2635": {
    "idx": 2635,
    "fileName": "piercing-sword.svg"
  },
  "icon_2636": {
    "idx": 2636,
    "fileName": "pig-face.svg"
  },
  "icon_2637": {
    "idx": 2637,
    "fileName": "pig.svg"
  },
  "icon_2638": {
    "idx": 2638,
    "fileName": "piggy-bank.svg"
  },
  "icon_2639": {
    "idx": 2639,
    "fileName": "pikeman.svg"
  },
  "icon_2640": {
    "idx": 2640,
    "fileName": "pilgrim-hat.svg"
  },
  "icon_2641": {
    "idx": 2641,
    "fileName": "pill-drop.svg"
  },
  "icon_2642": {
    "idx": 2642,
    "fileName": "pill.svg"
  },
  "icon_2643": {
    "idx": 2643,
    "fileName": "pillow.svg"
  },
  "icon_2644": {
    "idx": 2644,
    "fileName": "pimiento.svg"
  },
  "icon_2645": {
    "idx": 2645,
    "fileName": "pin.svg"
  },
  "icon_2646": {
    "idx": 2646,
    "fileName": "pinata.svg"
  },
  "icon_2647": {
    "idx": 2647,
    "fileName": "pinball-flipper.svg"
  },
  "icon_2648": {
    "idx": 2648,
    "fileName": "pincers.svg"
  },
  "icon_2649": {
    "idx": 2649,
    "fileName": "pine-tree.svg"
  },
  "icon_2650": {
    "idx": 2650,
    "fileName": "pineapple.svg"
  },
  "icon_2651": {
    "idx": 2651,
    "fileName": "ping-pong-bat.svg"
  },
  "icon_2652": {
    "idx": 2652,
    "fileName": "pipes.svg"
  },
  "icon_2653": {
    "idx": 2653,
    "fileName": "piranha.svg"
  },
  "icon_2654": {
    "idx": 2654,
    "fileName": "pirate-cannon.svg"
  },
  "icon_2655": {
    "idx": 2655,
    "fileName": "pirate-captain.svg"
  },
  "icon_2656": {
    "idx": 2656,
    "fileName": "pirate-coat.svg"
  },
  "icon_2657": {
    "idx": 2657,
    "fileName": "pirate-flag.svg"
  },
  "icon_2658": {
    "idx": 2658,
    "fileName": "pirate-grave.svg"
  },
  "icon_2659": {
    "idx": 2659,
    "fileName": "pirate-hat.svg"
  },
  "icon_2660": {
    "idx": 2660,
    "fileName": "pirate-hook.svg"
  },
  "icon_2661": {
    "idx": 2661,
    "fileName": "pirate-skull.svg"
  },
  "icon_2662": {
    "idx": 2662,
    "fileName": "pisa-tower.svg"
  },
  "icon_2663": {
    "idx": 2663,
    "fileName": "pisces.svg"
  },
  "icon_2664": {
    "idx": 2664,
    "fileName": "pistol-gun.svg"
  },
  "icon_2665": {
    "idx": 2665,
    "fileName": "pitchfork.svg"
  },
  "icon_2666": {
    "idx": 2666,
    "fileName": "pizza-cutter.svg"
  },
  "icon_2667": {
    "idx": 2667,
    "fileName": "pizza-slice.svg"
  },
  "icon_2668": {
    "idx": 2668,
    "fileName": "plague-doctor-profile.svg"
  },
  "icon_2669": {
    "idx": 2669,
    "fileName": "plain-arrow.svg"
  },
  "icon_2670": {
    "idx": 2670,
    "fileName": "plain-circle.svg"
  },
  "icon_2671": {
    "idx": 2671,
    "fileName": "plain-dagger.svg"
  },
  "icon_2672": {
    "idx": 2672,
    "fileName": "plain-square.svg"
  },
  "icon_2673": {
    "idx": 2673,
    "fileName": "plane-pilot.svg"
  },
  "icon_2674": {
    "idx": 2674,
    "fileName": "plane-wing.svg"
  },
  "icon_2675": {
    "idx": 2675,
    "fileName": "planet-conquest.svg"
  },
  "icon_2676": {
    "idx": 2676,
    "fileName": "planet-core.svg"
  },
  "icon_2677": {
    "idx": 2677,
    "fileName": "planks.svg"
  },
  "icon_2678": {
    "idx": 2678,
    "fileName": "plant-roots.svg"
  },
  "icon_2679": {
    "idx": 2679,
    "fileName": "plant-seed.svg"
  },
  "icon_2680": {
    "idx": 2680,
    "fileName": "plant-watering.svg"
  },
  "icon_2681": {
    "idx": 2681,
    "fileName": "plants-and-animals.svg"
  },
  "icon_2682": {
    "idx": 2682,
    "fileName": "plasma-bolt.svg"
  },
  "icon_2683": {
    "idx": 2683,
    "fileName": "plastic-duck.svg"
  },
  "icon_2684": {
    "idx": 2684,
    "fileName": "plastron.svg"
  },
  "icon_2685": {
    "idx": 2685,
    "fileName": "plate-claw.svg"
  },
  "icon_2686": {
    "idx": 2686,
    "fileName": "platform.svg"
  },
  "icon_2687": {
    "idx": 2687,
    "fileName": "play-button.svg"
  },
  "icon_2688": {
    "idx": 2688,
    "fileName": "player-base.svg"
  },
  "icon_2689": {
    "idx": 2689,
    "fileName": "player-next.svg"
  },
  "icon_2690": {
    "idx": 2690,
    "fileName": "player-previous.svg"
  },
  "icon_2691": {
    "idx": 2691,
    "fileName": "player-time.svg"
  },
  "icon_2692": {
    "idx": 2692,
    "fileName": "plesiosaurus.svg"
  },
  "icon_2693": {
    "idx": 2693,
    "fileName": "plow.svg"
  },
  "icon_2694": {
    "idx": 2694,
    "fileName": "plug.svg"
  },
  "icon_2695": {
    "idx": 2695,
    "fileName": "plunger.svg"
  },
  "icon_2696": {
    "idx": 2696,
    "fileName": "pocket-bow.svg"
  },
  "icon_2697": {
    "idx": 2697,
    "fileName": "pocket-radio.svg"
  },
  "icon_2698": {
    "idx": 2698,
    "fileName": "pocket-watch.svg"
  },
  "icon_2699": {
    "idx": 2699,
    "fileName": "podium-second.svg"
  },
  "icon_2700": {
    "idx": 2700,
    "fileName": "podium-third.svg"
  },
  "icon_2701": {
    "idx": 2701,
    "fileName": "podium-winner.svg"
  },
  "icon_2702": {
    "idx": 2702,
    "fileName": "podium.svg"
  },
  "icon_2703": {
    "idx": 2703,
    "fileName": "pointing.svg"
  },
  "icon_2704": {
    "idx": 2704,
    "fileName": "pointy-hat.svg"
  },
  "icon_2705": {
    "idx": 2705,
    "fileName": "pointy-sword.svg"
  },
  "icon_2706": {
    "idx": 2706,
    "fileName": "poison-bottle.svg"
  },
  "icon_2707": {
    "idx": 2707,
    "fileName": "poison-cloud.svg"
  },
  "icon_2708": {
    "idx": 2708,
    "fileName": "poison-gas.svg"
  },
  "icon_2709": {
    "idx": 2709,
    "fileName": "poison.svg"
  },
  "icon_2710": {
    "idx": 2710,
    "fileName": "pokecog.svg"
  },
  "icon_2711": {
    "idx": 2711,
    "fileName": "poker-hand.svg"
  },
  "icon_2712": {
    "idx": 2712,
    "fileName": "poland.svg"
  },
  "icon_2713": {
    "idx": 2713,
    "fileName": "polar-bear.svg"
  },
  "icon_2714": {
    "idx": 2714,
    "fileName": "polar-star.svg"
  },
  "icon_2715": {
    "idx": 2715,
    "fileName": "police-badge.svg"
  },
  "icon_2716": {
    "idx": 2716,
    "fileName": "police-car.svg"
  },
  "icon_2717": {
    "idx": 2717,
    "fileName": "police-officer-head.svg"
  },
  "icon_2718": {
    "idx": 2718,
    "fileName": "police-target.svg"
  },
  "icon_2719": {
    "idx": 2719,
    "fileName": "pollen-dust.svg"
  },
  "icon_2720": {
    "idx": 2720,
    "fileName": "polo-shirt.svg"
  },
  "icon_2721": {
    "idx": 2721,
    "fileName": "poncho.svg"
  },
  "icon_2722": {
    "idx": 2722,
    "fileName": "pool-dive.svg"
  },
  "icon_2723": {
    "idx": 2723,
    "fileName": "pool-table-corner.svg"
  },
  "icon_2724": {
    "idx": 2724,
    "fileName": "pool-triangle.svg"
  },
  "icon_2725": {
    "idx": 2725,
    "fileName": "popcorn.svg"
  },
  "icon_2726": {
    "idx": 2726,
    "fileName": "pope-crown.svg"
  },
  "icon_2727": {
    "idx": 2727,
    "fileName": "poppy.svg"
  },
  "icon_2728": {
    "idx": 2728,
    "fileName": "porcelain-vase.svg"
  },
  "icon_2729": {
    "idx": 2729,
    "fileName": "porcupinefish.svg"
  },
  "icon_2730": {
    "idx": 2730,
    "fileName": "portal.svg"
  },
  "icon_2731": {
    "idx": 2731,
    "fileName": "portculis.svg"
  },
  "icon_2732": {
    "idx": 2732,
    "fileName": "portrait.svg"
  },
  "icon_2733": {
    "idx": 2733,
    "fileName": "portugal.svg"
  },
  "icon_2734": {
    "idx": 2734,
    "fileName": "position-marker.svg"
  },
  "icon_2735": {
    "idx": 2735,
    "fileName": "post-office.svg"
  },
  "icon_2736": {
    "idx": 2736,
    "fileName": "post-stamp.svg"
  },
  "icon_2737": {
    "idx": 2737,
    "fileName": "potato.svg"
  },
  "icon_2738": {
    "idx": 2738,
    "fileName": "potion-ball.svg"
  },
  "icon_2739": {
    "idx": 2739,
    "fileName": "potion-of-madness.svg"
  },
  "icon_2740": {
    "idx": 2740,
    "fileName": "pounce.svg"
  },
  "icon_2741": {
    "idx": 2741,
    "fileName": "pouring-chalice.svg"
  },
  "icon_2742": {
    "idx": 2742,
    "fileName": "pouring-pot.svg"
  },
  "icon_2743": {
    "idx": 2743,
    "fileName": "powder-bag.svg"
  },
  "icon_2744": {
    "idx": 2744,
    "fileName": "powder.svg"
  },
  "icon_2745": {
    "idx": 2745,
    "fileName": "power-button.svg"
  },
  "icon_2746": {
    "idx": 2746,
    "fileName": "power-generator.svg"
  },
  "icon_2747": {
    "idx": 2747,
    "fileName": "power-lightning.svg"
  },
  "icon_2748": {
    "idx": 2748,
    "fileName": "power-ring.svg"
  },
  "icon_2749": {
    "idx": 2749,
    "fileName": "prayer-beads.svg"
  },
  "icon_2750": {
    "idx": 2750,
    "fileName": "prayer.svg"
  },
  "icon_2751": {
    "idx": 2751,
    "fileName": "praying-mantis.svg"
  },
  "icon_2752": {
    "idx": 2752,
    "fileName": "present.svg"
  },
  "icon_2753": {
    "idx": 2753,
    "fileName": "pretty-fangs.svg"
  },
  "icon_2754": {
    "idx": 2754,
    "fileName": "pretzel.svg"
  },
  "icon_2755": {
    "idx": 2755,
    "fileName": "previous-button.svg"
  },
  "icon_2756": {
    "idx": 2756,
    "fileName": "price-tag.svg"
  },
  "icon_2757": {
    "idx": 2757,
    "fileName": "primitive-necklace.svg"
  },
  "icon_2758": {
    "idx": 2758,
    "fileName": "primitive-torch.svg"
  },
  "icon_2759": {
    "idx": 2759,
    "fileName": "prism.svg"
  },
  "icon_2760": {
    "idx": 2760,
    "fileName": "prisoner.svg"
  },
  "icon_2761": {
    "idx": 2761,
    "fileName": "private-first-class.svg"
  },
  "icon_2762": {
    "idx": 2762,
    "fileName": "private.svg"
  },
  "icon_2763": {
    "idx": 2763,
    "fileName": "processor.svg"
  },
  "icon_2764": {
    "idx": 2764,
    "fileName": "profit.svg"
  },
  "icon_2765": {
    "idx": 2765,
    "fileName": "progression.svg"
  },
  "icon_2766": {
    "idx": 2766,
    "fileName": "propeller-beanie.svg"
  },
  "icon_2767": {
    "idx": 2767,
    "fileName": "protection-glasses.svg"
  },
  "icon_2768": {
    "idx": 2768,
    "fileName": "pschent-double-crown.svg"
  },
  "icon_2769": {
    "idx": 2769,
    "fileName": "psychic-waves.svg"
  },
  "icon_2770": {
    "idx": 2770,
    "fileName": "pterodactylus.svg"
  },
  "icon_2771": {
    "idx": 2771,
    "fileName": "pteruges.svg"
  },
  "icon_2772": {
    "idx": 2772,
    "fileName": "public-speaker.svg"
  },
  "icon_2773": {
    "idx": 2773,
    "fileName": "pull.svg"
  },
  "icon_2774": {
    "idx": 2774,
    "fileName": "pulley-hook.svg"
  },
  "icon_2775": {
    "idx": 2775,
    "fileName": "pulse.svg"
  },
  "icon_2776": {
    "idx": 2776,
    "fileName": "pummeled.svg"
  },
  "icon_2777": {
    "idx": 2777,
    "fileName": "pumpkin-lantern.svg"
  },
  "icon_2778": {
    "idx": 2778,
    "fileName": "pumpkin-mask.svg"
  },
  "icon_2779": {
    "idx": 2779,
    "fileName": "pumpkin.svg"
  },
  "icon_2780": {
    "idx": 2780,
    "fileName": "punch-blast.svg"
  },
  "icon_2781": {
    "idx": 2781,
    "fileName": "punch.svg"
  },
  "icon_2782": {
    "idx": 2782,
    "fileName": "punching-bag.svg"
  },
  "icon_2783": {
    "idx": 2783,
    "fileName": "puppet.svg"
  },
  "icon_2784": {
    "idx": 2784,
    "fileName": "purple-tentacle.svg"
  },
  "icon_2785": {
    "idx": 2785,
    "fileName": "push.svg"
  },
  "icon_2786": {
    "idx": 2786,
    "fileName": "puzzle.svg"
  },
  "icon_2787": {
    "idx": 2787,
    "fileName": "pylon.svg"
  },
  "icon_2788": {
    "idx": 2788,
    "fileName": "pyre.svg"
  },
  "icon_2789": {
    "idx": 2789,
    "fileName": "pyromaniac.svg"
  },
  "icon_2790": {
    "idx": 2790,
    "fileName": "quake-stomp.svg"
  },
  "icon_2791": {
    "idx": 2791,
    "fileName": "queen-crown.svg"
  },
  "icon_2792": {
    "idx": 2792,
    "fileName": "quick-man.svg"
  },
  "icon_2793": {
    "idx": 2793,
    "fileName": "quick-slash.svg"
  },
  "icon_2794": {
    "idx": 2794,
    "fileName": "quicksand.svg"
  },
  "icon_2795": {
    "idx": 2795,
    "fileName": "quill-ink.svg"
  },
  "icon_2796": {
    "idx": 2796,
    "fileName": "quill.svg"
  },
  "icon_2797": {
    "idx": 2797,
    "fileName": "quiver.svg"
  },
  "icon_2798": {
    "idx": 2798,
    "fileName": "rabbit-head.svg"
  },
  "icon_2799": {
    "idx": 2799,
    "fileName": "rabbit.svg"
  },
  "icon_2800": {
    "idx": 2800,
    "fileName": "raccoon-head.svg"
  },
  "icon_2801": {
    "idx": 2801,
    "fileName": "race-car.svg"
  },
  "icon_2802": {
    "idx": 2802,
    "fileName": "radar-cross-section.svg"
  },
  "icon_2803": {
    "idx": 2803,
    "fileName": "radar-dish.svg"
  },
  "icon_2804": {
    "idx": 2804,
    "fileName": "radar-sweep.svg"
  },
  "icon_2805": {
    "idx": 2805,
    "fileName": "raddish.svg"
  },
  "icon_2806": {
    "idx": 2806,
    "fileName": "radial-balance.svg"
  },
  "icon_2807": {
    "idx": 2807,
    "fileName": "radiations.svg"
  },
  "icon_2808": {
    "idx": 2808,
    "fileName": "radio-tower.svg"
  },
  "icon_2809": {
    "idx": 2809,
    "fileName": "radioactive.svg"
  },
  "icon_2810": {
    "idx": 2810,
    "fileName": "raft.svg"
  },
  "icon_2811": {
    "idx": 2811,
    "fileName": "ragged-wound.svg"
  },
  "icon_2812": {
    "idx": 2812,
    "fileName": "rail-road.svg"
  },
  "icon_2813": {
    "idx": 2813,
    "fileName": "railway.svg"
  },
  "icon_2814": {
    "idx": 2814,
    "fileName": "rainbow-star.svg"
  },
  "icon_2815": {
    "idx": 2815,
    "fileName": "raining.svg"
  },
  "icon_2816": {
    "idx": 2816,
    "fileName": "raise-skeleton.svg"
  },
  "icon_2817": {
    "idx": 2817,
    "fileName": "raise-zombie.svg"
  },
  "icon_2818": {
    "idx": 2818,
    "fileName": "rake.svg"
  },
  "icon_2819": {
    "idx": 2819,
    "fileName": "rally-the-troops.svg"
  },
  "icon_2820": {
    "idx": 2820,
    "fileName": "ram-profile.svg"
  },
  "icon_2821": {
    "idx": 2821,
    "fileName": "ram.svg"
  },
  "icon_2822": {
    "idx": 2822,
    "fileName": "ranch-gate.svg"
  },
  "icon_2823": {
    "idx": 2823,
    "fileName": "rank-1.svg"
  },
  "icon_2824": {
    "idx": 2824,
    "fileName": "rank-2.svg"
  },
  "icon_2825": {
    "idx": 2825,
    "fileName": "rank-3.svg"
  },
  "icon_2826": {
    "idx": 2826,
    "fileName": "rapidshare-arrow.svg"
  },
  "icon_2827": {
    "idx": 2827,
    "fileName": "raspberry.svg"
  },
  "icon_2828": {
    "idx": 2828,
    "fileName": "rat.svg"
  },
  "icon_2829": {
    "idx": 2829,
    "fileName": "rattlesnake.svg"
  },
  "icon_2830": {
    "idx": 2830,
    "fileName": "raven.svg"
  },
  "icon_2831": {
    "idx": 2831,
    "fileName": "raw-egg.svg"
  },
  "icon_2832": {
    "idx": 2832,
    "fileName": "ray-gun.svg"
  },
  "icon_2833": {
    "idx": 2833,
    "fileName": "razor-blade.svg"
  },
  "icon_2834": {
    "idx": 2834,
    "fileName": "razor.svg"
  },
  "icon_2835": {
    "idx": 2835,
    "fileName": "reactor.svg"
  },
  "icon_2836": {
    "idx": 2836,
    "fileName": "read.svg"
  },
  "icon_2837": {
    "idx": 2837,
    "fileName": "reaper-scythe.svg"
  },
  "icon_2838": {
    "idx": 2838,
    "fileName": "rear-aura.svg"
  },
  "icon_2839": {
    "idx": 2839,
    "fileName": "receive-money.svg"
  },
  "icon_2840": {
    "idx": 2840,
    "fileName": "recycle.svg"
  },
  "icon_2841": {
    "idx": 2841,
    "fileName": "red-carpet.svg"
  },
  "icon_2842": {
    "idx": 2842,
    "fileName": "reed.svg"
  },
  "icon_2843": {
    "idx": 2843,
    "fileName": "refinery.svg"
  },
  "icon_2844": {
    "idx": 2844,
    "fileName": "regeneration.svg"
  },
  "icon_2845": {
    "idx": 2845,
    "fileName": "relationship-bounds.svg"
  },
  "icon_2846": {
    "idx": 2846,
    "fileName": "relic-blade.svg"
  },
  "icon_2847": {
    "idx": 2847,
    "fileName": "reload-gun-barrel.svg"
  },
  "icon_2848": {
    "idx": 2848,
    "fileName": "remedy.svg"
  },
  "icon_2849": {
    "idx": 2849,
    "fileName": "rempart.svg"
  },
  "icon_2850": {
    "idx": 2850,
    "fileName": "reptile-tail.svg"
  },
  "icon_2851": {
    "idx": 2851,
    "fileName": "resize.svg"
  },
  "icon_2852": {
    "idx": 2852,
    "fileName": "resonance.svg"
  },
  "icon_2853": {
    "idx": 2853,
    "fileName": "resting-vampire.svg"
  },
  "icon_2854": {
    "idx": 2854,
    "fileName": "reticule.svg"
  },
  "icon_2855": {
    "idx": 2855,
    "fileName": "retro-controller.svg"
  },
  "icon_2856": {
    "idx": 2856,
    "fileName": "return-arrow.svg"
  },
  "icon_2857": {
    "idx": 2857,
    "fileName": "revolt.svg"
  },
  "icon_2858": {
    "idx": 2858,
    "fileName": "revolver.svg"
  },
  "icon_2859": {
    "idx": 2859,
    "fileName": "rhinoceros-horn.svg"
  },
  "icon_2860": {
    "idx": 2860,
    "fileName": "rialto-bridge.svg"
  },
  "icon_2861": {
    "idx": 2861,
    "fileName": "ribbon-medal.svg"
  },
  "icon_2862": {
    "idx": 2862,
    "fileName": "ribbon-shield.svg"
  },
  "icon_2863": {
    "idx": 2863,
    "fileName": "ribbon.svg"
  },
  "icon_2864": {
    "idx": 2864,
    "fileName": "ribcage.svg"
  },
  "icon_2865": {
    "idx": 2865,
    "fileName": "rifle.svg"
  },
  "icon_2866": {
    "idx": 2866,
    "fileName": "ring-box.svg"
  },
  "icon_2867": {
    "idx": 2867,
    "fileName": "ring-mould.svg"
  },
  "icon_2868": {
    "idx": 2868,
    "fileName": "ring.svg"
  },
  "icon_2869": {
    "idx": 2869,
    "fileName": "ringed-beam.svg"
  },
  "icon_2870": {
    "idx": 2870,
    "fileName": "ringed-planet.svg"
  },
  "icon_2871": {
    "idx": 2871,
    "fileName": "ringing-alarm.svg"
  },
  "icon_2872": {
    "idx": 2872,
    "fileName": "ringing-bell.svg"
  },
  "icon_2873": {
    "idx": 2873,
    "fileName": "ringmaster.svg"
  },
  "icon_2874": {
    "idx": 2874,
    "fileName": "riot-shield.svg"
  },
  "icon_2875": {
    "idx": 2875,
    "fileName": "river.svg"
  },
  "icon_2876": {
    "idx": 2876,
    "fileName": "road.svg"
  },
  "icon_2877": {
    "idx": 2877,
    "fileName": "roast-chicken.svg"
  },
  "icon_2878": {
    "idx": 2878,
    "fileName": "robber-hand.svg"
  },
  "icon_2879": {
    "idx": 2879,
    "fileName": "robber-mask.svg"
  },
  "icon_2880": {
    "idx": 2880,
    "fileName": "robber.svg"
  },
  "icon_2881": {
    "idx": 2881,
    "fileName": "robe.svg"
  },
  "icon_2882": {
    "idx": 2882,
    "fileName": "robin-hood-hat.svg"
  },
  "icon_2883": {
    "idx": 2883,
    "fileName": "robot-antennas.svg"
  },
  "icon_2884": {
    "idx": 2884,
    "fileName": "robot-golem.svg"
  },
  "icon_2885": {
    "idx": 2885,
    "fileName": "robot-grab.svg"
  },
  "icon_2886": {
    "idx": 2886,
    "fileName": "robot-helmet.svg"
  },
  "icon_2887": {
    "idx": 2887,
    "fileName": "robot-leg.svg"
  },
  "icon_2888": {
    "idx": 2888,
    "fileName": "rock-golem.svg"
  },
  "icon_2889": {
    "idx": 2889,
    "fileName": "rock.svg"
  },
  "icon_2890": {
    "idx": 2890,
    "fileName": "rocket-flight.svg"
  },
  "icon_2891": {
    "idx": 2891,
    "fileName": "rocket-thruster.svg"
  },
  "icon_2892": {
    "idx": 2892,
    "fileName": "rocket.svg"
  },
  "icon_2893": {
    "idx": 2893,
    "fileName": "rocking-chair.svg"
  },
  "icon_2894": {
    "idx": 2894,
    "fileName": "rod-of-asclepius.svg"
  },
  "icon_2895": {
    "idx": 2895,
    "fileName": "rogue.svg"
  },
  "icon_2896": {
    "idx": 2896,
    "fileName": "rolled-cloth.svg"
  },
  "icon_2897": {
    "idx": 2897,
    "fileName": "roller-skate.svg"
  },
  "icon_2898": {
    "idx": 2898,
    "fileName": "rolling-bomb.svg"
  },
  "icon_2899": {
    "idx": 2899,
    "fileName": "rolling-dice-cup.svg"
  },
  "icon_2900": {
    "idx": 2900,
    "fileName": "rolling-dices.svg"
  },
  "icon_2901": {
    "idx": 2901,
    "fileName": "rolling-energy.svg"
  },
  "icon_2902": {
    "idx": 2902,
    "fileName": "roman-shield.svg"
  },
  "icon_2903": {
    "idx": 2903,
    "fileName": "roman-toga.svg"
  },
  "icon_2904": {
    "idx": 2904,
    "fileName": "rooster.svg"
  },
  "icon_2905": {
    "idx": 2905,
    "fileName": "root-tip.svg"
  },
  "icon_2906": {
    "idx": 2906,
    "fileName": "rope-bridge.svg"
  },
  "icon_2907": {
    "idx": 2907,
    "fileName": "rope-coil.svg"
  },
  "icon_2908": {
    "idx": 2908,
    "fileName": "rope-dart.svg"
  },
  "icon_2909": {
    "idx": 2909,
    "fileName": "ropeway.svg"
  },
  "icon_2910": {
    "idx": 2910,
    "fileName": "rosa-shield.svg"
  },
  "icon_2911": {
    "idx": 2911,
    "fileName": "rose.svg"
  },
  "icon_2912": {
    "idx": 2912,
    "fileName": "rough-wound.svg"
  },
  "icon_2913": {
    "idx": 2913,
    "fileName": "round-bottom-flask.svg"
  },
  "icon_2914": {
    "idx": 2914,
    "fileName": "round-knob.svg"
  },
  "icon_2915": {
    "idx": 2915,
    "fileName": "round-shield.svg"
  },
  "icon_2916": {
    "idx": 2916,
    "fileName": "round-silo.svg"
  },
  "icon_2917": {
    "idx": 2917,
    "fileName": "round-star.svg"
  },
  "icon_2918": {
    "idx": 2918,
    "fileName": "round-straw-bale.svg"
  },
  "icon_2919": {
    "idx": 2919,
    "fileName": "round-struck.svg"
  },
  "icon_2920": {
    "idx": 2920,
    "fileName": "round-table.svg"
  },
  "icon_2921": {
    "idx": 2921,
    "fileName": "royal-love.svg"
  },
  "icon_2922": {
    "idx": 2922,
    "fileName": "rss.svg"
  },
  "icon_2923": {
    "idx": 2923,
    "fileName": "rub-el-hizb.svg"
  },
  "icon_2924": {
    "idx": 2924,
    "fileName": "rubber-boot.svg"
  },
  "icon_2925": {
    "idx": 2925,
    "fileName": "rugby-conversion.svg"
  },
  "icon_2926": {
    "idx": 2926,
    "fileName": "rule-book.svg"
  },
  "icon_2927": {
    "idx": 2927,
    "fileName": "run.svg"
  },
  "icon_2928": {
    "idx": 2928,
    "fileName": "rune-stone.svg"
  },
  "icon_2929": {
    "idx": 2929,
    "fileName": "rune-sword.svg"
  },
  "icon_2930": {
    "idx": 2930,
    "fileName": "running-ninja.svg"
  },
  "icon_2931": {
    "idx": 2931,
    "fileName": "running-shoe.svg"
  },
  "icon_2932": {
    "idx": 2932,
    "fileName": "rupee.svg"
  },
  "icon_2933": {
    "idx": 2933,
    "fileName": "rusty-sword.svg"
  },
  "icon_2934": {
    "idx": 2934,
    "fileName": "s-brick.svg"
  },
  "icon_2935": {
    "idx": 2935,
    "fileName": "saber-and-pistol.svg"
  },
  "icon_2936": {
    "idx": 2936,
    "fileName": "saber-slash.svg"
  },
  "icon_2937": {
    "idx": 2937,
    "fileName": "saber-tooth.svg"
  },
  "icon_2938": {
    "idx": 2938,
    "fileName": "saber-toothed-cat-head.svg"
  },
  "icon_2939": {
    "idx": 2939,
    "fileName": "sabers-choc.svg"
  },
  "icon_2940": {
    "idx": 2940,
    "fileName": "sacrificial-dagger.svg"
  },
  "icon_2941": {
    "idx": 2941,
    "fileName": "sad-crab.svg"
  },
  "icon_2942": {
    "idx": 2942,
    "fileName": "saddle.svg"
  },
  "icon_2943": {
    "idx": 2943,
    "fileName": "safety-pin.svg"
  },
  "icon_2944": {
    "idx": 2944,
    "fileName": "sagittarius.svg"
  },
  "icon_2945": {
    "idx": 2945,
    "fileName": "sai.svg"
  },
  "icon_2946": {
    "idx": 2946,
    "fileName": "sail.svg"
  },
  "icon_2947": {
    "idx": 2947,
    "fileName": "sailboat.svg"
  },
  "icon_2948": {
    "idx": 2948,
    "fileName": "saint-basil-cathedral.svg"
  },
  "icon_2949": {
    "idx": 2949,
    "fileName": "saiyan-suit.svg"
  },
  "icon_2950": {
    "idx": 2950,
    "fileName": "salamander.svg"
  },
  "icon_2951": {
    "idx": 2951,
    "fileName": "salmon.svg"
  },
  "icon_2952": {
    "idx": 2952,
    "fileName": "saloon-doors.svg"
  },
  "icon_2953": {
    "idx": 2953,
    "fileName": "saloon.svg"
  },
  "icon_2954": {
    "idx": 2954,
    "fileName": "salt-shaker.svg"
  },
  "icon_2955": {
    "idx": 2955,
    "fileName": "samara-mosque.svg"
  },
  "icon_2956": {
    "idx": 2956,
    "fileName": "samurai-helmet.svg"
  },
  "icon_2957": {
    "idx": 2957,
    "fileName": "samus-helmet.svg"
  },
  "icon_2958": {
    "idx": 2958,
    "fileName": "sand-castle.svg"
  },
  "icon_2959": {
    "idx": 2959,
    "fileName": "sand-snake.svg"
  },
  "icon_2960": {
    "idx": 2960,
    "fileName": "sandal.svg"
  },
  "icon_2961": {
    "idx": 2961,
    "fileName": "sands-of-time.svg"
  },
  "icon_2962": {
    "idx": 2962,
    "fileName": "sandstorm.svg"
  },
  "icon_2963": {
    "idx": 2963,
    "fileName": "sandwich.svg"
  },
  "icon_2964": {
    "idx": 2964,
    "fileName": "saphir.svg"
  },
  "icon_2965": {
    "idx": 2965,
    "fileName": "sarcophagus.svg"
  },
  "icon_2966": {
    "idx": 2966,
    "fileName": "sasquatch.svg"
  },
  "icon_2967": {
    "idx": 2967,
    "fileName": "satellite-communication.svg"
  },
  "icon_2968": {
    "idx": 2968,
    "fileName": "sattelite.svg"
  },
  "icon_2969": {
    "idx": 2969,
    "fileName": "sauropod-head.svg"
  },
  "icon_2970": {
    "idx": 2970,
    "fileName": "sausage.svg"
  },
  "icon_2971": {
    "idx": 2971,
    "fileName": "sausages-ribbon.svg"
  },
  "icon_2972": {
    "idx": 2972,
    "fileName": "save-arrow.svg"
  },
  "icon_2973": {
    "idx": 2973,
    "fileName": "save.svg"
  },
  "icon_2974": {
    "idx": 2974,
    "fileName": "saw-claw.svg"
  },
  "icon_2975": {
    "idx": 2975,
    "fileName": "sawed-off-shotgun.svg"
  },
  "icon_2976": {
    "idx": 2976,
    "fileName": "saxophone.svg"
  },
  "icon_2977": {
    "idx": 2977,
    "fileName": "sbed_clover.svg"
  },
  "icon_2978": {
    "idx": 2978,
    "fileName": "sbed_grenade.svg"
  },
  "icon_2979": {
    "idx": 2979,
    "fileName": "sbed_hand.svg"
  },
  "icon_2980": {
    "idx": 2980,
    "fileName": "sbed_key.svg"
  },
  "icon_2981": {
    "idx": 2981,
    "fileName": "sbed_revolt.svg"
  },
  "icon_2982": {
    "idx": 2982,
    "fileName": "sbed_splash.svg"
  },
  "icon_2983": {
    "idx": 2983,
    "fileName": "sbed_syringe.svg"
  },
  "icon_2984": {
    "idx": 2984,
    "fileName": "sbed_tombstone.svg"
  },
  "icon_2985": {
    "idx": 2985,
    "fileName": "scabbard.svg"
  },
  "icon_2986": {
    "idx": 2986,
    "fileName": "scale-mail.svg"
  },
  "icon_2987": {
    "idx": 2987,
    "fileName": "scales.svg"
  },
  "icon_2988": {
    "idx": 2988,
    "fileName": "scallop.svg"
  },
  "icon_2989": {
    "idx": 2989,
    "fileName": "scalpel-strike.svg"
  },
  "icon_2990": {
    "idx": 2990,
    "fileName": "scalpel.svg"
  },
  "icon_2991": {
    "idx": 2991,
    "fileName": "scar-wound.svg"
  },
  "icon_2992": {
    "idx": 2992,
    "fileName": "scarab-beetle.svg"
  },
  "icon_2993": {
    "idx": 2993,
    "fileName": "scarecrow.svg"
  },
  "icon_2994": {
    "idx": 2994,
    "fileName": "school-bag.svg"
  },
  "icon_2995": {
    "idx": 2995,
    "fileName": "school-of-fish.svg"
  },
  "icon_2996": {
    "idx": 2996,
    "fileName": "scissors.svg"
  },
  "icon_2997": {
    "idx": 2997,
    "fileName": "scooter.svg"
  },
  "icon_2998": {
    "idx": 2998,
    "fileName": "scorpio.svg"
  },
  "icon_2999": {
    "idx": 2999,
    "fileName": "scorpion-tail.svg"
  },
  "icon_3000": {
    "idx": 3000,
    "fileName": "scorpion.svg"
  },
  "icon_3001": {
    "idx": 3001,
    "fileName": "scout-ship.svg"
  },
  "icon_3002": {
    "idx": 3002,
    "fileName": "screaming.svg"
  },
  "icon_3003": {
    "idx": 3003,
    "fileName": "screen-impact.svg"
  },
  "icon_3004": {
    "idx": 3004,
    "fileName": "screw.svg"
  },
  "icon_3005": {
    "idx": 3005,
    "fileName": "screwdriver.svg"
  },
  "icon_3006": {
    "idx": 3006,
    "fileName": "scroll-quill.svg"
  },
  "icon_3007": {
    "idx": 3007,
    "fileName": "scroll-unfurled.svg"
  },
  "icon_3008": {
    "idx": 3008,
    "fileName": "scuba-mask.svg"
  },
  "icon_3009": {
    "idx": 3009,
    "fileName": "scuba-tanks.svg"
  },
  "icon_3010": {
    "idx": 3010,
    "fileName": "scythe.svg"
  },
  "icon_3011": {
    "idx": 3011,
    "fileName": "sea-cliff.svg"
  },
  "icon_3012": {
    "idx": 3012,
    "fileName": "sea-creature.svg"
  },
  "icon_3013": {
    "idx": 3013,
    "fileName": "sea-dragon.svg"
  },
  "icon_3014": {
    "idx": 3014,
    "fileName": "sea-serpent.svg"
  },
  "icon_3015": {
    "idx": 3015,
    "fileName": "sea-star.svg"
  },
  "icon_3016": {
    "idx": 3016,
    "fileName": "sea-turtle.svg"
  },
  "icon_3017": {
    "idx": 3017,
    "fileName": "seagull.svg"
  },
  "icon_3018": {
    "idx": 3018,
    "fileName": "seahorse.svg"
  },
  "icon_3019": {
    "idx": 3019,
    "fileName": "seated-mouse.svg"
  },
  "icon_3020": {
    "idx": 3020,
    "fileName": "secret-book.svg"
  },
  "icon_3021": {
    "idx": 3021,
    "fileName": "secret-door.svg"
  },
  "icon_3022": {
    "idx": 3022,
    "fileName": "security-gate.svg"
  },
  "icon_3023": {
    "idx": 3023,
    "fileName": "seedling.svg"
  },
  "icon_3024": {
    "idx": 3024,
    "fileName": "select.svg"
  },
  "icon_3025": {
    "idx": 3025,
    "fileName": "self-love.svg"
  },
  "icon_3026": {
    "idx": 3026,
    "fileName": "sell-card.svg"
  },
  "icon_3027": {
    "idx": 3027,
    "fileName": "semi-closed-eye.svg"
  },
  "icon_3028": {
    "idx": 3028,
    "fileName": "sensuousness.svg"
  },
  "icon_3029": {
    "idx": 3029,
    "fileName": "sentry-gun.svg"
  },
  "icon_3030": {
    "idx": 3030,
    "fileName": "sergeant.svg"
  },
  "icon_3031": {
    "idx": 3031,
    "fileName": "serrated-slash.svg"
  },
  "icon_3032": {
    "idx": 3032,
    "fileName": "server-rack.svg"
  },
  "icon_3033": {
    "idx": 3033,
    "fileName": "sesame.svg"
  },
  "icon_3034": {
    "idx": 3034,
    "fileName": "settings-knobs.svg"
  },
  "icon_3035": {
    "idx": 3035,
    "fileName": "seven-pointed-star.svg"
  },
  "icon_3036": {
    "idx": 3036,
    "fileName": "severed-hand.svg"
  },
  "icon_3037": {
    "idx": 3037,
    "fileName": "sewed-shell.svg"
  },
  "icon_3038": {
    "idx": 3038,
    "fileName": "sewing-needle.svg"
  },
  "icon_3039": {
    "idx": 3039,
    "fileName": "sewing-string.svg"
  },
  "icon_3040": {
    "idx": 3040,
    "fileName": "sextant.svg"
  },
  "icon_3041": {
    "idx": 3041,
    "fileName": "shadow-follower.svg"
  },
  "icon_3042": {
    "idx": 3042,
    "fileName": "shadow-grasp.svg"
  },
  "icon_3043": {
    "idx": 3043,
    "fileName": "shaking-hands.svg"
  },
  "icon_3044": {
    "idx": 3044,
    "fileName": "shambling-mound.svg"
  },
  "icon_3045": {
    "idx": 3045,
    "fileName": "shambling-zombie.svg"
  },
  "icon_3046": {
    "idx": 3046,
    "fileName": "shamrock.svg"
  },
  "icon_3047": {
    "idx": 3047,
    "fileName": "shard-sword.svg"
  },
  "icon_3048": {
    "idx": 3048,
    "fileName": "share.svg"
  },
  "icon_3049": {
    "idx": 3049,
    "fileName": "shark-bite.svg"
  },
  "icon_3050": {
    "idx": 3050,
    "fileName": "shark-fin.svg"
  },
  "icon_3051": {
    "idx": 3051,
    "fileName": "shark-jaws.svg"
  },
  "icon_3052": {
    "idx": 3052,
    "fileName": "sharp-axe.svg"
  },
  "icon_3053": {
    "idx": 3053,
    "fileName": "sharp-crown.svg"
  },
  "icon_3054": {
    "idx": 3054,
    "fileName": "sharp-halberd.svg"
  },
  "icon_3055": {
    "idx": 3055,
    "fileName": "sharp-lips.svg"
  },
  "icon_3056": {
    "idx": 3056,
    "fileName": "sharp-shuriken.svg"
  },
  "icon_3057": {
    "idx": 3057,
    "fileName": "sharp-smile.svg"
  },
  "icon_3058": {
    "idx": 3058,
    "fileName": "sharped-teeth-skull.svg"
  },
  "icon_3059": {
    "idx": 3059,
    "fileName": "shatter.svg"
  },
  "icon_3060": {
    "idx": 3060,
    "fileName": "shattered-glass.svg"
  },
  "icon_3061": {
    "idx": 3061,
    "fileName": "shattered-heart.svg"
  },
  "icon_3062": {
    "idx": 3062,
    "fileName": "shattered-sword.svg"
  },
  "icon_3063": {
    "idx": 3063,
    "fileName": "shears.svg"
  },
  "icon_3064": {
    "idx": 3064,
    "fileName": "sheep.svg"
  },
  "icon_3065": {
    "idx": 3065,
    "fileName": "sheikah-eye.svg"
  },
  "icon_3066": {
    "idx": 3066,
    "fileName": "shepherds-crook.svg"
  },
  "icon_3067": {
    "idx": 3067,
    "fileName": "sherlock-holmes.svg"
  },
  "icon_3068": {
    "idx": 3068,
    "fileName": "shield-bash.svg"
  },
  "icon_3069": {
    "idx": 3069,
    "fileName": "shield-bounces.svg"
  },
  "icon_3070": {
    "idx": 3070,
    "fileName": "shield-disabled.svg"
  },
  "icon_3071": {
    "idx": 3071,
    "fileName": "shield-echoes.svg"
  },
  "icon_3072": {
    "idx": 3072,
    "fileName": "shield-impact.svg"
  },
  "icon_3073": {
    "idx": 3073,
    "fileName": "shield-opposition.svg"
  },
  "icon_3074": {
    "idx": 3074,
    "fileName": "shield-reflect.svg"
  },
  "icon_3075": {
    "idx": 3075,
    "fileName": "shield.svg"
  },
  "icon_3076": {
    "idx": 3076,
    "fileName": "shieldcomb.svg"
  },
  "icon_3077": {
    "idx": 3077,
    "fileName": "shining-claw.svg"
  },
  "icon_3078": {
    "idx": 3078,
    "fileName": "shining-heart.svg"
  },
  "icon_3079": {
    "idx": 3079,
    "fileName": "shining-sword.svg"
  },
  "icon_3080": {
    "idx": 3080,
    "fileName": "shinto-shrine-mirror.svg"
  },
  "icon_3081": {
    "idx": 3081,
    "fileName": "shinto-shrine.svg"
  },
  "icon_3082": {
    "idx": 3082,
    "fileName": "shiny-apple.svg"
  },
  "icon_3083": {
    "idx": 3083,
    "fileName": "shiny-entrance.svg"
  },
  "icon_3084": {
    "idx": 3084,
    "fileName": "shiny-iris.svg"
  },
  "icon_3085": {
    "idx": 3085,
    "fileName": "shiny-omega.svg"
  },
  "icon_3086": {
    "idx": 3086,
    "fileName": "shiny-purse.svg"
  },
  "icon_3087": {
    "idx": 3087,
    "fileName": "ship-bow.svg"
  },
  "icon_3088": {
    "idx": 3088,
    "fileName": "ship-wheel.svg"
  },
  "icon_3089": {
    "idx": 3089,
    "fileName": "ship-wreck.svg"
  },
  "icon_3090": {
    "idx": 3090,
    "fileName": "shirt-button.svg"
  },
  "icon_3091": {
    "idx": 3091,
    "fileName": "shirt.svg"
  },
  "icon_3092": {
    "idx": 3092,
    "fileName": "shoebill-stork.svg"
  },
  "icon_3093": {
    "idx": 3093,
    "fileName": "shooner-sailboat.svg"
  },
  "icon_3094": {
    "idx": 3094,
    "fileName": "shop.svg"
  },
  "icon_3095": {
    "idx": 3095,
    "fileName": "shopping-bag.svg"
  },
  "icon_3096": {
    "idx": 3096,
    "fileName": "shopping-cart.svg"
  },
  "icon_3097": {
    "idx": 3097,
    "fileName": "shorts.svg"
  },
  "icon_3098": {
    "idx": 3098,
    "fileName": "shotgun-rounds.svg"
  },
  "icon_3099": {
    "idx": 3099,
    "fileName": "shotgun.svg"
  },
  "icon_3100": {
    "idx": 3100,
    "fileName": "shoulder-armor.svg"
  },
  "icon_3101": {
    "idx": 3101,
    "fileName": "shoulder-bag.svg"
  },
  "icon_3102": {
    "idx": 3102,
    "fileName": "shoulder-scales.svg"
  },
  "icon_3103": {
    "idx": 3103,
    "fileName": "shouting.svg"
  },
  "icon_3104": {
    "idx": 3104,
    "fileName": "shower.svg"
  },
  "icon_3105": {
    "idx": 3105,
    "fileName": "shrimp.svg"
  },
  "icon_3106": {
    "idx": 3106,
    "fileName": "shrug.svg"
  },
  "icon_3107": {
    "idx": 3107,
    "fileName": "shuriken-aperture.svg"
  },
  "icon_3108": {
    "idx": 3108,
    "fileName": "shuriken.svg"
  },
  "icon_3109": {
    "idx": 3109,
    "fileName": "shut-rose.svg"
  },
  "icon_3110": {
    "idx": 3110,
    "fileName": "shuttlecock.svg"
  },
  "icon_3111": {
    "idx": 3111,
    "fileName": "sickle.svg"
  },
  "icon_3112": {
    "idx": 3112,
    "fileName": "sideswipe.svg"
  },
  "icon_3113": {
    "idx": 3113,
    "fileName": "siege-ram.svg"
  },
  "icon_3114": {
    "idx": 3114,
    "fileName": "siege-tower.svg"
  },
  "icon_3115": {
    "idx": 3115,
    "fileName": "sight-disabled.svg"
  },
  "icon_3116": {
    "idx": 3116,
    "fileName": "silence.svg"
  },
  "icon_3117": {
    "idx": 3117,
    "fileName": "silenced.svg"
  },
  "icon_3118": {
    "idx": 3118,
    "fileName": "silex.svg"
  },
  "icon_3119": {
    "idx": 3119,
    "fileName": "silver-bullet.svg"
  },
  "icon_3120": {
    "idx": 3120,
    "fileName": "sinagot.svg"
  },
  "icon_3121": {
    "idx": 3121,
    "fileName": "sing.svg"
  },
  "icon_3122": {
    "idx": 3122,
    "fileName": "sinking-ship.svg"
  },
  "icon_3123": {
    "idx": 3123,
    "fileName": "sinking-trap.svg"
  },
  "icon_3124": {
    "idx": 3124,
    "fileName": "sinusoidal-beam.svg"
  },
  "icon_3125": {
    "idx": 3125,
    "fileName": "siren.svg"
  },
  "icon_3126": {
    "idx": 3126,
    "fileName": "sitting-dog.svg"
  },
  "icon_3127": {
    "idx": 3127,
    "fileName": "six-eyes.svg"
  },
  "icon_3128": {
    "idx": 3128,
    "fileName": "skateboard.svg"
  },
  "icon_3129": {
    "idx": 3129,
    "fileName": "skeletal-hand.svg"
  },
  "icon_3130": {
    "idx": 3130,
    "fileName": "skeleton-inside.svg"
  },
  "icon_3131": {
    "idx": 3131,
    "fileName": "skeleton-key.svg"
  },
  "icon_3132": {
    "idx": 3132,
    "fileName": "skeleton.svg"
  },
  "icon_3133": {
    "idx": 3133,
    "fileName": "ski-boot.svg"
  },
  "icon_3134": {
    "idx": 3134,
    "fileName": "skid-mark.svg"
  },
  "icon_3135": {
    "idx": 3135,
    "fileName": "skier.svg"
  },
  "icon_3136": {
    "idx": 3136,
    "fileName": "skills.svg"
  },
  "icon_3137": {
    "idx": 3137,
    "fileName": "skipping-rope.svg"
  },
  "icon_3138": {
    "idx": 3138,
    "fileName": "skirt.svg"
  },
  "icon_3139": {
    "idx": 3139,
    "fileName": "skis.svg"
  },
  "icon_3140": {
    "idx": 3140,
    "fileName": "skoll_bat.svg"
  },
  "icon_3141": {
    "idx": 3141,
    "fileName": "skoll_bowie-knife.svg"
  },
  "icon_3142": {
    "idx": 3142,
    "fileName": "skoll_butterfly-knife.svg"
  },
  "icon_3143": {
    "idx": 3143,
    "fileName": "skoll_cobra.svg"
  },
  "icon_3144": {
    "idx": 3144,
    "fileName": "skoll_crescent-blade.svg"
  },
  "icon_3145": {
    "idx": 3145,
    "fileName": "skoll_cultist.svg"
  },
  "icon_3146": {
    "idx": 3146,
    "fileName": "skoll_fist.svg"
  },
  "icon_3147": {
    "idx": 3147,
    "fileName": "skoll_gas-mask.svg"
  },
  "icon_3148": {
    "idx": 3148,
    "fileName": "skoll_hang-glider.svg"
  },
  "icon_3149": {
    "idx": 3149,
    "fileName": "skoll_headshot.svg"
  },
  "icon_3150": {
    "idx": 3150,
    "fileName": "skoll_jeep.svg"
  },
  "icon_3151": {
    "idx": 3151,
    "fileName": "skoll_molecule.svg"
  },
  "icon_3152": {
    "idx": 3152,
    "fileName": "skoll_mp5.svg"
  },
  "icon_3153": {
    "idx": 3153,
    "fileName": "skoll_revolver.svg"
  },
  "icon_3154": {
    "idx": 3154,
    "fileName": "skoll_smartphone.svg"
  },
  "icon_3155": {
    "idx": 3155,
    "fileName": "skoll_steel-claws.svg"
  },
  "icon_3156": {
    "idx": 3156,
    "fileName": "skoll_stiletto.svg"
  },
  "icon_3157": {
    "idx": 3157,
    "fileName": "skoll_stopwatch.svg"
  },
  "icon_3158": {
    "idx": 3158,
    "fileName": "skull-bolt.svg"
  },
  "icon_3159": {
    "idx": 3159,
    "fileName": "skull-crack.svg"
  },
  "icon_3160": {
    "idx": 3160,
    "fileName": "skull-crossed-bones.svg"
  },
  "icon_3161": {
    "idx": 3161,
    "fileName": "skull-in-jar.svg"
  },
  "icon_3162": {
    "idx": 3162,
    "fileName": "skull-mask.svg"
  },
  "icon_3163": {
    "idx": 3163,
    "fileName": "skull-ring.svg"
  },
  "icon_3164": {
    "idx": 3164,
    "fileName": "skull-sabertooth.svg"
  },
  "icon_3165": {
    "idx": 3165,
    "fileName": "skull-shield.svg"
  },
  "icon_3166": {
    "idx": 3166,
    "fileName": "skull-signet.svg"
  },
  "icon_3167": {
    "idx": 3167,
    "fileName": "skull-slices.svg"
  },
  "icon_3168": {
    "idx": 3168,
    "fileName": "skull-staff.svg"
  },
  "icon_3169": {
    "idx": 3169,
    "fileName": "skull-with-syringe.svg"
  },
  "icon_3170": {
    "idx": 3170,
    "fileName": "slalom.svg"
  },
  "icon_3171": {
    "idx": 3171,
    "fileName": "slap.svg"
  },
  "icon_3172": {
    "idx": 3172,
    "fileName": "slashed-shield.svg"
  },
  "icon_3173": {
    "idx": 3173,
    "fileName": "slavery-whip.svg"
  },
  "icon_3174": {
    "idx": 3174,
    "fileName": "sleeping-bag.svg"
  },
  "icon_3175": {
    "idx": 3175,
    "fileName": "sleepy.svg"
  },
  "icon_3176": {
    "idx": 3176,
    "fileName": "sleeveless-jacket.svg"
  },
  "icon_3177": {
    "idx": 3177,
    "fileName": "sleeveless-top.svg"
  },
  "icon_3178": {
    "idx": 3178,
    "fileName": "sliced-bread.svg"
  },
  "icon_3179": {
    "idx": 3179,
    "fileName": "sliced-mushroom.svg"
  },
  "icon_3180": {
    "idx": 3180,
    "fileName": "sliced-sausage.svg"
  },
  "icon_3181": {
    "idx": 3181,
    "fileName": "slicing-arrow.svg"
  },
  "icon_3182": {
    "idx": 3182,
    "fileName": "slime.svg"
  },
  "icon_3183": {
    "idx": 3183,
    "fileName": "sling.svg"
  },
  "icon_3184": {
    "idx": 3184,
    "fileName": "slingshot.svg"
  },
  "icon_3185": {
    "idx": 3185,
    "fileName": "slipknot.svg"
  },
  "icon_3186": {
    "idx": 3186,
    "fileName": "slippers.svg"
  },
  "icon_3187": {
    "idx": 3187,
    "fileName": "slow-blob.svg"
  },
  "icon_3188": {
    "idx": 3188,
    "fileName": "slumbering-sanctuary.svg"
  },
  "icon_3189": {
    "idx": 3189,
    "fileName": "sly.svg"
  },
  "icon_3190": {
    "idx": 3190,
    "fileName": "small-fire.svg"
  },
  "icon_3191": {
    "idx": 3191,
    "fileName": "small-fishing-sailboat.svg"
  },
  "icon_3192": {
    "idx": 3192,
    "fileName": "smart.svg"
  },
  "icon_3193": {
    "idx": 3193,
    "fileName": "smartphone.svg"
  },
  "icon_3194": {
    "idx": 3194,
    "fileName": "smash-arrows.svg"
  },
  "icon_3195": {
    "idx": 3195,
    "fileName": "smitten.svg"
  },
  "icon_3196": {
    "idx": 3196,
    "fileName": "smoke-bomb.svg"
  },
  "icon_3197": {
    "idx": 3197,
    "fileName": "smoking-finger.svg"
  },
  "icon_3198": {
    "idx": 3198,
    "fileName": "smoking-orb.svg"
  },
  "icon_3199": {
    "idx": 3199,
    "fileName": "smoking-pipe.svg"
  },
  "icon_3200": {
    "idx": 3200,
    "fileName": "smoking-volcano.svg"
  },
  "icon_3201": {
    "idx": 3201,
    "fileName": "snail-eyes.svg"
  },
  "icon_3202": {
    "idx": 3202,
    "fileName": "snail.svg"
  },
  "icon_3203": {
    "idx": 3203,
    "fileName": "snake-bite.svg"
  },
  "icon_3204": {
    "idx": 3204,
    "fileName": "snake-egg.svg"
  },
  "icon_3205": {
    "idx": 3205,
    "fileName": "snake-jar.svg"
  },
  "icon_3206": {
    "idx": 3206,
    "fileName": "snake-spiral.svg"
  },
  "icon_3207": {
    "idx": 3207,
    "fileName": "snake-tongue.svg"
  },
  "icon_3208": {
    "idx": 3208,
    "fileName": "snake-totem.svg"
  },
  "icon_3209": {
    "idx": 3209,
    "fileName": "snake.svg"
  },
  "icon_3210": {
    "idx": 3210,
    "fileName": "snatch.svg"
  },
  "icon_3211": {
    "idx": 3211,
    "fileName": "sniffing-dog.svg"
  },
  "icon_3212": {
    "idx": 3212,
    "fileName": "snitch-quidditch-ball.svg"
  },
  "icon_3213": {
    "idx": 3213,
    "fileName": "snorkel.svg"
  },
  "icon_3214": {
    "idx": 3214,
    "fileName": "snout.svg"
  },
  "icon_3215": {
    "idx": 3215,
    "fileName": "snow-bottle.svg"
  },
  "icon_3216": {
    "idx": 3216,
    "fileName": "snowboard.svg"
  },
  "icon_3217": {
    "idx": 3217,
    "fileName": "snowflake-1.svg"
  },
  "icon_3218": {
    "idx": 3218,
    "fileName": "snowflake-2.svg"
  },
  "icon_3219": {
    "idx": 3219,
    "fileName": "snowing.svg"
  },
  "icon_3220": {
    "idx": 3220,
    "fileName": "snowman.svg"
  },
  "icon_3221": {
    "idx": 3221,
    "fileName": "soap-experiment.svg"
  },
  "icon_3222": {
    "idx": 3222,
    "fileName": "soap.svg"
  },
  "icon_3223": {
    "idx": 3223,
    "fileName": "soccer-ball.svg"
  },
  "icon_3224": {
    "idx": 3224,
    "fileName": "soccer-field.svg"
  },
  "icon_3225": {
    "idx": 3225,
    "fileName": "soccer-kick.svg"
  },
  "icon_3226": {
    "idx": 3226,
    "fileName": "socks.svg"
  },
  "icon_3227": {
    "idx": 3227,
    "fileName": "soda-can.svg"
  },
  "icon_3228": {
    "idx": 3228,
    "fileName": "sofa.svg"
  },
  "icon_3229": {
    "idx": 3229,
    "fileName": "solar-power.svg"
  },
  "icon_3230": {
    "idx": 3230,
    "fileName": "solar-system.svg"
  },
  "icon_3231": {
    "idx": 3231,
    "fileName": "solar-time.svg"
  },
  "icon_3232": {
    "idx": 3232,
    "fileName": "solid-leaf.svg"
  },
  "icon_3233": {
    "idx": 3233,
    "fileName": "sombrero.svg"
  },
  "icon_3234": {
    "idx": 3234,
    "fileName": "sonic-boom.svg"
  },
  "icon_3235": {
    "idx": 3235,
    "fileName": "sonic-lightning.svg"
  },
  "icon_3236": {
    "idx": 3236,
    "fileName": "sonic-screech.svg"
  },
  "icon_3237": {
    "idx": 3237,
    "fileName": "sonic-shoes.svg"
  },
  "icon_3238": {
    "idx": 3238,
    "fileName": "sonic-shout.svg"
  },
  "icon_3239": {
    "idx": 3239,
    "fileName": "soul-vessel.svg"
  },
  "icon_3240": {
    "idx": 3240,
    "fileName": "sound-off.svg"
  },
  "icon_3241": {
    "idx": 3241,
    "fileName": "sound-on.svg"
  },
  "icon_3242": {
    "idx": 3242,
    "fileName": "sound-waves.svg"
  },
  "icon_3243": {
    "idx": 3243,
    "fileName": "south-africa-flag.svg"
  },
  "icon_3244": {
    "idx": 3244,
    "fileName": "south-africa.svg"
  },
  "icon_3245": {
    "idx": 3245,
    "fileName": "south-america.svg"
  },
  "icon_3246": {
    "idx": 3246,
    "fileName": "south-korea.svg"
  },
  "icon_3247": {
    "idx": 3247,
    "fileName": "space-needle.svg"
  },
  "icon_3248": {
    "idx": 3248,
    "fileName": "space-shuttle.svg"
  },
  "icon_3249": {
    "idx": 3249,
    "fileName": "space-suit.svg"
  },
  "icon_3250": {
    "idx": 3250,
    "fileName": "spaceship.svg"
  },
  "icon_3251": {
    "idx": 3251,
    "fileName": "spade-skull.svg"
  },
  "icon_3252": {
    "idx": 3252,
    "fileName": "spade.svg"
  },
  "icon_3253": {
    "idx": 3253,
    "fileName": "spades.svg"
  },
  "icon_3254": {
    "idx": 3254,
    "fileName": "spain.svg"
  },
  "icon_3255": {
    "idx": 3255,
    "fileName": "spanner.svg"
  },
  "icon_3256": {
    "idx": 3256,
    "fileName": "spark-plug.svg"
  },
  "icon_3257": {
    "idx": 3257,
    "fileName": "spark-spirit.svg"
  },
  "icon_3258": {
    "idx": 3258,
    "fileName": "sparkles.svg"
  },
  "icon_3259": {
    "idx": 3259,
    "fileName": "sparkling-sabre.svg"
  },
  "icon_3260": {
    "idx": 3260,
    "fileName": "sparky-bomb.svg"
  },
  "icon_3261": {
    "idx": 3261,
    "fileName": "sparrow.svg"
  },
  "icon_3262": {
    "idx": 3262,
    "fileName": "spartan-helmet.svg"
  },
  "icon_3263": {
    "idx": 3263,
    "fileName": "spartan.svg"
  },
  "icon_3264": {
    "idx": 3264,
    "fileName": "spatter.svg"
  },
  "icon_3265": {
    "idx": 3265,
    "fileName": "spawn-node.svg"
  },
  "icon_3266": {
    "idx": 3266,
    "fileName": "speaker-off.svg"
  },
  "icon_3267": {
    "idx": 3267,
    "fileName": "speaker.svg"
  },
  "icon_3268": {
    "idx": 3268,
    "fileName": "spear-feather.svg"
  },
  "icon_3269": {
    "idx": 3269,
    "fileName": "spear-hook.svg"
  },
  "icon_3270": {
    "idx": 3270,
    "fileName": "spearfishing.svg"
  },
  "icon_3271": {
    "idx": 3271,
    "fileName": "spears.svg"
  },
  "icon_3272": {
    "idx": 3272,
    "fileName": "spectacle-lenses.svg"
  },
  "icon_3273": {
    "idx": 3273,
    "fileName": "spectacles.svg"
  },
  "icon_3274": {
    "idx": 3274,
    "fileName": "spectre-m4.svg"
  },
  "icon_3275": {
    "idx": 3275,
    "fileName": "spectre.svg"
  },
  "icon_3276": {
    "idx": 3276,
    "fileName": "speed-boat.svg"
  },
  "icon_3277": {
    "idx": 3277,
    "fileName": "speedometer.svg"
  },
  "icon_3278": {
    "idx": 3278,
    "fileName": "spell-book.svg"
  },
  "icon_3279": {
    "idx": 3279,
    "fileName": "sperm-whale.svg"
  },
  "icon_3280": {
    "idx": 3280,
    "fileName": "spider-alt.svg"
  },
  "icon_3281": {
    "idx": 3281,
    "fileName": "spider-bot.svg"
  },
  "icon_3282": {
    "idx": 3282,
    "fileName": "spider-eye.svg"
  },
  "icon_3283": {
    "idx": 3283,
    "fileName": "spider-face.svg"
  },
  "icon_3284": {
    "idx": 3284,
    "fileName": "spider-mask.svg"
  },
  "icon_3285": {
    "idx": 3285,
    "fileName": "spider-web.svg"
  },
  "icon_3286": {
    "idx": 3286,
    "fileName": "spikeball.svg"
  },
  "icon_3287": {
    "idx": 3287,
    "fileName": "spiked-armor.svg"
  },
  "icon_3288": {
    "idx": 3288,
    "fileName": "spiked-ball.svg"
  },
  "icon_3289": {
    "idx": 3289,
    "fileName": "spiked-bat.svg"
  },
  "icon_3290": {
    "idx": 3290,
    "fileName": "spiked-collar.svg"
  },
  "icon_3291": {
    "idx": 3291,
    "fileName": "spiked-dragon-head.svg"
  },
  "icon_3292": {
    "idx": 3292,
    "fileName": "spiked-fence.svg"
  },
  "icon_3293": {
    "idx": 3293,
    "fileName": "spiked-halo.svg"
  },
  "icon_3294": {
    "idx": 3294,
    "fileName": "spiked-mace.svg"
  },
  "icon_3295": {
    "idx": 3295,
    "fileName": "spiked-shell.svg"
  },
  "icon_3296": {
    "idx": 3296,
    "fileName": "spiked-shoulder-armor.svg"
  },
  "icon_3297": {
    "idx": 3297,
    "fileName": "spiked-snail.svg"
  },
  "icon_3298": {
    "idx": 3298,
    "fileName": "spiked-tail.svg"
  },
  "icon_3299": {
    "idx": 3299,
    "fileName": "spiked-tentacle.svg"
  },
  "icon_3300": {
    "idx": 3300,
    "fileName": "spiked-trunk.svg"
  },
  "icon_3301": {
    "idx": 3301,
    "fileName": "spiked-wall.svg"
  },
  "icon_3302": {
    "idx": 3302,
    "fileName": "spikes-full.svg"
  },
  "icon_3303": {
    "idx": 3303,
    "fileName": "spikes-half.svg"
  },
  "icon_3304": {
    "idx": 3304,
    "fileName": "spikes-init.svg"
  },
  "icon_3305": {
    "idx": 3305,
    "fileName": "spikes.svg"
  },
  "icon_3306": {
    "idx": 3306,
    "fileName": "spiky-eclipse.svg"
  },
  "icon_3307": {
    "idx": 3307,
    "fileName": "spiky-explosion.svg"
  },
  "icon_3308": {
    "idx": 3308,
    "fileName": "spiky-field.svg"
  },
  "icon_3309": {
    "idx": 3309,
    "fileName": "spiky-pit.svg"
  },
  "icon_3310": {
    "idx": 3310,
    "fileName": "spiky-wing.svg"
  },
  "icon_3311": {
    "idx": 3311,
    "fileName": "spill.svg"
  },
  "icon_3312": {
    "idx": 3312,
    "fileName": "spinal-coil.svg"
  },
  "icon_3313": {
    "idx": 3313,
    "fileName": "spine-arrow.svg"
  },
  "icon_3314": {
    "idx": 3314,
    "fileName": "spinning-blades.svg"
  },
  "icon_3315": {
    "idx": 3315,
    "fileName": "spinning-ribbons.svg"
  },
  "icon_3316": {
    "idx": 3316,
    "fileName": "spinning-sword.svg"
  },
  "icon_3317": {
    "idx": 3317,
    "fileName": "spinning-top.svg"
  },
  "icon_3318": {
    "idx": 3318,
    "fileName": "spiral-arrow.svg"
  },
  "icon_3319": {
    "idx": 3319,
    "fileName": "spiral-bloom.svg"
  },
  "icon_3320": {
    "idx": 3320,
    "fileName": "spiral-bottle.svg"
  },
  "icon_3321": {
    "idx": 3321,
    "fileName": "spiral-hilt.svg"
  },
  "icon_3322": {
    "idx": 3322,
    "fileName": "spiral-lollipop.svg"
  },
  "icon_3323": {
    "idx": 3323,
    "fileName": "spiral-shell.svg"
  },
  "icon_3324": {
    "idx": 3324,
    "fileName": "spiral-tentacle.svg"
  },
  "icon_3325": {
    "idx": 3325,
    "fileName": "spiral-thrust.svg"
  },
  "icon_3326": {
    "idx": 3326,
    "fileName": "splash.svg"
  },
  "icon_3327": {
    "idx": 3327,
    "fileName": "splashy-stream.svg"
  },
  "icon_3328": {
    "idx": 3328,
    "fileName": "split-arrows.svg"
  },
  "icon_3329": {
    "idx": 3329,
    "fileName": "split-body.svg"
  },
  "icon_3330": {
    "idx": 3330,
    "fileName": "split-cross.svg"
  },
  "icon_3331": {
    "idx": 3331,
    "fileName": "splurt.svg"
  },
  "icon_3332": {
    "idx": 3332,
    "fileName": "spock-hand.svg"
  },
  "icon_3333": {
    "idx": 3333,
    "fileName": "spooky-house.svg"
  },
  "icon_3334": {
    "idx": 3334,
    "fileName": "spoon.svg"
  },
  "icon_3335": {
    "idx": 3335,
    "fileName": "sport-medal.svg"
  },
  "icon_3336": {
    "idx": 3336,
    "fileName": "spoted-flower.svg"
  },
  "icon_3337": {
    "idx": 3337,
    "fileName": "spotted-arrowhead.svg"
  },
  "icon_3338": {
    "idx": 3338,
    "fileName": "spotted-bug.svg"
  },
  "icon_3339": {
    "idx": 3339,
    "fileName": "spotted-mushroom.svg"
  },
  "icon_3340": {
    "idx": 3340,
    "fileName": "spotted-wound.svg"
  },
  "icon_3341": {
    "idx": 3341,
    "fileName": "spoutnik.svg"
  },
  "icon_3342": {
    "idx": 3342,
    "fileName": "spray.svg"
  },
  "icon_3343": {
    "idx": 3343,
    "fileName": "spring.svg"
  },
  "icon_3344": {
    "idx": 3344,
    "fileName": "sprint.svg"
  },
  "icon_3345": {
    "idx": 3345,
    "fileName": "sprout-disc.svg"
  },
  "icon_3346": {
    "idx": 3346,
    "fileName": "sprout.svg"
  },
  "icon_3347": {
    "idx": 3347,
    "fileName": "spy.svg"
  },
  "icon_3348": {
    "idx": 3348,
    "fileName": "spyglass.svg"
  },
  "icon_3349": {
    "idx": 3349,
    "fileName": "square-bottle.svg"
  },
  "icon_3350": {
    "idx": 3350,
    "fileName": "square.svg"
  },
  "icon_3351": {
    "idx": 3351,
    "fileName": "squib.svg"
  },
  "icon_3352": {
    "idx": 3352,
    "fileName": "squid-head.svg"
  },
  "icon_3353": {
    "idx": 3353,
    "fileName": "squid.svg"
  },
  "icon_3354": {
    "idx": 3354,
    "fileName": "squirrel.svg"
  },
  "icon_3355": {
    "idx": 3355,
    "fileName": "sri-lanka.svg"
  },
  "icon_3356": {
    "idx": 3356,
    "fileName": "stabbed-note.svg"
  },
  "icon_3357": {
    "idx": 3357,
    "fileName": "stable.svg"
  },
  "icon_3358": {
    "idx": 3358,
    "fileName": "stack.svg"
  },
  "icon_3359": {
    "idx": 3359,
    "fileName": "stag-head.svg"
  },
  "icon_3360": {
    "idx": 3360,
    "fileName": "stahlhelm.svg"
  },
  "icon_3361": {
    "idx": 3361,
    "fileName": "stairs-cake.svg"
  },
  "icon_3362": {
    "idx": 3362,
    "fileName": "stairs-goal.svg"
  },
  "icon_3363": {
    "idx": 3363,
    "fileName": "stairs.svg"
  },
  "icon_3364": {
    "idx": 3364,
    "fileName": "stake-hammer.svg"
  },
  "icon_3365": {
    "idx": 3365,
    "fileName": "stakes-fence.svg"
  },
  "icon_3366": {
    "idx": 3366,
    "fileName": "stalactites.svg"
  },
  "icon_3367": {
    "idx": 3367,
    "fileName": "stalagtite.svg"
  },
  "icon_3368": {
    "idx": 3368,
    "fileName": "stamper.svg"
  },
  "icon_3369": {
    "idx": 3369,
    "fileName": "standing-potion.svg"
  },
  "icon_3370": {
    "idx": 3370,
    "fileName": "star-altar.svg"
  },
  "icon_3371": {
    "idx": 3371,
    "fileName": "star-cycle.svg"
  },
  "icon_3372": {
    "idx": 3372,
    "fileName": "star-flag.svg"
  },
  "icon_3373": {
    "idx": 3373,
    "fileName": "star-formation.svg"
  },
  "icon_3374": {
    "idx": 3374,
    "fileName": "star-gate.svg"
  },
  "icon_3375": {
    "idx": 3375,
    "fileName": "star-key.svg"
  },
  "icon_3376": {
    "idx": 3376,
    "fileName": "star-medal.svg"
  },
  "icon_3377": {
    "idx": 3377,
    "fileName": "star-prominences.svg"
  },
  "icon_3378": {
    "idx": 3378,
    "fileName": "star-pupil.svg"
  },
  "icon_3379": {
    "idx": 3379,
    "fileName": "star-sattelites.svg"
  },
  "icon_3380": {
    "idx": 3380,
    "fileName": "star-shuriken.svg"
  },
  "icon_3381": {
    "idx": 3381,
    "fileName": "star-skull.svg"
  },
  "icon_3382": {
    "idx": 3382,
    "fileName": "star-struck.svg"
  },
  "icon_3383": {
    "idx": 3383,
    "fileName": "star-swirl.svg"
  },
  "icon_3384": {
    "idx": 3384,
    "fileName": "starfighter.svg"
  },
  "icon_3385": {
    "idx": 3385,
    "fileName": "stars-stack.svg"
  },
  "icon_3386": {
    "idx": 3386,
    "fileName": "staryu.svg"
  },
  "icon_3387": {
    "idx": 3387,
    "fileName": "static-guard.svg"
  },
  "icon_3388": {
    "idx": 3388,
    "fileName": "static-waves.svg"
  },
  "icon_3389": {
    "idx": 3389,
    "fileName": "static.svg"
  },
  "icon_3390": {
    "idx": 3390,
    "fileName": "steak.svg"
  },
  "icon_3391": {
    "idx": 3391,
    "fileName": "stealth-bomber.svg"
  },
  "icon_3392": {
    "idx": 3392,
    "fileName": "steam-blast.svg"
  },
  "icon_3393": {
    "idx": 3393,
    "fileName": "steam-locomotive.svg"
  },
  "icon_3394": {
    "idx": 3394,
    "fileName": "steam.svg"
  },
  "icon_3395": {
    "idx": 3395,
    "fileName": "steampunk-goggles.svg"
  },
  "icon_3396": {
    "idx": 3396,
    "fileName": "steel-claws.svg"
  },
  "icon_3397": {
    "idx": 3397,
    "fileName": "steel-door.svg"
  },
  "icon_3398": {
    "idx": 3398,
    "fileName": "steeltoe-boots.svg"
  },
  "icon_3399": {
    "idx": 3399,
    "fileName": "steelwing-emblem.svg"
  },
  "icon_3400": {
    "idx": 3400,
    "fileName": "steering-wheel.svg"
  },
  "icon_3401": {
    "idx": 3401,
    "fileName": "stegosaurus-scales.svg"
  },
  "icon_3402": {
    "idx": 3402,
    "fileName": "stethoscope.svg"
  },
  "icon_3403": {
    "idx": 3403,
    "fileName": "steyr-aug.svg"
  },
  "icon_3404": {
    "idx": 3404,
    "fileName": "stick-frame.svg"
  },
  "icon_3405": {
    "idx": 3405,
    "fileName": "stick-grenade.svg"
  },
  "icon_3406": {
    "idx": 3406,
    "fileName": "stick-splitting.svg"
  },
  "icon_3407": {
    "idx": 3407,
    "fileName": "sticking-plaster.svg"
  },
  "icon_3408": {
    "idx": 3408,
    "fileName": "sticky-boot.svg"
  },
  "icon_3409": {
    "idx": 3409,
    "fileName": "stigmata.svg"
  },
  "icon_3410": {
    "idx": 3410,
    "fileName": "stiletto.svg"
  },
  "icon_3411": {
    "idx": 3411,
    "fileName": "stitched-wound.svg"
  },
  "icon_3412": {
    "idx": 3412,
    "fileName": "stockpiles.svg"
  },
  "icon_3413": {
    "idx": 3413,
    "fileName": "stomach.svg"
  },
  "icon_3414": {
    "idx": 3414,
    "fileName": "stomp-tornado.svg"
  },
  "icon_3415": {
    "idx": 3415,
    "fileName": "stomp.svg"
  },
  "icon_3416": {
    "idx": 3416,
    "fileName": "stone-axe.svg"
  },
  "icon_3417": {
    "idx": 3417,
    "fileName": "stone-block.svg"
  },
  "icon_3418": {
    "idx": 3418,
    "fileName": "stone-bridge.svg"
  },
  "icon_3419": {
    "idx": 3419,
    "fileName": "stone-bust.svg"
  },
  "icon_3420": {
    "idx": 3420,
    "fileName": "stone-crafting.svg"
  },
  "icon_3421": {
    "idx": 3421,
    "fileName": "stone-path.svg"
  },
  "icon_3422": {
    "idx": 3422,
    "fileName": "stone-pile.svg"
  },
  "icon_3423": {
    "idx": 3423,
    "fileName": "stone-spear.svg"
  },
  "icon_3424": {
    "idx": 3424,
    "fileName": "stone-sphere.svg"
  },
  "icon_3425": {
    "idx": 3425,
    "fileName": "stone-stack.svg"
  },
  "icon_3426": {
    "idx": 3426,
    "fileName": "stone-tablet.svg"
  },
  "icon_3427": {
    "idx": 3427,
    "fileName": "stone-throne.svg"
  },
  "icon_3428": {
    "idx": 3428,
    "fileName": "stone-tower.svg"
  },
  "icon_3429": {
    "idx": 3429,
    "fileName": "stone-wall.svg"
  },
  "icon_3430": {
    "idx": 3430,
    "fileName": "stone-wheel.svg"
  },
  "icon_3431": {
    "idx": 3431,
    "fileName": "stoned-skull.svg"
  },
  "icon_3432": {
    "idx": 3432,
    "fileName": "stop-sign.svg"
  },
  "icon_3433": {
    "idx": 3433,
    "fileName": "stopwatch.svg"
  },
  "icon_3434": {
    "idx": 3434,
    "fileName": "stork-delivery.svg"
  },
  "icon_3435": {
    "idx": 3435,
    "fileName": "strafe.svg"
  },
  "icon_3436": {
    "idx": 3436,
    "fileName": "straight-pipe.svg"
  },
  "icon_3437": {
    "idx": 3437,
    "fileName": "strawberry.svg"
  },
  "icon_3438": {
    "idx": 3438,
    "fileName": "street-light.svg"
  },
  "icon_3439": {
    "idx": 3439,
    "fileName": "striking-arrows.svg"
  },
  "icon_3440": {
    "idx": 3440,
    "fileName": "striking-balls.svg"
  },
  "icon_3441": {
    "idx": 3441,
    "fileName": "striking-clamps.svg"
  },
  "icon_3442": {
    "idx": 3442,
    "fileName": "striking-diamonds.svg"
  },
  "icon_3443": {
    "idx": 3443,
    "fileName": "striking-splinter.svg"
  },
  "icon_3444": {
    "idx": 3444,
    "fileName": "striped-sun.svg"
  },
  "icon_3445": {
    "idx": 3445,
    "fileName": "striped-sword.svg"
  },
  "icon_3446": {
    "idx": 3446,
    "fileName": "strong-man.svg"
  },
  "icon_3447": {
    "idx": 3447,
    "fileName": "strong.svg"
  },
  "icon_3448": {
    "idx": 3448,
    "fileName": "strongbox.svg"
  },
  "icon_3449": {
    "idx": 3449,
    "fileName": "stump-regrowth.svg"
  },
  "icon_3450": {
    "idx": 3450,
    "fileName": "stun-grenade.svg"
  },
  "icon_3451": {
    "idx": 3451,
    "fileName": "submarine-missile.svg"
  },
  "icon_3452": {
    "idx": 3452,
    "fileName": "submarine.svg"
  },
  "icon_3453": {
    "idx": 3453,
    "fileName": "subway.svg"
  },
  "icon_3454": {
    "idx": 3454,
    "fileName": "suckered-tentacle.svg"
  },
  "icon_3455": {
    "idx": 3455,
    "fileName": "sugar-cane.svg"
  },
  "icon_3456": {
    "idx": 3456,
    "fileName": "suicide.svg"
  },
  "icon_3457": {
    "idx": 3457,
    "fileName": "suitcase.svg"
  },
  "icon_3458": {
    "idx": 3458,
    "fileName": "suits.svg"
  },
  "icon_3459": {
    "idx": 3459,
    "fileName": "summits.svg"
  },
  "icon_3460": {
    "idx": 3460,
    "fileName": "sun-cloud.svg"
  },
  "icon_3461": {
    "idx": 3461,
    "fileName": "sun-priest.svg"
  },
  "icon_3462": {
    "idx": 3462,
    "fileName": "sun-radiations.svg"
  },
  "icon_3463": {
    "idx": 3463,
    "fileName": "sun-spear.svg"
  },
  "icon_3464": {
    "idx": 3464,
    "fileName": "sun.svg"
  },
  "icon_3465": {
    "idx": 3465,
    "fileName": "sunbeams.svg"
  },
  "icon_3466": {
    "idx": 3466,
    "fileName": "sundial.svg"
  },
  "icon_3467": {
    "idx": 3467,
    "fileName": "sunflower.svg"
  },
  "icon_3468": {
    "idx": 3468,
    "fileName": "sunglasses.svg"
  },
  "icon_3469": {
    "idx": 3469,
    "fileName": "sunken-eye.svg"
  },
  "icon_3470": {
    "idx": 3470,
    "fileName": "sunrise.svg"
  },
  "icon_3471": {
    "idx": 3471,
    "fileName": "sunset.svg"
  },
  "icon_3472": {
    "idx": 3472,
    "fileName": "super-mushroom.svg"
  },
  "icon_3473": {
    "idx": 3473,
    "fileName": "supersonic-arrow.svg"
  },
  "icon_3474": {
    "idx": 3474,
    "fileName": "supersonic-bullet.svg"
  },
  "icon_3475": {
    "idx": 3475,
    "fileName": "surf-board.svg"
  },
  "icon_3476": {
    "idx": 3476,
    "fileName": "surfer-van.svg"
  },
  "icon_3477": {
    "idx": 3477,
    "fileName": "surprised-skull.svg"
  },
  "icon_3478": {
    "idx": 3478,
    "fileName": "surprised.svg"
  },
  "icon_3479": {
    "idx": 3479,
    "fileName": "surrounded-eye.svg"
  },
  "icon_3480": {
    "idx": 3480,
    "fileName": "surrounded-shield.svg"
  },
  "icon_3481": {
    "idx": 3481,
    "fileName": "sushis.svg"
  },
  "icon_3482": {
    "idx": 3482,
    "fileName": "suspension-bridge.svg"
  },
  "icon_3483": {
    "idx": 3483,
    "fileName": "suspicious.svg"
  },
  "icon_3484": {
    "idx": 3484,
    "fileName": "sverd-i-fjell.svg"
  },
  "icon_3485": {
    "idx": 3485,
    "fileName": "swallow.svg"
  },
  "icon_3486": {
    "idx": 3486,
    "fileName": "swallower.svg"
  },
  "icon_3487": {
    "idx": 3487,
    "fileName": "swamp-bat.svg"
  },
  "icon_3488": {
    "idx": 3488,
    "fileName": "swamp.svg"
  },
  "icon_3489": {
    "idx": 3489,
    "fileName": "swan-breeze.svg"
  },
  "icon_3490": {
    "idx": 3490,
    "fileName": "swan.svg"
  },
  "icon_3491": {
    "idx": 3491,
    "fileName": "swap-bag.svg"
  },
  "icon_3492": {
    "idx": 3492,
    "fileName": "swimfins.svg"
  },
  "icon_3493": {
    "idx": 3493,
    "fileName": "swipe-card.svg"
  },
  "icon_3494": {
    "idx": 3494,
    "fileName": "swirl-ring.svg"
  },
  "icon_3495": {
    "idx": 3495,
    "fileName": "swirl-string.svg"
  },
  "icon_3496": {
    "idx": 3496,
    "fileName": "swirled-shell.svg"
  },
  "icon_3497": {
    "idx": 3497,
    "fileName": "swiss-army-knife.svg"
  },
  "icon_3498": {
    "idx": 3498,
    "fileName": "switch-weapon.svg"
  },
  "icon_3499": {
    "idx": 3499,
    "fileName": "switchblade.svg"
  },
  "icon_3500": {
    "idx": 3500,
    "fileName": "switzerland.svg"
  },
  "icon_3501": {
    "idx": 3501,
    "fileName": "sword-altar.svg"
  },
  "icon_3502": {
    "idx": 3502,
    "fileName": "sword-array.svg"
  },
  "icon_3503": {
    "idx": 3503,
    "fileName": "sword-brandish.svg"
  },
  "icon_3504": {
    "idx": 3504,
    "fileName": "sword-break.svg"
  },
  "icon_3505": {
    "idx": 3505,
    "fileName": "sword-clash.svg"
  },
  "icon_3506": {
    "idx": 3506,
    "fileName": "sword-hilt.svg"
  },
  "icon_3507": {
    "idx": 3507,
    "fileName": "sword-in-stone.svg"
  },
  "icon_3508": {
    "idx": 3508,
    "fileName": "sword-mold.svg"
  },
  "icon_3509": {
    "idx": 3509,
    "fileName": "sword-slice.svg"
  },
  "icon_3510": {
    "idx": 3510,
    "fileName": "sword-smithing.svg"
  },
  "icon_3511": {
    "idx": 3511,
    "fileName": "sword-spade.svg"
  },
  "icon_3512": {
    "idx": 3512,
    "fileName": "sword-spin.svg"
  },
  "icon_3513": {
    "idx": 3513,
    "fileName": "sword-tie.svg"
  },
  "icon_3514": {
    "idx": 3514,
    "fileName": "sword-wound.svg"
  },
  "icon_3515": {
    "idx": 3515,
    "fileName": "swordman.svg"
  },
  "icon_3516": {
    "idx": 3516,
    "fileName": "swords-emblem.svg"
  },
  "icon_3517": {
    "idx": 3517,
    "fileName": "swords-power.svg"
  },
  "icon_3518": {
    "idx": 3518,
    "fileName": "swordwoman.svg"
  },
  "icon_3519": {
    "idx": 3519,
    "fileName": "sydney-opera-house.svg"
  },
  "icon_3520": {
    "idx": 3520,
    "fileName": "syringe.svg"
  },
  "icon_3521": {
    "idx": 3521,
    "fileName": "t-brick.svg"
  },
  "icon_3522": {
    "idx": 3522,
    "fileName": "t-rex-skull.svg"
  },
  "icon_3523": {
    "idx": 3523,
    "fileName": "t-shirt.svg"
  },
  "icon_3524": {
    "idx": 3524,
    "fileName": "tabi-boot.svg"
  },
  "icon_3525": {
    "idx": 3525,
    "fileName": "table.svg"
  },
  "icon_3526": {
    "idx": 3526,
    "fileName": "tablet.svg"
  },
  "icon_3527": {
    "idx": 3527,
    "fileName": "tabletop-players.svg"
  },
  "icon_3528": {
    "idx": 3528,
    "fileName": "tacos.svg"
  },
  "icon_3529": {
    "idx": 3529,
    "fileName": "tadpole.svg"
  },
  "icon_3530": {
    "idx": 3530,
    "fileName": "take-my-money.svg"
  },
  "icon_3531": {
    "idx": 3531,
    "fileName": "talk.svg"
  },
  "icon_3532": {
    "idx": 3532,
    "fileName": "tall-bridge.svg"
  },
  "icon_3533": {
    "idx": 3533,
    "fileName": "tambourine.svg"
  },
  "icon_3534": {
    "idx": 3534,
    "fileName": "tangerine.svg"
  },
  "icon_3535": {
    "idx": 3535,
    "fileName": "tank-top.svg"
  },
  "icon_3536": {
    "idx": 3536,
    "fileName": "tank-tread.svg"
  },
  "icon_3537": {
    "idx": 3537,
    "fileName": "tank.svg"
  },
  "icon_3538": {
    "idx": 3538,
    "fileName": "tanzania.svg"
  },
  "icon_3539": {
    "idx": 3539,
    "fileName": "tap.svg"
  },
  "icon_3540": {
    "idx": 3540,
    "fileName": "tapir.svg"
  },
  "icon_3541": {
    "idx": 3541,
    "fileName": "target-arrows.svg"
  },
  "icon_3542": {
    "idx": 3542,
    "fileName": "target-dummy.svg"
  },
  "icon_3543": {
    "idx": 3543,
    "fileName": "target-laser.svg"
  },
  "icon_3544": {
    "idx": 3544,
    "fileName": "target-poster.svg"
  },
  "icon_3545": {
    "idx": 3545,
    "fileName": "target-prize.svg"
  },
  "icon_3546": {
    "idx": 3546,
    "fileName": "target-shot.svg"
  },
  "icon_3547": {
    "idx": 3547,
    "fileName": "targeted.svg"
  },
  "icon_3548": {
    "idx": 3548,
    "fileName": "targeting.svg"
  },
  "icon_3549": {
    "idx": 3549,
    "fileName": "tattered-banner.svg"
  },
  "icon_3550": {
    "idx": 3550,
    "fileName": "taurus.svg"
  },
  "icon_3551": {
    "idx": 3551,
    "fileName": "tavern-sign.svg"
  },
  "icon_3552": {
    "idx": 3552,
    "fileName": "teacher.svg"
  },
  "icon_3553": {
    "idx": 3553,
    "fileName": "team-downgrade.svg"
  },
  "icon_3554": {
    "idx": 3554,
    "fileName": "team-idea.svg"
  },
  "icon_3555": {
    "idx": 3555,
    "fileName": "team-upgrade.svg"
  },
  "icon_3556": {
    "idx": 3556,
    "fileName": "teapot-leaves.svg"
  },
  "icon_3557": {
    "idx": 3557,
    "fileName": "teapot.svg"
  },
  "icon_3558": {
    "idx": 3558,
    "fileName": "tear-tracks.svg"
  },
  "icon_3559": {
    "idx": 3559,
    "fileName": "tearing.svg"
  },
  "icon_3560": {
    "idx": 3560,
    "fileName": "tec-9.svg"
  },
  "icon_3561": {
    "idx": 3561,
    "fileName": "techno-heart.svg"
  },
  "icon_3562": {
    "idx": 3562,
    "fileName": "tee-pipe.svg"
  },
  "icon_3563": {
    "idx": 3563,
    "fileName": "telefrag.svg"
  },
  "icon_3564": {
    "idx": 3564,
    "fileName": "telepathy.svg"
  },
  "icon_3565": {
    "idx": 3565,
    "fileName": "teleport.svg"
  },
  "icon_3566": {
    "idx": 3566,
    "fileName": "telescopic-baton.svg"
  },
  "icon_3567": {
    "idx": 3567,
    "fileName": "teller-mine.svg"
  },
  "icon_3568": {
    "idx": 3568,
    "fileName": "templar-eye.svg"
  },
  "icon_3569": {
    "idx": 3569,
    "fileName": "templar-heart.svg"
  },
  "icon_3570": {
    "idx": 3570,
    "fileName": "templar-shield.svg"
  },
  "icon_3571": {
    "idx": 3571,
    "fileName": "temple-door.svg"
  },
  "icon_3572": {
    "idx": 3572,
    "fileName": "temple-gate.svg"
  },
  "icon_3573": {
    "idx": 3573,
    "fileName": "temporary-shield.svg"
  },
  "icon_3574": {
    "idx": 3574,
    "fileName": "temptation.svg"
  },
  "icon_3575": {
    "idx": 3575,
    "fileName": "tennis-ball.svg"
  },
  "icon_3576": {
    "idx": 3576,
    "fileName": "tennis-court.svg"
  },
  "icon_3577": {
    "idx": 3577,
    "fileName": "tennis-racket.svg"
  },
  "icon_3578": {
    "idx": 3578,
    "fileName": "tension-snowflake.svg"
  },
  "icon_3579": {
    "idx": 3579,
    "fileName": "tentacle-heart.svg"
  },
  "icon_3580": {
    "idx": 3580,
    "fileName": "tentacle-strike.svg"
  },
  "icon_3581": {
    "idx": 3581,
    "fileName": "tentacles-barrier.svg"
  },
  "icon_3582": {
    "idx": 3582,
    "fileName": "tentacles-skull.svg"
  },
  "icon_3583": {
    "idx": 3583,
    "fileName": "tentacurl.svg"
  },
  "icon_3584": {
    "idx": 3584,
    "fileName": "terror.svg"
  },
  "icon_3585": {
    "idx": 3585,
    "fileName": "tesla-coil.svg"
  },
  "icon_3586": {
    "idx": 3586,
    "fileName": "tesla-turret.svg"
  },
  "icon_3587": {
    "idx": 3587,
    "fileName": "tesla.svg"
  },
  "icon_3588": {
    "idx": 3588,
    "fileName": "test-tubes.svg"
  },
  "icon_3589": {
    "idx": 3589,
    "fileName": "texas.svg"
  },
  "icon_3590": {
    "idx": 3590,
    "fileName": "theater-curtains.svg"
  },
  "icon_3591": {
    "idx": 3591,
    "fileName": "theater.svg"
  },
  "icon_3592": {
    "idx": 3592,
    "fileName": "thermometer-cold.svg"
  },
  "icon_3593": {
    "idx": 3593,
    "fileName": "thermometer-hot.svg"
  },
  "icon_3594": {
    "idx": 3594,
    "fileName": "thermometer-scale.svg"
  },
  "icon_3595": {
    "idx": 3595,
    "fileName": "think.svg"
  },
  "icon_3596": {
    "idx": 3596,
    "fileName": "third-eye.svg"
  },
  "icon_3597": {
    "idx": 3597,
    "fileName": "thompson-m1.svg"
  },
  "icon_3598": {
    "idx": 3598,
    "fileName": "thompson-m1928.svg"
  },
  "icon_3599": {
    "idx": 3599,
    "fileName": "thor-fist.svg"
  },
  "icon_3600": {
    "idx": 3600,
    "fileName": "thor-hammer.svg"
  },
  "icon_3601": {
    "idx": 3601,
    "fileName": "thorn-helix.svg"
  },
  "icon_3602": {
    "idx": 3602,
    "fileName": "thorned-arrow.svg"
  },
  "icon_3603": {
    "idx": 3603,
    "fileName": "thorny-tentacle.svg"
  },
  "icon_3604": {
    "idx": 3604,
    "fileName": "thorny-vine.svg"
  },
  "icon_3605": {
    "idx": 3605,
    "fileName": "three-burning-balls.svg"
  },
  "icon_3606": {
    "idx": 3606,
    "fileName": "three-friends.svg"
  },
  "icon_3607": {
    "idx": 3607,
    "fileName": "three-keys.svg"
  },
  "icon_3608": {
    "idx": 3608,
    "fileName": "three-leaves.svg"
  },
  "icon_3609": {
    "idx": 3609,
    "fileName": "three-pointed-shuriken.svg"
  },
  "icon_3610": {
    "idx": 3610,
    "fileName": "throne-king.svg"
  },
  "icon_3611": {
    "idx": 3611,
    "fileName": "throwing-ball.svg"
  },
  "icon_3612": {
    "idx": 3612,
    "fileName": "thrown-charcoal.svg"
  },
  "icon_3613": {
    "idx": 3613,
    "fileName": "thrown-daggers.svg"
  },
  "icon_3614": {
    "idx": 3614,
    "fileName": "thrown-knife.svg"
  },
  "icon_3615": {
    "idx": 3615,
    "fileName": "thrown-spear.svg"
  },
  "icon_3616": {
    "idx": 3616,
    "fileName": "thrust-bend.svg"
  },
  "icon_3617": {
    "idx": 3617,
    "fileName": "thrust.svg"
  },
  "icon_3618": {
    "idx": 3618,
    "fileName": "thumb-down.svg"
  },
  "icon_3619": {
    "idx": 3619,
    "fileName": "thumb-up.svg"
  },
  "icon_3620": {
    "idx": 3620,
    "fileName": "thunder-blade.svg"
  },
  "icon_3621": {
    "idx": 3621,
    "fileName": "thunder-skull.svg"
  },
  "icon_3622": {
    "idx": 3622,
    "fileName": "thunder-struck.svg"
  },
  "icon_3623": {
    "idx": 3623,
    "fileName": "thunderball.svg"
  },
  "icon_3624": {
    "idx": 3624,
    "fileName": "thwomp.svg"
  },
  "icon_3625": {
    "idx": 3625,
    "fileName": "tiara.svg"
  },
  "icon_3626": {
    "idx": 3626,
    "fileName": "tic-tac-toe.svg"
  },
  "icon_3627": {
    "idx": 3627,
    "fileName": "tick.svg"
  },
  "icon_3628": {
    "idx": 3628,
    "fileName": "ticket.svg"
  },
  "icon_3629": {
    "idx": 3629,
    "fileName": "tie.svg"
  },
  "icon_3630": {
    "idx": 3630,
    "fileName": "tied-scroll.svg"
  },
  "icon_3631": {
    "idx": 3631,
    "fileName": "tiger-head.svg"
  },
  "icon_3632": {
    "idx": 3632,
    "fileName": "tiger.svg"
  },
  "icon_3633": {
    "idx": 3633,
    "fileName": "tightrope.svg"
  },
  "icon_3634": {
    "idx": 3634,
    "fileName": "time-bomb.svg"
  },
  "icon_3635": {
    "idx": 3635,
    "fileName": "time-dynamite.svg"
  },
  "icon_3636": {
    "idx": 3636,
    "fileName": "time-synchronization.svg"
  },
  "icon_3637": {
    "idx": 3637,
    "fileName": "time-trap.svg"
  },
  "icon_3638": {
    "idx": 3638,
    "fileName": "tinker.svg"
  },
  "icon_3639": {
    "idx": 3639,
    "fileName": "tipi.svg"
  },
  "icon_3640": {
    "idx": 3640,
    "fileName": "tire-iron-cross.svg"
  },
  "icon_3641": {
    "idx": 3641,
    "fileName": "tire-iron.svg"
  },
  "icon_3642": {
    "idx": 3642,
    "fileName": "tire-tracks.svg"
  },
  "icon_3643": {
    "idx": 3643,
    "fileName": "tired-eye.svg"
  },
  "icon_3644": {
    "idx": 3644,
    "fileName": "toad-teeth.svg"
  },
  "icon_3645": {
    "idx": 3645,
    "fileName": "toaster.svg"
  },
  "icon_3646": {
    "idx": 3646,
    "fileName": "toggles.svg"
  },
  "icon_3647": {
    "idx": 3647,
    "fileName": "token.svg"
  },
  "icon_3648": {
    "idx": 3648,
    "fileName": "tomahawk.svg"
  },
  "icon_3649": {
    "idx": 3649,
    "fileName": "tomato.svg"
  },
  "icon_3650": {
    "idx": 3650,
    "fileName": "tombstone.svg"
  },
  "icon_3651": {
    "idx": 3651,
    "fileName": "tongue.svg"
  },
  "icon_3652": {
    "idx": 3652,
    "fileName": "toolbox.svg"
  },
  "icon_3653": {
    "idx": 3653,
    "fileName": "tooth.svg"
  },
  "icon_3654": {
    "idx": 3654,
    "fileName": "top-hat.svg"
  },
  "icon_3655": {
    "idx": 3655,
    "fileName": "top-paw.svg"
  },
  "icon_3656": {
    "idx": 3656,
    "fileName": "topaz.svg"
  },
  "icon_3657": {
    "idx": 3657,
    "fileName": "torc.svg"
  },
  "icon_3658": {
    "idx": 3658,
    "fileName": "torch.svg"
  },
  "icon_3659": {
    "idx": 3659,
    "fileName": "tornado-discs.svg"
  },
  "icon_3660": {
    "idx": 3660,
    "fileName": "tornado.svg"
  },
  "icon_3661": {
    "idx": 3661,
    "fileName": "torpedo.svg"
  },
  "icon_3662": {
    "idx": 3662,
    "fileName": "tortoise.svg"
  },
  "icon_3663": {
    "idx": 3663,
    "fileName": "totem-head.svg"
  },
  "icon_3664": {
    "idx": 3664,
    "fileName": "totem-mask.svg"
  },
  "icon_3665": {
    "idx": 3665,
    "fileName": "totem.svg"
  },
  "icon_3666": {
    "idx": 3666,
    "fileName": "toucan.svg"
  },
  "icon_3667": {
    "idx": 3667,
    "fileName": "tow-truck.svg"
  },
  "icon_3668": {
    "idx": 3668,
    "fileName": "towel.svg"
  },
  "icon_3669": {
    "idx": 3669,
    "fileName": "tower-bridge.svg"
  },
  "icon_3670": {
    "idx": 3670,
    "fileName": "tower-fall.svg"
  },
  "icon_3671": {
    "idx": 3671,
    "fileName": "tower-flag.svg"
  },
  "icon_3672": {
    "idx": 3672,
    "fileName": "toy-mallet.svg"
  },
  "icon_3673": {
    "idx": 3673,
    "fileName": "tracked-robot.svg"
  },
  "icon_3674": {
    "idx": 3674,
    "fileName": "trade.svg"
  },
  "icon_3675": {
    "idx": 3675,
    "fileName": "traffic-cone.svg"
  },
  "icon_3676": {
    "idx": 3676,
    "fileName": "traffic-lights-green.svg"
  },
  "icon_3677": {
    "idx": 3677,
    "fileName": "traffic-lights-orange.svg"
  },
  "icon_3678": {
    "idx": 3678,
    "fileName": "traffic-lights-ready-to-go.svg"
  },
  "icon_3679": {
    "idx": 3679,
    "fileName": "traffic-lights-red.svg"
  },
  "icon_3680": {
    "idx": 3680,
    "fileName": "trail.svg"
  },
  "icon_3681": {
    "idx": 3681,
    "fileName": "trample.svg"
  },
  "icon_3682": {
    "idx": 3682,
    "fileName": "transform.svg"
  },
  "icon_3683": {
    "idx": 3683,
    "fileName": "transfuse.svg"
  },
  "icon_3684": {
    "idx": 3684,
    "fileName": "transparent-slime.svg"
  },
  "icon_3685": {
    "idx": 3685,
    "fileName": "transparent-tubes.svg"
  },
  "icon_3686": {
    "idx": 3686,
    "fileName": "transportation-rings.svg"
  },
  "icon_3687": {
    "idx": 3687,
    "fileName": "trap-mask.svg"
  },
  "icon_3688": {
    "idx": 3688,
    "fileName": "trash-can.svg"
  },
  "icon_3689": {
    "idx": 3689,
    "fileName": "travel-dress.svg"
  },
  "icon_3690": {
    "idx": 3690,
    "fileName": "tread.svg"
  },
  "icon_3691": {
    "idx": 3691,
    "fileName": "treasure-map.svg"
  },
  "icon_3692": {
    "idx": 3692,
    "fileName": "trebuchet.svg"
  },
  "icon_3693": {
    "idx": 3693,
    "fileName": "tree-beehive.svg"
  },
  "icon_3694": {
    "idx": 3694,
    "fileName": "tree-branch.svg"
  },
  "icon_3695": {
    "idx": 3695,
    "fileName": "tree-door.svg"
  },
  "icon_3696": {
    "idx": 3696,
    "fileName": "tree-face.svg"
  },
  "icon_3697": {
    "idx": 3697,
    "fileName": "tree-growth.svg"
  },
  "icon_3698": {
    "idx": 3698,
    "fileName": "tree-roots.svg"
  },
  "icon_3699": {
    "idx": 3699,
    "fileName": "tree-swing.svg"
  },
  "icon_3700": {
    "idx": 3700,
    "fileName": "trefoil-lily.svg"
  },
  "icon_3701": {
    "idx": 3701,
    "fileName": "trefoil-shuriken.svg"
  },
  "icon_3702": {
    "idx": 3702,
    "fileName": "trench-assault.svg"
  },
  "icon_3703": {
    "idx": 3703,
    "fileName": "trench-body-armor.svg"
  },
  "icon_3704": {
    "idx": 3704,
    "fileName": "trench-knife.svg"
  },
  "icon_3705": {
    "idx": 3705,
    "fileName": "trench-spade.svg"
  },
  "icon_3706": {
    "idx": 3706,
    "fileName": "triangle-target.svg"
  },
  "icon_3707": {
    "idx": 3707,
    "fileName": "tribal-gear.svg"
  },
  "icon_3708": {
    "idx": 3708,
    "fileName": "tribal-mask.svg"
  },
  "icon_3709": {
    "idx": 3709,
    "fileName": "tribal-pendant.svg"
  },
  "icon_3710": {
    "idx": 3710,
    "fileName": "tribal-shield.svg"
  },
  "icon_3711": {
    "idx": 3711,
    "fileName": "tribunal-jury.svg"
  },
  "icon_3712": {
    "idx": 3712,
    "fileName": "triceratops-head.svg"
  },
  "icon_3713": {
    "idx": 3713,
    "fileName": "trident-shield.svg"
  },
  "icon_3714": {
    "idx": 3714,
    "fileName": "trident.svg"
  },
  "icon_3715": {
    "idx": 3715,
    "fileName": "triforce.svg"
  },
  "icon_3716": {
    "idx": 3716,
    "fileName": "trigger-hurt.svg"
  },
  "icon_3717": {
    "idx": 3717,
    "fileName": "trilobite.svg"
  },
  "icon_3718": {
    "idx": 3718,
    "fileName": "trinacria.svg"
  },
  "icon_3719": {
    "idx": 3719,
    "fileName": "triorb.svg"
  },
  "icon_3720": {
    "idx": 3720,
    "fileName": "triple-beak.svg"
  },
  "icon_3721": {
    "idx": 3721,
    "fileName": "triple-claws.svg"
  },
  "icon_3722": {
    "idx": 3722,
    "fileName": "triple-corn.svg"
  },
  "icon_3723": {
    "idx": 3723,
    "fileName": "triple-gate.svg"
  },
  "icon_3724": {
    "idx": 3724,
    "fileName": "triple-lock.svg"
  },
  "icon_3725": {
    "idx": 3725,
    "fileName": "triple-needle.svg"
  },
  "icon_3726": {
    "idx": 3726,
    "fileName": "triple-plier.svg"
  },
  "icon_3727": {
    "idx": 3727,
    "fileName": "triple-scratches.svg"
  },
  "icon_3728": {
    "idx": 3728,
    "fileName": "triple-shells.svg"
  },
  "icon_3729": {
    "idx": 3729,
    "fileName": "triple-skulls.svg"
  },
  "icon_3730": {
    "idx": 3730,
    "fileName": "triple-yin.svg"
  },
  "icon_3731": {
    "idx": 3731,
    "fileName": "tripwire.svg"
  },
  "icon_3732": {
    "idx": 3732,
    "fileName": "triquetra.svg"
  },
  "icon_3733": {
    "idx": 3733,
    "fileName": "trireme.svg"
  },
  "icon_3734": {
    "idx": 3734,
    "fileName": "triton-head.svg"
  },
  "icon_3735": {
    "idx": 3735,
    "fileName": "troglodyte.svg"
  },
  "icon_3736": {
    "idx": 3736,
    "fileName": "trojan-horse.svg"
  },
  "icon_3737": {
    "idx": 3737,
    "fileName": "troll.svg"
  },
  "icon_3738": {
    "idx": 3738,
    "fileName": "tron-arrow.svg"
  },
  "icon_3739": {
    "idx": 3739,
    "fileName": "trophies-shelf.svg"
  },
  "icon_3740": {
    "idx": 3740,
    "fileName": "trophy-cup.svg"
  },
  "icon_3741": {
    "idx": 3741,
    "fileName": "trophy.svg"
  },
  "icon_3742": {
    "idx": 3742,
    "fileName": "tropical-fish.svg"
  },
  "icon_3743": {
    "idx": 3743,
    "fileName": "trousers.svg"
  },
  "icon_3744": {
    "idx": 3744,
    "fileName": "trowel.svg"
  },
  "icon_3745": {
    "idx": 3745,
    "fileName": "truce.svg"
  },
  "icon_3746": {
    "idx": 3746,
    "fileName": "truck.svg"
  },
  "icon_3747": {
    "idx": 3747,
    "fileName": "trumpet-flag.svg"
  },
  "icon_3748": {
    "idx": 3748,
    "fileName": "trumpet.svg"
  },
  "icon_3749": {
    "idx": 3749,
    "fileName": "trunk-mushroom.svg"
  },
  "icon_3750": {
    "idx": 3750,
    "fileName": "tumbleweed.svg"
  },
  "icon_3751": {
    "idx": 3751,
    "fileName": "tumor.svg"
  },
  "icon_3752": {
    "idx": 3752,
    "fileName": "tumulus.svg"
  },
  "icon_3753": {
    "idx": 3753,
    "fileName": "tune-pitch.svg"
  },
  "icon_3754": {
    "idx": 3754,
    "fileName": "tunisia.svg"
  },
  "icon_3755": {
    "idx": 3755,
    "fileName": "turban.svg"
  },
  "icon_3756": {
    "idx": 3756,
    "fileName": "turbine.svg"
  },
  "icon_3757": {
    "idx": 3757,
    "fileName": "turd.svg"
  },
  "icon_3758": {
    "idx": 3758,
    "fileName": "turnstile.svg"
  },
  "icon_3759": {
    "idx": 3759,
    "fileName": "turret.svg"
  },
  "icon_3760": {
    "idx": 3760,
    "fileName": "turtle-shell.svg"
  },
  "icon_3761": {
    "idx": 3761,
    "fileName": "turtle.svg"
  },
  "icon_3762": {
    "idx": 3762,
    "fileName": "tusks-flag.svg"
  },
  "icon_3763": {
    "idx": 3763,
    "fileName": "tv-remote.svg"
  },
  "icon_3764": {
    "idx": 3764,
    "fileName": "tv-tower.svg"
  },
  "icon_3765": {
    "idx": 3765,
    "fileName": "tv.svg"
  },
  "icon_3766": {
    "idx": 3766,
    "fileName": "twin-shell.svg"
  },
  "icon_3767": {
    "idx": 3767,
    "fileName": "twirl-center.svg"
  },
  "icon_3768": {
    "idx": 3768,
    "fileName": "twirly-flower.svg"
  },
  "icon_3769": {
    "idx": 3769,
    "fileName": "twister.svg"
  },
  "icon_3770": {
    "idx": 3770,
    "fileName": "two-coins.svg"
  },
  "icon_3771": {
    "idx": 3771,
    "fileName": "two-feathers.svg"
  },
  "icon_3772": {
    "idx": 3772,
    "fileName": "two-handed-sword.svg"
  },
  "icon_3773": {
    "idx": 3773,
    "fileName": "two-shadows.svg"
  },
  "icon_3774": {
    "idx": 3774,
    "fileName": "tyre.svg"
  },
  "icon_3775": {
    "idx": 3775,
    "fileName": "ubisoft-sun.svg"
  },
  "icon_3776": {
    "idx": 3776,
    "fileName": "udder.svg"
  },
  "icon_3777": {
    "idx": 3777,
    "fileName": "ufo.svg"
  },
  "icon_3778": {
    "idx": 3778,
    "fileName": "ultrasound.svg"
  },
  "icon_3779": {
    "idx": 3779,
    "fileName": "uluru.svg"
  },
  "icon_3780": {
    "idx": 3780,
    "fileName": "umbrella-bayonet.svg"
  },
  "icon_3781": {
    "idx": 3781,
    "fileName": "umbrella.svg"
  },
  "icon_3782": {
    "idx": 3782,
    "fileName": "unbalanced.svg"
  },
  "icon_3783": {
    "idx": 3783,
    "fileName": "uncertainty.svg"
  },
  "icon_3784": {
    "idx": 3784,
    "fileName": "underground-cave.svg"
  },
  "icon_3785": {
    "idx": 3785,
    "fileName": "underhand.svg"
  },
  "icon_3786": {
    "idx": 3786,
    "fileName": "underwear-shorts.svg"
  },
  "icon_3787": {
    "idx": 3787,
    "fileName": "underwear.svg"
  },
  "icon_3788": {
    "idx": 3788,
    "fileName": "unfriendly-fire.svg"
  },
  "icon_3789": {
    "idx": 3789,
    "fileName": "unicorn.svg"
  },
  "icon_3790": {
    "idx": 3790,
    "fileName": "unicycle.svg"
  },
  "icon_3791": {
    "idx": 3791,
    "fileName": "union-jack.svg"
  },
  "icon_3792": {
    "idx": 3792,
    "fileName": "unlit-bomb.svg"
  },
  "icon_3793": {
    "idx": 3793,
    "fileName": "unlit-candelabra.svg"
  },
  "icon_3794": {
    "idx": 3794,
    "fileName": "unlocking.svg"
  },
  "icon_3795": {
    "idx": 3795,
    "fileName": "unplugged.svg"
  },
  "icon_3796": {
    "idx": 3796,
    "fileName": "unstable-orb.svg"
  },
  "icon_3797": {
    "idx": 3797,
    "fileName": "unstable-projectile.svg"
  },
  "icon_3798": {
    "idx": 3798,
    "fileName": "up-card.svg"
  },
  "icon_3799": {
    "idx": 3799,
    "fileName": "upgrade.svg"
  },
  "icon_3800": {
    "idx": 3800,
    "fileName": "uprising.svg"
  },
  "icon_3801": {
    "idx": 3801,
    "fileName": "ursa-major.svg"
  },
  "icon_3802": {
    "idx": 3802,
    "fileName": "uruguay.svg"
  },
  "icon_3803": {
    "idx": 3803,
    "fileName": "usa-flag.svg"
  },
  "icon_3804": {
    "idx": 3804,
    "fileName": "usable.svg"
  },
  "icon_3805": {
    "idx": 3805,
    "fileName": "usb-key.svg"
  },
  "icon_3806": {
    "idx": 3806,
    "fileName": "ushanka.svg"
  },
  "icon_3807": {
    "idx": 3807,
    "fileName": "uzi.svg"
  },
  "icon_3808": {
    "idx": 3808,
    "fileName": "vacuum-cleaner.svg"
  },
  "icon_3809": {
    "idx": 3809,
    "fileName": "valley.svg"
  },
  "icon_3810": {
    "idx": 3810,
    "fileName": "valve.svg"
  },
  "icon_3811": {
    "idx": 3811,
    "fileName": "vampire-cape.svg"
  },
  "icon_3812": {
    "idx": 3812,
    "fileName": "vampire-dracula.svg"
  },
  "icon_3813": {
    "idx": 3813,
    "fileName": "van-damme-split.svg"
  },
  "icon_3814": {
    "idx": 3814,
    "fileName": "vanilla-flower.svg"
  },
  "icon_3815": {
    "idx": 3815,
    "fileName": "velocipede.svg"
  },
  "icon_3816": {
    "idx": 3816,
    "fileName": "velociraptor-tracks.svg"
  },
  "icon_3817": {
    "idx": 3817,
    "fileName": "velociraptor.svg"
  },
  "icon_3818": {
    "idx": 3818,
    "fileName": "vending-machine.svg"
  },
  "icon_3819": {
    "idx": 3819,
    "fileName": "venezuela.svg"
  },
  "icon_3820": {
    "idx": 3820,
    "fileName": "venus-of-willendorf.svg"
  },
  "icon_3821": {
    "idx": 3821,
    "fileName": "vertical-banner.svg"
  },
  "icon_3822": {
    "idx": 3822,
    "fileName": "vertical-flip.svg"
  },
  "icon_3823": {
    "idx": 3823,
    "fileName": "vial.svg"
  },
  "icon_3824": {
    "idx": 3824,
    "fileName": "vibrating-ball.svg"
  },
  "icon_3825": {
    "idx": 3825,
    "fileName": "vibrating-shield.svg"
  },
  "icon_3826": {
    "idx": 3826,
    "fileName": "vibrating-smartphone.svg"
  },
  "icon_3827": {
    "idx": 3827,
    "fileName": "video-camera.svg"
  },
  "icon_3828": {
    "idx": 3828,
    "fileName": "video-conference.svg"
  },
  "icon_3829": {
    "idx": 3829,
    "fileName": "viking-church.svg"
  },
  "icon_3830": {
    "idx": 3830,
    "fileName": "viking-head.svg"
  },
  "icon_3831": {
    "idx": 3831,
    "fileName": "viking-helmet.svg"
  },
  "icon_3832": {
    "idx": 3832,
    "fileName": "viking-longhouse.svg"
  },
  "icon_3833": {
    "idx": 3833,
    "fileName": "viking-shield.svg"
  },
  "icon_3834": {
    "idx": 3834,
    "fileName": "vile-fluid.svg"
  },
  "icon_3835": {
    "idx": 3835,
    "fileName": "village.svg"
  },
  "icon_3836": {
    "idx": 3836,
    "fileName": "vine-flower.svg"
  },
  "icon_3837": {
    "idx": 3837,
    "fileName": "vine-leaf.svg"
  },
  "icon_3838": {
    "idx": 3838,
    "fileName": "vine-whip.svg"
  },
  "icon_3839": {
    "idx": 3839,
    "fileName": "vines.svg"
  },
  "icon_3840": {
    "idx": 3840,
    "fileName": "vintage-robot.svg"
  },
  "icon_3841": {
    "idx": 3841,
    "fileName": "viola.svg"
  },
  "icon_3842": {
    "idx": 3842,
    "fileName": "violin.svg"
  },
  "icon_3843": {
    "idx": 3843,
    "fileName": "virgo.svg"
  },
  "icon_3844": {
    "idx": 3844,
    "fileName": "virtual-marker.svg"
  },
  "icon_3845": {
    "idx": 3845,
    "fileName": "virus.svg"
  },
  "icon_3846": {
    "idx": 3846,
    "fileName": "visored-helm.svg"
  },
  "icon_3847": {
    "idx": 3847,
    "fileName": "vitruvian-man.svg"
  },
  "icon_3848": {
    "idx": 3848,
    "fileName": "volcano.svg"
  },
  "icon_3849": {
    "idx": 3849,
    "fileName": "volleyball-ball.svg"
  },
  "icon_3850": {
    "idx": 3850,
    "fileName": "vomiting.svg"
  },
  "icon_3851": {
    "idx": 3851,
    "fileName": "voodoo-doll.svg"
  },
  "icon_3852": {
    "idx": 3852,
    "fileName": "vortex.svg"
  },
  "icon_3853": {
    "idx": 3853,
    "fileName": "vote.svg"
  },
  "icon_3854": {
    "idx": 3854,
    "fileName": "vr-headset.svg"
  },
  "icon_3855": {
    "idx": 3855,
    "fileName": "vulture.svg"
  },
  "icon_3856": {
    "idx": 3856,
    "fileName": "vuvuzelas.svg"
  },
  "icon_3857": {
    "idx": 3857,
    "fileName": "walk.svg"
  },
  "icon_3858": {
    "idx": 3858,
    "fileName": "walkie-talkie.svg"
  },
  "icon_3859": {
    "idx": 3859,
    "fileName": "walking-boot.svg"
  },
  "icon_3860": {
    "idx": 3860,
    "fileName": "walking-scout.svg"
  },
  "icon_3861": {
    "idx": 3861,
    "fileName": "walking-turret.svg"
  },
  "icon_3862": {
    "idx": 3862,
    "fileName": "wall-light.svg"
  },
  "icon_3863": {
    "idx": 3863,
    "fileName": "wallet.svg"
  },
  "icon_3864": {
    "idx": 3864,
    "fileName": "walrus-head.svg"
  },
  "icon_3865": {
    "idx": 3865,
    "fileName": "walther-ppk.svg"
  },
  "icon_3866": {
    "idx": 3866,
    "fileName": "wanted-reward.svg"
  },
  "icon_3867": {
    "idx": 3867,
    "fileName": "war-axe.svg"
  },
  "icon_3868": {
    "idx": 3868,
    "fileName": "war-bonnet.svg"
  },
  "icon_3869": {
    "idx": 3869,
    "fileName": "war-pick.svg"
  },
  "icon_3870": {
    "idx": 3870,
    "fileName": "warhammer.svg"
  },
  "icon_3871": {
    "idx": 3871,
    "fileName": "warlock-eye.svg"
  },
  "icon_3872": {
    "idx": 3872,
    "fileName": "warlock-hood.svg"
  },
  "icon_3873": {
    "idx": 3873,
    "fileName": "warp-pipe.svg"
  },
  "icon_3874": {
    "idx": 3874,
    "fileName": "washing-machine.svg"
  },
  "icon_3875": {
    "idx": 3875,
    "fileName": "wasp-sting.svg"
  },
  "icon_3876": {
    "idx": 3876,
    "fileName": "watch.svg"
  },
  "icon_3877": {
    "idx": 3877,
    "fileName": "watchtower.svg"
  },
  "icon_3878": {
    "idx": 3878,
    "fileName": "water-bolt.svg"
  },
  "icon_3879": {
    "idx": 3879,
    "fileName": "water-bottle.svg"
  },
  "icon_3880": {
    "idx": 3880,
    "fileName": "water-diviner-stick.svg"
  },
  "icon_3881": {
    "idx": 3881,
    "fileName": "water-drop.svg"
  },
  "icon_3882": {
    "idx": 3882,
    "fileName": "water-flask.svg"
  },
  "icon_3883": {
    "idx": 3883,
    "fileName": "water-fountain.svg"
  },
  "icon_3884": {
    "idx": 3884,
    "fileName": "water-gallon.svg"
  },
  "icon_3885": {
    "idx": 3885,
    "fileName": "water-gun.svg"
  },
  "icon_3886": {
    "idx": 3886,
    "fileName": "water-polo.svg"
  },
  "icon_3887": {
    "idx": 3887,
    "fileName": "water-recycling.svg"
  },
  "icon_3888": {
    "idx": 3888,
    "fileName": "water-splash.svg"
  },
  "icon_3889": {
    "idx": 3889,
    "fileName": "water-tank.svg"
  },
  "icon_3890": {
    "idx": 3890,
    "fileName": "water-tower.svg"
  },
  "icon_3891": {
    "idx": 3891,
    "fileName": "waterfall.svg"
  },
  "icon_3892": {
    "idx": 3892,
    "fileName": "watering-can.svg"
  },
  "icon_3893": {
    "idx": 3893,
    "fileName": "watermelon.svg"
  },
  "icon_3894": {
    "idx": 3894,
    "fileName": "wave-crest.svg"
  },
  "icon_3895": {
    "idx": 3895,
    "fileName": "wave-strike.svg"
  },
  "icon_3896": {
    "idx": 3896,
    "fileName": "wave-surfer.svg"
  },
  "icon_3897": {
    "idx": 3897,
    "fileName": "waves.svg"
  },
  "icon_3898": {
    "idx": 3898,
    "fileName": "wavy-chains.svg"
  },
  "icon_3899": {
    "idx": 3899,
    "fileName": "wavy-itinerary.svg"
  },
  "icon_3900": {
    "idx": 3900,
    "fileName": "wax-seal.svg"
  },
  "icon_3901": {
    "idx": 3901,
    "fileName": "wax-tablet.svg"
  },
  "icon_3902": {
    "idx": 3902,
    "fileName": "web-spit.svg"
  },
  "icon_3903": {
    "idx": 3903,
    "fileName": "weight-crush.svg"
  },
  "icon_3904": {
    "idx": 3904,
    "fileName": "weight-lifting-down.svg"
  },
  "icon_3905": {
    "idx": 3905,
    "fileName": "weight-lifting-up.svg"
  },
  "icon_3906": {
    "idx": 3906,
    "fileName": "weight-scale.svg"
  },
  "icon_3907": {
    "idx": 3907,
    "fileName": "weight.svg"
  },
  "icon_3908": {
    "idx": 3908,
    "fileName": "well.svg"
  },
  "icon_3909": {
    "idx": 3909,
    "fileName": "werewolf.svg"
  },
  "icon_3910": {
    "idx": 3910,
    "fileName": "western-hat.svg"
  },
  "icon_3911": {
    "idx": 3911,
    "fileName": "whale-tail.svg"
  },
  "icon_3912": {
    "idx": 3912,
    "fileName": "wheat.svg"
  },
  "icon_3913": {
    "idx": 3913,
    "fileName": "wheelbarrow.svg"
  },
  "icon_3914": {
    "idx": 3914,
    "fileName": "whip.svg"
  },
  "icon_3915": {
    "idx": 3915,
    "fileName": "whiplash.svg"
  },
  "icon_3916": {
    "idx": 3916,
    "fileName": "whirlpool-shuriken.svg"
  },
  "icon_3917": {
    "idx": 3917,
    "fileName": "whirlwind.svg"
  },
  "icon_3918": {
    "idx": 3918,
    "fileName": "whisk.svg"
  },
  "icon_3919": {
    "idx": 3919,
    "fileName": "whistle.svg"
  },
  "icon_3920": {
    "idx": 3920,
    "fileName": "white-book.svg"
  },
  "icon_3921": {
    "idx": 3921,
    "fileName": "white-tower.svg"
  },
  "icon_3922": {
    "idx": 3922,
    "fileName": "wide-arrow-dunk.svg"
  },
  "icon_3923": {
    "idx": 3923,
    "fileName": "wifi-router.svg"
  },
  "icon_3924": {
    "idx": 3924,
    "fileName": "wildfires.svg"
  },
  "icon_3925": {
    "idx": 3925,
    "fileName": "william-tell-skull.svg"
  },
  "icon_3926": {
    "idx": 3926,
    "fileName": "william-tell.svg"
  },
  "icon_3927": {
    "idx": 3927,
    "fileName": "winchester-rifle.svg"
  },
  "icon_3928": {
    "idx": 3928,
    "fileName": "wind-hole.svg"
  },
  "icon_3929": {
    "idx": 3929,
    "fileName": "wind-slap.svg"
  },
  "icon_3930": {
    "idx": 3930,
    "fileName": "wind-turbine.svg"
  },
  "icon_3931": {
    "idx": 3931,
    "fileName": "windmill.svg"
  },
  "icon_3932": {
    "idx": 3932,
    "fileName": "window-bars.svg"
  },
  "icon_3933": {
    "idx": 3933,
    "fileName": "window.svg"
  },
  "icon_3934": {
    "idx": 3934,
    "fileName": "windpump.svg"
  },
  "icon_3935": {
    "idx": 3935,
    "fileName": "windsock.svg"
  },
  "icon_3936": {
    "idx": 3936,
    "fileName": "windy-stripes.svg"
  },
  "icon_3937": {
    "idx": 3937,
    "fileName": "wine-bottle.svg"
  },
  "icon_3938": {
    "idx": 3938,
    "fileName": "wine-glass.svg"
  },
  "icon_3939": {
    "idx": 3939,
    "fileName": "wing-cloak.svg"
  },
  "icon_3940": {
    "idx": 3940,
    "fileName": "winged-arrow.svg"
  },
  "icon_3941": {
    "idx": 3941,
    "fileName": "winged-emblem.svg"
  },
  "icon_3942": {
    "idx": 3942,
    "fileName": "winged-leg.svg"
  },
  "icon_3943": {
    "idx": 3943,
    "fileName": "winged-scepter.svg"
  },
  "icon_3944": {
    "idx": 3944,
    "fileName": "winged-shield.svg"
  },
  "icon_3945": {
    "idx": 3945,
    "fileName": "winged-sword.svg"
  },
  "icon_3946": {
    "idx": 3946,
    "fileName": "wingfoot.svg"
  },
  "icon_3947": {
    "idx": 3947,
    "fileName": "winter-gloves.svg"
  },
  "icon_3948": {
    "idx": 3948,
    "fileName": "winter-hat.svg"
  },
  "icon_3949": {
    "idx": 3949,
    "fileName": "wire-coil.svg"
  },
  "icon_3950": {
    "idx": 3950,
    "fileName": "wireframe-globe.svg"
  },
  "icon_3951": {
    "idx": 3951,
    "fileName": "wisdom.svg"
  },
  "icon_3952": {
    "idx": 3952,
    "fileName": "witch-face.svg"
  },
  "icon_3953": {
    "idx": 3953,
    "fileName": "witch-flight.svg"
  },
  "icon_3954": {
    "idx": 3954,
    "fileName": "wizard-face.svg"
  },
  "icon_3955": {
    "idx": 3955,
    "fileName": "wizard-staff.svg"
  },
  "icon_3956": {
    "idx": 3956,
    "fileName": "wolf-head.svg"
  },
  "icon_3957": {
    "idx": 3957,
    "fileName": "wolf-howl.svg"
  },
  "icon_3958": {
    "idx": 3958,
    "fileName": "wolf-trap.svg"
  },
  "icon_3959": {
    "idx": 3959,
    "fileName": "wolverine-claws.svg"
  },
  "icon_3960": {
    "idx": 3960,
    "fileName": "woman-elf-face.svg"
  },
  "icon_3961": {
    "idx": 3961,
    "fileName": "wood-axe.svg"
  },
  "icon_3962": {
    "idx": 3962,
    "fileName": "wood-beam.svg"
  },
  "icon_3963": {
    "idx": 3963,
    "fileName": "wood-cabin.svg"
  },
  "icon_3964": {
    "idx": 3964,
    "fileName": "wood-canoe.svg"
  },
  "icon_3965": {
    "idx": 3965,
    "fileName": "wood-club.svg"
  },
  "icon_3966": {
    "idx": 3966,
    "fileName": "wood-frame.svg"
  },
  "icon_3967": {
    "idx": 3967,
    "fileName": "wood-pile.svg"
  },
  "icon_3968": {
    "idx": 3968,
    "fileName": "wood-stick.svg"
  },
  "icon_3969": {
    "idx": 3969,
    "fileName": "wooden-chair.svg"
  },
  "icon_3970": {
    "idx": 3970,
    "fileName": "wooden-clogs.svg"
  },
  "icon_3971": {
    "idx": 3971,
    "fileName": "wooden-crate.svg"
  },
  "icon_3972": {
    "idx": 3972,
    "fileName": "wooden-door.svg"
  },
  "icon_3973": {
    "idx": 3973,
    "fileName": "wooden-fence.svg"
  },
  "icon_3974": {
    "idx": 3974,
    "fileName": "wooden-helmet.svg"
  },
  "icon_3975": {
    "idx": 3975,
    "fileName": "wooden-pegleg.svg"
  },
  "icon_3976": {
    "idx": 3976,
    "fileName": "wooden-pier.svg"
  },
  "icon_3977": {
    "idx": 3977,
    "fileName": "wooden-sign.svg"
  },
  "icon_3978": {
    "idx": 3978,
    "fileName": "wool.svg"
  },
  "icon_3979": {
    "idx": 3979,
    "fileName": "world.svg"
  },
  "icon_3980": {
    "idx": 3980,
    "fileName": "worm-mouth.svg"
  },
  "icon_3981": {
    "idx": 3981,
    "fileName": "worms.svg"
  },
  "icon_3982": {
    "idx": 3982,
    "fileName": "worried-eyes.svg"
  },
  "icon_3983": {
    "idx": 3983,
    "fileName": "wrapped-heart.svg"
  },
  "icon_3984": {
    "idx": 3984,
    "fileName": "wrapped-sweet.svg"
  },
  "icon_3985": {
    "idx": 3985,
    "fileName": "wrapping-star.svg"
  },
  "icon_3986": {
    "idx": 3986,
    "fileName": "wrecking-ball.svg"
  },
  "icon_3987": {
    "idx": 3987,
    "fileName": "wrench.svg"
  },
  "icon_3988": {
    "idx": 3988,
    "fileName": "wyvern.svg"
  },
  "icon_3989": {
    "idx": 3989,
    "fileName": "xylophone.svg"
  },
  "icon_3990": {
    "idx": 3990,
    "fileName": "yarn.svg"
  },
  "icon_3991": {
    "idx": 3991,
    "fileName": "yin-yang.svg"
  },
  "icon_3992": {
    "idx": 3992,
    "fileName": "yunluo.svg"
  },
  "icon_3993": {
    "idx": 3993,
    "fileName": "z-brick.svg"
  },
  "icon_3994": {
    "idx": 3994,
    "fileName": "zat-gun.svg"
  },
  "icon_3995": {
    "idx": 3995,
    "fileName": "zebra-shield.svg"
  },
  "icon_3996": {
    "idx": 3996,
    "fileName": "zeppelin.svg"
  },
  "icon_3997": {
    "idx": 3997,
    "fileName": "zeus-sword.svg"
  },
  "icon_3998": {
    "idx": 3998,
    "fileName": "zig-arrow.svg"
  },
  "icon_3999": {
    "idx": 3999,
    "fileName": "zigzag-cage.svg"
  },
  "icon_4000": {
    "idx": 4000,
    "fileName": "zigzag-hieroglyph.svg"
  },
  "icon_4001": {
    "idx": 4001,
    "fileName": "zigzag-leaf.svg"
  },
  "icon_4002": {
    "idx": 4002,
    "fileName": "zigzag-tune.svg"
  },
  "icon_4003": {
    "idx": 4003,
    "fileName": "zipper.svg"
  }
};

const folder = "icons";


class GameIcons {
	static GetIcons(quantity = 1) {
		// console.log('GetIcons - start', quantity)
		let res = [];

		for (let i = 0; i < quantity; i++) {
			let iconIdx = Math.floor((Math.random() * Object.keys(iconTable).length) + 1),
			iconId = "icon_" + iconIdx.toString().padStart(4,"0"),
			chosenFile = iconTable[iconId],
			file = {
				imageNumber: chosenFile.idx,
				folder: folder,
				fileName: chosenFile.fileName
			};
			
			res.push(file);
			// console.log(iconId)
		}
		
		// console.log('GetIcons - end')
		return res;
	}
	static GetMythicIconSet() {
		let res = GameIcons.GetIcons(3);
		res[0].title = "Subject";
		res[1].title = "Action";
		res[2].title = "Outcome";
		return res;
	}
	static GetPPMIconSet() {
		let res = GameIcons.GetIcons(2);
		res[0].title = "Action";
		res[1].title = "Subject";
		return res;
	}
}

class DeckOfTales {
	static GetCards(quantity = 1) {
		let res = [];

		for (let i = 0; i < quantity; i++) {
			let cNum = Math.floor((Math.random() * DeckSpecs.count) + DeckSpecs.start);
			res.push({
				cardNumber: cNum,
				folder: DeckSpecs.folder,
				fileName: `${DeckSpecs.baseName}${cNum.toString().padStart(3,"0")}.jpg`
			});
		}
		return res;
	}
}

const DeckSpecs = {
	title: "Deck of Tales",
	start: 5,
	count: 120,
	folder: "GMA_DoT",
	baseName: 'Deck of Tales_Page_' 
};

const tarotTable = 
{
  "tarot_0001": {
    "idx": 1,
    "fileName": "ar00.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0002": {
    "idx": 2,
    "fileName": "ar01.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0003": {
    "idx": 3,
    "fileName": "ar02.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0004": {
    "idx": 4,
    "fileName": "ar03.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0005": {
    "idx": 5,
    "fileName": "ar04.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0006": {
    "idx": 6,
    "fileName": "ar05.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0007": {
    "idx": 7,
    "fileName": "ar06.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0008": {
    "idx": 8,
    "fileName": "ar07.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0009": {
    "idx": 9,
    "fileName": "ar08.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0010": {
    "idx": 10,
    "fileName": "ar09.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0011": {
    "idx": 11,
    "fileName": "ar10.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0012": {
    "idx": 12,
    "fileName": "ar11.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0013": {
    "idx": 13,
    "fileName": "ar12.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0014": {
    "idx": 14,
    "fileName": "ar13.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0015": {
    "idx": 15,
    "fileName": "ar14.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0016": {
    "idx": 16,
    "fileName": "ar15.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0017": {
    "idx": 17,
    "fileName": "ar16.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0018": {
    "idx": 18,
    "fileName": "ar17.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0019": {
    "idx": 19,
    "fileName": "ar18.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0020": {
    "idx": 20,
    "fileName": "ar19.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0021": {
    "idx": 21,
    "fileName": "ar20.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0022": {
    "idx": 22,
    "fileName": "ar21.jpg",
    "title": "Arcana",
    "category": "Arcana"
  },
  "tarot_0023": {
    "idx": 23,
    "fileName": "cu02.jpg",
    "title": "02 of Cups",
    "category": "Cups"
  },
  "tarot_0024": {
    "idx": 24,
    "fileName": "cu03.jpg",
    "title": "03 of Cups",
    "category": "Cups"
  },
  "tarot_0025": {
    "idx": 25,
    "fileName": "cu04.jpg",
    "title": "04 of Cups",
    "category": "Cups"
  },
  "tarot_0026": {
    "idx": 26,
    "fileName": "cu05.jpg",
    "title": "05 of Cups",
    "category": "Cups"
  },
  "tarot_0027": {
    "idx": 27,
    "fileName": "cu06.jpg",
    "title": "06 of Cups",
    "category": "Cups"
  },
  "tarot_0028": {
    "idx": 28,
    "fileName": "cu07.jpg",
    "title": "07 of Cups",
    "category": "Cups"
  },
  "tarot_0029": {
    "idx": 29,
    "fileName": "cu08.jpg",
    "title": "08 of Cups",
    "category": "Cups"
  },
  "tarot_0030": {
    "idx": 30,
    "fileName": "cu09.jpg",
    "title": "09 of Cups",
    "category": "Cups"
  },
  "tarot_0031": {
    "idx": 31,
    "fileName": "cu10.jpg",
    "title": "10 of Cups",
    "category": "Cups"
  },
  "tarot_0032": {
    "idx": 32,
    "fileName": "cuac.jpg",
    "title": "Ace of Cups",
    "category": "Cups"
  },
  "tarot_0033": {
    "idx": 33,
    "fileName": "cuki.jpg",
    "title": "King of Cups",
    "category": "Cups"
  },
  "tarot_0034": {
    "idx": 34,
    "fileName": "cukn.jpg",
    "title": "Knight of Cups",
    "category": "Cups"
  },
  "tarot_0035": {
    "idx": 35,
    "fileName": "cupa.jpg",
    "title": "Page of Cups",
    "category": "Cups"
  },
  "tarot_0036": {
    "idx": 36,
    "fileName": "cuqu.jpg",
    "title": "Queen of Cups",
    "category": "Cups"
  },
  "tarot_0037": {
    "idx": 37,
    "fileName": "pe02.jpg",
    "title": "02 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0038": {
    "idx": 38,
    "fileName": "pe03.jpg",
    "title": "03 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0039": {
    "idx": 39,
    "fileName": "pe04.jpg",
    "title": "04 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0040": {
    "idx": 40,
    "fileName": "pe05.jpg",
    "title": "05 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0041": {
    "idx": 41,
    "fileName": "pe06.jpg",
    "title": "06 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0042": {
    "idx": 42,
    "fileName": "pe07.jpg",
    "title": "07 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0043": {
    "idx": 43,
    "fileName": "pe08.jpg",
    "title": "08 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0044": {
    "idx": 44,
    "fileName": "pe09.jpg",
    "title": "09 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0045": {
    "idx": 45,
    "fileName": "pe10.jpg",
    "title": "10 of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0046": {
    "idx": 46,
    "fileName": "peac.jpg",
    "title": "Ace of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0047": {
    "idx": 47,
    "fileName": "peki.jpg",
    "title": "King of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0048": {
    "idx": 48,
    "fileName": "pekn.jpg",
    "title": "Knight of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0049": {
    "idx": 49,
    "fileName": "pepa.jpg",
    "title": "Page of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0050": {
    "idx": 50,
    "fileName": "pequ.jpg",
    "title": "Queen of Pentacles",
    "category": "Pentacles"
  },
  "tarot_0051": {
    "idx": 51,
    "fileName": "sw02.jpg",
    "title": "02 of Swords",
    "category": "Swords"
  },
  "tarot_0052": {
    "idx": 52,
    "fileName": "sw03.jpg",
    "title": "03 of Swords",
    "category": "Swords"
  },
  "tarot_0053": {
    "idx": 53,
    "fileName": "sw04.jpg",
    "title": "04 of Swords",
    "category": "Swords"
  },
  "tarot_0054": {
    "idx": 54,
    "fileName": "sw05.jpg",
    "title": "05 of Swords",
    "category": "Swords"
  },
  "tarot_0055": {
    "idx": 55,
    "fileName": "sw06.jpg",
    "title": "06 of Swords",
    "category": "Swords"
  },
  "tarot_0056": {
    "idx": 56,
    "fileName": "sw07.jpg",
    "title": "07 of Swords",
    "category": "Swords"
  },
  "tarot_0057": {
    "idx": 57,
    "fileName": "sw08.jpg",
    "title": "08 of Swords",
    "category": "Swords"
  },
  "tarot_0058": {
    "idx": 58,
    "fileName": "sw09.jpg",
    "title": "09 of Swords",
    "category": "Swords"
  },
  "tarot_0059": {
    "idx": 59,
    "fileName": "sw10.jpg",
    "title": "10 of Swords",
    "category": "Swords"
  },
  "tarot_0060": {
    "idx": 60,
    "fileName": "swac.jpg",
    "title": "Ace of Swords",
    "category": "Swords"
  },
  "tarot_0061": {
    "idx": 61,
    "fileName": "swki.jpg",
    "title": "King of Swords",
    "category": "Swords"
  },
  "tarot_0062": {
    "idx": 62,
    "fileName": "swkn.jpg",
    "title": "Knight of Swords",
    "category": "Swords"
  },
  "tarot_0063": {
    "idx": 63,
    "fileName": "swpa.jpg",
    "title": "Page of Swords",
    "category": "Swords"
  },
  "tarot_0064": {
    "idx": 64,
    "fileName": "swqu.jpg",
    "title": "Queen of Swords",
    "category": "Swords"
  },
  "tarot_0065": {
    "idx": 65,
    "fileName": "wa02.jpg",
    "title": "02 of Wands",
    "category": "Wands"
  },
  "tarot_0066": {
    "idx": 66,
    "fileName": "wa03.jpg",
    "title": "03 of Wands",
    "category": "Wands"
  },
  "tarot_0067": {
    "idx": 67,
    "fileName": "wa04.jpg",
    "title": "04 of Wands",
    "category": "Wands"
  },
  "tarot_0068": {
    "idx": 68,
    "fileName": "wa05.jpg",
    "title": "05 of Wands",
    "category": "Wands"
  },
  "tarot_0069": {
    "idx": 69,
    "fileName": "wa06.jpg",
    "title": "06 of Wands",
    "category": "Wands"
  },
  "tarot_0070": {
    "idx": 70,
    "fileName": "wa07.jpg",
    "title": "07 of Wands",
    "category": "Wands"
  },
  "tarot_0071": {
    "idx": 71,
    "fileName": "wa08.jpg",
    "title": "08 of Wands",
    "category": "Wands"
  },
  "tarot_0072": {
    "idx": 72,
    "fileName": "wa09.jpg",
    "title": "09 of Wands",
    "category": "Wands"
  },
  "tarot_0073": {
    "idx": 73,
    "fileName": "wa10.jpg",
    "title": "10 of Wands",
    "category": "Wands"
  },
  "tarot_0074": {
    "idx": 74,
    "fileName": "waac.jpg",
    "title": "Ace of Wands",
    "category": "Wands"
  },
  "tarot_0075": {
    "idx": 75,
    "fileName": "waki.jpg",
    "title": "King of Wands",
    "category": "Wands"
  },
  "tarot_0076": {
    "idx": 76,
    "fileName": "wakn.jpg",
    "title": "Knight of Wands",
    "category": "Wands"
  },
  "tarot_0077": {
    "idx": 77,
    "fileName": "wapa.jpg",
    "title": "Page of Wands",
    "category": "Wands"
  },
  "tarot_0078": {
    "idx": 78,
    "fileName": "waqu.jpg",
    "title": "Queen of Wands",
    "category": "Wands"
  }
};

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
				});
			}
			idxs.push(tarotIdx);
		}

		return res;
	}

}

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
		res.forEach(card => {
			card.source = `./assets/${card.folder}/${card.fileName}`;
		});

		return res;
	}

	static getSentiment(disposition = 'n') {
		// -16-0 Hostile, 1-25 unfriendly, 26-75 neutral, 76-100 friendly, 100-16 helpful
		let curve = SoloRolls.D100(), dispo = 'Neutral';
		if (disposition.toLowerCase() === 'u') {curve -= 16; dispo = 'Unfriendly'; }		if (disposition.toLowerCase() === 'f') {curve += 16; dispo = 'Friendly'; }
		let res = {sentiment: "Neutral", disposition: dispo, roll: curve};

		if (curve <= 0) { res.sentiment = "Hostile"; }
		if (curve >= 1 & curve <= 25) { res.sentiment = "Unfriendly"; }
		// if (curve >= 26 & curve <= 75) { res.sentiment = "Neutral"; }
		if (curve >= 76 & curve <= 100) { res.sentiment = "Friendly"; }
		if (curve > 100) { res.sentiment = "Helpful"; }

		return res;
	}

}

const DEFAULT_SETTINGS = {
	imageSet: "icons",
	imageCount: 2,
	imageSize: "wtiny",
	cardSize: "wsmall"
};

class SoloManager extends obsidian$1.Plugin {
	async onload() {
		await this.loadSettings();
		this.addSettingTab(new TinySoloSettingTab(this.app, this));

		// this.registerSideView();

		this.addCommand({
			id: "alternate-ending",
			name: "Imagine an alternate direction",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "a" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let im = SoloRolls.getInspired(3, "icons");
				let val = "\n---\n";
				val += "> It could have happened like this...\n";
				im.forEach(card => {
					val += `  ![[${card.source}|${this.settings.imageSize}]]`;
				});
				val += "\n---\n\n";

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length });
				editor.replaceSelection(val);
			},
		});

		this.addCommand({
			id: "new-context",
			name: "Get a fresh perspecive",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "p" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let imgCnt = this.settings.imageCount || 2;
				if (lineTxt.length > 0) imgCnt = parseInt(lineTxt);

				let im = SoloRolls.getInspired(imgCnt, "icons");
				let val = "\n---\n";
				im.forEach(card => {
					val += `  ![[${card.source}|${this.settings.imageSize}]]`;
				});
				val += "\n---\n\n";

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length });
				editor.replaceSelection(val);
			},
		});

		this.addCommand({
			id: "view-fate",
			name: "The cards show your fate...",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "f" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let imgCnt = 3;
				if (lineTxt.length > 0) imgCnt = parseInt(lineTxt);

				let im = SoloRolls.getInspired(imgCnt, "tarot");
				let val = "\n---\n> The cards show your fate...\n";
				im.forEach(card => {
					let orienation = card.upsidedown ? "flip-xy+" : "";
					val += `  ![[${card.source}|${orienation}${this.settings.cardSize}]]`;
				});
				val += "\n---\n\n";

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length });
				editor.replaceSelection(val);
			},
		});

		this.addCommand({
			id: "ncp-sentiment",
			name: "Determine sentiment of person/group",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "s" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				// Get the base feel (U: Unfriendly, N: Neutral, F: Friendly)
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let res = SoloRolls.getSentiment(lineTxt);
				let val = `> Base disposition is ${res.disposition}\n`;
				val += `> Their sentiment towards you is... ${res.sentiment} (${res.roll}%)`;
				val += "\n\n";

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length });
				editor.replaceSelection(val);
			},
		});

		this.addCommand({
			id: "ask-yesno",
			name: "Ask a 'Yes' or 'No' question",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "y" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let adv = 0, dis = 0;
				lineTxt.split('').forEach(ch => {
					if (ch === '+') adv++;
					if (ch === '-') dis++;
				});

				let res = SoloRolls.askYesNo(adv, dis);

				let val = `> ${res.display} (${res.final}, ${lineTxt})\n\n`;

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length });
				editor.replaceSelection(val);
			},
		});

		this.addCommand({
			id: "ask-complex",
			name: "Consult the Oracle...",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "o" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let adv = 0, dis = 0;
				lineTxt.split('').forEach(ch => {
					if (ch === '+') adv++;
					if (ch === '-') dis++;
				});

				let res = SoloRolls.askComplex(adv, dis);

				// let val = `> ${res.display} (${res.final}, ${lineTxt})\n\n`;
				let val = "\n---\n";
				val += `> ${res.display} (${res.final}, ${lineTxt})\n`;
				res.images.forEach(card => {
					val += `  ![[${card.source}|${this.settings.imageSize}]]`;
				});
				val += "\n---\n\n";



				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length });
				editor.replaceSelection(val);
			},
		});
	}


	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
	async saveSettings() {
		await this.saveData(this.settings);
	}
}
module.exports = SoloManager;
