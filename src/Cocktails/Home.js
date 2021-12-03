import React from "react";
import { useGlobalContext } from "./AppContext";
import Cocktails from "./Cocktails";
import Loading from "./Loading";
import Search from "./Search";
const Home = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <section className="Loading-comp-container">
        <Loading />;
      </section>
    );
  }
  return (
    <div>
      <Search />
      <Cocktails />
    </div>
  );
};

export default Home;
