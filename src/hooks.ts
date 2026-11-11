import { useEffect, useState } from 'react';

export type AppData = {
  completed: number[]; answers: Record<string, number>; notes: string;
  roles: Record<string, string>; debrief: Record<string, string>;
};
const key = 'inov3001-group5a-v1';
const initial: AppData = { completed: [], answers: {}, notes: '', roles: {}, debrief: {} };
export function useAppData() {
  const [data, setData] = useState<AppData>(() => {
    try { return { ...initial, ...JSON.parse(localStorage.getItem(key) || '{}') }; } catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(data)); }, [data]);
  const update = (patch: Partial<AppData>) => setData(current => ({ ...current, ...patch }));
  const exportData = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'group5a-progress.json'; link.click(); URL.revokeObjectURL(link.href);
  };
  const importData = async (file?: File) => {
    if (!file) return;
    try { const parsed = JSON.parse(await file.text()); setData({ ...initial, ...parsed }); }
    catch { window.alert('That file is not a valid Group 5A progress JSON.'); }
  };
  return { data, update, exportData, importData };
}
