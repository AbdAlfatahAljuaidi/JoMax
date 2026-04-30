import HeroSection from '@/components/sections/Fawtara/Hero'
import PhasesSection from '@/components/sections/Fawtara/Phases'
import SolutionsSection from '@/components/sections/Fawtara/Solutions'
import TechAndCtaSection from '@/components/sections/Fawtara/Tech'
import Verification from '@/components/sections/Fawtara/Verification'
import WorkflowSection from '@/components/sections/Fawtara/Workflow'
import Footer from '@/components/sections/Footer'
import NavBar from '@/components/sections/NavBar'
import React from 'react'

const page = () => {
  return (
    <div>
        <NavBar />
<HeroSection />
<Verification />
<PhasesSection />
<SolutionsSection />
<WorkflowSection />
<TechAndCtaSection />
        <Footer />
    </div>
  )
}

export default page