import { createFileRoute } from '@tanstack/react-router'
import { Confid } from '../../../pages/confid/confid'
export const Route = createFileRoute('/_layoutmain/confid/')({
  component: () => <Confid />,
})
