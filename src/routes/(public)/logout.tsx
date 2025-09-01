import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { CheckCircle, LogIn, X } from 'lucide-react';
import { ActionSection, AnimatedIcon, HelpSection } from './-components/public-shared';

export const Route = createFileRoute('/(public)/logout')({
  component: LogoutPage,
});

// ログアウトページ
function LogoutPage() {
  const navigate = useNavigate();

  const helpItems = [
    {
      question: 'セッションが安全に終了されました',
      description: 'すべての認証情報がクリアされています',
    },
    {
      question: 'ブラウザの終了を推奨',
      description: '特に共用端末をご利用の場合は必須です',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <AnimatedIcon Icon={CheckCircle} bgColor="success/20" iconColor="success/60" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">ログアウトしました</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                正常にログアウトが完了しました。ご利用ありがとうございました。
              </p>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  ログアウト時刻: {new Date().toLocaleString('ja-JP')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <HelpSection items={helpItems} title="ログアウト完了" />
            <ActionSection
              title="次のアクション"
              actions={[
                {
                  name: 'ログイン画面へ',
                  onClick: () => navigate({ to: '/login' }),
                  icon: LogIn,
                  variant: 'default',
                },
                {
                  name: 'ブラウザを閉じる',
                  onClick: () => window.close(),
                  icon: X,
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
