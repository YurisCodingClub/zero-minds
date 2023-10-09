import { TabsGallery } from "@/components";
import UserAccount from "@/components/UserAccount";

export default function Gallery() {
  return (
    <main className="flex w-desktop min-h-screen flex-col items-center justify-between p-24">
      <div className="py-32">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold">Gallery</h2>
            <p className="text-xl mt-2 text-gray-600">
              Check out great projects and their awesome creators.
            </p>
          </div>
          <TabsGallery />
          <UserAccount />
        </div>
      </div>
    </main>
  );
}
