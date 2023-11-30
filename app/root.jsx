import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import UseCSV from "@usecsv/react";
import React, { Suspense } from "react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <div>Another content</div> */}
        <Suspense fallback={<div>Loading...</div>}>
          <UseCSV
            importerKey="e3033735-73be-498a-9d3c-0a8b4c070e67"
            render={(openModal) => {
              return (
                <button
                  onClick={openModal}
                  style={{
                    color: "#fff",
                    backgroundColor: "#027ad6",
                    boxShadow: "0 32px 64px rgba(0,0,0,0.07);",
                    textAlign: "center",
                    border: "none",
                    borderRadius: "3px",
                    padding: "5px",
                  }}
                >
                  Import Data
                </button>
              );
            }}
            importerDisplay="inline"
          />
          <div
            style={{
              position: "relative",
              border: "1px solid #027ad6",
              width: "1200px",
              height: "650px",
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            id="usecsv-importer-inline-wrapper"
          />
        </Suspense>
        {/* <div>Another content</div> */}
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
