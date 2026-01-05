import React from 'react'

const NotFound = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                <div className="text-center">
                    <h1 className="display-1">404</h1>
                    <p className="lead">Page Not Found</p>
                    <p>The page you are looking for does not exist.</p>
                    <p>Please check the URL or return to the homepage.</p>
                    <button className='btn btn-outline-light mt-3'>
                        <a href="/" className="btn btn-outline-light text-dark">Go to Homepage</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound;