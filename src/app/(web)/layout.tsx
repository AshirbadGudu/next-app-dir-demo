export const metadata = {
  title: "Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Web layout
        {children}
      </body>
    </html>
  );
}
