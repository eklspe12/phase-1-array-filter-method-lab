function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(drivers, testLetter) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(testLetter.toLowerCase())
  );
}

function matchName(drivers, info) {
  return drivers.filter((driver) => {
    const nameMatches = driver.name.toLowerCase().includes(info.toLowerCase());
    const hometownMatches = driver.hometown
      .toLowerCase()
      .includes(info.toLowerCase());
    return nameMatches || hometownMatches;
  });
}
