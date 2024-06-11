
export default function Textarea({ name, label,rows,cols}) {
    return  <label htmlFor="input">
      {label}
        <textarea className="w-full mx-auto p-2 block rounded-md border-2 border-indigo-700 outline-none mt-1 mb-5"  rows={rows} cols={cols} name={name}  placeholder={label}  id=""/>
       </label>
  }
  