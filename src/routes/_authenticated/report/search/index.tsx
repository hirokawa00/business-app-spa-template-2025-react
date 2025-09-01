import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import Image from '../../../../../public/undraw_real-time-sync_ro77.svg';

const Params = z.object({
  area: z.string(),
  department: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export const Route = createFileRoute('/_authenticated/report/search/')({
  component: ReportSerchRoute,
  validateSearch: Params,
});

function ReportSerchRoute() {
  const { area, department, startDate, endDate } = Route.useSearch();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="bg-muted/50 min-h-[92vh] flex flex-col items-center justify-center rounded-xl">
        <img src={Image} alt="alt" className="max-w-full max-h-full" />
        <div className="space-y-2 flex flex-col mt-10">
          <p className="flex">
            area: <pre className="bg-muted px-2">{area}</pre>
          </p>
          <p className="flex">
            department: <pre className="bg-muted px-2">{department}</pre>
          </p>
          <p className="flex">
            startDate: <pre className="bg-muted px-2">{startDate}</pre>
          </p>
          <p className="flex">
            endDate: <pre className="bg-muted px-2">{endDate}</pre>
          </p>
        </div>
      </div>
    </div>
  );
}
