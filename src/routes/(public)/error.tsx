import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { CircleAlert, Home } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ActionSection, AnimatedIcon, HelpSection } from './-components/public-shared';

export const Route = createFileRoute('/(public)/error')({
  component: ErrorPage,
  validateSearch: (search: Record<string, unknown>) => {
    return { message: String(search.message ?? '') };
  },
});

function ErrorPage() {
  const { message } = Route.useSearch();
  const navigate = useNavigate();

  const helpItems = [
    {
      question: 'システム障害の可能性があります。',
      description: '一定時間間隔をあけて再度アクセスをお願いします',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <AnimatedIcon Icon={CircleAlert} bgColor="success/20" iconColor="success/60" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                システムエラーが発生しました。
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ご迷惑をおかけしています。以下の理由でシステムエラーが発生しました。
              </p>
              {message && (
                <Alert variant="destructive" className="flex flex-col items-center justify-center">
                  <AlertTitle className="mb-2">
                    <CircleAlert />
                  </AlertTitle>
                  <AlertDescription>エラー理由: {message}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <HelpSection items={helpItems} title="エラー原因" />
            <ActionSection
              title="次のアクション"
              actions={[
                {
                  name: 'ログイン画面へ',
                  onClick: () => navigate({ to: '/login' }),
                  icon: Home,
                  variant: 'default',
                },
              ]}
            />
          </div>

          <div className="pt-8 border-t border-border/50"></div>
        </div>
      </div>
    </div>
  );
}
