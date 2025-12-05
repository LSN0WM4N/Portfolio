import { 
	Bash,
	C, 
	CPlusPlus, 
	CSS, 
	Express, 
	Go, 
	HTML, 
	Javascript, 
	NextJS, 
	NodeJS, 
	Python, 
	ReactIcon, 
	SQL, 
	Tailwind, 
	Typescript 
} from "@/common/icons";

interface Props {
	language: string;
	size?: number;
	className?: string;
}

export function LanguageIcon({ language, size = 24, className }: Props) {
  const iconProps = { 
    width: size, 
    height: size, 
    className 
  };

  switch (language.toLowerCase()) {
    case 'javascript':
    case 'js':
      return <Javascript {...iconProps} />;
    
    case 'typescript':
    case 'ts':
      return <Typescript {...iconProps} />;
    
    case 'python':
    case 'py':
      return <Python {...iconProps} />;
    
    case 'c++':
    case 'cpp':
    case 'cplusplus':
      return <CPlusPlus {...iconProps} />;
    
    case 'c':
    case 'c language':
      return <C {...iconProps} />;
    
    case 'go':
    case 'golang':
      return <Go {...iconProps} />;
    
    case 'html':
    case 'html5':
      return <HTML {...iconProps} />;
    
    case 'css':
    case 'css3':
      return <CSS {...iconProps} />;
    
    case 'react':
    case 'react.js':
    case 'reactjs':
      return <ReactIcon {...iconProps} />;
    
    case 'next.js':
    case 'nextjs':
      return <NextJS {...iconProps} />;
    
    case 'node.js':
    case 'nodejs':
    case 'node':
      return <NodeJS {...iconProps} />;
    
    case 'express':
    case 'express.js':
    case 'expressjs':
      return <Express {...iconProps} />;
    
    case 'sql':
    case 'database':
      return <SQL {...iconProps} />;
    
    case 'tailwind':
    case 'tailwind css':
    case 'tailwindcss':
      return <Tailwind {...iconProps} />;
    
    case 'bash':
    case 'shell':
    case 'terminal':
      return <Bash {...iconProps} />;
    
    default:
      console.warn(`Icon not found: ${language}`);
      return <div 
        style={{ width: size, height: size }} 
        className={`flex items-center justify-center rounded bg-gray-200 ${className}`}
      >
        <span style={{ fontSize: size * 0.6 }} className="font-bold text-gray-600">
          {language.charAt(0).toUpperCase()}
        </span>
      </div>;
  }
}