
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
    <div>69% off if you login now for the next 69 days</div>
    {children}</body>
  );
}