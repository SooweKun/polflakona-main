import { createFileRoute } from '@tanstack/react-router'
import { Auth } from '/src/pages/auth/auth'
export const Route = createFileRoute('/_layoutmain/auth/')({
  component: () => <Auth />,
})
