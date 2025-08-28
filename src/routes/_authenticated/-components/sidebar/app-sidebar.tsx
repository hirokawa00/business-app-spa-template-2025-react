import { Link, useLocation } from '@tanstack/react-router';
import {
  AlertTriangleIcon,
  ChevronRight,
  Database,
  GalleryVerticalEnd,
  Grid2x2CheckIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  type LucideIcon,
  SearchXIcon,
  ShieldAlertIcon,
  TimerIcon,
  User,
  WrenchIcon,
} from 'lucide-react';
import type * as React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';

interface Group {
  groupLabel: string;
  menus: {
    href: string;
    label: string;
    active?: boolean;
    icon: LucideIcon;
    submenus: {
      href: string;
      label: string;
      active: boolean;
      icon?: LucideIcon;
    }[];
  }[];
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/',
          label: 'Home',
          active: pathname === '/dashboard',
          icon: HomeIcon,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Authenticated',
      menus: [
        {
          href: '',
          label: 'Data view',
          active: pathname.includes('/users') || pathname.includes('/report'),
          icon: Grid2x2CheckIcon,
          submenus: [
            {
              href: '/users',
              label: 'Users',
              icon: User,
              active: pathname.includes('/users'),
            },
            {
              href: '/report',
              label: 'Report',
              icon: Database,
              active: pathname.includes('/report'),
            },
          ],
        },
      ],
    },
    {
      groupLabel: 'Public',
      menus: [
        {
          href: '/error',
          label: 'Error',
          icon: AlertTriangleIcon, // 汎用エラー
          submenus: [],
        },
        {
          href: '/login',
          label: 'Login',
          icon: LogInIcon, // ログイン
          submenus: [],
        },
        {
          href: '/logout',
          label: 'Logout',
          icon: LogOutIcon, // ログアウト
          submenus: [],
        },
        {
          href: '/maintenance',
          label: 'Maintenance',
          icon: WrenchIcon, // メンテナンス
          submenus: [],
        },
        {
          href: '/not-found',
          label: 'NotFound',
          icon: SearchXIcon, // 見つからない
          submenus: [],
        },
        {
          href: '/session-timeout',
          label: 'Session Timeout',
          icon: TimerIcon, // セッション切れ
          submenus: [],
        },
        {
          href: '/unauthorized',
          label: 'Unauthorized',
          icon: ShieldAlertIcon, // 認可エラー
          submenus: [],
        },
      ],
    },
  ];
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();
  const menuList = getMenuList(pathname);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">activeTeam</span>
            <span className="truncate text-xs">activeTeam</span>
          </div>
          {/* <ChevronsUpDown className="ml-auto" /> */}
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {menuList.map((group) => (
          <SidebarGroup key={group.groupLabel}>
            <SidebarGroupLabel className="text-sm mb-1">{group.groupLabel}</SidebarGroupLabel>
            <SidebarMenu className="font-semibold text-lg">
              {group.menus.map((menu) =>
                menu.submenus.length === 0 ? (
                  <SidebarMenuItem key={menu.label}>
                    <SidebarMenuButton
                      asChild
                      tooltip={menu.label}
                      isActive={menu.active}
                      className="h-9"
                    >
                      <Link to={menu.href}>
                        <menu.icon className="size-6" />
                        <span>{menu.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <Collapsible
                    key={menu.label}
                    asChild
                    defaultOpen={true}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={menu.label}
                          isActive={menu.active}
                          className="h-8"
                        >
                          {menu.icon && <menu.icon />}
                          <span>{menu.label}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="">
                        {menu.submenus.map((submenu) => (
                          <SidebarMenuSub key={submenu.label}>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton
                                asChild
                                isActive={submenu.active}
                                className="h-7"
                              >
                                <Link to={submenu.href}>
                                  {submenu.icon && <submenu.icon />}
                                  <span>{submenu.label}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          </SidebarMenuSub>
                        ))}
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ),
              )}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
