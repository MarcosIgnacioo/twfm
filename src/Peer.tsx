import { ChangeEvent, useState } from "react";


export default function Peer() {
  const [value, setValue] = useState("wep");
  function change(e: ChangeEvent) {
    if (!e.target) {
      return;
    }
    const target = e.target as HTMLInputElement
    console.log(target.value);
    setValue(target.value);
  }

  return (
    <div>
      <form>
        <input type="" name="" onChange={(e) => change(e)} value={value} placeholder="foo" className="rounded-md py-1 px-2 outline-none bg-orangi-300 text-orange-50 peer block" required />
        <p className="invisible text-red-500 peer-invalid:visible peer-target:border-red-600 peer-target:border-2 ">
          come cagad
        </p>
        <div>
          <label htmlFor="popo">popo</label>
          <input type="radio" name="foo" className="peer/popo" />
          <label htmlFor="pipi">pipi</label>
          <input type="radio" name="foo" className="peer/pipi" />
          <p className="hidden peer-checked/popo:block text-orangi-950 decoration-orangi-800 decoration-wavy decoration-4 line-through">
            elegiste popo
          </p>
          <p className="hidden peer-checked/pipi:block text-orangi-50 bg-black">
            elegiste pipi
          </p>
        </div>
      </form>
    </div>
  )
}

