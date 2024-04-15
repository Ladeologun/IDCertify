module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    env: {
        production: {
            plugins: ['react-native-paper/babel', 'transform-remove-console']
        },
    },
    plugins: [
        [
          "module-resolver",
          {
            root: ["./src/"],
            extensions: [
              ".ios.js",
              ".android.js",
              ".js",
              ".ts",
              ".tsx",
              ".json",
            ],
            alias: {
              "@components": "./src/components",
              "@drawables":"./src/assets/drawables",
              "@auth":"./src/features/auth",
              "@styles":"./src/styles",
            }
          }
      ]
    ]  
  };
}