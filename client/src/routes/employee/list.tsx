import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/list"!</div>
}
