import { CardDashboard } from "../components/cards/CardDashboard";
import CardOverview from "../components/cards/CardOverview";
import BarChartH from "../components/charts/BarChartH";
import LineChart from "../components/charts/LineChart";
import MultiAxis from "../components/charts/MultiAxis";
import StackedBarChart from "../components/charts/StackedBarChart";

const Dashboard = () => {
  return (
    <div id="dashboard" className="w-full mx-4 mt-16 lg:mt-24 ">
      <div className="w-full p-4 bg-white rounded">
        <CardOverview />
      </div>
      <div
        id="dashboard_cards"
        className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2"
      >
        <CardDashboard
          url="#"
          title="All Accounts by Buying"
          viewReport="View Report"
          children={<StackedBarChart />}
        />
        <CardDashboard
          url="#"
          title="Decision Stage Accounts"
          viewReport="View Report"
          children={<LineChart />}
        />
        <CardDashboard
          url="#"
          title="Accounts Stages by Territory"
          viewReport="View Report"
          children={<BarChartH />}
        />
        <CardDashboard
          children={<MultiAxis />}
          url="#"
          title="Engagement Trend"
          viewReport="View Report"
        />
      </div>
    </div>
  );
};

export default Dashboard;
