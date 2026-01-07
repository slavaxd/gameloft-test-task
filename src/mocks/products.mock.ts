import { Product } from "@/types";
import { productImages } from "./productImages";

export const products: Product[] = [
  {
    id: 1,
    name: "Fairy Godmother's Magic Wand",
    price: 49.99,
    image: productImages.wand,
    description: 'Grant wishes with this enchanted wand',
  },
  {
    id: 2,
    name: "Aladdin's Magic Carpet",
    price: 129.99,
    image: productImages.carpet,
    description: 'Fly through the skies on this magical carpet',
  },
  {
    id: 3,
    name: 'Enchanted Rose',
    price: 79.99,
    image: productImages.rose,
    description: "Beauty and the Beast's eternal rose under glass",
  },
  {
    id: 4,
    name: "Genie's Magic Lamp",
    price: 99.99,
    image: productImages.lamp,
    description: "Rub the lamp to summon the Genie's magic",
  },
  {
    id: 5,
    name: "Cinderella's Glass Slipper",
    price: 59.99,
    image: productImages.slipper,
    description: 'The legendary crystal slipper from the ball',
  },
  {
    id: 6,
    name: "Evil Queen's Magic Mirror",
    price: 89.99,
    image: productImages.mirror,
    description: "Mirror mirror on the wall, who's the fairest of them all",
  },
];
