import {
  AlertTriangleIcon,
  Database,
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
import type { AppRoutePaths } from '@/types/route';

export interface Group {
  groupLabel: string;
  menus: {
    href?: AppRoutePaths;
    label: string;
    active?: boolean;
    icon: LucideIcon;
    submenus: {
      href?: AppRoutePaths;
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
          href: '/dashboard',
          label: 'Home',
          active: pathname.includes('/dashboard'),
          icon: HomeIcon,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Authenticated',
      menus: [
        {
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
          icon: AlertTriangleIcon,
          submenus: [],
        },
        {
          href: '/login',
          label: 'Login',
          icon: LogInIcon,
          submenus: [],
        },
        {
          href: '/logout',
          label: 'Logout',
          icon: LogOutIcon,
          submenus: [],
        },
        {
          href: '/maintenance',
          label: 'Maintenance',
          icon: WrenchIcon,
          submenus: [],
        },
        {
          href: '/not-found',
          label: 'NotFound',
          icon: SearchXIcon,
          submenus: [],
        },
        {
          href: '/session-timeout',
          label: 'Session Timeout',
          icon: TimerIcon,
          submenus: [],
        },
        {
          href: '/unauthorized',
          label: 'Unauthorized',
          icon: ShieldAlertIcon,
          submenus: [],
        },
      ],
    },
  ];
}
