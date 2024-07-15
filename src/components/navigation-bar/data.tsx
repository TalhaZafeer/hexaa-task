import { routes } from "../../common/routes";
import {
  ErrorIcon,
  HistoricalOptionsIcon,
  NewsFeedIcon,
  TimeSeriesIcon,
} from "../../utils/icons";

export const navigationOptions = [
  {
    label: "Daily Time Series",
    path: routes.timeSeries,
    icon: <TimeSeriesIcon />,
  },
  {
    label: "Historical Options",
    path: routes.historicalOptions,
    icon: <HistoricalOptionsIcon />,
  },
  {
    label: "News Feed",
    path: routes.newsFeed,
    icon: <NewsFeedIcon />,
  },
  {
    label: "Error 404 Prototype",
    path: "dummypath",
    icon: <ErrorIcon />,
  },
];
