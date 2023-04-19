import MyDropdown from './MyDropdown';
import Tabs from './Tabs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyDropdown />
      <Tabs />
    </main>
  )
}
