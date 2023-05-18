/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MatchingEngineInterface extends utils.Interface {
  functions: {
    "activeOrders(uint256)": FunctionFragment;
    "asks(uint256)": FunctionFragment;
    "bids(uint256)": FunctionFragment;
    "cancelOrder(uint256)": FunctionFragment;
    "feeAddr()": FunctionFragment;
    "fillOrKill(uint128,uint128,uint8)": FunctionFragment;
    "getMakerFee()": FunctionFragment;
    "getTakerFee()": FunctionFragment;
    "getTokenPair()": FunctionFragment;
    "immediateOrCancel(uint128,uint128,uint8)": FunctionFragment;
    "makerFee()": FunctionFragment;
    "makerOrder(uint128,uint128,uint8,uint256)": FunctionFragment;
    "orders(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMakerFee(uint128)": FunctionFragment;
    "setTakerFee(uint128)": FunctionFragment;
    "take(uint128,uint8)": FunctionFragment;
    "takerFee()": FunctionFragment;
    "token1()": FunctionFragment;
    "token2()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "viewOffer(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activeOrders"
      | "asks"
      | "bids"
      | "cancelOrder"
      | "feeAddr"
      | "fillOrKill"
      | "getMakerFee"
      | "getTakerFee"
      | "getTokenPair"
      | "immediateOrCancel"
      | "makerFee"
      | "makerOrder"
      | "orders"
      | "owner"
      | "renounceOwnership"
      | "setMakerFee"
      | "setTakerFee"
      | "take"
      | "takerFee"
      | "token1"
      | "token2"
      | "transferOwnership"
      | "viewOffer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeOrders",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "asks",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "bids",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "feeAddr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fillOrKill",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMakerFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTakerFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPair",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "immediateOrCancel",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "makerFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "makerOrder",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMakerFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTakerFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "take",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "takerFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(functionFragment: "token2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "viewOffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "asks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bids", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fillOrKill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMakerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTakerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "immediateOrCancel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makerFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makerOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMakerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTakerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "take", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "takerFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "viewOffer", data: BytesLike): Result;

  events: {
    "DeleteOffer(uint256,address,address,address)": EventFragment;
    "MakerFeePaid(uint256,address,address,uint128)": EventFragment;
    "OfferCreate(address,address,uint8,uint128,uint128,uint256,address)": EventFragment;
    "OfferTake(uint8,address,address,uint128,uint128,uint256,address,address)": EventFragment;
    "OfferUpdate(uint256,uint128,uint128)": EventFragment;
    "OrderCancelled(uint256,address,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TakerFeePaid(uint256,address,address,uint128)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeleteOffer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MakerFeePaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OfferCreate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OfferTake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OfferUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TakerFeePaid"): EventFragment;
}

export interface DeleteOfferEventObject {
  id: BigNumber;
  maker: string;
  token1: string;
  token2: string;
}
export type DeleteOfferEvent = TypedEvent<
  [BigNumber, string, string, string],
  DeleteOfferEventObject
>;

export type DeleteOfferEventFilter = TypedEventFilter<DeleteOfferEvent>;

export interface MakerFeePaidEventObject {
  id: BigNumber;
  maker: string;
  tokPaid: string;
  feePaid: BigNumber;
}
export type MakerFeePaidEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  MakerFeePaidEventObject
>;

export type MakerFeePaidEventFilter = TypedEventFilter<MakerFeePaidEvent>;

export interface OfferCreateEventObject {
  token1: string;
  token2: string;
  tok1Type: number;
  tok1Amt: BigNumber;
  tok2Amt: BigNumber;
  id: BigNumber;
  maker: string;
}
export type OfferCreateEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber, BigNumber, string],
  OfferCreateEventObject
>;

export type OfferCreateEventFilter = TypedEventFilter<OfferCreateEvent>;

export interface OfferTakeEventObject {
  tok1Type: number;
  token1: string;
  token2: string;
  tok1Amt: BigNumber;
  tok2Amt: BigNumber;
  id: BigNumber;
  maker: string;
  taker: string;
}
export type OfferTakeEvent = TypedEvent<
  [number, string, string, BigNumber, BigNumber, BigNumber, string, string],
  OfferTakeEventObject
>;

export type OfferTakeEventFilter = TypedEventFilter<OfferTakeEvent>;

export interface OfferUpdateEventObject {
  id: BigNumber;
  tok1Amt: BigNumber;
  tok2Amt: BigNumber;
}
export type OfferUpdateEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  OfferUpdateEventObject
>;

export type OfferUpdateEventFilter = TypedEventFilter<OfferUpdateEvent>;

export interface OrderCancelledEventObject {
  id: BigNumber;
  maker: string;
  token1: string;
  token2: string;
}
export type OrderCancelledEvent = TypedEvent<
  [BigNumber, string, string, string],
  OrderCancelledEventObject
>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TakerFeePaidEventObject {
  id: BigNumber;
  taker: string;
  tokPaid: string;
  feePaid: BigNumber;
}
export type TakerFeePaidEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  TakerFeePaidEventObject
>;

export type TakerFeePaidEventFilter = TypedEventFilter<TakerFeePaidEvent>;

export interface MatchingEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MatchingEngineInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    activeOrders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    asks(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        prev: BigNumber;
        next: BigNumber;
      }
    >;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        prev: BigNumber;
        next: BigNumber;
      }
    >;

    cancelOrder(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeAddr(overrides?: CallOverrides): Promise<[string]>;

    fillOrKill(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getMakerFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTakerFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenPair(overrides?: CallOverrides): Promise<[string, string]>;

    immediateOrCancel(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makerFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    makerOrder(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      dllPosition: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, number, number, BigNumber] & {
        sellingTokenAmt: BigNumber;
        buyingTokenAmt: BigNumber;
        owner: string;
        sellingToken1: number;
        biggerToken: number;
        priceRatio: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMakerFee(
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTakerFee(
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    take(
      tokenAmt: PromiseOrValue<BigNumberish>,
      spendingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    takerFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    token2(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    viewOffer(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string, number]>;
  };

  activeOrders(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  asks(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      prev: BigNumber;
      next: BigNumber;
    }
  >;

  bids(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      prev: BigNumber;
      next: BigNumber;
    }
  >;

  cancelOrder(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeAddr(overrides?: CallOverrides): Promise<string>;

  fillOrKill(
    token1Amt: PromiseOrValue<BigNumberish>,
    token2Amt: PromiseOrValue<BigNumberish>,
    sellingToken1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getMakerFee(overrides?: CallOverrides): Promise<BigNumber>;

  getTakerFee(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenPair(overrides?: CallOverrides): Promise<[string, string]>;

  immediateOrCancel(
    token1Amt: PromiseOrValue<BigNumberish>,
    token2Amt: PromiseOrValue<BigNumberish>,
    sellingToken1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makerFee(overrides?: CallOverrides): Promise<BigNumber>;

  makerOrder(
    token1Amt: PromiseOrValue<BigNumberish>,
    token2Amt: PromiseOrValue<BigNumberish>,
    sellingToken1: PromiseOrValue<BigNumberish>,
    dllPosition: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  orders(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, number, number, BigNumber] & {
      sellingTokenAmt: BigNumber;
      buyingTokenAmt: BigNumber;
      owner: string;
      sellingToken1: number;
      biggerToken: number;
      priceRatio: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMakerFee(
    _makerFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTakerFee(
    _takerFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  take(
    tokenAmt: PromiseOrValue<BigNumberish>,
    spendingToken1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  takerFee(overrides?: CallOverrides): Promise<BigNumber>;

  token1(overrides?: CallOverrides): Promise<string>;

  token2(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  viewOffer(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, string, number]>;

  callStatic: {
    activeOrders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asks(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        prev: BigNumber;
        next: BigNumber;
      }
    >;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        prev: BigNumber;
        next: BigNumber;
      }
    >;

    cancelOrder(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    feeAddr(overrides?: CallOverrides): Promise<string>;

    fillOrKill(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getMakerFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTakerFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenPair(overrides?: CallOverrides): Promise<[string, string]>;

    immediateOrCancel(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    makerFee(overrides?: CallOverrides): Promise<BigNumber>;

    makerOrder(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      dllPosition: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, number, number, BigNumber] & {
        sellingTokenAmt: BigNumber;
        buyingTokenAmt: BigNumber;
        owner: string;
        sellingToken1: number;
        biggerToken: number;
        priceRatio: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMakerFee(
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTakerFee(
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    take(
      tokenAmt: PromiseOrValue<BigNumberish>,
      spendingToken1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    takerFee(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<string>;

    token2(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    viewOffer(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string, number]>;
  };

  filters: {
    "DeleteOffer(uint256,address,address,address)"(
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      token1?: null,
      token2?: null
    ): DeleteOfferEventFilter;
    DeleteOffer(
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      token1?: null,
      token2?: null
    ): DeleteOfferEventFilter;

    "MakerFeePaid(uint256,address,address,uint128)"(
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      tokPaid?: null,
      feePaid?: null
    ): MakerFeePaidEventFilter;
    MakerFeePaid(
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      tokPaid?: null,
      feePaid?: null
    ): MakerFeePaidEventFilter;

    "OfferCreate(address,address,uint8,uint128,uint128,uint256,address)"(
      token1?: null,
      token2?: null,
      tok1Type?: null,
      tok1Amt?: null,
      tok2Amt?: null,
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null
    ): OfferCreateEventFilter;
    OfferCreate(
      token1?: null,
      token2?: null,
      tok1Type?: null,
      tok1Amt?: null,
      tok2Amt?: null,
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null
    ): OfferCreateEventFilter;

    "OfferTake(uint8,address,address,uint128,uint128,uint256,address,address)"(
      tok1Type?: null,
      token1?: null,
      token2?: null,
      tok1Amt?: null,
      tok2Amt?: null,
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      taker?: PromiseOrValue<string> | null
    ): OfferTakeEventFilter;
    OfferTake(
      tok1Type?: null,
      token1?: null,
      token2?: null,
      tok1Amt?: null,
      tok2Amt?: null,
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      taker?: PromiseOrValue<string> | null
    ): OfferTakeEventFilter;

    "OfferUpdate(uint256,uint128,uint128)"(
      id?: PromiseOrValue<BigNumberish> | null,
      tok1Amt?: null,
      tok2Amt?: null
    ): OfferUpdateEventFilter;
    OfferUpdate(
      id?: PromiseOrValue<BigNumberish> | null,
      tok1Amt?: null,
      tok2Amt?: null
    ): OfferUpdateEventFilter;

    "OrderCancelled(uint256,address,address,address)"(
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      token1?: null,
      token2?: null
    ): OrderCancelledEventFilter;
    OrderCancelled(
      id?: PromiseOrValue<BigNumberish> | null,
      maker?: PromiseOrValue<string> | null,
      token1?: null,
      token2?: null
    ): OrderCancelledEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TakerFeePaid(uint256,address,address,uint128)"(
      id?: PromiseOrValue<BigNumberish> | null,
      taker?: PromiseOrValue<string> | null,
      tokPaid?: null,
      feePaid?: null
    ): TakerFeePaidEventFilter;
    TakerFeePaid(
      id?: PromiseOrValue<BigNumberish> | null,
      taker?: PromiseOrValue<string> | null,
      tokPaid?: null,
      feePaid?: null
    ): TakerFeePaidEventFilter;
  };

  estimateGas: {
    activeOrders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    asks(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelOrder(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeAddr(overrides?: CallOverrides): Promise<BigNumber>;

    fillOrKill(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getMakerFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTakerFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenPair(overrides?: CallOverrides): Promise<BigNumber>;

    immediateOrCancel(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makerFee(overrides?: CallOverrides): Promise<BigNumber>;

    makerOrder(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      dllPosition: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMakerFee(
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTakerFee(
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    take(
      tokenAmt: PromiseOrValue<BigNumberish>,
      spendingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    takerFee(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    token2(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    viewOffer(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activeOrders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    asks(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fillOrKill(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getMakerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTakerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenPair(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    immediateOrCancel(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    makerOrder(
      token1Amt: PromiseOrValue<BigNumberish>,
      token2Amt: PromiseOrValue<BigNumberish>,
      sellingToken1: PromiseOrValue<BigNumberish>,
      dllPosition: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    orders(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMakerFee(
      _makerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTakerFee(
      _takerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    take(
      tokenAmt: PromiseOrValue<BigNumberish>,
      spendingToken1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    takerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    viewOffer(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}