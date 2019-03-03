import Typed from 'react-typed';


const Home = () => (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <div className="top_guy_image">
                        <img alt="image" src="/static/images/guy.png"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 ml-md-auto text-left title_guy">
                    <h1 className="hello">Hey, I'm</h1>
                    <h1 className="full_name">Andre Peregrina</h1>
                    <div className="">
                    <span className="job">{"A young "}
                        <span className="job-type">
                            <Typed strings={["Developer", "Product Manager", "UX/UI Designer"]}
                                   backSpeed={30}
                                   typeSpeed={30}
                                   backDelay={2000}
                            />
                        </span>
                    </span>
                    </div>
                    <a className="btn btn-outline-primary btn-round mt-4"
                       href="">Hire
                        me for kickass
                        projects</a>
                </div>
            </div>
        </div>
    )
;

export default Home
