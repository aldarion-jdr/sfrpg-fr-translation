import { ActorSheetSFRPGStarship } from "/systems/sfrpg/module/actor/sheet/starship.js";
Hooks.once("init", () => {
	if(typeof Babele !== "undefined") {
		Babele.get().register({
			module: "sfrpg-fr-translation",
			lang: "fr",
			dir: "compendium"
		});
	}
});


Hooks.once('babele.ready', () => { 
	const pack = game.packs.get("sfrpg.starship-actions");
	pack.clear();
   	pack.index.clear();
   	ActorSheetSFRPGStarship.ensureStarshipActions();
});
