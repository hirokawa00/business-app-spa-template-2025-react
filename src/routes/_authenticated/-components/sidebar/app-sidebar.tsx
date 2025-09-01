import { Link, useLocation } from '@tanstack/react-router';
import { ChevronRight, LayoutDashboard, Pin, PinOff } from 'lucide-react';
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
  useSidebar,
} from '@/components/ui/sidebar';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getMenuList } from './app-sidebar-menu';
import { NavUser } from './nav-user';

/**
 * サイドバー
 * @param param0
 * @returns
 */
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();
  const { setOpen } = useSidebar();
  const menuList = getMenuList(pathname);
  const [pinned, setPinned] = useLocalStorage('sidebar_pinned', true);

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      onMouseEnter={() => {
        if (!pinned) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!pinned) setOpen(false);
      }}
    >
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-sidebar-accent/50"
          onClick={() => setPinned(!pinned)}
        >
          {/* 左側アイコン */}
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-9 items-center justify-center rounded-xl shadow-sm">
            <LayoutDashboard className="size-5" />
          </div>

          {/* 中央：システム名 */}
          <div className="flex-1 grid text-left leading-tight">
            <span className="truncate font-semibold text-base">Business Application</span>
            <span className="truncate text-xs text-muted-foreground">Templeat</span>
          </div>

          {/* 右側：ピン操作 */}
          <div className="text-muted-foreground">
            {pinned ? <Pin className="h-5 w-5" /> : <PinOff className="h-5 w-5" />}
          </div>
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
                      <Link to={String(menu.href)}>
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
                                <Link to={String(submenu.href)}>
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

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
