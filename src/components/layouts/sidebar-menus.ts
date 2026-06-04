import { House, Settings } from "@hugeicons/core-free-icons"

export const sidebarMenus = [
  {
    title: "Dashboard",
    icon: House,
    path: "/dashboard",
    heading: "Dashboard",
    description: "Overview of activity and key metrics across your workspace.",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
    heading: "Settings",
    description: "Manage the settings for your account and workspace.",
  },
] as const
