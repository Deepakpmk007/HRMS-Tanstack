import { Link, useRouterState } from '@tanstack/react-router'
import { LayoutDashboard, Users } from 'lucide-react'

export default function SideNavBar() {
  const isEmployeeRoute = useRouterState({
    select: (state) => state.location.pathname.startsWith('/employee'),
  })
  return (
    <nav className="w-54 flex flex-col gap-5 h-[calc(100vh-4rem)] border-r border-gray-200 font-mono">
      {/* <h1 className="text-2xl font-medium">Menu</h1> */}
      <div className="p-2 flex flex-col gap-3">
        <Link
          to="/dashboard"
          className="py-2 px-4 rounded hover:bg-blue-200 flex gap-2 items-center"
          activeProps={{ className: 'bg-blue-200' }}
        >
          <LayoutDashboard size={16} />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/employee/list"
          className={`py-2 px-4 rounded hover:bg-blue-200 flex gap-2 items-center ${isEmployeeRoute ? 'bg-blue-200' : ''}`}
        >
          <Users size={16} />
          <span>Employees</span>
        </Link>
      </div>
    </nav>
  )
}
