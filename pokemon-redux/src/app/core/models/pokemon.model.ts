export interface Pokemon {
  id: number;
  name: Name;
  type: string[];
  base: BaseStats;
}

export interface Name {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

export interface BaseStats {
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  Speed: number;
}
