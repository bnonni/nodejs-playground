#!/bin/bash
IFS=$'\n' PHRASES=$(cat ./valid-seeds.txt)
i=0

echo "Starting electrum daemon ..."
electrum daemon -d

for PHRASE in $PHRASES
do
  WALLET="wallet_$i"
  echo "Restoring seed phrase: $PHRASE"
  electrum restore --wallet "$HOME/.electrum/wallets/tw_goose_chase/$WALLET" "$PHRASE"
  echo "Loading wallet: $WALLET"
  electrum load_wallet --wallet "$HOME/.electrum/wallets/tw_goose_chase/$WALLET"
  UNSPENT=$(electrum listunspent)
  echo "Checking unspent: $UNSPENT"
  echo "No unspent UTXOs. Incorrect phrase."
  if [[ ! $UNSPENT == '[]' ]]; then
    WALLET_PATH=$HOME/.electrum/wallets/tw_goose_chase/$WALLET
    echo "|---------------------------------|"
    echo "| BITCOIN FOUND! Congrats pleb!   |"
    echo "| SEED: $PHRASE                   |"
    echo "| WALLET NAME: $WALLET            |"
    echo "| WALLET PATH: $WALLET_PATH       |"
    echo "|---------------------------------|"
  fi
  i=$((i+1))
  echo ""
done