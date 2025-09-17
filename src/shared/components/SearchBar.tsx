import { useEffect, useState } from "react";

interface SearchBarProps {
    placeholder?: string;

    onSearch: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onSearch }: SearchBarProps) => {

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onSearch(searchTerm);
        }, 700);

        return () => clearTimeout(timeOutId);
    }, [searchTerm, onSearch]);

    const handleSearch = () => {
        onSearch(searchTerm);
        /* setSearchTerm(''); */
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
