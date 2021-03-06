import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import Nav from "./components/nav/nav";

import cssReset from "./styles/global.css";

import styles from "./tailwind.css";

export function links() {
  return [
    { rel: "stylesheet", href: cssReset },
    { rel: "stylesheet", href: styles },
  ];
}

export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <div className="min-w-full h-16"></div>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload port={8002} />}
      </body>
    </html>
  );
}
