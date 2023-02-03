import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error("routing error:", error);

  return (
    <>
      <h1>OOPS...</h1>
      <p>
        This site may have had a minor meltdown trying to find this page. Please
        come back later.
      </p>
      <p>{error.message}</p>
    </>
  );
};

export default ErrorPage;
