
import { useNavigate } from 'react-router-dom';

export default function Topics() {

    const navigate = useNavigate();

    function CustomButton({ children}) {
        const handleClick = () => {
            let route = "/" + children.toLowerCase().replace(/\s+/g, '-');
            navigate(route);
        };

        return (
            <button onClick={handleClick} className="bg-transparent border border-gray-600 hover:bg-gray-600 hover:text-white rounded-full transition-colors duration-200">
                {children}
            </button>
        );
    }

    return (
        <div className="text-black p-8 rounded-full">
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
        </div>
    )
}