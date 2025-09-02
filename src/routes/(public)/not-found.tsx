import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { LogIn, SearchX, Undo } from 'lucide-react';
import { z } from 'zod';
import { ActionSection, AnimatedIcon, HelpSection } from './-components/public-shared';

const Params = z.object({
  path: z.string().optional(),
});

export const Route = createFileRoute('/(public)/not-found')({
  component: NotFoundPage,
  validateSearch: Params,
});

// メインコンポーネント
export default function NotFoundPage() {
  const { path = '/xxxx' } = Route.useSearch() as { path?: string };
  const navigate = useNavigate();

  const helpItems = [
    {
      question: 'URLを入力しアクセス',
      description: 'URLが間違っている可能性があります。',
    },
    {
      question: '削除または移動されたページにアクセス',
      description: '一定時間間隔をあけて再度アクセスをお願いします。',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <AnimatedIcon Icon={SearchX} bgColor="destructive/20" iconColor="destructive/60" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                ページが見つかりません
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                申し訳ございません。お探しのページは存在しないか、移動された可能性があります。
              </p>

              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  アクセスしようとしたURL:
                  <code className="ml-2 px-2 py-1 bg-primary-foreground rounded text-xs font-mono">
                    {path}
                  </code>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  発生時刻: {new Date().toLocaleString('ja-JP')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <HelpSection items={helpItems} title="メンテナンス内容" />
            <ActionSection
              title="利用可能なアクション"
              actions={[
                {
                  name: 'ホーム画面へ',
                  onClick: () => navigate({ to: '/dashboard' }),
                  icon: Undo,
                  variant: 'default',
                },
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
