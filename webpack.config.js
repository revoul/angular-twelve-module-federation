const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

console.log(`* MF ANGULAR TWELVE *`);

module.exports = {
  output: {
    publicPath: "http://localhost:4213/",
    uniqueName: "mfangulartwelve",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfangulartwelve",
      library: { type: "var", name: "mfangulartwelve" },
      filename: "remoteEntry.js",
      exposes: {
        MfAngularTwelve:
          "./src/main.single-spa.ts",
      },
      shared: {
        "@angular/core": { eager: true, singleton: true },
        "@angular/common": { eager: true, singleton: true },
        "@angular/router": { eager: true, singleton: true }
      },
    }),
  ],
};
