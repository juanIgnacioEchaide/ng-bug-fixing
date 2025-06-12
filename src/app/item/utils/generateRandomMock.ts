import { Item } from "../model/item.model";

const LAPTOP_NAMES = [
  'Dell XPS 13', 'HP Spectre x360', 'MacBook Pro', 'MacBook Air',
  'Lenovo ThinkPad X1', 'Asus ZenBook', 'Acer Swift 3', 'MSI Prestige',
  'Razer Blade Stealth', 'Samsung Galaxy Book', 'LG Gram', 'Surface Laptop',
  'Huawei MateBook X', 'Alienware m15', 'Dell Inspiron 14', 'HP Envy 13',
  'Toshiba Dynabook', 'Gigabyte Aero', 'Chuwi HeroBook', 'Microsoft Surface Go',
  'Asus ROG Zephyrus', 'Lenovo Yoga Slim', 'HP Pavilion', 'Acer Aspire 5',
  'Xiaomi Mi Notebook', 'Fujitsu Lifebook', 'Panasonic Toughbook', 'Samsung Notebook 9',
  'MSI Modern', 'Razer Book 13', 'LG UltraPC', 'Dynabook Tecra', 'MacBook 12"',
  'Dell Latitude', 'Asus VivoBook', 'HP EliteBook', 'Lenovo IdeaPad', 'MSI Creator',
  'Acer Chromebook', 'Samsung Chromebook'
];

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom4DigitId(): string {
  return getRandomInt(1000, 9999).toString();
}

export default function generateRandomMock(): Item[] {
  const shuffled = [...LAPTOP_NAMES].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  return selected.map(name => ({
    id: getRandom4DigitId(),
    name,
    quantity: getRandomInt(1, 20),
  }));
}
