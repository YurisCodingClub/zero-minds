import Header from '../../components/Header';

export default function LoginLayout({
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
