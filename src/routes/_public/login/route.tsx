import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { GalleryVerticalEnd } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/_public/login')({
  component: LoginRoute,
});

export function LoginRoute() {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/vite.svg"
          alt="test"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex justify-center gap-2 md:justify-start">
                <div className="flex items-center gap-2 font-medium">
                  <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  Acme Inc.
                </div>
              </div>
              <h1 className="text-2xl font-bold">アカウントにログイン</h1>
              <p className="text-muted-foreground text-sm text-balance mb-6">
                以下の認証ページから認証を行ってください。
              </p>
            </div>
            <div className="grid gap-6">
              <Button type="button" className="w-full" onClick={() => navigate({ to: '/' })}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
