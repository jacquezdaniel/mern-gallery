import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { getFiles } from "../actions";
import "./styles/Image.css";
import { Preloader } from "react-materialize";
const Image = lazy(() => import("./Image"));

class ImageContainer extends React.Component {
  componentDidMount() {
    this.props.getFiles();
  }

  // Maps files to be displayed in the #image-container
  renderImages = () => {
    if (!this.props.files || this.props.files.length === 0) {
      return (
        <p class="center">
          <Preloader />
        </p>
      );
    }

    return this.props.files.map((file, i) => {
      return (
        <Suspense
          fallback={
            <p class="center">
              <Preloader flashing />
            </p>
          }
        >
          <Image file={file} key={i} />
        </Suspense>
      );
    });
  };

  render() {
    return <div id="image-container">{this.renderImages()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    files: Object.values(state.files)
  };
};

export default connect(
  mapStateToProps,
  {
    getFiles
  }
)(ImageContainer);
