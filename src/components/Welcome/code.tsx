import { CodeBlock, dracula, atomOneLight } from 'react-code-blocks';
import { textCode } from './text-code';
import { useTheme } from '@/hooks/useTheme';

const Code = () => {

    const { theme } = useTheme();

  return (
    <div className='hidden w-full md:flex flex-col justify-center space-y-12'>
            <CodeBlock
                text={textCode}
                language='javascript'
                showLineNumbers={true}
                customStyle={{height: '450px',margin: '0', overflowY: 'scroll'}}
                theme={theme === 'dark' ? dracula : atomOneLight}
            />
        </div>
  )
}

export default Code