const const1 = "Loopy";
const const2 = "Lighthouse";
const const3 = "LoopyLighthouse";
for (let repeat=100 ; repeat <= 200 ; repeat++) {
  console.log((!(repeat % 3) && !(repeat % 4)) ? const3 : (!(repeat % 3) ? const1 : (!(repeat % 4) ? const2 : repeat )))
}