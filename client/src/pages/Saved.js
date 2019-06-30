import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";
import { LinkButton, Button } from "../components/button"
import Card from "../components/card"


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBook: []
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        // console.log(res.data.items[0].volumeInfo.imageLinks.smallThumbnail)
        this.setState({ savedBook: res.data }, () => {
          console.log(this.state.savedBook)
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="display-4">React Google Book Search</h1>
          <hr></hr>
          <p className="lead">Saved Books</p>
        </Jumbotron>
        {this.state.savedBook.length === 0 ?
          "" : this.state.savedBook.map((ele, index) =>
            <Card
              src={ele.image}
              title={ele.title}
              category={ele.category}
              author={ele.author}
              description={ele.description}
              children={
                <>
                  <LinkButton
                    href={ele.link}
                    target="_blank"
                    value="view"
                    id="linkButton" />
                  <Button
                    value="delete"
                    onClick={() => this.saveBooks(index)}
                    id="deleteButton"
                  />
                </>
              }
            />
          )
        }

      </Container>
    );
  }
}

export default Books;
