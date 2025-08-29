import * as React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

type TableSize = 'sm' | 'md' | 'lg';

// ---------------------------
// hook: useTableSize
// ---------------------------
export function useTableSize(storageKey = 'table:size', defaultSize: TableSize = 'md') {
  const [size, setSize] = React.useState<TableSize>(() => {
    if (typeof window === 'undefined') return defaultSize;
    return (localStorage.getItem(storageKey) as TableSize) || defaultSize;
  });

  React.useEffect(() => {
    localStorage.setItem(storageKey, size);
  }, [size, storageKey]);

  // テーブルに当てるclassを返す
  const sizeClassMap: Record<TableSize, string> = {
    sm: 'text-sm [&_th]:px-2 [&_td]:px-2 [&_th]:py-1.5 [&_td]:py-1.5',
    md: 'text-md [&_th]:px-3 [&_td]:px-3 [&_th]:py-2 [&_td]:py-2',
    lg: 'text-lg [&_th]:px-4 [&_td]:px-4 [&_th]:py-3 [&_td]:py-3',
  };

  return {
    size,
    setSize,
    className: sizeClassMap[size],
  };
}

// ---------------------------
// UI: トグルボタン
// ---------------------------
export function TableSizeToggle({
  size,
  setSize,
  className,
}: {
  size: TableSize;
  setSize: (s: TableSize) => void;
  className?: string;
}) {
  return (
    <ToggleGroup
      type="single"
      value={size}
      onValueChange={(v) => v && setSize(v as TableSize)}
      className={cn('gap-1', className)}
      aria-label="テーブルの文字サイズ"
    >
      <ToggleGroupItem value="sm" aria-label="小">
        小
      </ToggleGroupItem>
      <ToggleGroupItem value="md" aria-label="中">
        中
      </ToggleGroupItem>
      <ToggleGroupItem value="lg" aria-label="大">
        大
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
