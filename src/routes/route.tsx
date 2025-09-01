import { createFileRoute } from '@tanstack/react-router';
import { LoginRoute } from '@/routes/(public)/login';

export const Route = createFileRoute('/')({
  component: LoginRoute,
});
