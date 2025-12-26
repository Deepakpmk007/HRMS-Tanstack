import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/$id"!</div>
}
