import { Link } from '@tanstack/react-router';
import { PanelsTopLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function Logo() {
  return (
    <Button className="flex justify-center items-center pb-2 pt-1" variant="link" asChild>
      <Link to="/dashboard" className="flex items-center gap-2">
        <PanelsTopLeft className="w-6 h-6 mr-1" />
        <span className="font-bold text-lg">Brand</span>
      </Link>
    </Button>
  );
}
