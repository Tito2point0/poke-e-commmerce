import AddList from "../components/AddList";
import CustomizeProducts from "../components/CustomizeProducts";
import ProductImages from "../components/ProductImages";

const SinglePage = () => {
  return (
    <div className="min-h-screen flex flex-col "> {/* Ensures full viewport height and adds padding to bottom */}
      <div className="flex-grow px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
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
            erat purus penatibus. Diam eu rhoncus dapibus elit mauris.
          </p>
          <div className="h-[2px] bg-gray-100"></div>
          <div className="flex flex-col gap-6"> {/* Stack CustomizeProducts and AddList vertically */}
            <CustomizeProducts />
            <AddList />
          </div>
          <div className="h-[2px] bg-gray-100"></div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor
              pellentesque cubilia habitant montes vitae dolor. Viverra nam eros
              erat purus penatibus. Diam eu rhoncus dapibus elit mauris.
            </p>
          </div>
          <div className="h-[2px] bg-gray-100"></div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor
              pellentesque cubilia habitant montes vitae dolor. Viverra nam eros
              erat purus penatibus. Diam eu rhoncus dapibus elit mauris.
            </p>
          </div>
          <div className="h-[2px] bg-gray-100"></div>
          <div className="text-sm mb-32">
            <h4 className="font-medium mb-4">Title</h4>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor
              pellentesque cubilia habitant montes vitae dolor. Viverra nam eros
              erat purus penatibus. Diam eu rhoncus dapibus elit mauris.
            </p>
          </div>
        </div>
      </div>
      {/* Spacer to Separate Footer */}
      <div className=""></div> {/* Increased height to push footer down */}
    </div>
  );
};

export default SinglePage;

