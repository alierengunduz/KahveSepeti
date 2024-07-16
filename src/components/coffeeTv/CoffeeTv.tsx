

const CoffeeTv = () => {
  return (
    <div className="py-10 sm:px-20 px-1 flex sm:flex-row flex-col sm:gap-y-0 gap-y-10  items-center sm:gap-x-20 gap-x-1">
        <div className="sm:w-[50%] w-full">
            <img src="/images/coffeeTv/coffeetv.webp" alt="coffeetv" />
        </div>
        <div className="w-[50%s]  font-medium flex flex-col gap-y-4">
            <h1 className="text-3xl">Kahvesepeti.com TV</h1>
            <a  href="#" className="underline text-2xl">İncele</a>
        </div>
    </div>
  )
}

export default CoffeeTv