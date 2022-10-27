import { CardDashboard } from "../components/cards/CardDashboard";

const SingleCardLayout = () => {
  return (
    <div id="dashboard" className="w-full px-8 mx-auto mt-16 lg:mt-24 ">
      <div id="dashboard_cards" className="mt-2">
        <CardDashboard
          url="#"
          title="All Accounts by Buying"
          viewReport="View Report"
        />
      </div>
    </div>
  );
};

export default SingleCardLayout;
