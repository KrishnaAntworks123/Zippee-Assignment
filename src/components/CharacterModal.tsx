import InfoRow from "./InfoRow";
import { characterImage } from "../utils/image";
import { cmToMeters, massKg, formatDate } from "../utils/format";

export default function CharacterModal({
    open,
    onClose,
    person,
    homeworld,
    speciesName,
    loading,
}: any) {
    if (!open || !person) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
                <div className="flex justify-between p-4 border-b">
                    <h2 className="font-semibold text-lg">{person.name}</h2>
                    <button onClick={onClose} className="p-2">✕</button>
                </div>

                <div className="p-4 space-y-5">
                    <img
                        src={characterImage(person.name)}
                        className="w-full h-56 object-cover rounded-xl"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InfoRow label="Height" value={cmToMeters(person.height)} />
                        <InfoRow label="Mass" value={massKg(person.mass)} />
                        <InfoRow label="Date Added" value={formatDate(person.created)} />
                        <InfoRow label="Films" value={String(person.films.length)} />
                        <InfoRow label="Birth Year" value={person.birth_year} />
                        <InfoRow label="Species" value={speciesName} />
                    </div>

                    <div className="border rounded-xl">
                        <div className="border-b p-3 font-semibold">Homeworld</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                            <InfoRow label="Name" value={homeworld?.name} loading={loading} />
                            <InfoRow label="Terrain" value={homeworld?.terrain} loading={loading} />
                            <InfoRow label="Climate" value={homeworld?.climate} loading={loading} />
                            <InfoRow label="Population" value={homeworld?.population} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
