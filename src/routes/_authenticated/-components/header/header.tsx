import { ModeToggle } from '@/components/mode-toggle';
import { AppBreadcrumb } from './app-breadcrumb';

export function Header() {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-2">
        <div className="flex items-center gap-2 px-4">
          <AppBreadcrumb />
        </div>
        <div className="flex flex-1 items-center justify-end pr-4">
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}
