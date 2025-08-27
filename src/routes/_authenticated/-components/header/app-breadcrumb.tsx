import { useLocation } from '@tanstack/react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  type BreadcrumbTranslationConfig,
  defaultBreadcrumbConfig,
  humanizeString,
} from './app-breadcrumb-translations';

interface BreadcrumbSegment {
  path: string;
  label: string;
  href: string;
}

interface HeaderProps {
  /** パンくずリストの翻訳設定 */
  breadcrumbConfig?: BreadcrumbTranslationConfig;
  /** ホームのラベル（デフォルト: 'ホーム'） */
  homeLabel?: string;
  /** ルートパス以外でホームを表示するかどうか（デフォルト: true） */
  showHome?: boolean;
  /** 最大表示セグメント数（デフォルト: 制限なし） */
  maxSegments?: number;
}

// パスセグメントを翻訳する関数
function translateSegment(segment: string, config: BreadcrumbTranslationConfig): string {
  // URLパラメータ（数字、UUID、その他のIDっぽい文字列）はそのまま返す
  if (
    /^\d+$/.test(segment) || // 数字のみ
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(segment) || // UUID
    /^[a-zA-Z0-9]{20,}$/.test(segment) // 長いID文字列
  ) {
    return segment;
  }

  const lowerSegment = segment.toLowerCase();

  // 翻訳マッピングにある場合は翻訳を返す
  if (config.translations[lowerSegment]) {
    return config.translations[lowerSegment];
  }

  // フォールバック戦略に従って処理
  switch (config.fallbackStrategy) {
    case 'capitalize':
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    case 'humanize':
      return humanizeString(segment);
    // case 'keep-original':
    default:
      return segment;
  }
}

// パスからパンくずリストのセグメントを生成する関数
function generateBreadcrumbSegments(
  pathname: string,
  config: BreadcrumbTranslationConfig,
  homeLabel: string,
  showHome: boolean,
  maxSegments?: number,
): BreadcrumbSegment[] {
  const segments = pathname.split('/').filter((segment) => segment !== '');
  const breadcrumbSegments: BreadcrumbSegment[] = [];

  // ホームを追加（ルートパス、または showHome が true の場合）
  if (pathname === '/' || showHome) {
    breadcrumbSegments.push({
      path: '',
      label: homeLabel,
      href: '/',
    });
  }

  // ルートパスの場合はホームのみ返す
  if (pathname === '/') {
    return breadcrumbSegments;
  }

  // 各セグメントを処理
  segments.forEach((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const translatedLabel = translateSegment(segment, config);

    breadcrumbSegments.push({
      path: segment,
      label: translatedLabel,
      href: path,
    });
  });

  // 最大表示セグメント数の制限を適用
  if (maxSegments && breadcrumbSegments.length > maxSegments) {
    const homeSegment = showHome ? [breadcrumbSegments[0]] : [];
    const remainingSegments = breadcrumbSegments.slice(showHome ? 1 : 0);
    const trimmedSegments = remainingSegments.slice(-maxSegments + (showHome ? 1 : 0));

    return [
      ...homeSegment,
      ...(trimmedSegments.length < remainingSegments.length
        ? [{ path: '...', label: '...', href: '#' }]
        : []),
      ...trimmedSegments,
    ];
  }

  return breadcrumbSegments;
}

export function AppBreadcrumb({
  breadcrumbConfig = defaultBreadcrumbConfig,
  homeLabel = 'ホーム',
  showHome = true,
  maxSegments,
}: HeaderProps = {}) {
  const location = useLocation();
  const breadcrumbSegments = generateBreadcrumbSegments(
    location.pathname,
    breadcrumbConfig,
    homeLabel,
    showHome,
    maxSegments,
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbSegments.map((segment, index) => (
          <div key={`${segment.href}-${index}`} className="flex items-center">
            {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
            <BreadcrumbItem className={index === 0 ? 'hidden md:block' : ''}>
              {index === breadcrumbSegments.length - 1 ? (
                // 最後のセグメントは現在のページなのでリンクにしない
                <BreadcrumbPage>{segment.label}</BreadcrumbPage>
              ) : segment.path === '...' ? (
                // 省略記号の場合はリンクにしない
                <span className="text-muted-foreground">{segment.label}</span>
              ) : (
                // 最後以外はリンクにする
                <BreadcrumbLink href={segment.href}>{segment.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
