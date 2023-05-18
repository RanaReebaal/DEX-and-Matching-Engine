/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  EventfulOrderbook,
  EventfulOrderbookInterface,
} from "../../../../contracts/events/EventfulMatchingEngine.sol/EventfulOrderbook";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "token1Amt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "token2Amt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "sellingToken1",
        type: "uint8",
      },
    ],
    name: "FoKOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "token1Amt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "token2Amt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "sellingToken1",
        type: "uint8",
      },
    ],
    name: "IoCOrder",
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
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
    ],
    name: "MakerOrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenAmt",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "spendingToken1",
        type: "uint8",
      },
    ],
    name: "TakerOrder",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212200cff173b4b854ca516d6e5950feb1235b3ad2c4d2cb274a7ea8850dacd6373e464736f6c63430008120033";

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