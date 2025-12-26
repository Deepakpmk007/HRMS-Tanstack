import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <header
      className="h-16 bg-blue-300
    </header> flex justify-between px-3 items-center"
    >
      <div className="flex gap-5 items-center">
        <h2 className="font-bold tracking-wider text-2xl">HRMS</h2>
        <h3 className="text-lg">Techon IT Solution</h3>
      </div>
      <div className="flex gap-7 items-center px-10">
        <Bell size={20} />
        <div className="flex gap-2  items-center">
          <div className="bg-red-300 rounded-full w-10 h-10 flex items-center justify-center font-bold">
            AD
          </div>
          <div>Admin</div>
        </div>
      </div>
    </header>
  )
}
