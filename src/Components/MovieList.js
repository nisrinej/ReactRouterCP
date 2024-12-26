import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, deleteMovie }) => {
    return(
        <Container>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.id} md={4}>
                        <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
                    </Col>
                ))}
            </Row>
        </Container>

    );

};

export default MovieList;