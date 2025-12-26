import { Link } from '@tanstack/react-router'

export default function SideNavBar() {
  return (
    <nav className="w-54 flex flex-col gap-5 h-[calc(100vh-4rem)] p-4 border-r border-gray-200 font-mono">
      <h1 className="text-2xl font-medium">Menu</h1>
      <ul className="flex flex-col flex-1">
        <li>
          <Link
            to="/"
            activeProps={{ className: 'bg-gray-200' }}
            className="h-12 flex-1 w-full rounded text-lg"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  )
}
