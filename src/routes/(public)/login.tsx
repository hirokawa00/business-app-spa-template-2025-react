import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowRight, Bell, Lock, Shield, Sparkles, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(public)/login')({
  component: LoginRoute,
});

// 管理者からのお知らせデータ
const adminNotifications = [
  {
    id: 1,
    title: 'システムメンテナンス',
    content: '9/1 2:00-4:00 メンテナンス実施予定',
    type: 'maintenance',
    date: '2025-08-25',
  },
  {
    id: 2,
    title: 'セキュリティ更新',
    content: '新しいセキュリティポリシーを適用しました',
    type: 'security',
    date: '2025-08-20',
  },
  {
    id: 3,
    title: '新機能リリース',
    content: 'AIアシスタント機能が利用可能になりました',
    type: 'feature',
    date: '2025-08-15',
  },
];

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div
    className={`absolute rounded-full opacity-20 animate-pulse ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

export function LoginRoute() {
  const navigate = useNavigate();
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % adminNotifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    navigate({ to: '/' });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'maintenance':
        return <Zap className="size-4" />;
      case 'security':
        return <Lock className="size-4" />;
      default:
        return <Sparkles className="size-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <FloatingShape className="w-96 h-96 bg-purple-500 top-0 -left-48" delay={0} />
        <FloatingShape className="w-80 h-80 bg-blue-500 top-1/4 -right-40" delay={1} />
        <FloatingShape className="w-64 h-64 bg-pink-500 bottom-1/4 left-1/4" delay={2} />
        <FloatingShape className="w-72 h-72 bg-cyan-500 bottom-0 right-1/3" delay={3} />

        {/* Grid Pattern */}
      </div>

      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">
        {/* お知らせセクション */}
        <div className="hidden lg:flex items-center justify-center p-12">
          <div className="max-w-md w-full">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Bell className="size-5 text-purple-300" />
                <span className="text-white/90 font-medium">お知らせ</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">最新情報をお届け</h2>
              <p className="text-white/60">システムの重要な更新情報をご確認ください</p>
            </div>

            {/* お知らせカード */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    {getNotificationIcon(adminNotifications[currentNotification].type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-lg mb-2">
                      {adminNotifications[currentNotification].title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {adminNotifications[currentNotification].content}
                    </p>
                    <div className="text-white/40 text-xs">
                      {new Date(adminNotifications[currentNotification].date).toLocaleDateString(
                        'ja-JP',
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* インジケーター */}
              <div className="flex justify-center gap-2 mt-6">
                {adminNotifications.map((_, index) => (
                  <Button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentNotification ? 'bg-white scale-125' : 'bg-white/30'
                    }`}
                    onClick={() => setCurrentNotification(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ログインセクション */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            {/* ロゴエリア */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Shield className="size-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Acme Inc.</h1>
                  <p className="text-white/50 text-sm">Secure Platform</p>
                </div>
              </div>
            </div>

            {/* ログインフォーム */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">ようこそ</h2>
                <p className="text-white/60">セキュアな認証システムでログインしてください</p>
              </div>

              <div className="space-y-6">
                {/* SAML ログインボタン */}
                <Button
                  onClick={handleLogin}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white border-0 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                >
                  <Shield className="size-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  SAML認証でログイン
                  <ArrowRight
                    className={`size-5 ml-3 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                  />
                </Button>

                {/* セキュリティ情報 */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 text-white/70">
                    <Lock className="size-4" />
                    <span className="text-sm">256ビット暗号化による安全な認証</span>
                  </div>
                </div>
              </div>

              {/* サポート情報 */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-center text-white/50 text-sm">
                  ログインでお困りですか？{' '}
                  <Button className="text-purple-300 hover:text-purple-200 underline underline-offset-2 transition-colors">
                    サポートに連絡
                  </Button>
                </p>
              </div>
            </div>

            {/* フッター */}
            <div className="text-center mt-8">
              <p className="text-white/30 text-xs">© 2025 Acme Inc. Enterprise Security Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
