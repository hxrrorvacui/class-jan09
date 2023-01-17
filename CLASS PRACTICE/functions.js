const argumento1 = (myName, myAge, livesIn) => {
let cityOrTown = livesIn.livesInCity ? "a ciudad" : "pueblo";
return `${myName} tiene ${myAge} años y vive en un ${cityOrTown}.`;
};
  console.log(argumento1("Jarko", 25, { livesInCity: true, livesInTown: false }));
  console.log(argumento1("Martina", 42, { livesInCity: false, livesInTown: true }));
  console.log(argumento1("Laia", 78, { livesInCity: false, livesInTown: true }));

  // Diego version:
  const functionExerciseOne = (name, age, livesIn) => {
    if (livesIn.livesInCity)
    return `${name} tiene ${age} y vive en la ciudad.`;
    else return `${name} tiene ${age} y vive en un pueblo`;
  };
  console.log(argumento1("Jarko", 25, { livesInCity: true, livesInTown: false }));
  console.log(argumento1("Martina", 42, { livesInCity: false, livesInTown: true }));
  console.log(argumento1("Laia", 78, { livesInCity: false, livesInTown: true }));
  
  // ternary
  const arrFuncTernary = (name, age, livesIn) => {
    return. livesIn.livesInCity
    ? `${name} tiene ${age} y vive en la ciudad.`;
    : `${name} tiene ${age} y vive en un pueblo.`;
  };
  console.log(
    arrFuncTernary("Martina", 42, { livesInCity: false, livesInTown: true })
  );
