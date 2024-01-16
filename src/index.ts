type hero = {
  name: string;
  capa: boolean;
};

function printhero(heroi: hero) {
  console.log(heroi);
}

printhero({
  name: "bruce wayne",
  capa: true,
});
