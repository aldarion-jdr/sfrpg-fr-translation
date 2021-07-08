Hooks.once("init", () => {
	if(typeof Babele !== "undefined") {
		Babele.get().register({
			module: "sfrpg-fr-translation",
			lang: "fr",
			dir: "compendium"
		});
	}
});
