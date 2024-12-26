import React from "react";
import { Button, CardBody, CardText, CardTitle, Container } from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import {Card} from "react-bootstrap";




const MoviePage = () => {
    let {state} = useLocation();

    if(!state) {
        return <div>Movie not found</div>
    }
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.*?v=))([^&?#]+)/;

    const videoId = state.trailer.match(regex)[1];

    const videoUrl = `https://www.youtube.com/embed/${videoId? videoId : ''}`;

    return (
        <Container>
            <Card>
                <CardBody>
                    <CardTitle> {state.title}</CardTitle>
                    <CardText>{state.description}</CardText>
                    <h5>Trailer:</h5>
                    <iframe width="560" height="315" src={videoUrl} title={state.title} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    <div>
                        <Button variant="primary" as={videoUrl} to={"/"}> Go Back</Button>
                    </div>
                </CardBody>
            </Card>


        </Container>
    );

};

export default MoviePage;