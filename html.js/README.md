# Liche SDK Examples

## HTML Javscript

## Requirement

- node v20.11.1

## How To Run

```sh
npm install
npm run start
```

connect to http://localhost:9999

## How to ReqeustBNPL

issued `Client Key` `Seller code` Please put it in

`/bnpl-sdk-sample/html.js/public/product.html`

```
<script src="https://cdn.liche.io/js/liche-sdk-0.0.1.js" type="application/javascript"></script>

LicheSDK.init();

LicheSDK.requestBNPL({
    clientKey: "{your_client_key}",
    sellerCode: "{your_seller_code}",
    callbackUrl: "http://localhost:9999/callback.html",
    product: {
        name: "Awesome Computer",
        quantity: 1,
        goodsCode: "M323060020000",
        brandName: "Awesome Brand",
    },
    partner: {
        orderKey: Date.now().toString(),
        customerKey: Date.now().toString(),
    },
    installmentPlan,
    installmentAmount,
});
```
