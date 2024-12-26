import React from "react";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {v4 as uuidv4} from "uuid";
import MovieList from "./MovieList";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState("");
    const [rate, setRate] = useState(0);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [trailer, setTrailer] = useState("");
    const [rating, setRating] = useState("");

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem("movies"));
        if(savedMovies) {
            setMovies((savedMovies));
        }
    }, []);


    //adding Movies
    const addMovie = (e) => {
       const updatedMovies = [...movies, e];
         setMovies(updatedMovies);
         localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };

    // Submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie({
            id: uuidv4(),
            title,
            description,
            posterUrl,
            trailer,
            rating
        });
        setTitle("");
        setDescription("");
        setPosterUrl("");
        setTrailer("");
        setRating("");
    };

    // Filtering movies
    const filterMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase()) &&
            movie.rating >= rate
    );

    //delete
    const deleteMovie = (id) => {
        const updatedMovies = movies.filter((movie) => movie.id !== id);
        setMovies(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };

    return (
        <div>
            <Filter 
            OntitleChange = {setFilter} 
            OnrateChange = {(rating)=> setRate(Number(rating))}/>
            {filterMovies.length === 0 ? (
                <div>No movies found</div>
            ) : (
                <div>
                    <MovieList movies={filterMovies} deleteMovie={deleteMovie}/>
                </div>
                
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group content="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="posterUrl">
                    <Form.Label>Poster URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the poster URL"
                        value={posterUrl}
                        onChange={(e) => setPosterUrl(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group controlId="trailer">
                        <Form.Label>Trailer</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the trailer URL"
                            value={trailer}
                            onChange={(e) => setTrailer(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter the rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Movie
                        </Button>

            </Form>
        </div>

    );



};

export default Home;