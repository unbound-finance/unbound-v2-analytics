import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { subgraphUrls } from "../constants";

export function getApolloClient(chainId: number) {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: subgraphUrls[chainId],
  });

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  return new ApolloClient({
    link: httpLink,
    cache,
  });
}
