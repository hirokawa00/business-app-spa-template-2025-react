import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { CircleAlert, NonBinary, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ActionSection, AnimatedIcon, HelpSection } from './-components/public-shared';

export const Route = createFileRoute('/(public)/not-found')({
  component: NotFoundPage,
  validateSearch: (search: Record<string, unknown>) => {
    return { from: String(search.from ?? '') };
  },
});

// メインコンポーネント
export default function NotFoundPage() {
  const { from } = Route.useSearch();
  const navigate = useNavigate();

  const helpItems = [
    {
      question: 'システムの改善とアップデートを実施中',
      description: 'パフォーマンス向上とセキュリティ強化のため',
    },
    {
      question: 'データベースのメンテナンス',
      description: 'データ整合性の確保と最適化を行っています',
    },
    {
      question: '新機能の追加準備',
      description: 'より良いユーザー体験を提供するため',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <AnimatedIcon Icon={NonBinary} bgColor="destructive/20" iconColor="destructive/60" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                ページが見つかりません
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                申し訳ございません。お探しのページは存在しないか、移動された可能性があります。
              </p>
              {from && (
                <Alert variant="default" className="flex flex-col items-center justify-center">
                  <AlertTitle className="mb-2">
                    <CircleAlert />
                  </AlertTitle>
                  <AlertDescription>アクセスしようとしたURL: {from}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <HelpSection items={helpItems} title="メンテナンス内容" />
            <ActionSection
              title="利用可能なアクション"
              actions={[
                {
                  name: 'ホーム画面に戻る.',
                  onClick: () => navigate({ to: '/' }),
                  icon: RefreshCw,
                },
                {
                  name: 'ログインからやり直す。',
                  onClick: () => navigate({ to: '/login' }),
                  icon: RefreshCw,
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
