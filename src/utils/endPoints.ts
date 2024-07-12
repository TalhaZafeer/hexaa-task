import { ENV } from "./env";

export const API_ENDPOINTS = {
  TIME_SERIES_DAILY: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${ENV.API_KEY}`,
};
