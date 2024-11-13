import CommonQuestion from "@/components/commonQuestion";
import DarkModeFooter from "@/components/footer/darkModeFooter";
import LightModeFooter from "@/components/footer/lightModeFooter";
import HeaderMenu from "@/components/headerMenu";
import RelatedTopic from "@/components/relatedTopic";
import SubmitRequest from "@/components/submitRequest";
import Support from "@/components/support";
import TechnicalQuestion from "@/components/technicalQuestion";
import TopicNavigation from "@/components/topicNavigation";

export default function Home() {
  return (
    <div className="mt-16 max-laptop-1100:mt-10 max-tablet-700:mt-5 max-mobile:mt-0">
      <Support />
      <div className="max-w-7xl w-full mx-auto mt-32 max-mobile:mt-20 max-laptop-1280:px-5">
        <div className="my-14">
          <HeaderMenu />
        </div>
        <div className="grid grid-cols-4 max-tablet-800:grid-cols-5 gap-4">
          <div className="col-span-1 max-tablet-800:col-span-2 flex flex-col gap-7 max-phablet:hidden">
            <TopicNavigation />
            <RelatedTopic />
            <SubmitRequest />
          </div>
          <div className="flex flex-col gap-16 col-span-3 max-phablet:col-span-5">
            <CommonQuestion />
            <TechnicalQuestion />
          </div>
        </div>
        <div className="my-16 max-phablet:my-10">
          <DarkModeFooter />
          <LightModeFooter />
        </div>
      </div>
    </div>
  );
}
