
export default function Button({type,children}) {
  return <>
  <button type={type} className=' w-full py-3 px-20  rounded-md bg-indigo-600 hover:opacity-60 text-white pt-4'>{children}</button>
  </>
}
