import React from "react";
import "./App.scss";
import {
  TestimonialsComponent,
  Hero,
  Header,
  Slider,
  Virtual,
  ProductsComponent,
  Footer,
} from "./importExports";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <ProductsComponent />
      <TestimonialsComponent />
      <Footer />
    </div>
  );
};

export default App;
