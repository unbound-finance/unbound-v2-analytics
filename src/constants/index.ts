export const explorerUrls = {
  5: "https://goerli.etherscan.io",
} as Record<number, string>;

export const subgraphUrls = {
  5: "https://api.thegraph.com/subgraphs/name/unbound-finance/unbound-v2-goerli",
} as Record<number, string>;

export const chainIdMapping = {
  5: "Goerli",
} as Record<number, string>;

export const tokenAliases = {
  weth: "ETH",
  wmatic: "MATIC",
} as Record<string, string>;

export const txnType = {
  0: "Open Account",
  1: "Close Account",
  2: "Adjust Account",
  3: "Liquidation",
  4: "Redemption",
} as Record<number, string>;
