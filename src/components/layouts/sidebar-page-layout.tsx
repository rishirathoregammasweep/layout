import { AvatarBadge, AvatarGroup } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { useMemo, useState, type CSSProperties } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { sidebarMenus } from "@/components/layouts/sidebar-menus"
import {
  AddIcon,
  ArrowDown01FreeIcons,
  ArrowUpDown,
  BookOpen01Icon,
  CancelIcon,
  CustomerService01Icon,
  HelpCircleIcon,
  PanelLeft,
  ShareIcon,
  SidebarLeftIcon,
} from "@hugeicons/core-free-icons"
import { settingsSidebarMenu } from "./setting-sidebar-menus"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item"
import AiChat from "../features/ai-chat/ai-chat"
function HeaderHelpMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          type="button"
          size="lg"
          aria-label="Help and documentation"
        >
          <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} className="size-5" />
          Help & Supports
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HugeiconsIcon
              icon={CustomerService01Icon}
              strokeWidth={2}
              className="size-4 opacity-80"
            />
            Support
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon
              icon={BookOpen01Icon}
              strokeWidth={2}
              className="size-4 opacity-80"
            />
            Documentation
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function HeaderAvatar() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="!rounded-md"
          />
          <AvatarBadge className="bg-green-600 dark:bg-green-500" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="duration-0">Mode</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={theme}
                  onValueChange={(value) =>
                    setTheme(value as "light" | "dark" | "system")
                  }
                >
                  <DropdownMenuRadioItem value="light">
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

function SidebarMenusOnSmallScreen() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size={"icon-sm"} variant={"outline"}>
          <HugeiconsIcon icon={SidebarLeftIcon} strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40" align="start">
        {sidebarMenus.map((menu) => (
          <DropdownMenuItem key={menu.path} className="cursor-pointer">
            <HugeiconsIcon icon={menu.icon} strokeWidth={2} />
            {menu.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function FooterAvatar() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <Item variant={'muted'}>
          <ItemMedia variant={'icon'}>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="!rounded-md"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              John Doe
            </ItemTitle>
            <ItemDescription>john.doe@example.com</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant={'ghost'} size={'icon'}>
              <HugeiconsIcon icon={ArrowUpDown} strokeWidth={2} />
            </Button>
          </ItemActions>
        </Item>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end" sideOffset={10} side='right'>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Mode</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={theme}
                  onValueChange={(value) =>
                    setTheme(value as "light" | "dark" | "system")
                  }
                >
                  <DropdownMenuRadioItem value="light">
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal> 
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const workspaces = [
  { id: "acme", name: "Acme Corp", slug: "acme-corp" },
  { id: "growth", name: "Growth Plan", slug: "growth-plan" },
  { id: "partner", name: "Partner Workspace", slug: "partner-ws" },
  { id: "sandbox", name: "Sandbox", slug: "sandbox" },
] as const

type WorkspaceId = (typeof workspaces)[number]["id"]

function WorkspaceSwitcher() {
  const [workspaceId, setWorkspaceId] = useState<WorkspaceId>(workspaces[0].id)
  const activeWs = workspaces.find((w) => w.id === workspaceId)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-fit">
        <Button variant="secondary" size="lg">
          {activeWs?.name}
          <HugeiconsIcon icon={ArrowDown01FreeIcons} strokeWidth={1} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit"
        align="start"
        side="bottom"
        sideOffset={10}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
          <DropdownMenuRadioGroup
          
            value={workspaceId}
            onValueChange={(value) => setWorkspaceId(value as WorkspaceId)}
          >
            {workspaces.map((workspace) => (
              <DropdownMenuRadioItem
                key={workspace.id}
                value={workspace.id}
                className="group/workspace-radio items-center"
              >
                <ItemContent className="min-w-0 flex-1 gap-0">
                  <ItemTitle className="text-sm leading-snug">
                    {workspace.name}
                  </ItemTitle>
                </ItemContent>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HugeiconsIcon icon={AddIcon} strokeWidth={2} />
            Create workspace
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export function PlanBanner() {
  return (
    <Card>
      <CardHeader>
        <AvatarGroup className="mb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <div className="flex items-center gap-2">
          <CardTitle>Growth Plan</CardTitle>
          <Badge variant="outline">Free Plan</Badge>
        </div>
        <CardDescription>You are on the Growth plan. Renews automatically unless cancelled.</CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <Button variant="outline">Go to Plan</Button>
        <Button variant="outline">Dismiss</Button>
      </CardFooter>
    </Card>
  )
}


export function LayoutSidebar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const pageMeta = useMemo(() => {
    if (pathname === "/player-details") {
      return {
        heading: "Player Details",
        description: "View and manage player details.",
      }
    }
    if (pathname === "/campaign-details") {
      return {
        heading: "Campaign Details",
        description: "View and manage campaign details.",
      }
    }
    if (pathname === "/templates/new") {
      return {
        heading: "Create email template",
        description:
          "Define a name, subject line, and HTML body for your email template.",
      }
    }
    const settingsItem = settingsSidebarMenu.find((m) => m.path === pathname)
    if (settingsItem) {
      return {
        heading: settingsItem.heading,
        description: settingsItem.description,
      }
    }
    const item = sidebarMenus.find((m) => m.path === pathname)
    if (item) {
      return { heading: item.heading, description: item.description }
    }
    return { heading: "Page", description: "" }
  }, [pathname])

  const isSettings = pathname.startsWith("/settings")
  const layoutColumns = isSettings
    ? "minmax(0, 2fr) minmax(0, 4fr) minmax(0, 2fr)"
    : "minmax(0, 1fr) minmax(0, 5fr) minmax(0, 2fr)"

  return (
    <div
      className={cn(
        "grid h-screen w-full grid-cols-1 items-stretch bg-neutral-50/40 p-0 dark:bg-neutral-900/40 md:items-center md:p-2 md:[grid-template-columns:var(--layout-cols)] md:transition-[grid-template-columns] md:duration-300 md:ease-out"
      )}
      style={{ "--layout-cols": layoutColumns } as CSSProperties}
    >
      <div className="hidden w-full md:col-span-1 md:flex md:h-full">
        <div className="relative h-full w-full">
          <div
            className={cn(
              "absolute inset-0 flex h-full w-full flex-col justify-between p-4 transition-all duration-300 ease-out",
              isSettings
                ? "pointer-events-none translate-x-4 opacity-0"
                : "pointer-events-auto translate-x-0 opacity-100"
            )}
          >
            <div className="w-full space-y-8">
              <div className="flex w-full items-center justify-between gap-2">
                <WorkspaceSwitcher />
                <div className="flex items-center gap-2">
                  <div className=" overflow-hidden opacity-100 flex items-center gap-2">
                    <Button variant={"secondary"} size={"icon-lg"} className="rounded-full">
                      <HugeiconsIcon icon={PanelLeft} strokeWidth={2} />
                    </Button>
                    <Button variant={"secondary"} size={"icon-lg"} className="rounded-full">
                      <HugeiconsIcon icon={AddIcon} strokeWidth={2} />
                    </Button>
                  </div>
                </div>
              </div>
              <nav className="space-y-4">
                {sidebarMenus.map((menu) => (
                  <NavLink
                    key={menu.path}
                    to={menu.path}
                    className={({ isActive }) =>
                      cn(
                        "flex cursor-pointer items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-0 duration-0",
                        isActive ||
                          (menu.path === "/settings" &&
                            pathname.startsWith("/settings"))
                          ? "opacity-100"
                          : "opacity-50 hover:opacity-100"
                      )
                    }
                  >
                    <HugeiconsIcon strokeWidth={1.5} icon={menu.icon} />
                    <div className="max-w-36 overflow-hidden opacity-100">
                      <CardTitle className="scroll-m-20 text-md font-semibold tracking-tight">
                        {menu.title}
                      </CardTitle>
                    </div>
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="flex gap-2 flex-col">
              <PlanBanner />
              <div className="flex items-center gap-2">
                <FooterAvatar />
              </div>
            </div>
          </div>

          <div
            className={cn(
              "bg-muted/30 absolute inset-0 flex h-full w-full flex-col items-end justify-between px-4 py-6 transition-all duration-300 ease-out dark:bg-muted/10",
              isSettings
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-4 opacity-0"
            )}
          >
            <div className="ms-auto flex h-full w-max min-w-0 max-w-full flex-col justify-between">
              <div className="space-y-8">
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  onClick={() => navigate('/')}
                >
                  <HugeiconsIcon icon={CancelIcon} strokeWidth={2} />
                  Exit settings
                </Button>
                <nav className="space-y-0.5" aria-label="Settings sections">
                  {settingsSidebarMenu.map((menu) => (
                    <NavLink
                      key={menu.path}
                      to={menu.path}
                      className={({ isActive }) =>
                        cn(
                          "flex cursor-pointer items-center gap-2 p-1 py-1.5 rounded-md focus-visible:outline-none focus-visible:ring-0 duration-0",
                          isActive ? "opacity-100 bg-muted/50" : "opacity-50 hover:bg-muted/50"
                        )
                      }
                    >
                      <HugeiconsIcon strokeWidth={1.5} size={20} icon={menu.icon} />
                      <CardTitle className="scroll-m-20 text-sm font-semibold tracking-tight">
                        {menu.title}
                      </CardTitle>
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-2 self-end">
                <FooterAvatar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "col-span-1 flex h-full min-h-0 w-full flex-col overflow-hidden rounded-none bg-white dark:bg-neutral-900 md:col-span-1 md:rounded-lg md:shadow"
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-auto">
          {pathname !== "/create-journey" ? (
            <header className="flex items-start justify-between gap-6 px-8 py-6">
              <div className="flex items-start gap-2">
                <span className="md:hidden">
                  <SidebarMenusOnSmallScreen />
                </span>
                <div className="min-w-0 space-y-1">
                  <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {pageMeta.heading}
                  </h1>
                  {pageMeta.description ? (
                    <p className="text-muted-foreground text-md dark:text-muted-foreground leading-7 ">
                      {pageMeta.description}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1 pt-0.5">
                <Button variant={'secondary'} size={'lg'}>
                  <HugeiconsIcon icon={ShareIcon} strokeWidth={2} />
                  Share & Earn
                </Button>
                <HeaderHelpMenu />
                <HeaderAvatar />
              </div>
            </header>
          ) : null}
          <Outlet />
        </div>
      </div>

      <div className="hidden h-full min-h-0 w-full md:col-span-1 md:flex">
      </div>
    </div>
  )
}

export default LayoutSidebar
