// https://the-guild.dev/graphql/codegen/docs/getting-started/installation
// https://the-guild.dev/graphql/codegen/docs/guides/react-query
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8000/___graphql",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.gql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
  // https://the-guild.dev/graphql/codegen/docs/getting-started/development-workflow#watch-mode
  watch: true,
};

export default config;
