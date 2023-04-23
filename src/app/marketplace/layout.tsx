import Header from '../../components/Header';

export default function MarketPlaceLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
