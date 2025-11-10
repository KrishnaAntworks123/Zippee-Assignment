export default function InfoRow({
    label,
    value,
    loading,
}: {
    label: string;
    value?: string | null;
    loading?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1">
            <div className="text-xs uppercase text-slate-500">{label}</div>
            {loading ? (
                <div className="h-5 w-1/2 animate-pulse bg-slate-200 rounded" />
            ) : (
                <div className="text-sm font-medium">{value ?? "—"}</div>
            )}
        </div>
    );
}
