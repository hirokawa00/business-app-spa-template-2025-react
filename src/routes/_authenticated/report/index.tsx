import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import {
//   Building2,
//   Check,
//   ChevronRight,
//   Eye,
//   EyeOff,
//   Filter,
//   Globe,
//   Map,
//   MapPin,
//   RotateCcw,
//   Search,
// } from 'lucide-react';
// import type React from 'react';
// import { useEffect, useMemo, useState } from 'react';
// import { cn } from '@/lib/utils';
import Image from '../../../../public/undraw_complete-form_aarh.svg';

export const Route = createFileRoute('/_authenticated/report/')({
  component: ReportRoute,
});

function ReportRoute() {
  const navigata = useNavigate();
  const [area, setArea] = useState('test area');
  const [department, setDepartment] = useState('test department');
  const [startDate, setStartDate] = useState(String(new Date()));
  const [endDate, setEndDate] = useState(String(new Date()));

  const handleClick = () => {
    navigata({
      to: '/report/search',
      search: {
        area,
        department,
        startDate,
        endDate,
      },
    });
  };
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="bg-muted/50 min-h-[92vh] flex flex-col items-center justify-center rounded-xl">
        <img src={Image} alt="alt" className="max-w-full max-h-full" />
        <div className="w-full max-w-md space-y-4 mt-10">
          <Input
            placeholder="エリアを入力"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <Input
            placeholder="部署を入力"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <Input
            type="date"
            placeholder="開始日"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            type="date"
            placeholder="終了日"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Button className="w-full" onClick={handleClick}>
            次のページに遷移する
          </Button>
        </div>
      </div>
    </div>
  );
}

// // 型定義
// interface Store {
//   id: string;
//   name: string;
//   code: string;
//   address: string;
//   phone?: string;
//   isActive: boolean;
// }

// interface Area {
//   id: string;
//   name: string;
//   code: string;
//   stores: Store[];
// }

// interface Region {
//   id: string;
//   name: string;
//   code: string;
//   areas: Area[];
// }

// interface HierarchicalSelection {
//   level: 'nationwide' | 'region' | 'area' | 'store';
//   selectedRegions: string[];
//   selectedAreas: string[];
//   selectedStores: string[];
// }

// // サンプルデータ
// const SAMPLE_DATA: Region[] = [
//   {
//     id: 'kanto',
//     name: '関東',
//     code: 'KANTO',
//     areas: [
//       {
//         id: 'tokyo',
//         name: '東京',
//         code: 'TOKYO',
//         stores: [
//           {
//             id: 'shinjuku',
//             name: '新宿本店',
//             code: 'SHJ001',
//             address: '東京都新宿区新宿3-1-1',
//             phone: '03-1234-5678',
//             isActive: true,
//           },
//           {
//             id: 'shibuya',
//             name: '渋谷店',
//             code: 'SHB001',
//             address: '東京都渋谷区道玄坂1-1-1',
//             phone: '03-1234-5679',
//             isActive: true,
//           },
//           {
//             id: 'ginza',
//             name: '銀座店',
//             code: 'GNZ001',
//             address: '東京都中央区銀座4-1-1',
//             phone: '03-1234-5680',
//             isActive: true,
//           },
//           {
//             id: 'ikebukuro',
//             name: '池袋店',
//             code: 'IKB001',
//             address: '東京都豊島区南池袋1-1-1',
//             phone: '03-1234-5681',
//             isActive: false,
//           },
//         ],
//       },
//       {
//         id: 'kanagawa',
//         name: '神奈川',
//         code: 'KANAGAWA',
//         stores: [
//           {
//             id: 'yokohama',
//             name: '横浜店',
//             code: 'YKH001',
//             address: '神奈川県横浜市西区南幸1-1-1',
//             phone: '045-123-4567',
//             isActive: true,
//           },
//           {
//             id: 'kawasaki',
//             name: '川崎店',
//             code: 'KWS001',
//             address: '神奈川県川崎市川崎区駅前本町1-1',
//             phone: '044-123-4567',
//             isActive: true,
//           },
//         ],
//       },
//       {
//         id: 'saitama',
//         name: '埼玉',
//         code: 'SAITAMA',
//         stores: [
//           {
//             id: 'urawa',
//             name: '浦和店',
//             code: 'URW001',
//             address: '埼玉県さいたま市浦和区高砂1-1-1',
//             phone: '048-123-4567',
//             isActive: true,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'kansai',
//     name: '関西',
//     code: 'KANSAI',
//     areas: [
//       {
//         id: 'osaka',
//         name: '大阪',
//         code: 'OSAKA',
//         stores: [
//           {
//             id: 'umeda',
//             name: '梅田本店',
//             code: 'UMD001',
//             address: '大阪府大阪市北区梅田1-1-1',
//             phone: '06-1234-5678',
//             isActive: true,
//           },
//           {
//             id: 'namba',
//             name: '難波店',
//             code: 'NMB001',
//             address: '大阪府大阪市中央区難波1-1-1',
//             phone: '06-1234-5679',
//             isActive: true,
//           },
//         ],
//       },
//       {
//         id: 'kyoto',
//         name: '京都',
//         code: 'KYOTO',
//         stores: [
//           {
//             id: 'kyoto-main',
//             name: '京都本店',
//             code: 'KYT001',
//             address: '京都府京都市下京区四条通1-1',
//             phone: '075-123-4567',
//             isActive: true,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'chubu',
//     name: '中部',
//     code: 'CHUBU',
//     areas: [
//       {
//         id: 'aichi',
//         name: '愛知',
//         code: 'AICHI',
//         stores: [
//           {
//             id: 'nagoya',
//             name: '名古屋店',
//             code: 'NGY001',
//             address: '愛知県名古屋市中村区名駅1-1-1',
//             phone: '052-123-4567',
//             isActive: true,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // 階層選択コンポーネント
// interface HierarchyLevelProps {
//   title: string;
//   icon: React.ReactNode;
//   isSelected: boolean;
//   isExpanded: boolean;
//   onToggle: () => void;
//   onSelect: () => void;
//   itemCount?: number;
//   level: number;
// }

// const HierarchyLevel: React.FC<HierarchyLevelProps> = ({
//   title,
//   icon,
//   isSelected,
//   isExpanded,
//   onToggle,
//   onSelect,
//   itemCount,
//   level,
// }) => {
//   const indentClass = level > 0 ? `ml-${level * 6}` : '';

//   return (
//     <div className={cn('border rounded-lg bg-card transition-all duration-200', indentClass)}>
//       <div className="flex items-center justify-between p-4">
//         <div className="flex items-center gap-3">
//           <button
//             onClick={onToggle}
//             className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-accent/10 transition-colors"
//           >
//             <ChevronRight
//               className={cn('w-4 h-4 transition-transform', isExpanded && 'rotate-90')}
//             />
//           </button>

//           <div className="flex items-center gap-3">
//             <div
//               className={cn(
//                 'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
//                 isSelected
//                   ? 'bg-primary text-primary-foreground'
//                   : 'bg-muted text-muted-foreground',
//               )}
//             >
//               {icon}
//             </div>
//             <div>
//               <h3 className="font-semibold">{title}</h3>
//               {itemCount !== undefined && (
//                 <p className="text-sm text-muted-foreground">{itemCount}件</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={onSelect}
//           className={cn(
//             'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
//             isSelected
//               ? 'bg-primary text-primary-foreground'
//               : 'border border-border hover:bg-accent/5',
//           )}
//         >
//           {isSelected ? '選択中' : '選択'}
//         </button>
//       </div>
//     </div>
//   );
// };

// // 店舗カードコンポーネント
// interface StoreCardProps {
//   store: Store;
//   isSelected: boolean;
//   onToggle: () => void;
//   showDetails?: boolean;
// }

// const StoreCard: React.FC<StoreCardProps> = ({
//   store,
//   isSelected,
//   onToggle,
//   showDetails = true,
// }) => {
//   return (
//     <div
//       className={cn(
//         'border rounded-lg p-4 cursor-pointer transition-all duration-200',
//         'hover:shadow-md hover:border-ring/50',
//         isSelected && 'border-primary bg-primary/5',
//         !store.isActive && 'opacity-60',
//       )}
//     >
//       <div className="flex items-start justify-between">
//         <div className="flex items-start gap-3 flex-1">
//           <button
//             onClick={onToggle}
//             className={cn(
//               'w-5 h-5 border-2 rounded flex items-center justify-center mt-1 transition-colors',
//               isSelected && 'bg-primary border-primary',
//             )}
//           >
//             {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
//           </button>

//           <div className="flex-1">
//             <div className="flex items-center gap-2">
//               <h4 className="font-semibold">{store.name}</h4>
//               <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
//                 {store.code}
//               </span>
//               {!store.isActive && (
//                 <span className="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded-full">
//                   休業中
//                 </span>
//               )}
//             </div>

//             {showDetails && (
//               <div className="mt-2 space-y-1">
//                 <p className="text-sm text-muted-foreground flex items-center gap-1">
//                   <MapPin className="w-3 h-3" />
//                   {store.address}
//                 </p>
//                 {store.phone && <p className="text-sm text-muted-foreground">TEL: {store.phone}</p>}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // メインフォームコンポーネント
// function HierarchicalStoreSelector() {
//   const [selection, setSelection] = useState<HierarchicalSelection>({
//     level: 'store',
//     selectedRegions: [],
//     selectedAreas: [],
//     selectedStores: [],
//   });

//   const [expandedRegions, setExpandedRegions] = useState<string[]>([]);
//   const [expandedAreas, setExpandedAreas] = useState<string[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showInactiveStores, setShowInactiveStores] = useState(false);
//   const [viewMode, setViewMode] = useState<'hierarchy' | 'list'>('hierarchy');

//   // 検索・フィルタリング
//   const filteredData = useMemo(() => {
//     return SAMPLE_DATA.map((region) => ({
//       ...region,
//       areas: region.areas
//         .map((area) => ({
//           ...area,
//           stores: area.stores.filter((store) => {
//             const matchesSearch =
//               !searchTerm ||
//               store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               store.code.toLowerCase().includes(searchTerm.toLowerCase());

//             const matchesActiveFilter = showInactiveStores || store.isActive;

//             return matchesSearch && matchesActiveFilter;
//           }),
//         }))
//         .filter((area) => area.stores.length > 0),
//     })).filter((region) => region.areas.length > 0);
//   }, [searchTerm, showInactiveStores]);

//   // 統計情報
//   const stats = useMemo(() => {
//     const totalStores = filteredData.reduce(
//       (total, region) =>
//         total + region.areas.reduce((areaTotal, area) => areaTotal + area.stores.length, 0),
//       0,
//     );

//     const selectedStoreCount = selection.selectedStores.length;
//     const selectedAreaCount = selection.selectedAreas.length;
//     const selectedRegionCount = selection.selectedRegions.length;

//     return {
//       totalStores,
//       selectedStoreCount,
//       selectedAreaCount,
//       selectedRegionCount,
//       isAllSelected: selection.level === 'nationwide',
//     };
//   }, [filteredData, selection]);

//   // 全国選択
//   const handleNationwideSelect = () => {
//     setSelection({
//       level: 'nationwide',
//       selectedRegions: [],
//       selectedAreas: [],
//       selectedStores: [],
//     });
//   };

//   // 地域選択
//   const handleRegionToggle = (regionId: string) => {
//     const region = SAMPLE_DATA.find((r) => r.id === regionId);
//     if (!region) return;

//     const isSelected = selection.selectedRegions.includes(regionId);

//     if (isSelected) {
//       // 地域の選択を解除
//       setSelection((prev) => ({
//         ...prev,
//         level: 'store',
//         selectedRegions: prev.selectedRegions.filter((id) => id !== regionId),
//         selectedAreas: prev.selectedAreas.filter(
//           (areaId) => !region.areas.some((area) => area.id === areaId),
//         ),
//         selectedStores: prev.selectedStores.filter(
//           (storeId) =>
//             !region.areas.some((area) => area.stores.some((store) => store.id === storeId)),
//         ),
//       }));
//     } else {
//       // 地域を選択
//       setSelection((prev) => ({
//         level: 'region',
//         selectedRegions: [...prev.selectedRegions, regionId],
//         selectedAreas: prev.selectedAreas.filter(
//           (areaId) => !region.areas.some((area) => area.id === areaId),
//         ),
//         selectedStores: prev.selectedStores.filter(
//           (storeId) =>
//             !region.areas.some((area) => area.stores.some((store) => store.id === storeId)),
//         ),
//       }));
//     }
//   };

//   // エリア選択
//   const handleAreaToggle = (areaId: string) => {
//     const area = SAMPLE_DATA.flatMap((r) => r.areas).find((a) => a.id === areaId);
//     if (!area) return;

//     const isSelected = selection.selectedAreas.includes(areaId);

//     if (isSelected) {
//       setSelection((prev) => ({
//         ...prev,
//         level: 'store',
//         selectedAreas: prev.selectedAreas.filter((id) => id !== areaId),
//         selectedStores: prev.selectedStores.filter(
//           (storeId) => !area.stores.some((store) => store.id === storeId),
//         ),
//       }));
//     } else {
//       setSelection((prev) => ({
//         level: 'area',
//         selectedAreas: [...prev.selectedAreas, areaId],
//         selectedStores: prev.selectedStores.filter(
//           (storeId) => !area.stores.some((store) => store.id === storeId),
//         ),
//       }));
//     }
//   };

//   // 店舗選択
//   const handleStoreToggle = (storeId: string) => {
//     setSelection((prev) => ({
//       ...prev,
//       level: 'store',
//       selectedStores: prev.selectedStores.includes(storeId)
//         ? prev.selectedStores.filter((id) => id !== storeId)
//         : [...prev.selectedStores, storeId],
//     }));
//   };

//   // リセット
//   const handleReset = () => {
//     setSelection({
//       level: 'store',
//       selectedRegions: [],
//       selectedAreas: [],
//       selectedStores: [],
//     });
//     setSearchTerm('');
//   };

//   // 階層表示の展開状態管理
//   const toggleRegionExpansion = (regionId: string) => {
//     setExpandedRegions((prev) =>
//       prev.includes(regionId) ? prev.filter((id) => id !== regionId) : [...prev, regionId],
//     );
//   };

//   const toggleAreaExpansion = (areaId: string) => {
//     setExpandedAreas((prev) =>
//       prev.includes(areaId) ? prev.filter((id) => id !== areaId) : [...prev, areaId],
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* ヘッダー */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-2">店舗選択フォーム</h1>
//           <p className="text-muted-foreground">
//             階層的に店舗を選択できます。全国、地域、エリア、個別店舗の各レベルで選択可能です。
//           </p>
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
//           {/* 選択パネル */}
//           <div className="xl:col-span-3 space-y-6">
//             {/* コントロールバー */}
//             <div className="bg-card border rounded-lg p-4">
//               <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
//                 <div className="flex flex-col sm:flex-row gap-4 flex-1">
//                   {/* 検索 */}
//                   <div className="relative flex-1 max-w-md">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                     <input
//                       type="text"
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       placeholder="店舗名、住所、コードで検索..."
//                       className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
//                     />
//                   </div>

//                   {/* フィルター */}
//                   <div className="flex items-center gap-4">
//                     <button
//                       onClick={() => setShowInactiveStores(!showInactiveStores)}
//                       className={cn(
//                         'flex items-center gap-2 px-3 py-2 border rounded-lg text-sm transition-colors',
//                         showInactiveStores
//                           ? 'bg-primary text-primary-foreground'
//                           : 'hover:bg-accent/5',
//                       )}
//                     >
//                       {showInactiveStores ? (
//                         <Eye className="w-4 h-4" />
//                       ) : (
//                         <EyeOff className="w-4 h-4" />
//                       )}
//                       休業店舗
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   {/* 表示切り替え */}
//                   <div className="flex border rounded-lg">
//                     <button
//                       onClick={() => setViewMode('hierarchy')}
//                       className={cn(
//                         'px-3 py-2 text-sm rounded-l-lg transition-colors',
//                         viewMode === 'hierarchy'
//                           ? 'bg-primary text-primary-foreground'
//                           : 'hover:bg-accent/5',
//                       )}
//                     >
//                       階層表示
//                     </button>
//                     <button
//                       onClick={() => setViewMode('list')}
//                       className={cn(
//                         'px-3 py-2 text-sm rounded-r-lg transition-colors',
//                         viewMode === 'list'
//                           ? 'bg-primary text-primary-foreground'
//                           : 'hover:bg-accent/5',
//                       )}
//                     >
//                       一覧表示
//                     </button>
//                   </div>

//                   <button
//                     onClick={handleReset}
//                     className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-accent/5 text-sm"
//                   >
//                     <RotateCcw className="w-4 h-4" />
//                     リセット
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* 全国選択オプション */}
//             <HierarchyLevel
//               title="全国すべての店舗"
//               icon={<Globe className="w-5 h-5" />}
//               isSelected={selection.level === 'nationwide'}
//               isExpanded={false}
//               onToggle={() => {}}
//               onSelect={handleNationwideSelect}
//               itemCount={stats.totalStores}
//               level={0}
//             />

//             {/* 階層表示 */}
//             {viewMode === 'hierarchy' ? (
//               <div className="space-y-4">
//                 {filteredData.map((region) => {
//                   const isRegionExpanded = expandedRegions.includes(region.id);
//                   const isRegionSelected = selection.selectedRegions.includes(region.id);
//                   const regionStoreCount = region.areas.reduce(
//                     (total, area) => total + area.stores.length,
//                     0,
//                   );

//                   return (
//                     <div key={region.id} className="space-y-3">
//                       <HierarchyLevel
//                         title={region.name}
//                         icon={<Map className="w-5 h-5" />}
//                         isSelected={isRegionSelected}
//                         isExpanded={isRegionExpanded}
//                         onToggle={() => toggleRegionExpansion(region.id)}
//                         onSelect={() => handleRegionToggle(region.id)}
//                         itemCount={regionStoreCount}
//                         level={0}
//                       />

//                       {isRegionExpanded && (
//                         <div className="ml-8 space-y-3">
//                           {region.areas.map((area) => {
//                             const isAreaExpanded = expandedAreas.includes(area.id);
//                             const isAreaSelected = selection.selectedAreas.includes(area.id);

//                             return (
//                               <div key={area.id} className="space-y-3">
//                                 <HierarchyLevel
//                                   title={area.name}
//                                   icon={<Building2 className="w-5 h-5" />}
//                                   isSelected={isAreaSelected}
//                                   isExpanded={isAreaExpanded}
//                                   onToggle={() => toggleAreaExpansion(area.id)}
//                                   onSelect={() => handleAreaToggle(area.id)}
//                                   itemCount={area.stores.length}
//                                   level={1}
//                                 />

//                                 {isAreaExpanded && (
//                                   <div className="ml-8 space-y-3">
//                                     {area.stores.map((store) => (
//                                       <StoreCard
//                                         key={store.id}
//                                         store={store}
//                                         isSelected={selection.selectedStores.includes(store.id)}
//                                         onToggle={() => handleStoreToggle(store.id)}
//                                       />
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             );
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               /* 一覧表示 */
//               <div className="space-y-4">
//                 {filteredData.map((region) =>
//                   region.areas.map((area) =>
//                     area.stores.map((store) => (
//                       <div key={store.id} className="ml-4">
//                         <div className="text-xs text-muted-foreground mb-2">
//                           {region.name} / {area.name}
//                         </div>
//                         <StoreCard
//                           store={store}
//                           isSelected={selection.selectedStores.includes(store.id)}
//                           onToggle={() => handleStoreToggle(store.id)}
//                         />
//                       </div>
//                     )),
//                   ),
//                 )}
//               </div>
//             )}
//           </div>

//           {/* サマリーパネル */}
//           <div className="space-y-6">
//             {/* 選択状況 */}
//             <div className="bg-card border rounded-lg p-6">
//               <h3 className="font-semibold mb-4 flex items-center gap-2">
//                 <Filter className="w-5 h-5" />
//                 選択状況
//               </h3>

//               <div className="space-y-4">
//                 <div className="text-center p-4 bg-primary/5 rounded-lg">
//                   <div className="text-2xl font-bold text-primary">
//                     {stats.isAllSelected
//                       ? '全店舗'
//                       : selection.level === 'region'
//                         ? `${stats.selectedRegionCount}地域`
//                         : selection.level === 'area'
//                           ? `${stats.selectedAreaCount}エリア`
//                           : `${stats.selectedStoreCount}店舗`}
//                   </div>
//                   <div className="text-sm text-muted-foreground mt-1">
//                     {stats.isAllSelected ? `${stats.totalStores}店舗が対象` : '選択中'}
//                   </div>
//                 </div>

//                 {/* 詳細統計 */}
//                 <div className="space-y-3">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">選択レベル:</span>
//                     <span className="font-medium">
//                       {selection.level === 'nationwide'
//                         ? '全国'
//                         : selection.level === 'region'
//                           ? '地域'
//                           : selection.level === 'area'
//                             ? 'エリア'
//                             : '個別店舗'}
//                     </span>
//                   </div>

//                   {selection.selectedRegions.length > 0 && (
//                     <div className="flex justify-between text-sm">
//                       <span className="text-muted-foreground">選択地域:</span>
//                       <span>{selection.selectedRegions.length}件</span>
//                     </div>
//                   )}

//                   {selection.selectedAreas.length > 0 && (
//                     <div className="flex justify-between text-sm">
//                       <span className="text-muted-foreground">選択エリア:</span>
//                       <span>{selection.selectedAreas.length}件</span>
//                     </div>
//                   )}

//                   {selection.selectedStores.length > 0 && (
//                     <div className="flex justify-between text-sm">
//                       <span className="text-muted-foreground">選択店舗:</span>
//                       <span>{selection.selectedStores.length}件</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* 選択詳細 */}
//             {(selection.selectedRegions.length > 0 ||
//               selection.selectedAreas.length > 0 ||
//               selection.selectedStores.length > 0) && (
//               <div className="bg-card border rounded-lg p-6">
//                 <h3 className="font-semibold mb-4">選択詳細</h3>

//                 <div className="space-y-3 max-h-96 overflow-y-auto">
//                   {selection.selectedRegions.map((regionId) => {
//                     const region = SAMPLE_DATA.find((r) => r.id === regionId);
//                     return region ? (
//                       <div
//                         key={regionId}
//                         className="flex items-center gap-2 text-sm p-2 bg-muted/50 rounded"
//                       >
//                         <Map className="w-4 h-4 text-primary" />
//                         <span>{region.name} (地域)</span>
//                       </div>
//                     ) : null;
//                   })}

//                   {selection.selectedAreas.map((areaId) => {
//                     const area = SAMPLE_DATA.flatMap((r) => r.areas).find((a) => a.id === areaId);
//                     return area ? (
//                       <div
//                         key={areaId}
//                         className="flex items-center gap-2 text-sm p-2 bg-muted/50 rounded"
//                       >
//                         <Building2 className="w-4 h-4 text-primary" />
//                         <span>{area.name} (エリア)</span>
//                       </div>
//                     ) : null;
//                   })}

//                   {selection.selectedStores.map((storeId) => {
//                     const store = SAMPLE_DATA.flatMap((r) => r.areas)
//                       .flatMap((a) => a.stores)
//                       .find((s) => s.id === storeId);
//                     return store ? (
//                       <div
//                         key={storeId}
//                         className="flex items-center gap-2 text-sm p-2 bg-muted/50 rounded"
//                       >
//                         <MapPin className="w-4 h-4 text-primary" />
//                         <div>
//                           <div>{store.name}</div>
//                           <div className="text-xs text-muted-foreground">{store.code}</div>
//                         </div>
//                       </div>
//                     ) : null;
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* アクションボタン */}
//             <div className="space-y-3">
//               <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
//                 選択を確定
//               </button>
//               <button
//                 onClick={handleReset}
//                 className="w-full py-2 border rounded-lg hover:bg-accent/5 transition-colors"
//               >
//                 すべてリセット
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HierarchicalStoreSelector;
