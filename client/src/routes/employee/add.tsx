import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/add"!</div>
}
