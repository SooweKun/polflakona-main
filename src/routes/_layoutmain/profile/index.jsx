import { createFileRoute } from '@tanstack/react-router'
import { Profile } from '../../../pages/profile/profile'
export const Route = createFileRoute('/_layoutmain/profile/')({
  component: () => <Profile />,
})
