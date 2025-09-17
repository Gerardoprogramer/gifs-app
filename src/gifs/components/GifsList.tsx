import type { Gif } from "./../../mock-data/gisf.mock"
interface GifsListProps {
    Gifs: Gif[];
}

export const GifsList = ({ Gifs }: GifsListProps) => {
    return (
        <div className="gifs-container">
            {
                Gifs.map(gif => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x {gif.height} ( 1.5mb )
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
