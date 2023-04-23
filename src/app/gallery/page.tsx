import TabsGallery from "@/components/TabsGallery";

export default function Gallery() {
  return (
    <main className="flex w-desktop min-h-screen flex-col items-center justify-between p-24">
      <div className="py-32">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold">Hall of Fame</h2>
            <p className="text-xl mt-2 text-gray-600">Check out great projects and their awesome creators.</p>
          </div>
          <TabsGallery />
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 mx-auto mt-16 max-w-2xl">

          </div>
        </div>
      </div>
    </main>
  )
}
