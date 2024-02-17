
import { useNavigate } from 'react-router-dom';
import Goals from './golas';
import { useState } from 'react';

export default function Topics() {
    const [route, setRoute] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    function CustomButton({ children}) {
        const handleClick = () => {
            setRoute("/" + children.toLowerCase().replace(/\s+/g, '-'));
            setShowModal(true);
            <Goals route={route} />
        };

        return (
            <button onClick={handleClick} className="bg-transparent border border-gray-600 hover:bg-gray-600 hover:text-white rounded-full transition-colors duration-200">
                {children}
            </button>
        );
    }

    return (
        <>
        {showModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto" onClick={() => setShowModal(false)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={(e) => e.stopPropagation()}>
                        <Goals route={route} />
                    </div>
                </div>
            </div>
        )}

        <div className="flex flex-col items-center text-black p-8 rounded-full">
            <div className="flex justify-center gap-8">
                <div className="flex flex-col gap-4">
                    <CustomButton>Frontend</CustomButton>
                    <CustomButton>Full Stack</CustomButton>
                    <CustomButton>AI and Data Scientist</CustomButton>
                    <CustomButton>Software Architect</CustomButton>
                    <CustomButton>Flutter</CustomButton>
                    <CustomButton>React Native</CustomButton>
                    <CustomButton>MLOps</CustomButton>
                </div>
                <div className="flex flex-col gap-4">
                    <CustomButton>Backend</CustomButton>
                    <CustomButton>Android</CustomButton>
                    <CustomButton>Blockchain</CustomButton>
                    <CustomButton>ASP.NET Core</CustomButton>
                    <CustomButton>Cyber Security</CustomButton>
                    <CustomButton>Game Developer</CustomButton>
                    <CustomButton>+ Create your own Roadmap</CustomButton>
                </div>
                <div className="flex flex-col gap-4">
                    <CustomButton>DevOps</CustomButton>
                    <CustomButton>PostgreSQL</CustomButton>
                    <CustomButton>QA</CustomButton>
                    <CustomButton>C++</CustomButton>
                    <CustomButton>UX Design</CustomButton>
                    <CustomButton>Technical Writer</CustomButton>
                </div>
            </div>
            <div className="flex justify-center w-full max-w-sm items-center space-x-2 border border-gray-200 rounded-lg overflow-hidden mt-6">
                <input className="pl-2 w-full border-0 rounded-lg focus:ring-0 font-semibold bg-transparent" placeholder="Enter topic.." />
                <button className="h-[2.5rem] w-[2.5rem] rounded-lg p-1.5 bg-transparent" variant="ghost">
                    <svg 
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="#000000" />
                    <path
                        d="M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z"
                        fill="#000000"
                    />
                    </svg>
                </button>
            </div>
        </div>
        
        </>
    )
}