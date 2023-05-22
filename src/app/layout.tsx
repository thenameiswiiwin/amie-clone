import '@styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        {/* <Header /> */}
        <main className="bg-page-gradient pt-nav-height">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
