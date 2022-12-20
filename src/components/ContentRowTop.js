import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMoviesInDb';
import GenresInDb from './GenresInDb';

function ContentRowTop() {
	let rowMovies = [{
		titulo: 'Movies in Data Base',
		color: 'card border-left-primary shadow h-100 py-2',
		cifra: 21,
		icono: 'text-xs font-weight-bold text-primary text-uppercase mb-1'
	}, {
		titulo: 'Total awards',
		color: 'card border-left-success shadow h-100 py-2',
		cifra: 79,
		icono: 'text-xs font-weight-bold text-success text-uppercase mb-1'
	}, {
		titulo: 'Actors quantity',
		color: 'card border-left-warning shadow h-100 py-2',
		cifra: 49,
		icono: 'text-xs font-weight-bold text-warning text-uppercase mb-1'
	}]

	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<div className="row">
					{rowMovies.map((contenedor, i) =>
						<ContentRowMovies
							key={i}
							titulo={contenedor.titulo}
							color={contenedor.colorFondo}
							cifra={contenedor.cifra}
							icono={contenedor.cifra}
						/>
					)}
				</div>
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<LastMovieInDb />
					{/*<!-- End content row last movie in Data Base -->*/}
					<GenresInDb />
					{/*<!-- Genres in DB -->*/}


				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;