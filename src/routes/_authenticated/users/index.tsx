import { createFileRoute } from '@tanstack/react-router';
// import {
//   type ColumnDef,
//   type ColumnFiltersState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getSortedRowModel,
//   type SortingState,
//   useReactTable,
//   type VisibilityState,
// } from '@tanstack/react-table';
// import { ArrowUpDown, ChevronDown, Settings } from 'lucide-react';
// import React, { useMemo, useState } from 'react';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Input } from '@/components/ui/input';
// import { Separator } from '@/components/ui/separator';
// import { cn } from '@/lib/utils';
// import { TableSizeToggle, useTableSize } from '@/routes/_authenticated/-hooks/use-table-size';
// import { DataTableFacetedFilter } from './-components/fileter';

// // Table コンポーネントを直接定義
// const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
//   ({ className, ...props }, ref) => (
//     <div className="relative w-full overflow-auto">
//       <table ref={ref} className={`w-full caption-bottom text-sm ${className}`} {...props} />
//     </div>
//   ),
// );
// Table.displayName = 'Table';

// const TableHeader = React.forwardRef<
//   HTMLTableSectionElement,
//   React.HTMLAttributes<HTMLTableSectionElement>
// >(({ className, ...props }, ref) => (
//   <thead ref={ref} className={`[&_tr]:border-b ${className}`} {...props} />
// ));
// TableHeader.displayName = 'TableHeader';

// const TableBody = React.forwardRef<
//   HTMLTableSectionElement,
//   React.HTMLAttributes<HTMLTableSectionElement>
// >(({ className, ...props }, ref) => (
//   <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
// ));
// TableBody.displayName = 'TableBody';

// const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
//   ({ className, ...props }, ref) => (
//     <tr
//       ref={ref}
//       className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
//       {...props}
//     />
//   ),
// );
// TableRow.displayName = 'TableRow';

// const TableHead = React.forwardRef<
//   HTMLTableCellElement,
//   React.ThHTMLAttributes<HTMLTableCellElement>
// >(({ className, ...props }, ref) => (
//   <th
//     ref={ref}
//     className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
//     {...props}
//   />
// ));
// TableHead.displayName = 'TableHead';

// const TableCell = React.forwardRef<
//   HTMLTableCellElement,
//   React.TdHTMLAttributes<HTMLTableCellElement>
// >(({ className, ...props }, ref) => (
//   <td
//     ref={ref}
//     className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
//     {...props}
//   />
// ));
// TableCell.displayName = 'TableCell';

// // ユーザーデータの型定義
// type User = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   status: 'active' | 'inactive' | 'pending';
//   department: string;
//   joinDate: string;
// };

// // サンプルデータ
// const sampleUsers: User[] = [
//   {
//     id: '1',
//     name: '田中 太郎',
//     email: 'tanaka@example.com',
//     role: '管理者',
//     status: 'active',
//     department: '開発部',
//     joinDate: '2023-01-15',
//   },
//   {
//     id: '2',
//     name: '佐藤 花子',
//     email: 'sato@example.com',
//     role: '一般ユーザー',
//     status: 'active',
//     department: '営業部',
//     joinDate: '2023-03-20',
//   },
//   {
//     id: '3',
//     name: '鈴木 次郎',
//     email: 'suzuki@example.com',
//     role: 'マネージャー',
//     status: 'inactive',
//     department: '人事部',
//     joinDate: '2022-11-10',
//   },
//   {
//     id: '4',
//     name: '高橋 美咲',
//     email: 'takahashi@example.com',
//     role: '一般ユーザー',
//     status: 'pending',
//     department: '開発部',
//     joinDate: '2023-12-01',
//   },
//   {
//     id: '5',
//     name: '山田 健一',
//     email: 'yamada@example.com',
//     role: '管理者',
//     status: 'active',
//     department: '営業部',
//     joinDate: '2022-05-18',
//   },
//   {
//     id: '6',
//     name: '渡辺 由美',
//     email: 'watanabe@example.com',
//     role: 'マネージャー',
//     status: 'active',
//     department: '人事部',
//     joinDate: '2023-08-25',
//   },
//   {
//     id: '1',
//     name: '田中 太郎',
//     email: 'tanaka@example.com',
//     role: '管理者',
//     status: 'active',
//     department: '開発部',
//     joinDate: '2023-01-15',
//   },
//   {
//     id: '2',
//     name: '佐藤 花子',
//     email: 'sato@example.com',
//     role: '一般ユーザー',
//     status: 'active',
//     department: '営業部',
//     joinDate: '2023-03-20',
//   },
//   {
//     id: '3',
//     name: '鈴木 次郎',
//     email: 'suzuki@example.com',
//     role: 'マネージャー',
//     status: 'inactive',
//     department: '人事部',
//     joinDate: '2022-11-10',
//   },
//   {
//     id: '4',
//     name: '高橋 美咲',
//     email: 'takahashi@example.com',
//     role: '一般ユーザー',
//     status: 'pending',
//     department: '開発部',
//     joinDate: '2023-12-01',
//   },
//   {
//     id: '5',
//     name: '山田 健一',
//     email: 'yamada@example.com',
//     role: '管理者',
//     status: 'active',
//     department: '営業部',
//     joinDate: '2022-05-18',
//   },
//   {
//     id: '6',
//     name: '渡辺 由美',
//     email: 'watanabe@example.com',
//     role: 'マネージャー',
//     status: 'active',
//     department: '人事部',
//     joinDate: '2023-08-25',
//   },
//   {
//     id: '1',
//     name: '田中 太郎',
//     email: 'tanaka@example.com',
//     role: '管理者',
//     status: 'active',
//     department: '開発部',
//     joinDate: '2023-01-15',
//   },
//   {
//     id: '2',
//     name: '佐藤 花子',
//     email: 'sato@example.com',
//     role: '一般ユーザー',
//     status: 'active',
//     department: '営業部',
//     joinDate: '2023-03-20',
//   },
//   {
//     id: '3',
//     name: '鈴木 次郎',
//     email: 'suzuki@example.com',
//     role: 'マネージャー',
//     status: 'inactive',
//     department: '人事部',
//     joinDate: '2022-11-10',
//   },
//   {
//     id: '4',
//     name: '高橋 美咲',
//     email: 'takahashi@example.com',
//     role: '一般ユーザー',
//     status: 'pending',
//     department: '開発部',
//     joinDate: '2023-12-01',
//   },
//   {
//     id: '5',
//     name: '山田 健一',
//     email: 'yamada@example.com',
//     role: '管理者',
//     status: 'active',
//     department: '営業部',
//     joinDate: '2022-05-18',
//   },
//   {
//     id: '6',
//     name: '渡辺 由美',
//     email: 'watanabe@example.com',
//     role: 'マネージャー',
//     status: 'active',
//     department: '人事部',
//     joinDate: '2023-08-25',
//   },
// ];

// // ステータスバッジコンポーネント
// const StatusBadge = ({ status }: { status: User['status'] }) => {
//   const statusConfig = {
//     active: { label: 'アクティブ', variant: 'default' as const },
//     inactive: { label: '非アクティブ', variant: 'secondary' as const },
//     pending: { label: '保留中', variant: 'outline' as const },
//   };

//   const config = statusConfig[status];
//   return <Badge variant={config.variant}>{config.label}</Badge>;
// };

// // テーブル列定義
// const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: 'name',
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         className="h-auto p-0 font-medium"
//       >
//         名前
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: 'email',
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         className="h-auto p-0 font-medium"
//       >
//         メールアドレス
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: 'role',
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         className="h-auto p-0 font-medium"
//       >
//         役割
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: 'status',
//     header: 'ステータス',
//     cell: ({ row }) => <StatusBadge status={row.getValue('status')} />,
//   },
//   {
//     accessorKey: 'department',
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         className="h-auto p-0 font-medium"
//       >
//         部署
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: 'joinDate',
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         className="h-auto p-0 font-medium"
//       >
//         入社日
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
// ];

// import { CheckCircle, Circle, CircleOff, HelpCircle, Timer } from 'lucide-react';

// export const statuses = [
//   {
//     value: 'backlog',
//     label: 'Backlog',
//     icon: HelpCircle,
//   },
//   {
//     value: 'todo',
//     label: 'Todo',
//     icon: Circle,
//   },
//   {
//     value: 'in progress',
//     label: 'In Progress',
//     icon: Timer,
//   },
//   {
//     value: 'done',
//     label: 'Done',
//     icon: CheckCircle,
//   },
//   {
//     value: 'canceled',
//     label: 'Canceled',
//     icon: CircleOff,
//   },
// ];

// // メインコンポーネント
// export default function UserListPage() {
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
//   const [globalFilter, setGlobalFilter] = useState('');
//   const [roleFilter, setRoleFilter] = useState('all');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [departmentFilter, setDepartmentFilter] = useState('all');
//   const { size, setSize, className } = useTableSize(); // ← hookで状態管理

//   // フィルター済みデータ
//   const filteredData = useMemo(() => {
//     return sampleUsers.filter((user) => {
//       const matchesGlobal =
//         globalFilter === '' ||
//         user.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
//         user.email.toLowerCase().includes(globalFilter.toLowerCase());

//       const matchesRole = roleFilter === 'all' || user.role === roleFilter;
//       const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
//       const matchesDepartment = departmentFilter === 'all' || user.department === departmentFilter;

//       return matchesGlobal && matchesRole && matchesStatus && matchesDepartment;
//     });
//   }, [globalFilter, roleFilter, statusFilter, departmentFilter]);

//   const table = useReactTable({
//     data: filteredData,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       globalFilter,
//     },
//   });

//   return (
//     <div className="mx-full space-y-1 p-2 flex flex-col h-full">
//       {/* ヘッダー */}
//       <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="flex justify-between items-center  py-1">
//           <div className="flex flex-col gap-4 background h-8">
//             <div className="flex h-8 space-x-2">
//               {/* 全体検索 */}
//               <div className="flex items-center justify-center space-x-2">
//                 <Input
//                   placeholder="名前、メール等で検索..."
//                   value={globalFilter}
//                   onChange={(e) => setGlobalFilter(e.target.value)}
//                   className="h-auto w-[150px] lg:w-[250px]"
//                 />
//               </div>

//               <DataTableFacetedFilter title="役割" options={statuses} />

//               <DataTableFacetedFilter title="ステータス" options={statuses} />

//               <DataTableFacetedFilter title="部署" options={statuses} />

//               <Separator orientation="vertical" className="border-2 mx-2" />

//               <TableSizeToggle size={size} setSize={setSize} />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline" className="h-auto">
//                     <Settings className="h-4 w-4" />
//                     列の表示
//                     <ChevronDown className="h-4 w-4" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-48">
//                   {table
//                     .getAllColumns()
//                     .filter((column) => column.getCanHide())
//                     .map((column) => {
//                       const columnNames: Record<string, string> = {
//                         name: '名前',
//                         email: 'メールアドレス',
//                         role: '役割',
//                         status: 'ステータス',
//                         department: '部署',
//                         joinDate: '入社日',
//                       };

//                       return (
//                         <DropdownMenuCheckboxItem
//                           key={column.id}
//                           className="capitalize"
//                           checked={column.getIsVisible()}
//                           onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                         >
//                           {columnNames[column.id] || column.id}
//                         </DropdownMenuCheckboxItem>
//                       );
//                     })}
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//           <Button className="h-auto">新規ユーザー追加</Button>
//         </div>
//       </div>

//       <div className={cn('flex-1 overflow-auto', className)}>
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <TableHead key={header.id} className="font-medium">
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(header.column.columnDef.header, header.getContext())}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && 'selected'}
//                   className="hover:bg-muted/50"
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                   データがありません
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* フッター部 - 固定 */}
//       <div className="sticky bottom-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="mx-auto px-4 py-1">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <span className="text-sm text-muted-foreground">
//                 {table.getFilteredRowModel().rows.length} 件中 {table.getRowModel().rows.length}{' '}
//                 件を表示
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from '../../../../public/undraw_data_0ml2.svg';

export const Route = createFileRoute('/_authenticated/users/')({
  component: UsersRoute,
});

function UsersRoute() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="bg-muted/50 min-h-[92vh] flex items-center justify-center rounded-xl">
        <img src={Image} alt="alt" className="max-w-full max-h-full" />
      </div>
    </div>
  );
}
