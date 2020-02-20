import React from "react";
import UploadForm from "../components/UploadForm";
import ImageContainer from "../components/ImageContainer";
import ScrollToTop from "react-scroll-up";

const gallery = () => {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <i class="material-icons prefix">arrow_upward</i>
        <span for="icon_prefix"></span>
      </ScrollToTop>
      <div className="container">
        <br />
        <br />
        <UploadForm />
        <ImageContainer />
      </div>
    </>
  );
};

export default gallery;
