type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type ColorRgb = 'Red' | 'Green' | 'Blue';
type OtherColors = 'Pink' | 'Orange' | 'Violet';
type FavoriteColor = ColorRgb | OtherColors;

const person: Person = {
  name: 'Zeca',
  age: 56,
  salary: 200_000, // 200.000
};

export function setFavoriteColor(pessoa: Person, cor: FavoriteColor): Person {
  return { ...person, favoriteColor: cor };
}

console.log(setFavoriteColor(person, 'Red'));
console.log(person);
