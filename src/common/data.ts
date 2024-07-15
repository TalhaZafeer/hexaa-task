import { TableColumn } from "../components/Table/Table";
import { TimeSeriesDaily } from "../interfaces/DailyTimeSeries.interface";
import { HistoricalOptionsContract } from "../interfaces/HistoricalOptions.interface";

export const dailyTimeSeriesColumns: TableColumn<TimeSeriesDaily>[] = [
  { key: "1. open", header: "Open" },
  { key: "2. high", header: "High" },
  { key: "3. low", header: "Low" },
  { key: "4. close", header: "Close" },
  { key: "5. volume", header: "Volume" },
];

export const historicalOptionsColumns: TableColumn<HistoricalOptionsContract>[] =
  [
    { key: "contractID", header: "Contract ID" },
    { key: "symbol", header: "Symbol" },
    { key: "expiration", header: "Expiration" },
    { key: "strike", header: "Strike" },
    { key: "type", header: "Type" },
    { key: "last", header: "Last" },
    { key: "mark", header: "Mark" },
    { key: "bid", header: "Bid" },
    { key: "bid_size", header: "Bid Size" },
    { key: "ask", header: "Ask" },
    { key: "ask_size", header: "Ask Size" },
    { key: "volume", header: "Volume" },
    { key: "open_interest", header: "Open Interest" },
    { key: "date", header: "Date" },
    { key: "implied_volatility", header: "Implied Volatility" },
    { key: "delta", header: "Delta" },
    { key: "gamma", header: "Gamma" },
    { key: "theta", header: "Theta" },
    { key: "vega", header: "Vega" },
    { key: "rho", header: "Rho" },
  ];
