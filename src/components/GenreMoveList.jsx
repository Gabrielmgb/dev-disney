import GenresList from "../Constant/GenresList"
import MovieList from "./MovieList"

const GenreMoveList = () => {
  return (
    <div>
        {GenresList.genere.map((item,index) => index<=4&& (
            <div className="pt-8 pb-2 px-8 md:px-16">
                <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
                <MovieList genreId={item.id} index_ = {index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMoveList