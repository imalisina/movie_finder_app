import React from 'react'

const MovieDetails = ({ movieData }) => {
  return (
    // Main container
    <div>
      <div className='flex flex-row justify-start my-5'>
        {/* Movie poster */}
        <img className='h-54 w-44 rounded shadow-xl' src={movieData.Poster} />
        {/* Movie content */}
        <div className='w-full ml-5'>
          {/* Movie title */}
          <p className="text-3xl font-bold text-black">{movieData.Title}</p>
          {/* Movie description */}
          <p className='mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-indigo-500'>{movieData.Plot}</p>
          {/* Movie details list */}
          <div className='flex flex-row flex-wrap justify-start mt-3'>
            <span class="mb-0.5 bg-gray-400 text-white text-sm font-medium mr-2 px-2.5 py-1 rounded">
              <svg className='inline mr-2 w-4 h-4 text-white mb-1' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              {movieData.Country}
            </span>
            <span class="mb-0.5 bg-gray-400 text-white text-sm font-medium mr-2 px-2.5 py-1 rounded">
              <svg className='inline mr-2 w-4 h-4 text-white mb-1' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              {movieData.imdbVotes} Likes
            </span>
            <span class="mb-0.5 bg-gray-400 text-white text-sm font-medium mr-2 px-2.5 py-1 rounded">
              <svg className='inline mr-2 w-4 h-4 text-white mb-1' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
              </svg>
              Rating : {movieData.imdbRating} / 10
            </span>
            <span class="mb-0.5 bg-gray-400 text-white text-sm font-medium mr-2 px-2.5 py-1 rounded">
              <svg className='inline mr-2 w-4 h-4 text-white mb-1' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path clipRule="evenodd" fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" />
              </svg>
              Publish date : {movieData.Released}
            </span>
            <span class="mb-0.5 bg-gray-400 text-white text-sm font-medium mr-2 px-2.5 py-1 rounded">
              <svg className='inline mr-2 w-4 h-4 text-white mb-1' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" />
              </svg>
              {movieData.Runtime}
            </span>
          </div>
          {/* Movie details second list */}
          <div className='flex flex-row flex-wrap justify-start mt-3'>
            <span class="mb-0.5 bg-gray-400 text-white text-sm font-medium mr-2 px-2.5 py-1 rounded">
              <svg className='inline mr-2 w-4 h-4 text-white mb-1' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              {movieData.Country}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// DATA NAMES FROM JSON RESULT
/*
  Country
  Director
  Genre
  Writer
*/

export default MovieDetails;