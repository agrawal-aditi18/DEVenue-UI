const Premium = () => {
  return (
    <div>
        <div className="flex w-full flex-col lg:flex-row my-10 p-5 ">
        <div className="card bg-gray-500 text-white rounded-box grid h-70 grow place-items-center">
            <h1 className="text-3xl font-bold ">Silver Membership</h1>
            <ul>
            <li> - Get higher profile visibility with a Silver badge</li>
            <li> - 100 connection Requests per day</li>
            <li> - View basic profile and post analytics</li>
            <li> - 6 months</li>
            </ul>
            <button className="btn btn-neutral text-white">Buy Silver</button>
            </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="card bg-yellow-500 text-black rounded-box grid h-70 grow place-items-center">
            <h1 className="text-3xl font-bold text-black">Gold Membership</h1>
            <ul>
            <li> - Get top profile visibility with a Gold badge</li>
            <li> - Infinite connection Requests per day</li>
            <li> - Access advanced analytics and promote your projects</li>
            <li> - 9 months</li>
            </ul>
            <button className="btn btn-neutral text-amber-300">Buy Gold</button>
            </div>
        </div>

    </div>
  )
}

export default Premium;