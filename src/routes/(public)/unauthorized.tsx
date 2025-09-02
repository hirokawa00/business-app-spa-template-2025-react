import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { LogIn, Shield } from 'lucide-react';
import { z } from 'zod';
import { ActionSection, AnimatedIcon, HelpSection } from './-components/public-shared';

const Params = z.object({
  errorCode: z.string().optional(),
});

export const Route = createFileRoute('/(public)/unauthorized')({
  component: AuthErrorPage,
  validateSearch: Params,
});

// 認証エラーページ
function AuthErrorPage() {
  const navigate = useNavigate();
  const { errorCode = 'xxxxx-xxxxxx' } = Route.useSearch();

  const helpItems = [
    {
      question: '認証トークンが無効または期限切れ',
      description: 'ログインが必要な状態になっています',
    },
    {
      question: 'アクセス権限が不足している',
      description: '管理者による権限付与が必要な可能性があります',
    },
    {
      question: 'セッションが無効になった',
      description: 'セキュリティ上の理由で認証が無効化されました',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <AnimatedIcon Icon={Shield} bgColor="destructive/20" iconColor="destructive/60" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">認証に失敗しました</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                アクセス権限がないか、認証情報が正しくありません。
              </p>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  エラーコード:
                  <code className="ml-2 px-2 py-1 bg-muted rounded text-xs font-mono">
                    {errorCode}
                  </code>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  発生時刻: {new Date().toLocaleString('ja-JP')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <HelpSection items={helpItems} title="考えられる原因" />
            <ActionSection
              title="解決方法"
              actions={[
                {
                  name: 'ログイン画面へ',
                  onClick: () => navigate({ to: '/login' }),
                  icon: LogIn,
                  variant: 'default',
                },
                {
                  name: '権限の付与',
                  onClick: () => undefined,
                  icon: Shield,
                },
              ]}
            />
          </div>

          <div className="pt-8 border-t border-border/50" />
        </div>
      </div>
    </div>
  );
}
