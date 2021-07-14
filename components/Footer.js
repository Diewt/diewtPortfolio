// This file contains the format for the footer of the website that will be attached to the container
import Link from 'next/link';

// This makes it so when an external link is clicked on, it'll open the link in a seperate tab
const ExternalLink = ({ href, children }) => (
    <a
        className="text-gray-500 hover:text-gray-600 transition"
        target='_blank'
        rel='noopener noreferrer'
        href={href}
    >
      {children}  
    </a>
);

export default function Footer(){
    return(
        <footer className='flex flex-col justify-center items-start max-w-2x1 mx-auto w-full mb-8'>
            <div className='w-full max-w-2x1 grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
                <div className='flex flex-col space-y-4'>
                    <ExternalLink href="https://github.com/Diewt"> 
                        Github
                    </ExternalLink>
                </div>
                <div className='flex flex-col space-y-4'>
                    <ExternalLink href='https://www.linkedin.com/in/chris-diewtragulchai-350b9619b/'>
                        LinkedIn
                    </ExternalLink>
                </div>
            </div>
            <a
                className="flex items-center justify-center"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
            </a>
        </footer>
    );
}