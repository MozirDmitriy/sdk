/**
 * @file Dispute related types and interfaces for the Story Protocol SDK
 */

import { Address, Hex } from "viem";
import { TxOptions } from "../options";
import { EncodedTxData } from "../../abi/generated";

/**
 * Request parameters for raising a new dispute
 */
export type RaiseDisputeRequest = {
  /** The IP ID address to raise the dispute against */
  targetIpId: Address;
  /** Content identifier related to the dispute */
  cid: string;
  /** Target tag for the dispute */
  targetTag: string;
  /** Optional additional data in hexadecimal format */
  data?: Hex;
  /** Optional transaction options */
  txOptions?: TxOptions;
};

/**
 * Response data for a raise dispute operation
 */
export type RaiseDisputeResponse = {
  /** Transaction hash if the operation was submitted */
  txHash?: string;
  /** Encoded transaction data */
  encodedTxData?: EncodedTxData;
  /** Unique identifier for the created dispute */
  disputeId?: bigint;
};

/**
 * Request parameters for canceling an existing dispute
 */
export type CancelDisputeRequest = {
  /** ID of the dispute to cancel */
  disputeId: number | string | bigint;
  /** Optional address data */
  data?: Address;
  /** Optional transaction options */
  txOptions?: TxOptions;
};

/**
 * Response data for a cancel dispute operation
 */
export type CancelDisputeResponse = {
  /** Transaction hash if the operation was submitted */
  txHash?: string;
  /** Encoded transaction data */
  encodedTxData?: EncodedTxData;
};

/**
 * Request parameters for resolving an existing dispute
 */
export type ResolveDisputeRequest = {
  /** ID of the dispute to resolve */
  disputeId: number | string | bigint;
  /** Address data required for resolution */
  data: Address;
  /** Optional transaction options */
  txOptions?: TxOptions;
};

/**
 * Response data for a resolve dispute operation
 */
export type ResolveDisputeResponse = {
  /** Transaction hash if the operation was submitted */
  txHash?: string;
  /** Encoded transaction data */
  encodedTxData?: EncodedTxData;
};
