const Navigation = () => (
    <nav className="navbar navbar-expand-md no-gutters">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2"
                aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="col-4 col-md-2 text-right text-md-center order-lg-6">

        </div>

        <div className="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2">
            <img src="/static/images/logo.svg"/>
        </div>

        <ul className="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
            <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/andreperegrina">
                    <i className="fab fa-twitter"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/andreperegrina">
                    <i className="fab fa-github"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/andreperegrina/">
                    <i className="fab fa-linkedin-in"/>
                </a>
            </li>
        </ul>
    </nav>
)

export default Navigation
