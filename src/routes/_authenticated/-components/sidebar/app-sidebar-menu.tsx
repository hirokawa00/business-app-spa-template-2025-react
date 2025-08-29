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

export interface Group {
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
        {
          href: '',
          label: 'Components',
          active: pathname.includes('/components'),
          icon: Grid2x2CheckIcon,
          submenus: [
            {
              href: '/components',
              label: 'Spinners',
              icon: User,
              active: pathname.includes('/components'),
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
