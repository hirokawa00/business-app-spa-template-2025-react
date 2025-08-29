import type { routeTree } from '../routeTree.gen';

// 再帰的にルートツリーを走査して fullPath のユニオンを作る
type ExtractPaths<T> = T extends { fullPath: infer P; children?: infer C }
  ? P extends string
    ? // biome-ignore lint/suspicious/noExplicitAny: <none>
      C extends Record<string, any>
      ? P | ExtractPaths<C[keyof C]>
      : P
    : never
  : never;

export type AppRoutePaths = ExtractPaths<typeof routeTree>;
