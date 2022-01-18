import React from "react";
import './App.css';
import { CopyToClipboard } from 'react-copy-to-clipboard'

export class Pictures extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            item: {},
            DataisLoaded: false,
            likes: 0,
            like: false,
            selected: false
        };
    }

    Like = () => {
        if (this.state.like === false) {
            this.setState({ like: true, likes: this.state.likes + 1, selected: true })
        } else {
            this.setState({ like: false, likes: this.state.likes - 1, selected: false })
        }

    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "https://api.nasa.gov/planetary/apod?api_key=jcUo7EU5PUAg7hYp8hr0ORYVea8hVMB7jVqB08eh")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    item: json,
                    DataisLoaded: true
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { DataisLoaded, item, likes, selected } = this.state;
        const url = item.url;
        console.log('this is items -->', item)
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> Feed </h1> {
                    <div key={item.id} >
                        <h2>Title: {item.title}</h2>
                        <h4>Date: {item.date}</h4>
                        <img src={item.hdurl} alt="Space" />
                        <h4>Likes: {likes}</h4>
                        <div id="explain"><bold>explanation:</bold> {item.explanation} </div>

                    </div>
                }

                <br></br>
                <button onClick={this.Like} id={this.selected ? "buttonClicked" : "button"} type="button">Like</button>
                <CopyToClipboard text={url}>
                    <button id="share" onClick={() => { alert("Image URL copied!"); }}>Share Image</button>
                </CopyToClipboard>
            </div>
        );
    }
}

export default Pictures;
