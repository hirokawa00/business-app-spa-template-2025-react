import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { LayoutDashboard, LogIn, ShieldCheck, User, Zap } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(public)/login')({
  component: LoginRoute,
});

// 型定義

interface AuthState {
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
}

// 特徴カード
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

// メインログインページコンポーネント
export function LoginRoute() {
  const navigate = useNavigate();
  const [authState] = useState<AuthState>({
    isLoading: false,
    error: null,
    isSuccess: false,
  });

  // ログイン処理
  const handleLogin = async () => {
    navigate({ to: '/dashboard' });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* 左側 - ログインフォーム */}

      <div className="flex-1 flex items-center justify-center p-8 relative">
        {/* テーマ切り替えボタン */}
        <div className="absolute top-6 right-6  flex items-center justify-center">
          <ModeToggle />
        </div>

        <div className="w-full max-w-md space-y-8">
          {/* ヘッダー */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <LayoutDashboard className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">
              システムの利用を開始するにはログインしてください
            </p>
          </div>

          {/* ログインフォーム */}
          <div className="space-y-6">
            {/* オプション */}

            {/* ログインボタン */}
            <Button onClick={handleLogin} disabled={authState.isLoading} className="w-full">
              {authState.isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ログイン
                </>
              ) : (
                <>
                  ログイン
                  <LogIn className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* 右側 - 特徴・ブランディング */}
      <div className="hidden lg:flex flex-1 bg-primary/5 relative overflow-hidden">
        <div className="flex flex-col justify-center p-12 relative z-10">
          {/* 背景装飾 */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                業務アプリ テンプレート
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                日々の業務を効率化し、安全で快適な操作体験を提供するための標準UIテンプレートです。
              </p>
            </div>

            <div className="grid gap-6">
              <FeatureCard
                icon={<ShieldCheck className="w-5 h-5 text-primary" />}
                title="モダンな技術"
                description="Zodによる入力バリデーション、Radix UIのアクセシビリティ標準準拠、型安全なTanStack Routerにより、安全かつ信頼性の高い業務アプリを実現しています。"
              />
              <FeatureCard
                icon={<Zap className="w-5 h-5" />}
                title="スピーディな操作性"
                description="軽量かつ最適化された設計により、快適な操作とスムーズな画面遷移を実現します。"
              />
              <FeatureCard
                icon={<User className="w-5 h-5" />}
                title="ユーザー中心設計"
                description="利用者の業務フローに合わせて柔軟にカスタマイズできるダッシュボードを提供します。"
              />
            </div>

            <div className="pt-8">
              {/* <p className="text-sm text-muted-foreground">
                すでに <strong className="text-foreground">10,000社以上</strong>{' '}
                の現場で導入実績があります
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                    >
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  さらに多くの企業に拡大中…
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
