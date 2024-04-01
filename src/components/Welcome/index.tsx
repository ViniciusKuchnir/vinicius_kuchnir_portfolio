import Code from './code';
import PersonalApresentation from './personal-apresentation';

const Welcome = () => {


  return (
    <section className='w-full flex flex-col p-4 md:flex-row md:gap-2' id='_about_me'>
        <PersonalApresentation />
        <Code />
    </section>
  )
}

export default Welcome