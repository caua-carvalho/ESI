const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// pnpm uses a non-flat node_modules structure; expose the hoisted
// .pnpm store so Metro can resolve transitive dependencies like
// @babel/runtime that live there.
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "node_modules/.pnpm/node_modules"),
];

module.exports = withNativeWind(config, { input: "./global.css" });
