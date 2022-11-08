import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { rpcUrls, tokenAliases } from "../constants";
import borrowOpsABI from "../constants/abis/borrowOps.json";
import { useWeb3Store } from "../store";
import { BorrowOps } from "../types/abis";

export function getIconUrl(name: string): string {
  if (
    name &&
    name.length > 0 &&
    Object.keys(tokenAliases).includes(name.toLowerCase())
  ) {
    name = tokenAliases[name.toLowerCase()];
  }

  const BASE_URL =
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/icon/";
  const result = `${BASE_URL}${name.toLowerCase()}.svg`;

  return result;
}

export async function getCollateralPrice(address: string) {
  const { chainId } = useWeb3Store();

  const provider = new ethers.providers.JsonRpcProvider(
    rpcUrls[chainId],
    chainId
  );

  const borrowOpsContract = new ethers.Contract(
    address,
    borrowOpsABI,
    provider
  ) as BorrowOps;

  return +formatEther(await borrowOpsContract.getCollPrice());
}
