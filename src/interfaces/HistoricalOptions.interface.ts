// src/types/api.ts

export interface HistoricalOptionsContract {
  contractID: string;
  symbol: string;
  expiration: string;
  strike: string;
  type: "call" | "put";
  last: string;
  mark: string;
  bid: string;
  bid_size: string;
  ask: string;
  ask_size: string;
  volume: string;
  open_interest: string;
  date: string;
  implied_volatility: string;
  delta: string;
  gamma: string;
  theta: string;
  vega: string;
  rho: string;
}

export interface HistoricalOptionsApiResponse {
  endpoint: string;
  message: string;
  data: HistoricalOptionsContract[];
}
