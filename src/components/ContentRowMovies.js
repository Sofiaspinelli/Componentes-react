import React from 'react'
import PropTypes from 'prop-types'

function ContentRowMovies({ titulo, colorBorde, cifra, icono }) {
    return (
        <div className="col-md-4 mb-4">
            <div className={colorBorde}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={icono}>{titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-film fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

ContentRowMovies.propTypes = {
    titulo: PropTypes.string,
    colorBorde: PropTypes.string,
    cifra: PropTypes.number,
    icono: PropTypes.string
}
ContentRowMovies.defaultProps = {
    titulo: 'Una película buenarda',
    colorBorde: 'card border-left-primary shadow h-100 py-2',
    cifra: 10,
    icono: 'text-xs font-weight-bold text-primary text-uppercase mb-1'
}

export default ContentRowMovies