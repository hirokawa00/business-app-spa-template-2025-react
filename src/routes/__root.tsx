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
  notFoundComponent: NotFoundRedirect,
  errorComponent: ErrorBoundaryComponent,
});

export function NotFoundRedirect() {
  const navigate = useNavigate();
  const router = useRouter();
  const fromPath = router.state.location.pathname;

  useEffect(() => {
    navigate({ to: '/not-found', search: { path: fromPath } });
  }, [navigate, fromPath]);

  return null;
}

export function ErrorBoundaryComponent({ error }: { error: Error }) {
  const navigate = useNavigate();

  console.log('error', error);
  useEffect(() => {
    if (error) {
      navigate({ to: '/error', search: { message: error.message }, replace: true });
    }
  }, [error, navigate]);

  // エラー発生中は一瞬これが出るけど、即 /error に飛ばす
  return <div>Redirecting to error page...</div>;
}
