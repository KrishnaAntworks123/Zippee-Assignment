export function cmToMeters(val: string): string {
    if (val === "unknown") return "Unknown";
    const n = Number(val);
    return Number.isNaN(n) ? "Unknown" : (n / 100).toFixed(2) + " m";
}

export function massKg(val: string): string {
    if (val === "unknown") return "Unknown";
    const n = Number(val.replace(",", ""));
    return Number.isNaN(n) ? "Unknown" : n + " kg";
}

export function formatDate(iso: string) {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2, "0")}-${String(
        d.getMonth() + 1
    ).padStart(2, "0")}-${d.getFullYear()}`;
}
