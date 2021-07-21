# Metaverse UTXO Recovery

Tool to recover funds from a Metaverse UTXO chain wallet. Can be used to recover funds of wallets that are not compatible with the official Metaverse wallets.

Currently it will only show the addresses can be generated from the provided backup words.

It should be used as a last resort or as a starting point for a custom recovery script.

## Setup

After cloning this repository you can install the dependencies using the following command:

```
npm install
```

## Usage

Replace the test words in the file `src/index.ts` with your own and then run:

```
npm start
```

It should show you a list of generated addresses. Make sure they match the addresses that you expect to hold your funds.

For the sample words it should show you the following output:

```
{
  addresses: [
    'MELcqZi1a6UCbmnsMe8LkDNPuQKCBp6QQ3',
    'MAAYgxE71vXbSz67sDdAT8owPb8qvG6WsR',
    'MBGnQ69nmSUimmw7Az8HFCHj3H3tghRYBu',
    'MXEQ8VqvqESm8W33usgVoy3kfhSNxCPxJy',
    'MNs1Qs4iAMVzHzzpGZoUW2T9azK2h1kJ14',
    'MHgCYH4qpsAMz2dWib4Es9mixGyyhXz17R',
    'ML5ndZ8u4Vy6X6SEE9ywEeBLSk816Td4sr',
    'MDFe1AExPSeLuvnjRwd28Bj578cqCvqWy3',
    'MJwuWiyWtbE4PKTCy2Fnz5QfVs1nZuL7ZN',
    'M9MXXyh39psSeGuao8SyaZQxmQkHpAnf3r'
  ]
}
```