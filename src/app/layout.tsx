import "./globals.css";

export const metadata = {
  title: "ZeroMinds",
  description:
    "Collaborate in teams, improve your skills, and create an outstanding portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
