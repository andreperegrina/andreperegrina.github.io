import {Component} from "react";
import GithubRepo from "./GithubRepo";

class GithubRepositorySection extends Component {
    render() {
        const {githubRepositories, isAnimated} = this.props;
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-12 ml-md-auto text-center feature-app">
                        <div className={`animated animated-right-section delay-05s ${isAnimated ? 'fadeIn' : ''}`}>
                            <h1>Open source</h1>
                            <div className="row align-items-center" id="github-cards">
                                {githubRepositories && githubRepositories.map((repo) => {
                                    return (
                                        <GithubRepo key={repo.id} repo={repo}/>
                                    )
                                })}
                            </div>
                            <div className="github-button">
                                <a href="https://github.com/andreperegrina?tab=repositories"
                                   className="btn btn-dark  btn-round">
                                    <i className="fab fa-github"/> See more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GithubRepositorySection;
