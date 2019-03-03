import ReactFullpage from '@fullpage/react-fullpage';
import '../styles/index.scss'
import {Component} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import AppSection from "../components/AppSection";
import GithubRepositorySection from "../components/GithubRepositorySection";
import Footer from "../components/Footer";


class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            githubRepositories: []
        };
    }

    componentDidMount() {
        const urls = [
            'https://api.github.com/repos/andreperegrina/open-hours',
            'https://api.github.com/repos/andreperegrina/core-mvc-boilerplate-api',
            'https://api.github.com/repos/andreperegrina/grails-spring-security-oauth2-outlook'
        ];
        Promise.all(urls.map(u => fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
        ).then(data => this.setState({githubRepositories: data}));
    }

    onLeave(origin, destination, direction) {
        if (destination.index < 4) {
            document.body.classList.remove("section-body" + origin.index);
            document.body.classList.add("section-body" + destination.index);
        }
    }

    render() {
        const {githubRepositories} = this.state;
        const firstApp = {
            title: "Honda App",
            subtitle: "Get to know everything about your Honda",
            imageUrl: "/static/images/device1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."
        };
        const secondApp = {
            title: "Let's eat",
            subtitle: "A smart home app to control your household appliances",
            imageUrl: "/static/images/device2.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."
        };

        return (
            <React.Fragment>
                <Header/>
                <Navigation/>
                <ReactFullpage
                    onLeave={this.onLeave.bind(this)}
                    licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
                    render={({state, fullpageApi}) => {
                        return (
                            <ReactFullpage.Wrapper
                                sectionsColor={['transparent', 'transparent', 'transparent', 'transparent', 'transparent']}>
                                <div className="section fade-in" id="section0">
                                    <Home/>
                                    {console.log(state)}
                                </div>
                                <div className="section" id="section1">
                                    <AppSection
                                        title={firstApp.title}
                                        subtitle={firstApp.subtitle}
                                        description={firstApp.description}
                                        imageUrl={firstApp.imageUrl}
                                        buttonClassName="btn-outline-warning"
                                        isAnimated={state.destination && state.direction==="down"  && state.destination.index === 1}
                                    />
                                </div>
                                <div className="section" id="section2">
                                    <AppSection
                                        title={secondApp.title}
                                        subtitle={secondApp.subtitle}
                                        description={secondApp.description}
                                        imageUrl={secondApp.imageUrl}
                                        buttonClassName="btn-outline-light"
                                        isAnimated={state.destination && state.direction==="down"  && state.destination.index === 2}
                                    />
                                </div>
                                <div className="section" id="section3">
                                    <GithubRepositorySection githubRepositories={githubRepositories}
                                                             isAnimated={state.destination && state.direction==="down" && state.destination.index === 3}/>
                                </div>
                                <div className="section fp-auto-height" id="section4">
                                    <Footer/>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />

            </React.Fragment>
        );

    }
}

export default index;
