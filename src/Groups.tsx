
export default function Groups() {
  return (
    <main className="flex flex-col mx-auto w-3/4 bg-[#1d1d1d] text-orange-50 p-6 space-y-6">
      <header>
        <h1 className="text-2xl bold ">Things to Do</h1>
      </header>
      <ul className="flex flex-col space-y-6 ">
        <li className="border-2 rounded-md border-gray-200 bg-white text-black py-2 px-4 space-x-2 group/item hover:bg-orangi-100">
          <label className="space-x-2">
            <input type="checkbox" className="mr-2 accent-red-500" />
            <span className="group-hover/item:underline group-hover/item:text-orange-500">Buy vegan bacon</span>
          </label>
          <button className="group-hover/item:visible invisible" >❌</button>
        </li>
        <li className="border-2 rounded-md border-gray-200 bg-white text-black py-2 px-4 space-x-2 group/item hover:bg-orangi-100">
          <label className="space-x-2">
            <input type="checkbox" />
            <span className="group-hover/item:underline group-hover/item:text-orange-500">Bake some cookies</span>
          </label>
          <button className="group-hover/item:visible invisible" >❌</button>
        </li>
        <li className="border-2 rounded-md border-gray-200 bg-white text-black py-2 px-4 space-x-2 group/item hover:bg-orangi-100">
          <label className="space-x-2">
            <input type="checkbox" />
            <span className="group-hover/item:underline group-hover/item:text-orange-500">Do a handstand</span>
          </label>
          <button className="group-hover/item:visible invisible" >❌</button>
        </li>
      </ul>
    </main>
  )
}

