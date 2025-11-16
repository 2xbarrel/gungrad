let allmyfellas = [];

for (const dialogue of script) {
    allmyfellas.push(
        `../../backgrounds/${dialogue["bg"]}.png`,
        `../../overlays/${dialogue["overlay"]}${extensionsOverlay[dialogue["overlay"]]}`,
    );
    for (const charName of ["char1", "char2"]) {
        allmyfellas.push(`../../CharacterSprites/${dialogue[charName]["name"]}${dialogue[charName]["emotion"]}${extensions[dialogue[charName]["emotion"]]}`);
        if (dialogue[charName]["extra"] && dialogue[charName]["extra"] !== "disappear") {
            allmyfellas.push(`../../extras/${dialogue[charName]["extra"]}${extraExtensions[dialogue[charName]["extra"]]}`);
        }
    }
};

const fakeImgs = [];

console.log(allmyfellas);

for (const sprite of allmyfellas) {
    const fakeImg = new Image();
    fakeImg.src = sprite;
    fakeImgs.push(fakeImg);
}
