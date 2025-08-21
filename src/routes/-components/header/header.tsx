import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { AppBreadcrumb } from './app-breadcrumb';
import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <AppBreadcrumb />
      </div>
      <div className="flex flex-1 items-center justify-end pr-4">
        <ModeToggle />
      </div>
    </header>
  );
}
