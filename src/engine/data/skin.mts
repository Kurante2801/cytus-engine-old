import { SkinSpriteName } from "sonolus-core";

export const skin = defineSkin({
	sprites: {
		judgment: SkinSpriteName.JudgmentLine,

		tapUp: "Cytus Tap Up",
		tapDown: "Cytus Tap Down",
		tapFallback: SkinSpriteName.NoteHeadBlue,

		holdUp: "Cytus Hold Up",
		holdDown: "Cytus Hold Down",
		holdFallback: SkinSpriteName.NoteHeadRed,
		holdBar: SkinSpriteName.NoteConnectionNeutral,

		longHold: "Cytus Long Hold",
		longHoldFallback: SkinSpriteName.NoteHeadYellow,

		longHoldBar: "Cytus Long Hold Bar",
		longHoldBarFallback: SkinSpriteName.NoteConnectionYellow,
	},
});
