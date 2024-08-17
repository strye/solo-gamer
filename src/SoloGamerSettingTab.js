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
		})


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
		})

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
		})

	}
};

export default TinySoloSettingTab;