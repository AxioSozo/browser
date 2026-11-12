// Offline fixture pins. No production authorization is granted.
export const UNDERSTAND_FIXTURE_PYTHON = "/Volumes/AxioSozoBuild/toolchains/zen/python/bin/python3.11";
export const UNDERSTAND_FIXTURE_NODE = "/Volumes/AxioSozoBuild/toolchains/zen/node/bin/node";
export const UNDERSTAND_FIXTURE_HELPER = "understand_fixture.py";
export const UNDERSTAND_FIXTURE_INPUTS = Object.freeze([
  {
    "relative": "packages/provider-host/cli.mjs",
    "sha256": "b9997e1ee509341a3e9f96fa6221d90e369d457d29e57a5838989ad58a9ac65c",
    "maxBytes": 65536
  },
  {
    "relative": "packages/provider-host/fixtures/understand/common.mjs",
    "sha256": "a7970176dff6e3f6305331e5a25ac4128d9fd10ec97f4ff326102c3463a37936",
    "maxBytes": 65536
  },
  {
    "relative": "packages/provider-host/fixtures/understand/fake-cli.mjs",
    "sha256": "bb9bc0cf0fcaab18f1fef054a992cf75e267f600c8eee3e486bf64e557160eac",
    "maxBytes": 65536
  },
  {
    "relative": "packages/provider-host/src/discovery.mjs",
    "sha256": "e53c1f8daa20ea3d9162f8b418fe196bd2b3175da3b636e36e674b74b8af4c9a",
    "maxBytes": 65536
  },
  {
    "relative": "packages/provider-host/src/understand.mjs",
    "sha256": "6f070833e58709c9a64345a19791c7f61f17baec2db7e58a9538c3eb92f69ef7",
    "maxBytes": 65536
  },
  {
    "relative": "packages/provider-host/src/validation.mjs",
    "sha256": "f9bc96f48c21c473061c8ab0fea425879a7d7279554542ccaa81134470f81365",
    "maxBytes": 65536
  },
  {
    "relative": "packages/provider-host/vendor/t3/version.ts",
    "sha256": "d335a12481cab591cf84abc98b1becdec6229674e9e59fd0d8067cf204e8f92f",
    "maxBytes": 65536
  },
  {
    "relative": "policy.json",
    "sha256": "11bfa29243e6dd76224244c252b827794de6cb4a9e9efded19b01cfdadd17fcc",
    "maxBytes": 32768
  },
  {
    "relative": "understand_fixture.py",
    "sha256": "816814804e3f91bd89d0bf6e304c6de7d4a58fe3b5bc20682ff895fd5b85ade5",
    "maxBytes": 65536
  }
].map(Object.freeze));
export const UNDERSTAND_FIXTURE_BINARIES = Object.freeze([
  {
    "path": "/Volumes/AxioSozoBuild/toolchains/zen/python/bin/python3.11",
    "sha256": "67909d536cd240fcf4b1125a9ff691ad473ad23156fa4f45611da52233959071",
    "maxBytes": 33554432
  },
  {
    "path": "/Volumes/AxioSozoBuild/toolchains/zen/node/bin/node",
    "sha256": "ff9365ccf73e95b7ac69867418124973addde63043650c0db96bd6a722c53cd8",
    "maxBytes": 134217728
  }
].map(Object.freeze));
