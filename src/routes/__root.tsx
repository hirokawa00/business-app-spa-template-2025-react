import { createRootRouteWithContext, Outlet, useNavigate, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useEffect } from 'react';
import type { AuthContextType } from '@/providers/auth-provider';

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NotFoundRedirect />,
});

export function NotFoundRedirect() {
  const navigate = useNavigate();
  const router = useRouter();
  const fromPath = router.state.location.pathname;

  useEffect(() => {
    navigate({ to: '/not-found', search: { from: fromPath } });
  }, [navigate, fromPath]);

  return null;
}
