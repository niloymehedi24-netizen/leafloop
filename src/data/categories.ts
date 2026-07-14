import { Category } from "@/types/category";
import {
  HiOutlineHome,
  HiOutlineSun,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { GiCactus, GiFlowerPot, GiSprout } from "react-icons/gi";

export const categories: Category[] = [
  { id: "1", name: "Indoor Plants", icon: HiOutlineHome, totalPlants: 120 },
  { id: "2", name: "Outdoor Plants", icon: HiOutlineSun, totalPlants: 85 },
  { id: "3", name: "Succulents", icon: GiCactus, totalPlants: 60 },
  { id: "4", name: "Flowering", icon: GiFlowerPot, totalPlants: 90 },
  { id: "5", name: "Herbs", icon: GiSprout, totalPlants: 45 },
  { id: "6", name: "Air Purifying", icon: HiOutlineSparkles, totalPlants: 70 },
];
