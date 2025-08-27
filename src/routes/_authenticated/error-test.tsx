import { createFileRoute } from '@tanstack/react-router';
import React from 'react';
import { ErrorBoundaryComponent } from '../__root';

export const Route = createFileRoute('/_authenticated/error-test')({
  component: RouteComponent,
  errorComponent: ErrorBoundaryComponent,
});

export function RouteComponent() {
  const [shouldThrow, setShouldThrow] = React.useState(false);

  if (shouldThrow) {
    throw new Error('意図的なエラーです 🚨');
  }

  return (
    <div>
      <h1>エラーテストページ</h1>
      <button type="button" onClick={() => setShouldThrow(true)}>
        エラーを発生させる
      </button>
    </div>
  );
}
