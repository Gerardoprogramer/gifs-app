import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { GifsList } from "./gifs/components/GifsList"

import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

    // Custom Hook
    const { previousTerms, gifs, handleTermClicked, handleSearch } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el gif perfecto"
            />

            {/* Search */}
            <SearchBar placeholder="Buscar gif..."
                onSearch={handleSearch}
            />

            {/** Busquedas previas*/}
            <PreviousSearches searches={previousTerms} onTermClick={handleTermClicked} />

            {/** Resultados de la busqueda */}
            <GifsList Gifs={gifs} />
        </>
    )
}
