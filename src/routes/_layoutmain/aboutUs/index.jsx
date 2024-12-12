import { createFileRoute } from '@tanstack/react-router'
import { AboutUs } from '/src/pages/aboutUs/aboutUs.jsx'
export const Route = createFileRoute('/_layoutmain/aboutUs/')({
  component: () => <AboutUs/> 
})