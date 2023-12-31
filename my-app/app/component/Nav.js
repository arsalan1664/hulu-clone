import request from "../utils/request";

function Nav() {
  return (
    <nav>
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">{Object.entries(request).map(([Key, { title , url}])=> (
          <h2 Key={Key} className="last:pr-24 cursur-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
        ) )}</div>
    </nav>
  )
}

export default Nav