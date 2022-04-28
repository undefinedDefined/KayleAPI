enum Regions {
  EU_WEST = "EUW1",
  EU_EAST = "EUN1",
  RUSSIA = "RU",
  AMERICA_NORTH = "NA1",
  LAT_NORTH = "LA1",
  LAT_SOUTH = "LA2",
  BRAZIL = "BR1",
  OCEANIA = "OC1",
  TURKEY = "TR1",
  KOREA = "KR",
  JAPAN = "JP1",
  PBE = "PBE1",
}

enum Continent {
  EUROPE = "EUROPE",
  AMERICAS = "AMERICAS",
  ASIA = "ASIA",
}

function regionToContinent(region: Regions): Continent {
  switch (region) {
    case Regions.AMERICA_NORTH:
    case Regions.BRAZIL:
    case Regions.LAT_NORTH:
    case Regions.LAT_SOUTH:
    case Regions.OCEANIA:
      return Continent.AMERICAS;
    case Regions.EU_EAST:
    case Regions.EU_WEST:
    case Regions.TURKEY:
    case Regions.RUSSIA:
      return Continent.EUROPE;
    case Regions.JAPAN:
    case Regions.KOREA:
      return Continent.ASIA;
  }

  throw new Error(`Region ${region} inconnue.`);
}

export { Regions, Continent, regionToContinent };