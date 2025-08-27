export interface BreadcrumbTranslationConfig {
  translations: Record<string, string>;
  fallbackStrategy: 'keep-original' | 'capitalize' | 'humanize';
}

// デフォルトの翻訳マッピング
export const defaultTranslations: Record<string, string> = {
  // 管理・設定系
  admin: '管理',
  dashboard: 'ダッシュボード',
  settings: '設定',
  config: '設定',
  preferences: '設定',
  profile: 'プロフィール',
  account: 'アカウント',

  // ユーザー・権限系
  users: 'ユーザー',
  user: 'ユーザー',
  roles: '役割',
  permissions: '権限',
  groups: 'グループ',

  // 商品・EC系
  products: '商品',
  product: '商品',
  items: 'アイテム',
  item: 'アイテム',
  inventory: '在庫',
  catalog: 'カタログ',
  categories: 'カテゴリー',
  category: 'カテゴリー',
  brands: 'ブランド',
  brand: 'ブランド',

  // 注文・決済系
  orders: '注文',
  order: '注文',
  cart: 'カート',
  checkout: 'チェックアウト',
  payment: '支払い',
  billing: '請求',
  invoice: '請求書',
  shipping: '配送',

  // CRUD操作
  create: '作成',
  new: '新規',
  add: '追加',
  edit: '編集',
  update: '更新',
  delete: '削除',
  remove: '削除',
  view: '表示',
  show: '表示',
  detail: '詳細',
  details: '詳細',
  list: '一覧',
  index: '一覧',

  // 検索・分析系
  search: '検索',
  filter: 'フィルター',
  sort: '並び替え',
  analytics: '分析',
  reports: 'レポート',
  report: 'レポート',
  statistics: '統計',
  charts: 'グラフ',
  data: 'データ',

  // ページ・コンテンツ系
  home: 'ホーム',
  top: 'トップ',
  about: '会社概要',
  company: '会社',
  contact: 'お問い合わせ',
  help: 'ヘルプ',
  support: 'サポート',
  faq: 'よくある質問',
  docs: 'ドキュメント',
  documentation: 'ドキュメント',
  guide: 'ガイド',
  tutorial: 'チュートリアル',

  // ニュース・コミュニケーション系
  news: 'ニュース',
  blog: 'ブログ',
  posts: '投稿',
  post: '投稿',
  articles: '記事',
  article: '記事',
  comments: 'コメント',
  comment: 'コメント',
  messages: 'メッセージ',
  message: 'メッセージ',
  notifications: '通知',
  notification: '通知',

  // ファイル・メディア系
  files: 'ファイル',
  file: 'ファイル',
  uploads: 'アップロード',
  upload: 'アップロード',
  downloads: 'ダウンロード',
  download: 'ダウンロード',
  images: '画像',
  image: '画像',
  media: 'メディア',
  gallery: 'ギャラリー',

  // システム・技術系
  api: 'API',
  database: 'データベース',
  cache: 'キャッシュ',
  logs: 'ログ',
  log: 'ログ',
  backup: 'バックアップ',
  maintenance: 'メンテナンス',
  security: 'セキュリティ',
  auth: '認証',
  login: 'ログイン',
  logout: 'ログアウト',
  register: '登録',
  signup: '登録',

  // 日時・期間系
  today: '今日',
  yesterday: '昨日',
  week: '週',
  month: '月',
  year: '年',
  calendar: 'カレンダー',
  schedule: 'スケジュール',
  events: 'イベント',
  event: 'イベント',

  // その他
  favorites: 'お気に入り',
  bookmark: 'ブックマーク',
  tags: 'タグ',
  tag: 'タグ',
  preview: 'プレビュー',
  publish: '公開',
  draft: '下書き',
  archive: 'アーカイブ',
  trash: 'ゴミ箱',
  export: 'エクスポート',
  import: 'インポート',
};

// 文字列を人間が読みやすい形に変換する関数
export function humanizeString(str: string): string {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// 翻訳設定のデフォルト値
export const defaultBreadcrumbConfig: BreadcrumbTranslationConfig = {
  translations: defaultTranslations,
  fallbackStrategy: 'keep-original',
};

// カスタム翻訳設定を作成するヘルパー関数
export function createBreadcrumbConfig(
  customTranslations: Record<string, string> = {},
  fallbackStrategy: BreadcrumbTranslationConfig['fallbackStrategy'] = 'keep-original',
): BreadcrumbTranslationConfig {
  return {
    translations: { ...defaultTranslations, ...customTranslations },
    fallbackStrategy,
  };
}
