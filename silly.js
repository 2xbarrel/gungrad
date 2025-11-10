let cover1 = document.getElementById("cover1");
let cover2 = document.getElementById("cover2");
let chaptersBug = document.getElementsByClassName("selection bugs")[0];
let chaptersSin = document.getElementsByClassName("selection angeldemons")[0];

const animations = {
  fadeIn: [
    {
      filter: "grayscale(100%)",
      zIndex: 1,
      maxWidth: "700px",
      top: 0,
    },
    {
      filter: "grayscale(0%)",
      zIndex: 0,
      maxWidth: "740px",
      top: "-15px",
    },
  ],
  fadeOut: [
    {
      filter: "grayscale(0%)",
      zIndex: 0,
      maxWidth: "740px",
      top: "-15px",
    },
    {
      filter: "grayscale(100%)",
      zIndex: 1,
      maxWidth: "700px",
      top: 0,
    },
  ],
};

const timings = {
    in: {
        duration: 500,
        iterations: 1,
        fill: "forwards",
    },
    out: {
        duration: 300,
        iterations: 1,
        fill: "forwards",
    },
};

for (const line of ["a", "b"]) {
  for (const chapterNum of [1, 2, 3, 4]) {
    const chapter = document.getElementById(`ch${chapterNum}${line}`);
    const cover = line === "a" ? cover1 : cover2;
    chapter.addEventListener("pointerenter", (event) => {
      cover.src = `cover${chapterNum}${line.toUpperCase()}.png`;
    });
  }
}

chaptersBug.addEventListener("pointerenter", (event) => {
  cover1.animate(animations["fadeIn"], timings["in"]);
})

chaptersSin.addEventListener("pointerenter", (event) => {
  cover2.animate(animations["fadeIn"], timings["in"]);
})

chaptersBug.addEventListener("pointerleave", (event) => {
  cover1.animate(animations["fadeOut"], timings["out"]);
})

chaptersSin.addEventListener("pointerleave", (event) => {
  cover2.animate(animations["fadeOut"], timings["out"]);
})
