import { createFileRoute } from '@tanstack/react-router'
import { Admin } from '/src/pages/admin/admin.jsx'
export const Route = createFileRoute('/_layoutmain/admin/')({
  component: () => <Admin />,
})
