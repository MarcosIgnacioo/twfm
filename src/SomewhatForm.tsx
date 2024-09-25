import { useState } from "react"

export default function SomewhatForm() {
  const [slider, setSlider] = useState(200);
  const [foo, setFoo] = useState(0);
  console.log(slider)
  return (
    <form onSubmit={(e: any) => e.preventDefault()} className="container mx-auto space-y-6 rounded-md border-2 border-orangi-400 p-4 text-orangi-800 shadow-md w-max bg-orangi-50">
      <div className="space-y-1 ">
        <label htmlFor="required" className="block text-sm  font-semibold ">Required Field</label>
        <input id="required" placeholder="Required Field"
          className="w-full px-2 py-1 placeholder-orangi-500/50 border-current  border-2 rounded  focus:ring-4 ring-red-800   text-orangi-600 outline-none" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="disabled" className="block text-sm font-semibold">Disabled Field</label>
        <input id="disabled" placeholder="Disabled Field" className="w-full px-2 py-1 border-orangi-300 border-2 rounded disabled:border--100 disabled:cursor-not-allowed disabled:bg-orangi-50 " disabled />
      </div>
      <div className="">
        <label htmlFor="input" className="block text-sm font-semibold"> Input Field </label>
        <input id="input" placeholder="Input Field" className="w-full px-2 py-1 border-orangi-300 border-2 rounded text-orangi-400" />
      </div>
      <div className="space-x-4">
        <input id="terms" type="checkbox" className="" />
        <label htmlFor="terms">I accept the terms and conditions.</label>
      </div>
      <div className="space-x-4">
        <button className=" text-orangi-200 bg-orangi-400 px-2 py-1 border-current border-2 rounded hover:bg-orangi-300 hover:active:border-orangi-300 active:border-orangi-400 ">Submit</button>
        <button className="px-2 py-1 border-current border-2 rounded text-orangi-950
          hover:bg-orangi-950 hover:text-orangi-100 active:border-orangi-950">Reset</button>
        <button disabled className="disabled:opacity-50 disabled:italic border-orangi-300 border-2 rounded px-2 py-1 disabled:cursor-not-allowed">Disabled</button>
        <button disabled className="text-orangi-950 ">test</button>
        <input className="appearance-none out-of-range:bg-orangi-500" type="range" min="-50" onChange={(e) => (setSlider(parseInt(e.target.value)))} max="100" value={slider} />
        <input type="number" max={2} className="bg-orangi-300 out-of-range:bg-orangi-950" name="" value={foo} onChange={(e) => setFoo(parseInt(e.target.value))} />
      </div>
    </form>
  )
}

