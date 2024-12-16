import { createFileRoute } from '@tanstack/react-router'
import { Profile } from '/src/pages/profile/profile.jsx'
export const Route = createFileRoute('/_layoutmain/profile/')({
  component: () => <Profile />,
})
