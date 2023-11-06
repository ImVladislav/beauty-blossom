import { Hearts } from "react-loader-spinner";

export const Loader = ({
  size = "100",
  pageHeight = "65vh",
  outcolor = "#833989",
}) => {
  return (
    <>
      <Hearts
        height={pageHeight}
        width={size}
        color={outcolor}
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
        wrapperClass=""
        visible={true}
        // outerCircleColor={outcolor}
        // innerCircleColor="#833989"
        // barColor="#833989"
        ariaLabel="hearts-loading"
      />
    </>
  );
};


export const InputLoader = ({
  size = "60px",
  pageHeight = "60px",
  outcolor = "#833989",
}) => {
  return (
    <>
      <Hearts
        height={pageHeight}
        width={size}
        color={outcolor}
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
        wrapperClass=""
        visible={true}
        // outerCircleColor={outcolor}
        // innerCircleColor="#833989"
        // barColor="#833989"
        ariaLabel="hearts-loading"
      />
    </>
  );
};
