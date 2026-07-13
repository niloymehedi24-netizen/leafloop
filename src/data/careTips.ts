export interface CareTip {
  id: string;
  title: string;
  description: string;
  icon: "water" | "sun" | "seedling";
}

export const careTips: CareTip[] = [
  {
    id: "1",
    title: "Water Wisely",
    description:
      "Most indoor plants prefer slightly dry soil between watering. Avoid over-watering to prevent root rot.",
    icon: "water",
  },
  {
    id: "2",
    title: "Provide Enough Sunlight",
    description:
      "Place plants according to their sunlight needs. Bright indirect light works best for many indoor plants.",
    icon: "sun",
  },
  {
    id: "3",
    title: "Use Quality Soil",
    description:
      "Healthy, well-draining soil helps plants grow stronger and reduces the risk of diseases.",
    icon: "seedling",
  },
];