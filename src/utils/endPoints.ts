import { DailyTimeSeriesResponse } from "../interfaces/DailyTimeSeries.interface";
import { HistoricalOptionsApiResponse } from "../interfaces/HistoricalOptions.interface";
import { NewsFeedResponse } from "../interfaces/NewsFeed";
import { api } from "./api";
import { ENV } from "./env";

export const API_ENDPOINTS = {
  TIME_SERIES_DAILY: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${ENV.API_KEY}`,
  HISTORICAL_OPTIONS: `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&apikey=${ENV.API_KEY}`,
  NEWS_FEED: `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${ENV.API_KEY}`,
};

export const fetchNewsFeed = (): Promise<NewsFeedResponse> => {
  return api
    .get<NewsFeedResponse>(API_ENDPOINTS.NEWS_FEED)
    .then((response) => {
      if (!response.data) {
        throw new Error(`API request failed with status ${response.status}`);
      } else return response.data;
    })
    .then((error) => error);
};

export const fetchDailyTimeSeries = (): Promise<DailyTimeSeriesResponse> => {
  return api
    .get<DailyTimeSeriesResponse>(API_ENDPOINTS.TIME_SERIES_DAILY)
    .then((response) => {
      if (!response.data) {
        throw new Error(`API request failed with status ${response.status}`);
      } else return response.data;
    })
    .then((error) => error);
};

export const fetchHistoricalOptions =
  (): Promise<HistoricalOptionsApiResponse> => {
    return api
      .get<HistoricalOptionsApiResponse>(API_ENDPOINTS.HISTORICAL_OPTIONS)
      .then((response) => {
        if (!response.data) {
          throw new Error(`API request failed with status ${response.status}`);
        } else return response.data;
      });
  };
