// import Nav from "./components/Nav";
import { Slide, ToastContainer } from "react-toastify";
import Router from "./routes";
import AuthContextProvider from "./contexts/AuthContext";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import ShapeContextProvider from "./contexts/ShapeContext";
import ProductContextProvider from "./contexts/ProductContext";
// import Nav from "./components/Nav";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ProductContextProvider>
        <AuthContextProvider>
          <ShapeContextProvider>
            <Router />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              transition={Slide}
            />
          </ShapeContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </Suspense>
  );
}

export default App;
