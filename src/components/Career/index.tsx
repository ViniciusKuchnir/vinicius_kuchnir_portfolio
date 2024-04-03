import SectionTitle from '../SectionTitle'
import { PiBagSimpleFill } from "react-icons/pi";
import Area from './area';
import { ProfessionalExperiences } from './professional-experience';
import { AcademicExperiences } from './academic-experiences';

const Career = () => {
  return (
    <section className="w-full p-4 space-y-8" id="career">
        <SectionTitle icon={PiBagSimpleFill} label='Career' title='Journey so far' centered />

        <div className='w-full space-y-4 md:flex md:justify-evenly md:items-start md:space-y-0'>
            <Area name='Professional' data={ProfessionalExperiences} />
            <Area name='Academic' data={AcademicExperiences} />   
        </div>
    </section>
  )
}

export default Career