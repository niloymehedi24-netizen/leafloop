import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

export interface Category {
  id: string;
  name: string;
  // This tells TypeScript: "icon is a React Component from a library"
  icon: ComponentType<IconBaseProps>;
  totalPlants: number;
}
