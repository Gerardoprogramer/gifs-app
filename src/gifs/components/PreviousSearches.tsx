interface PreviousSearchesProps {
    searches: string[];

    onTermClick: (term: string) => void;
}

export const PreviousSearches = ({ searches, onTermClick }: PreviousSearchesProps) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map((search) => (
                    <li key={search}
                        onClick={() => onTermClick(search)}
                    >{search}</li>
                ))}
            </ul>
        </div>
    )
}
