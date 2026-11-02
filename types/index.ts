declare global {
  interface Window {
    ZilPayLegacy?: {
      postMessage: (msg: string) => void;
    };
    webview_plus?: {
      callHandler: (handlerName: string, ...args: any[]) => Promise<any>;
    };
  }
}

export type Params = TxParams[] | string[] | number[] | (string | string[] | number[])[];

export interface MetaData {
  description?: string;
  title?: string;
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
  };
  icon?: string,
}

export interface ReqBody extends MetaData {
  type: string;
  payload?: any;
  domain?: string;
  uuid?: string;
}

export interface DataParams {
  params: ParamItem[];
  _tag: string;
}

export interface ParamItem {
  type: string;
  value: string | unknown[];
  vname: string;
}

export interface TxParams {
  amount: string;
  code: string;
  data: string;
  gasLimit: string;
  gasPrice: string;
  nonce: number;
  priority: boolean;
  pubKey: string;
  signature?: string;
  toAddr: string;
  version?: number;
  from?: string;
  hash?: string;
}

export interface TransactionParams extends TxParams {
  ContractAddress?: string;
  senderAddress?: string;
  TranID?: string;
  ID?: string;
  receipt?: TransitionReceipt;
  Info?: string;
}

export interface Transition {
  accepted: boolean;
  addr: string;
  depth: number;
  msg: unknown
}

export interface TxEvent {
  address: string;
  params: ParamItem[];
  _eventname: string;
}

export interface TransitionReceipt {
  accepted: boolean;
  cumulative_gas: string;
  epoch_num: string;
  success: boolean;
  transitions: Transition[];
  event_logs?: TxEvent[];
  exceptions?: Array<number[]>;
  errors?: {
    line: number;
    message: string;
  }[];
}

export interface MessageParams {
  content: string;
  title: string;
};

export interface InpageWallet {
  base16: string;
  bech32: string;
}

export interface TxBlock {
  TxBlock: {
    body: {
      BlockHash: string;
      HeaderSign: string;
      MicroBlockInfos: {
        MicroBlockHash: string;
        MicroBlockShardId: number;
        MicroBlockTxnRootHash: string;
      }[];
    };
    header: {
      BlockNum: string;
      DSBlockNum: string;
      GasLimit: string;
      GasUsed: string;
      MbInfoHash: string;
      MinerPubKey: string;
      NumMicroBlocks: number;
      NumPages: number;
      NumTxns: number;
      PrevBlockHash: string;
      Rewards: string;
      StateDeltaHash: string;
      StateRootHash: string;
      Timestamp: string;
      TxnFees: string;
      Version: number;
    };
  };
  TxHashes: Array<string[]>;
}

export interface SignedMessage {
  message: string;
  publicKey: string;
  signature: string;
}

export interface SignedMessage {
  message: string;
  publicKey: string;
  signature: string;
}

export interface InputCipherParams {
  content: string;
  title: string;
};

