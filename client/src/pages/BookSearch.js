import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";
import { LinkButton, Button } from "../components/button"
import Input from "../components/input"
import Card from "../components/card"


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchResult: []
    };
  }

  componentDidMount() {
    // this.loadBooks();
  }

  searchBooks = (value) => {
    console.log(value)
    API.search(value)
      .then(res =>
        // console.log(res.data.items[0].volumeInfo.imageLinks.smallThumbnail)
        this.setState({
          searchResult: res.data.items.map(ele =>
            ({
              title: ele.volumeInfo.title,
              author: ele.volumeInfo.authors,
              category: ele.volumeInfo.categories,
              description: ele.volumeInfo.description,
              image: ele.volumeInfo.imageLinks.smallThumbnail,
              link: ele.volumeInfo.previewLink
            })
          )
        }, () => {
          console.log(this.state.searchResult)
        })
      )
      .catch(err => console.log(err));
  };

  saveBooks = (index) => {
    let bookData = {
      title: this.state.searchResult[index].title,
      author: this.state.searchResult[index].author,
      category: this.state.searchResult[index].category,
      description: this.state.searchResult[index].description,
      image: this.state.searchResult[index].image,
      link: this.state.searchResult[index].link
    }
    console.log(bookData)
    API.saveBook(bookData)
      .then(res => console.log("just saved"))
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
          <p className="lead">Search for and Save Books of Interest</p>
          <hr></hr>
          <Input
            placeholder="Enter Book Name Here"
            onChange={this.handleInputChange} />
          <Button
            value="search"
            onClick={() => this.searchBooks(this.state.search)}
          />
        </Jumbotron>
        {this.state.searchResult.length === 0 ?
          "" : this.state.searchResult.map((ele, index) =>
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
                    value="save"
                    onClick={() => this.saveBooks(index)}
                    id="saveButton"
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
