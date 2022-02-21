const { whenDev } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const MometaEditorPlugin = require("@mometa/editor/webpack");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    plugins: {
      add: whenDev(
        () => [
          new MometaEditorPlugin({
            // 开启物料预览
            experimentalMaterialsClientRender: true,
          }),
        ],
        []
      ),
    },
  },
  babel: {
    plugins: whenDev(() => ["@mometa/editor/babel/plugin-react"], []),
  },
};
