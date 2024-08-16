import { Plugin } from "obsidian";
import SoloGamerSettingTab from './SoloGamerSettingTab.js'
import SoloRolls from './solo-rolls.js';


const DEFAULT_SETTINGS = {
	imageSet: "icons",
	imageCount: 2,
	imageSize: "wsmall"
};
const writeLog = false

class SoloManager extends Plugin {
	async onload() {
		await this.loadSettings();
		this.addSettingTab(new SoloGamerSettingTab(this.app, this));

		// this.registerSideView();

		this.addCommand({
			id: "alternate-ending",
			name: "Imagine an alternate direction",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "a" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let im = SoloRolls.getInspired(3, "icons");
				let val = "\n---\n"
				val += "> It could have happened like this...\n";
				im.forEach(card => {
					let orienation = card.upsidedown ? "flip-xy+" : "";
					val += `![[${card.source}|${orienation}${this.settings.imageSize}]] `
				});
				val += "\n\n"
				if (writeLog) console.log(val);

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length })
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

				let imgCnt = this.settings.imageCount || 1;
				if (lineTxt.length > 0) imgCnt = parseInt(lineTxt);

				let im = SoloRolls.getInspired(imgCnt, "icons");
				let val = "\n---\n"
				im.forEach(card => {
					let orienation = card.upsidedown ? "flip-xy+" : "";
					val += `![[${card.source}|${orienation}${this.settings.imageSize}]] `
				});
				val += "\n\n"

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length })
				editor.replaceSelection(val);
			},
		});

		this.addCommand({
			id: "view-fate",
			name: "Consult the Oracle",
			hotkeys: [{ modifiers: ["Alt", "Shift"], key: "o" }],
			editorCallback: (editor, view) => { //editor: Editor, view: MarkdownView
				const { line } = editor.getCursor(),
				lineTxt = editor.getLine(line);

				let imgCnt = this.settings.imageCount || 1;
				if (lineTxt.length > 0) imgCnt = parseInt(lineTxt);

				let im = SoloRolls.getInspired(imgCnt, "tarot");
				let val = "\n---\n"
				im.forEach(card => {
					let orienation = card.upsidedown ? "flip-xy+" : "";
					val += `![[${card.source}|${orienation}${this.settings.imageSize}]] `
				});
				val += "\n\n"

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length })
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
				val += "\n\n"

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length })
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
				if (writeLog) console.log(adv, dis);

				let res = SoloRolls.askYesNo(adv, dis);

				if (writeLog) console.log(res);

				let val = `> ${res.display} (${res.final}, ${lineTxt})\n\n`;

				editor.setSelection({ line: line, ch: 0 }, { line: line, ch: lineTxt.length })
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
};

module.exports = SoloManager;

