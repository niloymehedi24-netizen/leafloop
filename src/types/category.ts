import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

export interface Category {
  id: string;
  name: string;

  icon: ComponentType<IconBaseProps>;
  totalPlants: number;
}
