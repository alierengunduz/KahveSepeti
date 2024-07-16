
const StockAndTotalProduct = () => {
  return (
    <div className="flex items-center justify-between bg-gray-200 sm:p-5 p-1 bg-opacity-50 rounded-md">
            <div className="flex items-center gap-x-2 text-sm">
              <input type="checkbox" />
              <span>Stoktakiler</span>
            </div>
            <div className="flex items-center gap-x-8 sm:text-sm text-xs">
              <span>Toplam 184 ürün</span>
              <span className="border-2 border-gray-400 p-3 rounded-md">
                Önerilen Sıralama
              </span>
            </div>
          </div>
  )
}

export default StockAndTotalProduct