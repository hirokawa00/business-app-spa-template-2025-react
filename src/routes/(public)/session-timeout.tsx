import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Clock, LogIn } from 'lucide-react';
import { ActionSection, AnimatedIcon, HelpSection } from './-components/public-shared';

export const Route = createFileRoute('/(public)/session-timeout')({
  component: SessionTimeoutPage,
});

// セッションタイムアウトページ
function SessionTimeoutPage() {
  const navigate = useNavigate();

  const helpItems = [
    {
      question: 'セキュリティのため自動ログアウト',
      description: '一定時間操作がない場合に発生します',
    },
    {
      question: '作業データは自動保存済み',
      description: 'ほとんどの作業内容は保存されています',
    },
    {
      question: 'セッション継続時間を超過',
      description: '最大8時間のセッション制限に達しました',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <AnimatedIcon Icon={Clock} bgColor="warning/20" iconColor="warning/60" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                セッションがタイムアウトしました
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                セキュリティのため、一定時間操作がない場合は自動的にログアウトされます。
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-muted-foreground">
                  最終アクセス: {new Date(Date.now() - 30 * 60 * 1000).toLocaleString('ja-JP')}
                </p>
                <p className="text-sm text-muted-foreground">
                  セッション開始:{' '}
                  {new Date(Date.now() - 8 * 60 * 60 * 1000).toLocaleString('ja-JP')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <HelpSection items={helpItems} title="セッションについて" />
            <ActionSection
              title="次のアクション"
              actions={[
                {
                  name: 'ログイン画面へ',
                  onClick: () => navigate({ to: '/login' }),
                  icon: LogIn,
                  variant: 'default',
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
