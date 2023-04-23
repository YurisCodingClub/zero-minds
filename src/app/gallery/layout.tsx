import Header from '../../components/Header';

export default function GalleryLayout({
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
