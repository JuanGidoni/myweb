import { Button } from "../..";
import Card from "../../common/card";
import Titles from "../../common/titles";

export default function Home() {
    return (
        <div className="page-home">
            <Titles title="Welcome" kind="h1" />
            <section className="cards pb-5">
                <Card className="card--1">
                    <div className="card__info-hover">
                        <div className="card__clock-info">
                            <span className="card__time">2022-2023</span>
                        </div>
                    </div>
                    <div className="card__img"></div>
                    {/* Replace to <Link></Link> of react-router-dom */}
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    {/* Replace to <Link></Link> of react-router-dom */}
                    <div className="card__info">
                        <span className="card__category">Nuddo V2</span>
                        <Titles kind="h3" className="card__title" title="COCA COLA" />
                        <span className="card__by">Migrated old dashboard admin panel with Vite, React, Redux, Typescript, OpenAPI and Hexagonal Arquitecture</span>
                        <hr />
                        <span className="card__by">Asociated with Capgemini experience as Ssr Frontend Developer</span>
                    </div>
                </Card>
                <Card className="card--1">
                    <div className="card__info-hover">
                        <div className="card__clock-info">
                            <span className="card__time">2022</span>
                        </div>
                    </div>
                    <div className="card__img"></div>
                    {/* Replace to <Link></Link> of react-router-dom */}
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    {/* Replace to <Link></Link> of react-router-dom */}
                    <div className="card__info">
                        <span className="card__category">SPA DataTables</span>
                        <Titles kind="h3" className="card__title" title="INDITEX" />
                        <span className="card__by">Refactored and created new components for an SPA using React, Redux, Sass</span>
                        <hr />
                        <span className="card__by">Asociated with Capgemini experience as Ssr Frontend Developer</span>
                    </div>
                </Card>
                <Card className="card--1">
                    <div className="card__info-hover">
                        <div className="card__clock-info">
                            <span className="card__time">2021-2022</span>
                        </div>
                    </div>
                    <div className="card__img"></div>
                    {/* Replace to <Link></Link> of react-router-dom */}
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    {/* Replace to <Link></Link> of react-router-dom */}
                    <div className="card__info">
                        <span className="card__category">HOME</span>
                        <Titles kind="h3" className="card__title" title="AXA" />
                        <span className="card__by">Migrated "Home" service to new React version and updated dependencies. Created a library with common components following AXA core guidelines and corp styling, for the same use.</span>
                        <hr />
                        <span className="card__by">Asociated with Capgemini experience as Jr Frontend Developer</span>
                    </div>
                </Card>
            </section>
            <Button onClick={() => console.log("Testing Button Click")} className="btn align-right" type="button">Next section</Button>
        </div>
    )
}
