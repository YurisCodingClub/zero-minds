import FeatureSection from "@/components/FeatureSection";
import FeatureSectionGrid from "@/components/FeatureSectionGrid";
import NewsLetter from "@/components/Newsletter";
import PanelScreen from "@/components/PanelScreen";
import StatsSection from "@/components/StatsSection";

export default function HowItWorks() {
  return (
    <main className="flex w-desktop min-h-screen flex-col items-center justify-between p-24">
      <div className="py-32">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold">How it Works</h2>
            <p className="text-xl mt-2 text-gray-600">Find out how to collaborate and be part of something awesome.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 mx-auto mt-16 max-w-7xl">
            <FeatureSection />
            <FeatureSectionGrid />
            <StatsSection />
            <NewsLetter />
          </div>
        </div>
      </div>
    </main>
  )
}
