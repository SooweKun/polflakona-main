import { createFileRoute } from '@tanstack/react-router'
import { Oformlenie } from '../../../pages/oformlenie/oformlenie'
export const Route = createFileRoute('/_layoutmain/oformlenie/')({
  component: () => <Oformlenie />,
})
