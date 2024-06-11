
export default function Input({type, name, label}) {
  return <>
   <label className=""  htmlFor="">
   {label}
                <input className="w-full mx-auto p-2 block rounded-md border-2 border-indigo-700 outline-none mb-6 placeholder-slate-400 text-center" type={type}  name={name} placeholder={label} />
</label>
  
</>
}