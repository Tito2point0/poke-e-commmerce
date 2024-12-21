import AddList from "../components/AddList";
import CustomizeProducts from "../components/CustomizeProducts";
import ProductImages from "../components/ProductImages";

const SinglePage = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Ensure page fills the screen */}
      <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 flex-grow">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>
        {/* 'TEXT' */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">Product Name</h1>
          <p className="text-gray-500">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor
            pellentesque cubilia habitant montes vitae dolor. Viverra nam eros
            erat purus eros penatibus. Diam eu rhoncus dapibus elit mauris
            dictumst per. Sodales suscipit semper neque elementum scelerisque hac
            fermentum. Nisi dignissim duis lacinia facilisis a pretium ex. Per
            egestas enim morbi facilisi dapibus himenaeos porta imperdiet. Etiam
            mus convallis vivamus quis aenean praesent mi lobortis. Porta
            venenatis curae odio iaculis mi quis nam morbi.
          </p>
          <div className="h-[2px] bg-gray-100">
            <div className="flex items-center gap-4">
              <h3 className="text-xl text-gray-500 line-through">$59</h3>
              <h2 className="font-medium text-2xl">$49</h2>
              <CustomizeProducts />
              <AddList />
            </div>
            <div className="h-[2px] bg-gray-100"></div>
            <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor
                pellentesque cubilia habitant montes vitae dolor. Viverra nam eros
                erat purus eros penatibus. Diam eu rhoncus dapibus elit mauris.
              </p>
            </div>
            <div className="h-[2px] bg-gray-100"></div>
            <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor
                pellentesque cubilia habitant montes vitae dolor. Viverra nam eros
                erat purus eros penatibus. Diam eu rhoncus dapibus elit mauris.
              </p>
            </div>
            <div className="h-[2px] bg-gray-100"></div>
            <div className="text-sm mb-16">
              <h4 className="font-medium mb-4">Title</h4>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor
                pellentesque cubilia habitant montes vitae dolor. Viverra nam eros
                erat purus eros penatibus. Diam eu rhoncus dapibus elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div> {/* Spacer to push footer down */}
    </div>
  );
};

export default SinglePage;
