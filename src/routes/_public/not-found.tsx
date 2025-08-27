import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowLeft, FileQuestion, Home, RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Route = createFileRoute('/_public/not-found')({
  component: NotFoundPage,
  validateSearch: (search: Record<string, unknown>) => {
    return { from: String(search.from ?? '') };
  },
});

// アニメーション付きの404テキスト
const AnimatedNotFound = () => {
  return (
    <div className="relative">
      <div className="text-8xl md:text-9xl font-bold text-primary/20 select-none">404</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-pulse">
          404
        </div>
      </div>
      {/* 浮遊するアイコン */}
      <div className="absolute -top-4 -right-4 animate-bounce">
        <FileQuestion className="w-8 h-8 text-primary/40" />
      </div>
      <div className="absolute -bottom-4 -left-4 animate-bounce delay-300">
        <FileQuestion className="w-6 h-6 text-primary/30" />
      </div>
    </div>
  );
};

// よくある質問/ヘルプセクション
const HelpSection = () => {
  const helpItems = [
    {
      question: 'このページが削除された可能性があります',
      description: 'リンクが古いか、コンテンツが移動された可能性があります',
    },
    {
      question: 'URLに誤りがある可能性があります',
      description: 'アドレスバーのURLをもう一度確認してください',
    },
    {
      question: '一時的なサーバーエラーの可能性があります',
      description: 'しばらく時間をおいてから再度アクセスしてください',
    },
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="space-y-4">
        <h3 className="font-semibold text-lg mb-4">考えられる原因</h3>
        <div className="space-y-3">
          {helpItems.map((item) => (
            <div
              key={item.question}
              className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-sm">{item.question}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// 人気ページへのリンク
const PopularPages = () => {
  const navigate = useNavigate();

  const popularPages = [
    { name: 'ダッシュボード', path: '/dashboard', icon: '🏠' },
    { name: 'ログインページ', path: '/login', icon: '💬' },
  ];

  const handlePageClick = (path: string) => {
    navigate({ to: path });
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardContent>
        <h3 className="font-semibold text-lg mb-4">人気のページ</h3>
        <div className="grid grid-cols-2 gap-3">
          {popularPages.map((page) => (
            <Button key={page.path} onClick={() => handlePageClick(page.path)}>
              <span className="font-medium text-sm">{page.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// メインコンポーネント
export default function NotFoundPage() {
  const { from } = Route.useSearch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-8">
          {/* メインの404表示 */}
          <div className="space-y-6">
            <AnimatedNotFound />
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                ページが見つかりません
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                申し訳ございません。お探しのページは存在しないか、移動された可能性があります。
              </p>
              {from && (
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    アクセスしようとしたURL:
                    <code className="ml-2 px-2 py-1 bg-muted rounded text-xs font-mono">
                      {from}
                    </code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ヘルプセクションと人気ページを横並び */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <HelpSection />
            <PopularPages />
          </div>

          {/* フッター情報 */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              問題が解決しない場合は、
              <Button variant="link" onClick={() => alert('サポートページに移動します')}>
                サポートチーム
              </Button>
              までお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
