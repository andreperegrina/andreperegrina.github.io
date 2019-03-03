import {Component} from "react";

class GithubRepositorySection extends Component {
    render() {
        const {repo} = this.props;
        const {id, name, url, description, stargazers_count, forks_count} = repo;
        return (
            <div className="col-lg-4" key={id}>
                <a href={url} className="github-card-a">
                    <div className="card fluid github-card">
                        <div className="card-icon-github">
                            <i className="fab fa-github"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-subtitle mb-2 text-muted block-with-text">{description.substring(0, 80)}</p>
                        </div>
                        <div className="card-footer">
                            <span className="stars">
                                <i className="fas fa-star"/> {stargazers_count}
                            </span>
                            <span className="forks">
                                <i className="fas fa-code-branch"/> {forks_count}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default GithubRepositorySection;
