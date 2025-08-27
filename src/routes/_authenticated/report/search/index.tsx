import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/report/search/')({
  component: ReportSerchRoute,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      area: String(search.from),
      department: String(search.from),
      startDate: String(search.to),
      endDate: String(search.type),
    };
  },
});

function ReportSerchRoute() {
  const { area, department, startDate, endDate } = Route.useSearch();

  return (
    <div>
      <h1>レポート結果</h1>
      <p>
        {area} ~ {department} / 種類: {startDate} ~ {endDate}
      </p>
    </div>
  );
}
