// import TuitSummaryItem from "./tuit-summary-list/tuit-summary-item";
import TuitSummaryList from "./tuit-summary-list";

function ExploreScreen() {
  return (
    <>
      <h1>Explore</h1>
      {/* <TuitSummaryItem
        tuit={{
          topic: "Telsa",
          userName: "telsauser",
          time: "2h",
          title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
          image: "tesla.avif",
        }}
      /> */}
      <TuitSummaryList />
    </>
  );
}
export default ExploreScreen;
