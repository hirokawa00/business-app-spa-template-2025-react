import { createFileRoute } from '@tanstack/react-router';
import Image from '../../../../public/undraw_dashboard_p93p.svg';

export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: DashboardRoute,
});

export function DashboardRoute() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="bg-muted/50 min-h-[92vh] flex items-center justify-center rounded-xl">
        <img src={Image} alt="alt" className="max-w-full max-h-full" />
      </div>
    </div>
  );
}
