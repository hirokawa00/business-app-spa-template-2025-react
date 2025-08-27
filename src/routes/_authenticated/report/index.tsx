import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Building, Calendar, Check, ChevronLeft, ChevronRight, MapPin, Search } from 'lucide-react';
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Card コンポーネントを直接定義
const Card2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
      {...props}
    />
  ),
);
Card2.displayName = 'Card';

const CardHeader2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  ),
);
CardHeader2.displayName = 'CardHeader';

const CardTitle2 = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
  ),
);
CardTitle2.displayName = 'CardTitle';

const CardDescription2 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={`text-sm text-muted-foreground ${className}`} {...props} />
));
CardDescription2.displayName = 'CardDescription';

const CardContent2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
  ),
);
CardContent2.displayName = 'CardContent';

// Label コンポーネントを直接定義
const Label2 = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  ),
);
Label2.displayName = 'Label';

// ステッパーコンポーネント
interface StepperProps {
  steps: Array<{
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  currentStep: number;
  completedSteps: number[];
}

const Stepper = ({ steps, currentStep, completedSteps }: StepperProps) => {
  return (
    <div className="w-full">
      {/* モバイル用 - 現在のステップのみ表示 */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                completedSteps.includes(currentStep)
                  ? 'bg-primary text-primary-foreground'
                  : currentStep === steps[currentStep - 1]?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              {completedSteps.includes(currentStep) ? (
                <Check className="w-5 h-5" />
              ) : (
                steps[currentStep - 1]?.icon
              )}
            </div>
            <div>
              <h3 className="font-medium">{steps[currentStep - 1]?.title}</h3>
              <p className="text-sm text-muted-foreground">{steps[currentStep - 1]?.description}</p>
            </div>
          </div>
          <Badge variant="secondary">
            {currentStep} / {steps.length}
          </Badge>
        </div>
      </div>

      {/* デスクトップ用 - 全ステップ表示 */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
                    completedSteps.includes(step.id)
                      ? 'bg-primary text-primary-foreground'
                      : currentStep === step.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {completedSteps.includes(step.id) ? <Check className="w-6 h-6" /> : step.icon}
                </div>
                <div className="mt-3 text-center">
                  <h3
                    className={`font-medium ${
                      currentStep === step.id ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-4 ${
                    completedSteps.includes(step.id) ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// エリア選択コンポーネント
const AreaSelection = ({
  selectedArea,
  onAreaChange,
}: {
  selectedArea: string;
  onAreaChange: (area: string) => void;
}) => {
  const areas = [
    { value: 'tokyo', label: '東京エリア' },
    { value: 'osaka', label: '大阪エリア' },
    { value: 'nagoya', label: '名古屋エリア' },
    { value: 'fukuoka', label: '福岡エリア' },
    { value: 'sendai', label: '仙台エリア' },
    { value: 'hiroshima', label: '広島エリア' },
  ];

  return (
    <Card2 className="w-full max-w-2xl mx-auto">
      <CardHeader2>
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle2>エリア選択</CardTitle2>
            <CardDescription2>レポートを取得するエリアを選択してください</CardDescription2>
          </div>
        </div>
      </CardHeader2>
      <CardContent2 className="space-y-6">
        <div className="space-y-2">
          <Label2 htmlFor="area-select">エリア</Label2>
          <Select value={selectedArea} onValueChange={onAreaChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="エリアを選択してください" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area.value} value={area.value}>
                  {area.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {areas.map((area) => (
            <button
              key={area.value}
              onClick={() => onAreaChange(area.value)}
              className={`p-4 rounded-lg border text-left transition-all hover:shadow-md ${
                selectedArea === area.value
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="font-medium text-sm">{area.label}</div>
            </button>
          ))}
        </div>
      </CardContent2>
    </Card2>
  );
};

// 部門選択コンポーネント
const DepartmentSelection = ({
  selectedDepartment,
  onDepartmentChange,
}: {
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
}) => {
  const departments = [
    { value: 'sales', label: '営業部', description: '営業活動・顧客管理' },
    { value: 'development', label: '開発部', description: 'システム開発・保守' },
    { value: 'hr', label: '人事部', description: '人材管理・採用' },
    { value: 'marketing', label: 'マーケティング部', description: '市場分析・広報' },
    { value: 'finance', label: '経理部', description: '財務・会計管理' },
    { value: 'operations', label: '業務部', description: '業務運営・サポート' },
  ];

  return (
    <Card2 className="w-full max-w-2xl mx-auto">
      <CardHeader2>
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <Building className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle2>部門選択</CardTitle2>
            <CardDescription2>レポートを取得する部門を選択してください</CardDescription2>
          </div>
        </div>
      </CardHeader2>
      <CardContent2 className="space-y-6">
        <div className="space-y-2">
          <Label2 htmlFor="department-select">部門</Label2>
          <Select value={selectedDepartment} onValueChange={onDepartmentChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="部門を選択してください" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.value} value={dept.value}>
                  {dept.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          {departments.map((dept) => (
            <button
              key={dept.value}
              onClick={() => onDepartmentChange(dept.value)}
              className={`w-full p-4 rounded-lg border text-left transition-all hover:shadow-md ${
                selectedDepartment === dept.value
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{dept.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{dept.description}</div>
                </div>
                {selectedDepartment === dept.value && <Check className="w-5 h-5 text-primary" />}
              </div>
            </button>
          ))}
        </div>
      </CardContent2>
    </Card2>
  );
};

// 日付選択コンポーネント
const DateSelection = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}) => {
  const presetRanges = [
    {
      label: '今月',
      getValue: () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), now.getMonth(), 1);
        const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        return {
          start: start.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
        };
      },
    },
    {
      label: '先月',
      getValue: () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const end = new Date(now.getFullYear(), now.getMonth(), 0);
        return {
          start: start.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
        };
      },
    },
    {
      label: '過去30日',
      getValue: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(start.getDate() - 30);
        return {
          start: start.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
        };
      },
    },
    {
      label: '過去90日',
      getValue: () => {
        const end = new Date();
        const start = new Date();
        start.setDate(start.getDate() - 90);
        return {
          start: start.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
        };
      },
    },
  ];

  const handlePresetClick = (preset: (typeof presetRanges)[0]) => {
    const { start, end } = preset.getValue();
    onStartDateChange(start);
    onEndDateChange(end);
  };

  return (
    <Card2 className="w-full max-w-2xl mx-auto">
      <CardHeader2>
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle2>期間選択</CardTitle2>
            <CardDescription2>レポートを取得する期間を選択してください</CardDescription2>
          </div>
        </div>
      </CardHeader2>
      <CardContent2 className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label2 htmlFor="start-date">開始日</Label2>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label2 htmlFor="end-date">終了日</Label2>
            <Input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <Label2 className="mb-3 block">クイック選択</Label2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {presetRanges.map((preset) => (
              <Button
                key={preset.label}
                variant="outline"
                size="sm"
                onClick={() => handlePresetClick(preset)}
                className="justify-start"
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </div>

        {startDate && endDate && (
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm">
              <span className="font-medium">選択期間: </span>
              <span>
                {startDate} ～ {endDate}
              </span>
            </div>
          </div>
        )}
      </CardContent2>
    </Card2>
  );
};

// メインコンポーネント
export default function ReportSearchPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // フォーム状態
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const navigate = useNavigate({ from: Route.fullPath });

  const steps = [
    {
      id: 1,
      title: 'エリア選択',
      description: '対象エリアを選択',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      id: 2,
      title: '部門選択',
      description: '対象部門を選択',
      icon: <Building className="w-6 h-6" />,
    },
    {
      id: 3,
      title: '期間選択',
      description: '対象期間を設定',
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSearch = () => {
    // クエリパラメーターを生成
    const params = new URLSearchParams({
      area: selectedArea,
      department: selectedDepartment,
      startDate: startDate,
      endDate: endDate,
    });

    // 実際の実装では react-router-dom の navigate を使用
    const url = `/report/result?${params.toString()}`;
    navigate({ to: '/report/search', search: () => ({ ...params }) });
    console.log('Navigating to:', url);
    // navigate(`/report/result?${params.toString()}`);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedArea !== '';
      case 2:
        return selectedDepartment !== '';
      case 3:
        return startDate !== '' && endDate !== '';
      default:
        return false;
    }
  };

  const isAllComplete = selectedArea && selectedDepartment && startDate && endDate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">レポート検索</h1>
          <p className="text-muted-foreground">検索条件を設定してレポートを生成してください</p>
        </div>

        {/* ステッパー */}
        <div className="mb-8">
          <Stepper steps={steps} currentStep={currentStep} completedSteps={completedSteps} />
        </div>

        {/* コンテンツ */}
        <div className="mb-8">
          {currentStep === 1 && (
            <AreaSelection selectedArea={selectedArea} onAreaChange={setSelectedArea} />
          )}
          {currentStep === 2 && (
            <DepartmentSelection
              selectedDepartment={selectedDepartment}
              onDepartmentChange={setSelectedDepartment}
            />
          )}
          {currentStep === 3 && (
            <DateSelection
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
            />
          )}
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={handlePrev}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>戻る</span>
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center space-x-2"
              >
                <span>次へ</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSearch}
                disabled={!isAllComplete}
                className="flex items-center space-x-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <Search className="w-4 h-4" />
                <span>レポート検索</span>
              </Button>
            )}
          </div>
        </div>

        {/* 選択内容サマリー */}
        {(selectedArea || selectedDepartment || (startDate && endDate)) && (
          <div className="mt-8 max-w-2xl mx-auto">
            <Card2>
              <CardHeader2>
                <CardTitle2 className="text-lg">選択内容</CardTitle2>
              </CardHeader2>
              <CardContent2>
                <div className="space-y-2 text-sm">
                  {selectedArea && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">エリア:</span>
                      <span className="font-medium">
                        {selectedArea === 'tokyo'
                          ? '東京エリア'
                          : selectedArea === 'osaka'
                            ? '大阪エリア'
                            : selectedArea === 'nagoya'
                              ? '名古屋エリア'
                              : selectedArea === 'fukuoka'
                                ? '福岡エリア'
                                : selectedArea === 'sendai'
                                  ? '仙台エリア'
                                  : selectedArea === 'hiroshima'
                                    ? '広島エリア'
                                    : selectedArea}
                      </span>
                    </div>
                  )}
                  {selectedDepartment && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">部門:</span>
                      <span className="font-medium">
                        {selectedDepartment === 'sales'
                          ? '営業部'
                          : selectedDepartment === 'development'
                            ? '開発部'
                            : selectedDepartment === 'hr'
                              ? '人事部'
                              : selectedDepartment === 'marketing'
                                ? 'マーケティング部'
                                : selectedDepartment === 'finance'
                                  ? '経理部'
                                  : selectedDepartment === 'operations'
                                    ? '業務部'
                                    : selectedDepartment}
                      </span>
                    </div>
                  )}
                  {startDate && endDate && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">期間:</span>
                      <span className="font-medium">
                        {startDate} ～ {endDate}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent2>
            </Card2>
          </div>
        )}
      </div>
    </div>
  );
}

export const Route = createFileRoute('/_authenticated/report/')({
  component: ReportSearchPage,
});
