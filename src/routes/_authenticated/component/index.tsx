import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/component/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>RouteComponent</div>;
}
