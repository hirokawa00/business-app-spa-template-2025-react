import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/report')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}
