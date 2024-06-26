import { useTranslation } from "react-i18next";
import { IoMdArrowUp } from "react-icons/io";

const GoToBack = () => {

    const backToTop = () => {
        window.scrollTo(0, 0);
    }

    const { t } = useTranslation();

  return (
    <section className='w-full flex justify-center p-4 mt-4'>
        <button 
            className='flex items-center gap-2 border border-[#4D5BCE] text-[#4D5BCE] p-2 rounded-md outline-none'
            onClick={backToTop}
        >
            <IoMdArrowUp size={24} /> {t('Back to top')}
        </button>
    </section>
  )
}

export default GoToBack