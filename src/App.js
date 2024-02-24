import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Componenet/JS/Navbar";
import Footer from "./Componenet/JS/Footer";
const Banner = React.lazy(() => import("./Componenet/JS/Banner"));
const Table = React.lazy(() => import("./Componenet/JS/Table"));
const Carts = React.lazy(() => import("./Componenet/JS/Carts"));
const Message = React.lazy(() => import("./Componenet/JS/Message"));
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div id="loader">Please Wait...</div>}>
        <Banner />
        <Table />
        <Carts />
        <Message />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
