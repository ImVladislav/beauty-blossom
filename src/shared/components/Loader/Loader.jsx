import { Hearts } from "react-loader-spinner";

export const Loader = ({
  size = "100",
  pageHeight = "65vh",
  outcolor = "#ff63b8",
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
        ariaLabel="hearts-loading"
      />
    </>
  );
};
