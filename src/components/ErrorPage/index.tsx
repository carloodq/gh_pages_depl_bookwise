import { useRouteError } from "react-router-dom";
import { Header } from "../Header";

export const ErrorPage = () => {
  // TODO: remove this any
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div className="flex mt-8 justify-center">
        <div className="text-center">
          <h1 className="text-3xl">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};
