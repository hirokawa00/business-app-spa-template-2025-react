import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// アニメーション付きアイコンコンポーネント
export const AnimatedIcon = ({
  Icon,
  size = '12',
  bgColor = 'primary/20',
  iconColor = 'primary/60',
}: {
  Icon: React.ComponentType<any>;
  size?: string;
  bgColor?: string;
  iconColor?: string;
}) => {
  return (
    <div className="relative">
      <div
        className={`w-24 h-24 bg-${bgColor} rounded-full flex items-center justify-center select-none opacity-20`}
      >
        <Icon className={`h-${size} w-${size}`} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-20 h-20 bg-gradient-to-r from-${iconColor} to-primary/40 rounded-full flex items-center justify-center animate-pulse`}
        >
          <Icon className={`h-10 w-10 text-primary`} />
        </div>
      </div>
      {/* 浮遊するアイコン */}
      <div className="absolute -top-2 -right-2 animate-bounce">
        <div className="w-3 h-3 rounded-full bg-primary/40"></div>
      </div>
      <div className="absolute -bottom-2 -left-2 animate-bounce delay-300">
        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
      </div>
    </div>
  );
};

// ヘルプセクション
export const HelpSection = ({
  items,
  title,
}: {
  items: { question: string; description: string }[];
  title: string;
}) => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="font-semibold text-lg">{title}</CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
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

// アクションセクション
export const ActionSection = ({
  title,
  actions,
}: {
  title: string;
  actions: {
    name: string;
    onClick: () => void;
    icon?: React.ComponentType<any>;
    variant?: 'default' | 'outline' | 'ghost';
  }[];
}) => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="font-semibold text-lg">{title}</CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} variant={action.variant || 'outline'}>
              {action.icon && <action.icon className="w-4 h-4" />}
              <span className="font-medium">{action.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
