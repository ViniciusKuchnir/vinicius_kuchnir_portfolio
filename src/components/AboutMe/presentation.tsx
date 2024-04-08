import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle";
import { RxPerson } from "react-icons/rx";

const Presentation = () => {

  const { t } = useTranslation();

  return (
    <div className="space-y-8 w-full">
        <SectionTitle icon={RxPerson} label="About me" title="Vinícius Kuchnir Rodrigues Pinto" />
        <div className="space-y-4">
            <p className="text-[#607B96] text-justify flex flex-col">
                <span>{'{'}/*</span>
                {t('Software Engineering student at the Pontifical Catholic University of Paraná (PUCPR) with a special passion for web development using technologies such as ReactJS and NodeJS. My academic career is marked by a tireless commitment to excellence, reflected in my involvement in various areas of my university.')}
                <span>*/{'}'}</span>
            </p>
            <p className="text-[#607B96] text-justify">
                🚀{t('Committed to')} <span className="text-[#4D5BCE]">{t('excellence')}</span>: {t('creating')}  <span className="text-[#E99287]">{t('quality')}</span>, {t('exceeding')} <span className="text-[#43D9AD]">{t('expectations')}</span>.
            </p>
        </div>
      </div>
  )
}

export default Presentation