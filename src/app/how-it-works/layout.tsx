import Header from '../../components/Header';

export default function HowItWorksLayout({
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
