export default function SkeletonCard() {
    return (
        <div className="animate-pulse rounded-xl border bg-white overflow-hidden">
            <div className="h-40 bg-slate-200" />
            <div className="p-4 space-y-2">
                <div className="h-5 w-2/3 bg-slate-200 rounded" />
                <div className="h-4 w-1/2 bg-slate-200 rounded" />
            </div>
        </div>
    );
}
