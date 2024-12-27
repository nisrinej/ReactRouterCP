import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";



const MovieCard = ({ movie, deleteMovie }) => {
    
    return (
        <div className="movie-card">
            <Card>
                <Link to={`/movie/${movie.title}`}
                  state={{
                   title: movie.title,
                   description: movie.description,
                   trailerLink: movie.trailerLink,
                   }}
                   style={{
                     height: "300px",
                     width: "200px",
                     objectFit: "cover",
                     alignSelf: "center",
                   }}>
                     <Card.Img variant="top" src={movie.poster} />
                </Link>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.genre}</Card.Text>
                    <Button onClick={() =>deleteMovie(movie.id)}>Delete</Button>
                </Card.Body>
            </Card>
           
        </div>
    );
};

export default MovieCard;