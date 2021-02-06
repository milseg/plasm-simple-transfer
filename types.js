module.exports = {
  "ClaimId": "H256",
  "Lockdrop": {
    "type": "u8",
    "transaction_hash": "H256",
    "public_key": "[u8; 33]",
    "duration": "u64",
    "value": "u128"
  },
  "TickerRate": {
    "authority": "u16",
    "btc": "DollarRate",
    "eth": "DollarRate"
  },
  "DollarRate": "u128",
  "AuthorityId": "AccountId",
  "AuthorityVote": "u32",
  "ClaimVote": {
    "claim_id": "ClaimId",
    "approve": "bool",
    "authority": "u16"
  },
  "Claim": {
    "params": "Lockdrop",
    "approve": "BTreeSet<AuthorityId>",
    "decline": "BTreeSet<AuthorityId>",
    "amount": "u128",
    "complete": "bool"
  },
  "Releases": {
    "_enum": [
      "V1_0_0"
    ]
  },
  "StakingParameters": {
    "canBeNominated": "bool",
    "optionExpired": "u128",
    "optionP": "u32"
  },
  "Parameters": {
    "canBeNominated": "bool",
    "optionExpired": "u128",
    "optionP": "u32"
  },
  "EraStakingPoints": {
    "total": "Balance",
    "individual": "BTreeMap<AccountId, Balance>"
  },
  "VoteCounts": {
    "bad": "u32",
    "good": "u32"
  },
  "EraIndex": "u32",
  "OfferState": {
    "_enum": [
      "Waiting",
      "Reject",
      "Accept"
    ]
  },
  "OfferOf": {
    "buyer": "AccountId",
    "sender": "AccountId",
    "contracts": "Vec<AccountId>",
    "amount": "Balance",
    "expired": "BlockNumber",
    "state": "OfferState"
  },
  "Decision": {
    "_enum": [
      "Undecided",
      "True",
      "False"
    ]
  },
  "ChallengeGameOf": {
    "propertyHash": "Hash",
    "challenges": "Vec<Hash>",
    "decision": "Decision",
    "createdBlock": "BlockNumber"
  },
  "PredicateContractOf": {
    "predicateHash": "Hash",
    "inputs": "Vec<u8>"
  },
  "PredicateHash": "Hash",
  "Schedule": {
    "version": "u32",
    "putCodePerByteCost": "Weight"
  },
  "PrefabOvmModule": {
    "scheduleVersion": "u32",
    "code": "Vec<u8>"
  },
  "Property": {
    "predicateAddress": "AccountId",
    "inputs": "Vec<Vec<u8>>"
  },
  "PropertyOf": {
    "predicateAddress": "AccountId",
    "inputs": "Vec<Vec<u8>>"
  },
  "Range": {
    "start": "u128",
    "end": "u128"
  },
  "RangeOf": {
    "start": "u128",
    "end": "u128"
  },
  "StateUpdate": {
    "depositContractAddress": "AccountId",
    "range": "Range",
    "blockNumber": "BlockNumber",
    "stateObject": "Property"
  },
  "Checkpoint": {
    "stateUpdate": "Property"
  },
  "Exit": {
    "stateUpdate": "StateUpdate",
    "inclusionProof": "InclusionProof"
  },
  "InclusionProof": {
    "addressInclusionProof": "AddressInclusionProof",
    "intervalInclusionProof": "IntervalInclusionProof"
  },
  "IntervalInclusionProof": {
    "leafIndex": "Balance",
    "leafPosition": "Balance",
    "siblings": "Vec<IntervalTreeNode>"
  },
  "AddressInclusionProof": {
    "leafIndex": "AccountId",
    "leafPosition": "Balance",
    "siblings": "Vec<AddressTreeNode>"
  },
  "IntervalTreeNode": {
    "data": "Hash",
    "start": "Balance"
  },
  "AddressTreeNode": {
    "data": "Hash",
    "tokenAddress": "AccountId"
  },
  "ExitDeposit": {
    "stateUpdate": "StateUpdate",
    "checkpoint": "Checkpoint"
  },
  "Address": "IndicesLookupSource",
  "LookupSource": "IndicesLookupSource",
  "Account": {
    "nonce": "U256",
    "balance": "U256"
  },
  "Transaction": {
    "nonce": "U256",
    "action": "String",
    "gas_price": "u64",
    "gas_limit": "u64",
    "value": "U256",
    "input": "Vec<u8>",
    "signature": "Signature"
  },
  "Signature": {
    "v": "u64",
    "r": "H256",
    "s": "H256"
  },
  "TransactionStatus": {
    "transaction_hash": "H256",
    "transaction_index": "u32",
    "from": "H160",
    "to": "Option<H160>",
    "contract_address": "Option<H160>",
    "logs": "Vec<Log>",
    "logs_bloom": "Bloom"
  },
  "Bloom": "[u8; 256]",
  "Receipt": {
    "transaction_hash": "Option<H256>",
    "transaction_index": "Option<U256>",
    "block_hash": "Option<H256>",
    "from": "Option<H160>",
    "to": "Option<H160>",
    "block_number": "Option<U256>",
    "cumulative_gas_used": "U256",
    "gas_used": "Option<U256>",
    "contract_address": "Option<H160>",
    "logs": "Vec<Log>",
    "state_root": "Option<H256>",
    "logs_bloom": "Bloom",
    "status_code": "Option<u64>"
  }
}