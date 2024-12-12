import { createFileRoute } from '@tanstack/react-router'
import { Pay } from '/src/pages/Pay/pay.jsx'
export const Route = createFileRoute('/_layoutmain/pay/')({
  component: () => <Pay />,
})
