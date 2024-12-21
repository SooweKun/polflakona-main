import { createFileRoute } from '@tanstack/react-router'
import { CardInfo } from '/src/pages/CardInfo/cardInfo.jsx'
export const Route = createFileRoute('/_layoutmain/cardinfo/')({
  component: () => <CardInfo />,
})
