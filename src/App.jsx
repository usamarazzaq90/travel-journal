import React from "react";
import Header from "./Header";
import Card from "./Card.jsx";
import data from "./data.js";

function App() {
  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <div className="container">
      <Header />
      <div className="cards-container">{card}</div>
    </div>
  );
}

export default App;
