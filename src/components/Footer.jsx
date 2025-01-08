
const Footer = () => {
  return (
    <>
        <div className="max-w-[1140px] mx-auto px-5 lg:py-10 py-3 ">
            <div className="flex md:justify-between flex-col md:flex-row justify-center items-center text-xs flex-wrap">
                <p className="font-medium">@{new Date().getFullYear()} Netguru S.A. All rights reserved</p>
                <div className="flex  gap-10 py-2">
                    <p className="font-medium cursor-pointer">Privacy Policy</p>
                    <p className="font-medium cursor-pointer">Terms of use</p>
                    <p className="font-medium cursor-pointer">Site map</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer