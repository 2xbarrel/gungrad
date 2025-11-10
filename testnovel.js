const visual = document.getElementById("visual");
const dialogue = document.getElementById("dialogue");
const button = document.getElementById("button");
const background = document.getElementById("bg");
const overlay = document.getElementById("overlay");

let dialogueBetter = script[0];

const animations = {
    "shake": [
        { transform: "translateX(0)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(-15px)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(0)" },
    ],
    "appear": [
        { opacity: 0 },
        { opacity: 1 },
    ],
    "disappear": [
        { opacity: 1 },
        { opacity: 0 },
    ],
    "active": [
        {
            zIndex: 1,
            filter: "brightness(50%)",
            width: "80%"
        },
        {
            zIndex: 2,
            filter: "brightness(100%)",
            width: "100%"
        },
    ],
    "inactive": [
        {
            zIndex: 2,
            filter: "brightness(100%)",
            width: "100%"
        },
        {
            zIndex: 1,
            filter: "brightness(50%)",
            width: "80%"
        },
    ],
    "extrasmallLilith": [
        {
            zIndex: 1,
            filter: "brightness(50%)",
            width: "80%"
        },
        {
            zIndex: 1,
            filter: "brightness(50%)",
            width: "50%"
        },
    ],
    "runningLilith": [
        {
            zIndex: 1,
            filter: "brightness(50%)",
            width: "50%"
        },
        {
            zIndex: 1,
            filter: "brightness(50%)",
            width: "80%"
        },
    ],
    "1Bmap": [
        { transform: "translateX(0)" },
        { transform: "translateX(300px)" },
    ],
    "1BmapREVERSAL": [
        { transform: "translateX(300px)" },
        { transform: "translateX(0px)" },
    ],
    // extra animations 
    "angry": [
        {
            transform: "translateX(0)",
            opacity: 0
        },
        { 
            transform: "translateX(15px)",
            opacity: 1
        },
        { 
            transform: "translateX(-15px)",
            opacity: 1
        },
        { 
            transform: "translateX(15px)",
            opacity: 1
        },
        { 
            transform: "translateX(-15px)",
            opacity: 1
        },
        { 
            transform: "translateX(15px)",
            opacity: 1
        },
        { 
            transform: "translateX(0)",
            opacity: 1 
        },
    ],
};

const timings = {
    // char timings
    "shake": {
        duration: 200,
        iterations: 2,
    },
    "appear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    },
    "disappear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    },
    "active": {
        easing: "ease-out",
        duration: 600,
        iterations: 1,
        fill: "forwards",
    },
    "inactive": {
        easing: "ease-out",
        duration: 600,
        iterations: 1,
        fill: "forwards",
    },
    "extrasmallLilith": {
        easing: "ease-out",
        duration: 600,
        iterations: 1,
        fill: "forwards",
    },
    "runningLilith": {
        easing: "linear",
        duration: 1000,
        iterations: 1,
        fill: "forwards",
    },
    "1Bmap": {
        easing: "linear",
        duration: 2000,
        iterations: 1,
        fill: "forwards",
    },
    "1BmapREVERSAL": {
        easing: "linear",
        duration: 1,
        iterations: 1,
        fill: "forwards",
    },
    // extra timings
    "angry": {
        duration: 300,
        iterations: 1,
        fill: "forwards",
    },
};

const extraExtensions = {
    "angry": ".gif",
};

const extensions = {
    "IDLE": ".png",
    "IDLE1": ".png",
    "IDLE2": ".png",
    "HAPPY": ".png",
    "ANGRY": ".png",
    "ANGRY2": ".png",
    "SURPRISED": ".png",
    "CONFUSED": ".png",
    "UPSET": ".png",
    "HAT": ".png",
    "HAT2": ".png",
    "AWE": ".png",
    "WET": ".png",
    "BADASS": ".png",
    "BADASS2": ".png",
    "DISRESPECTFUL": ".png",
    "DISRESPECTFUL2": ".png",
    "DISRESPECTFUL3": ".png",
    "DISRESPECTFUL4": ".png",
    // swaglineswaglineswaglineswaglineswag
    "SCARED": ".gif",
    "LAUGH": ".gif",
    "GRUMPY": ".gif",
    "PRAY": ".gif",
    "WHAT": ".gif",
    "RUN": ".gif",
};

const extensionsOverlay = {
    "overlay": ".png",
    "overlay1A": ".png",
    "despair1": ".png",
    "despair2": ".png",
    "bar1B": ".png",
    "1bOV1": ".gif",
    "hisoda": ".png",
    "hisoda2": ".png",
    "lilithhold": ".png",
    "lilithhold2": ".gif",
    "1Brain": ".gif",
};

function setChar(charName, dialogue) {
    if (dialogue[charName]) {
        let char = document.getElementById(charName);
        let extra = document.getElementById(`extra${charName[charName.length - 1]}`);
        let imageSrc = `../../CharacterSprites/${dialogue[charName]["name"]}${dialogue[charName]["emotion"]}${extensions[dialogue[charName]["emotion"]]}`;
        let animationName = dialogue[charName]["animation"];
        let extraName = dialogue[charName]["extra"];
        char.setAttribute("src", imageSrc);
        if (extraName) {
            if (extraName !== "disappear") {
                let extraImgSrc = `../../extras/${extraName}${extraExtensions[extraName]}`;
                extra.setAttribute("src", extraImgSrc);
            }
            let animation = animations[extraName];
            if (charName === "char2") {
                animation = animation.map(keyframe => {
                    if ("transform" in keyframe) {
                        return {
                            ...keyframe,
                            transform: keyframe.transform + " scaleX(-1)",
                        };
                    }
                    return keyframe;
                });
            }
            extra.animate(animation, timings[extraName]);
        }
        if (animationName) {
            let animation = animations[animationName];
            if (charName === "char2") {
                animation = animation.map(keyframe => {
                    if ("transform" in keyframe) {
                        return {
                            ...keyframe,
                            transform: keyframe.transform + " scaleX(-1)",
                        };
                    }
                    return keyframe;
                });
            }
            char.animate(animation, timings[animationName]);
        }
    }
};

let dialogueNum = 0;
let coolTextRunning = false;

background.src = `../../backgrounds/${dialogueBetter["bg"]}.png`;
overlay.src = `../../overlays/${dialogueBetter["overlay"]}${extensionsOverlay[dialogueBetter["overlay"]]}`;
dialogue.innerHTML = `<span class ="${dialogueBetter[dialogueBetter["talker"]]["name"]}">${dialogueBetter[dialogueBetter["talker"]]["name"]}:</span><p id="say"></p>`;
coolText();

setChar("char1", dialogueBetter);
setChar("char2", dialogueBetter);

function talkie() {
    dialogueNum++;
    
    let dialogueBetter = script[dialogueNum];

    if (dialogueNum == script.length) {
        window.location.href = exit;
    };

    setChar("char1", dialogueBetter);
    setChar("char2", dialogueBetter);
    
    background.src = `../../backgrounds/${dialogueBetter["bg"]}.png`;
    overlay.src = `../../overlays/${dialogueBetter["overlay"]}${extensionsOverlay[dialogueBetter["overlay"]]}`;
    dialogue.innerHTML = `<span class ="${dialogueBetter[dialogueBetter["talker"]]["name"]}">${dialogueBetter[dialogueBetter["talker"]]["name"]}:</span><p id="say"></p>`;
    console.log(dialogueNum);
};

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
};

async function coolText() {
    coolTextRunning = true;

    let say = document.getElementById("say");
    let speed = 50;
    let dialogueBetter = script[dialogueNum];
    
    for (let i = 0; i < dialogueBetter["say"].length; i++) {
        if (!coolTextRunning) {
            break;
        }
        say.innerHTML += dialogueBetter["say"].charAt(i);
        await sleep(speed);
    }
    coolTextRunning = false;
};

document.addEventListener("keydown", async (event) => {
    if (["Enter", "ArrowRight", " "].includes(event.key)) {
        talkie();
        if (coolTextRunning) {
            coolTextRunning = false;
            await sleep(50);
        }
        coolText();
    }
});

button.addEventListener("click", async () => {
    talkie();
    if (coolTextRunning) {
        coolTextRunning = false;
        await sleep(50);
    }
    coolText();
});