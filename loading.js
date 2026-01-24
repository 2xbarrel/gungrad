let allmyfellas = [];

for (const dialogue of script) {
    allmyfellas.push(
        `../../backgrounds/${dialogue["bg"]}.png`,
        `../../overlays/${dialogue["overlay"]}${extensionsOverlay[dialogue["overlay"]]}`,
    );
    for (const charName of ["char1", "char2"]) {
        allmyfellas.push(`../../sounds/${dialogue[charName]["name"]}.ogg`);
        allmyfellas.push(`../../CharacterSprites/${dialogue[charName]["name"]}${dialogue[charName]["emotion"]}${extensions[dialogue[charName]["emotion"]]}`);
        if (dialogue[charName]["extra"] && dialogue[charName]["extra"] !== "disappear") {
            allmyfellas.push(`../../extras/${dialogue[charName]["extra"]}${extraExtensions[dialogue[charName]["extra"]]}`);
        }
    }
};

const fakes = [];

console.log(allmyfellas);

for (const sprite of allmyfellas) {
    if (sprite.endsWith(".ogg")) {
        const fakeAudio = new Audio(sprite);
        fakes.push(fakeAudio);
    } else {
        const fakeImg = new Image();
        fakeImg.src = sprite;
        fakes.push(fakeImg);
    }
}
