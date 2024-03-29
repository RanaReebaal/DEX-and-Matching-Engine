/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EventfulOrderbook,
  EventfulOrderbookInterface,
} from "../../../contracts/events/EventfulOrderbook";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token2",
        type: "address",
      },
    ],
    name: "DeleteOffer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "tokPaid",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "feePaid",
        type: "uint128",
      },
    ],
    name: "MakerFeePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "tok1Type",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tok1Amt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tok2Amt",
        type: "uint128",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
    ],
    name: "OfferCreate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "tok1Type",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tok1Amt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tok2Amt",
        type: "uint128",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
    ],
    name: "OfferTake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tok1Amt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tok2Amt",
        type: "uint128",
      },
    ],
    name: "OfferUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "token2",
        type: "address",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC20",
        name: "tokPaid",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "feePaid",
        type: "uint128",
      },
    ],
    name: "TakerFeePaid",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122038f543bad164e9d04a8bfb89a47822ab1e3358855a455a10ef07e48b1380f05364736f6c63430008120033";

type EventfulOrderbookConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventfulOrderbookConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EventfulOrderbook__factory extends ContractFactory {
  constructor(...args: EventfulOrderbookConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EventfulOrderbook> {
    return super.deploy(overrides || {}) as Promise<EventfulOrderbook>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EventfulOrderbook {
    return super.attach(address) as EventfulOrderbook;
  }
  override connect(signer: Signer): EventfulOrderbook__factory {
    return super.connect(signer) as EventfulOrderbook__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventfulOrderbookInterface {
    return new utils.Interface(_abi) as EventfulOrderbookInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EventfulOrderbook {
    return new Contract(address, _abi, signerOrProvider) as EventfulOrderbook;
  }
}
