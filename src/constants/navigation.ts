export interface NavLink {
  label: string;
  href: string;
  private?: boolean;
}

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    href: "/explore",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Add Plant",
    href: "/dashboard/add-plant",
    private: true,
  },
  {
    label: "Manage Plants",
    href: "/dashboard/manage-plants",
    private: true,
  },
  {
    label: "Contact",
    href: "/contact",
    private: true,
  },
];