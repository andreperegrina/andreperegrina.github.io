import {Component} from "react";

class AppSection extends Component {
    render() {
        const {imageUrl, title, subtitle, description, buttonClassName, isAnimated} = this.props;
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="feature_image_device">
                            <img alt="image" src={imageUrl}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 ml-md-auto text-left feature-app">
                        <div className={`animated animated-right-section delay-05s ${isAnimated ? 'fadeIn' : ''}`}>
                            <h1>{title}</h1>
                            <p className="subtitle">{subtitle}</p>
                            <p className="description">{description}</p>
                            <a className={`btn ${buttonClassName} btn-round mt-4`} href="">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppSection;
