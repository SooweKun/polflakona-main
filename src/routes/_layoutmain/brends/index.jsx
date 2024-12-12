import { createFileRoute } from '@tanstack/react-router'
import { Brends } from '../../../pages/brends/brends'
export const Route = createFileRoute('/_layoutmain/brends/')({
  component: () => <Brends />,
})
