import * as Sentry from "@sentry/react-router";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

Sentry.init({
	dsn: "https://e9c0fffd7d295c2a41a4f6767694bf38@o4509457087922176.ingest.de.sentry.io/4509457328177232",

	// Adds request headers and IP for users, for more info visit:
	// https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
	sendDefaultPii: true,

	integrations: [],
});

startTransition(() => {
	hydrateRoot(
		document,
		<StrictMode>
			<HydratedRouter />
		</StrictMode>
	);
});
