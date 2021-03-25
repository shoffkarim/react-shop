import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={263}
      height={495}
      viewBox="0 0 263 495"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="263" height="408" />
      <rect x="0" y="425" rx="0" ry="0" width="135" height="25" />
      <rect x="187" y="425" rx="0" ry="0" width="75" height="25" />
    </ContentLoader>
  );
}

export default LoadingBlock;
