import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: DashboardRoute,
});

function DashboardRoute() {
  return (
    <>
      <div>dashbord</div>
    </>
  );
}
