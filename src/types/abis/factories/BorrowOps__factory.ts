/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BorrowOps, BorrowOpsInterface } from "../BorrowOps";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "arrayIndex",
        type: "uint256",
      },
    ],
    name: "AccountCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_debt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_coll",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IBorrowoperations.BorrowerOperation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "AccountUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_UNDFee",
        type: "uint256",
      },
    ],
    name: "UNDBorrowingFeePaid",
    type: "event",
  },
  {
    inputs: [],
    name: "BORROWING_FEE_FLOOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CCR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DECIMAL_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LIQUIDATION_PENALTY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MCR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_NET_DEBT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REDEMPTION_FEE_FLOOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accountManager",
    outputs: [
      {
        internalType: "contract IAccountManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collDeposit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_upperHint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lowerHint",
        type: "address",
      },
    ],
    name: "addColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFeePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collWithdrawal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_UNDChange",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isDebtIncrease",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_upperHint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lowerHint",
        type: "address",
      },
    ],
    name: "adjustAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collSurplusPool",
    outputs: [
      {
        internalType: "contract ICollSurplusPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCollPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntireSystemColl",
    outputs: [
      {
        internalType: "uint256",
        name: "entireSystemColl",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntireSystemDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "entireSystemDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mainPool",
    outputs: [
      {
        internalType: "contract IMainPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFeePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_UNDAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_upperHint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lowerHint",
        type: "address",
      },
    ],
    name: "openAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_UNDAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_upperHint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lowerHint",
        type: "address",
      },
    ],
    name: "repayUND",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "safuFund",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accountManager",
        type: "address",
      },
    ],
    name: "setAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sortedAccounts",
    outputs: [
      {
        internalType: "contract ISortedAccounts",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unboundFeesFactory",
    outputs: [
      {
        internalType: "contract IUnboundFeesFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "undToken",
    outputs: [
      {
        internalType: "contract IUNDToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collWithdrawal",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_upperHint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lowerHint",
        type: "address",
      },
    ],
    name: "withdrawColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFeePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_UNDAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_upperHint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lowerHint",
        type: "address",
      },
    ],
    name: "withdrawUND",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class BorrowOps__factory {
  static readonly abi = _abi;
  static createInterface(): BorrowOpsInterface {
    return new utils.Interface(_abi) as BorrowOpsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BorrowOps {
    return new Contract(address, _abi, signerOrProvider) as BorrowOps;
  }
}
