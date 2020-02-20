import React from "react";
import { connect } from "react-redux";
import { deleteFile, updateFile } from "../actions";
import Modal from "./Modal";
import "./styles/Image.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

AOS.init();

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didLoad: false,
      imageUpdateToggle: false,
      alt: this.props.file.metadata.alt,
      caption: this.props.file.metadata.caption
    };
  }

  toggleImageUpdateModal = () => {
    this.setState({ imageUpdateToggle: !this.state.imageUpdateToggle });
  };

  handleAltInputChange = event => {
    this.setState({ alt: event.target.value });
  };

  handleCaptionInputChange = event => {
    this.setState({ caption: event.target.value });
  };

  handleImageUpdateFormSubmit = event => {
    event.preventDefault();
    const data = { caption: this.state.caption, alt: this.state.alt };
    this.props.updateFile(this.props.file.filename, data);
    this.toggleImageUpdateModal();
  };

  onLoad = () => {
    this.setState({
      didLoad: true
    });
  };

  renderImageUpdateModalContent = () => {
    return (
      <form className="file-update-form">
        <label htmlFor="caption">Image caption</label>
        <textarea
          name="caption"
          rows="3"
          onChange={this.handleCaptionInputChange}
          value={this.state.caption}
        ></textarea>
        <input
          type="submit"
          value="Update file"
          onClick={this.handleImageUpdateFormSubmit}
        />
      </form>
    );
  };

  render() {
    const style = this.state.didLoad ? {} : { filter: `blur(10px)` };

    return (
      <>
        <div
          class="container"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <img
            style={style}
            src={`/files/read/${this.props.file.filename}`}
            alt={this.props.file.metadata.alt}
            onLoad={this.onLoad}
          />
          <figcaption>{this.props.file.metadata.caption}</figcaption>
          <div className="image-options">
            <small className="option" onClick={this.toggleImageUpdateModal}>
              edit
            </small>
            <small>&nbsp;|&nbsp;</small>
            <small
              className="option"
              onClick={() => this.props.deleteFile(this.props.file.filename)}
            >
              delete
            </small>
          </div>
        </div>
        {this.state.imageUpdateToggle ? (
          <Modal
            onDismiss={this.toggleImageUpdateModal}
            title="Edit Image Info"
            content={this.renderImageUpdateModalContent()}
          />
        ) : null}
      </>
    );
  }
}

connect.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default connect(
  null,
  { deleteFile, updateFile }
)(Image);
