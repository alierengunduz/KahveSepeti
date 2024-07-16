const Content = () => {
  return (
    <div className="py-10 sm:px-20 px-1 flex flex-col gap-y-10">
      {/* up component */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="cursor-pointer">
            <img className="object-cover" src="/images/content/content1.webp" alt="content1" />
        </div>
        <div className="cursor-pointer">
        <img src="/images/content/content2.webp" alt="content2" />
        </div>
      </div>
      {/* middle component */}
      <div className="cursor-pointer">
      <img src="/images/content/content3.webp" alt="content3" />
      </div>
      {/* down component */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="cursor-pointer">
            <img className="object-cover" src="/images/content/content4.webp" alt="content4" />
        </div>
        <div className="cursor-pointer">
        <img src="/images/content/content5.webp" alt="content5" />
        </div>
      </div>
    </div>
  );
};

export default Content;
