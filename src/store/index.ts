import { defineStore } from "pinia";

export const useWeb3Store = defineStore("web3", {
  state: () => ({
    chainId: 5,
  }),
  actions: {
    setChainId(chainId: number) {
      this.chainId = chainId;
    },
  },
});
