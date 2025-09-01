import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { LogIn, Settings } from 'lucide-react';
import { ActionSection, AnimatedIcon, HelpSection } from './-components/public-shared';

export const Route = createFileRoute('/(public)/maintenance')({
  component: MaintenancePage,
});

// メンテナンスページ
function MaintenancePage() {
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
              <AnimatedIcon Icon={Settings} bgColor="destructive/20" iconColor="destructive/60" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                システムメンテナンス中
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                現在、システムの改善とアップデートを行っております。ご不便をおかけして申し訳ございません。
              </p>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  予定時間:
                  <code className="ml-2 px-2 py-1 bg-muted rounded text-lg font-mono">
                    2:00 - 6:00
                  </code>
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
                  name: '時間をおいてアクセスをしてください。',
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
