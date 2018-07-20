import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import Results from "../Results/Results";

export default class Search extends Component {
  state = {
    SearchText: "",
    amount: 15,
    url: "https://pixabay.com/api",
    apiKey: "9559222-7a3ff7ecf97566657bf67f96d",
    images: []
  };

  onTextChange = event => {
    const val = event.target.value;
    this.setState({ [event.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.url}/?key=${this.state.apiKey}&q=${
              this.state.SearchText
            }&image_type=photo&per_page=${this.state.amount}`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (event, index, value) => this.setState({ amount: value });

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="SearchText"
          value={this.state.SearchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for Stocks"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={25} primaryText="25" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <Results images={this.state.images} />
        ) : null}
      </div>
    );
  }
}
