import React, { Component } from "react";
import API from "../utils/API";

import { Container } from "../components/Grid";
import Jumbotron from "../components/jumbotron";
import Card from "../components/card";
import { LinkButton, Button } from "../components/button";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBook: []
    };
  }

  componentDidMount() {
    this.loadBook();
  }

  loadBook = () => {
    API.getBooks()
      .then(res =>
        this.setState({ savedBook: res.data }, () => {
          console.log(this.state.savedBook)
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = (id) => {
    API.deleteBook(id)
      .then(this.loadBook)
      .catch(err => console.log(err));
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
              key={index}
              src={ele.image}
              alt={ele.title}
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
                    onClick={() => this.deleteBook(ele._id)}
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
