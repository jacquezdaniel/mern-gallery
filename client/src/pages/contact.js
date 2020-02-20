import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";
import { Container } from "../components/Grid";
import "./contact.css";

class contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: ""
    });

    const { name, email, message } = this.state;

    M.toast({ html: "Email Sent! Thank You!", classes: "rounded" });

    const form = await axios.post("/form/send", {
      name,
      email,
      message
    });
    console.log(form);
  }

  render() {
    return (
      <Container>
        <div className="App">
          <p>Contact Us</p>
          <div>
            <form
              name="contact-form"
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <i class="material-icons prefix">account_circle</i>
              <label for="icon_prefix"></label>
              <input
                type="text"
                id="icon_prefix"
                name="name"
                validate="true"
                required
                value={this.state.name}
                placeholder="Full Name"
                onChange={this.handleChange}
              />
              <i class="material-icons prefix">mail_outline</i>
              <label for="icon_prefix"></label>
              <input
                type="email"
                id="email"
                class="validate"
                name="email"
                required
                value={this.state.email}
                placeholder="Your email.."
                onChange={this.handleChange}
              />
              <span
                class="helper-text"
                data-error="Please Enter A Valid Email. ❌"
                data-success="✔️"
              ></span>
              <br></br>
              <br></br>
              <i class="material-icons prefix">message</i>
              <label for="icon_prefix"></label>
              <textarea
                id="message"
                name="message"
                required
                value={this.state.message}
                placeholder="Your Message.."
                onChange={this.handleChange}
              />
              <button
                class="btn waves-effect waves-light indigo accent-4"
                disabled={!this.state}
                name="action"
                type="submit"
                value="Submit"
              >
                <i class="material-icons right">send</i>Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default contact;
