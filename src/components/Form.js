import React from 'react';

//use class because there is a state
//local state because form state does not need to live in the store
class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  //setState should fire every time the form changes.
  //The event contains data about the target
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }


  //pass in the event of clicking the onSubmit
  //prevent default form behavor
  //set the form data using key/value pair  in a hash
  //sendFormdatasomewhare will eventually be an action using redux
  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      firstName: this.state.firstName, //Here, we are putting together the current form data using the values stored in state.
      lastName: this.state.lastName,
    };
    this.sendFormDataSomewhere(formData);
  };

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;