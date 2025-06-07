import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {
	sentryReactRouter,
	type SentryReactRouterBuildOptions,
} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
	org: "tu-do-agency",
	project: "javascript-react",
	// An auth token is required for uploading source maps.
	authToken:
		"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",
	// ...
};

export default defineConfig((config) => {
	return {
		plugins: [
			tailwindcss(),
			reactRouter(),
			tsconfigPaths(),
			sentryReactRouter(sentryConfig, config),
		],
		sentryConfig,

		ssr: {
			noExternal: ["@syncfusion/*"],
		},
		optimizeDeps: {
			include: ["@syncfusion/ej2-base"],
		},
	};
});
