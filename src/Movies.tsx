import { useState } from 'react';
import data from './MovieData.json';

const MDS = data.MovieData;

function MovieList() {
  //   const [ListOMovies, setListOMovies] = useState(MDS);

  //   const addMovie = () => {
  //     setListOMovies([
  //       ...MDS,
  //       {
  //         MovieID: 6,
  //         Category: 'Action/Adventure',
  //         Title: 'Batman Returns',
  //         Year: 1992,
  //         Director: 'Tim Burton',
  //         Rating: 'PG-13',
  //       },
  //     ]);
  //   };
  return (
    <>
      <div>
        <h3>Joels Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {MDS.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}

export default MovieList;
