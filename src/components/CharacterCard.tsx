import { characterImage } from "../utils/image";

const speciesAccent: Record<string, string> = {
    Human: "bg-amber-50 border-amber-200",
    Droid: "bg-slate-50 border-slate-200",
    Wookiee: "bg-orange-50 border-orange-200",
    Default: "bg-violet-50 border-violet-200",
};

export default function CharacterCard({
    person,
    speciesName,
    onClick,
}: {
    person: any;
    speciesName: string;
    onClick: () => void;
}) {
    const accent = speciesAccent[speciesName] || speciesAccent.Default;

    return (
        <button
            onClick={onClick}
            className={`rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition ${accent}`}
        >
            <div className="h-40 overflow-hidden">
                <img
                    src={characterImage(person.name)}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 text-left">
                <h3 className="font-semibold">{person.name}</h3>
                <p className="text-sm text-slate-600">Films: {person.films.length}</p>
            </div>
        </button>
    );
}
