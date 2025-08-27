import { AudioWaveform, Command, GalleryVerticalEnd, Home, SquareTerminal } from 'lucide-react';
import type * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';
import { NavProjects } from './nav-projects';
import { NavUser } from './nav-user';
import { TeamSwitcher } from './team-switcher';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Authenticated',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Users',
          url: '/users',
        },
        {
          title: 'Report',
          url: '/report',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Public',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Login',
          url: '/login',
        },
        {
          title: 'NotFound',
          url: '/NotFound',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Home',
      url: '/',
      icon: Home,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
