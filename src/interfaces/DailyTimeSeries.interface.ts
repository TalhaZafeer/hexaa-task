export interface DailyTimeSeriesResponse {
  "Meta Data": MetaData;
  [key: string]: MetaData | TimeSeriesData;
}

export interface MetaData {
  [key: string]: string;
}

export interface TimeSeriesDaily {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface TimeSeriesData {
  [key: string]: TimeSeriesDaily;
}
