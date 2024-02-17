import { useNavigate } from 'react-router-dom';

export default function Goals({ route }){
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        navigate(route);
    }
        return (
                <div className="w-full p-6 rounded-lg flex items-center justify-center">
                    <div className="w-full max-w-md rounded-lg border flex flex-col p-6 space-y-4 shadow-lg">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-1">
                                <label className="block text-sm font-medium leading-5 transition-all text-black" htmlFor="currently-learning">
                                    Currently Learning
                                </label>
                                <input className="pl-2 mt-1 text-black bg-transparent h-10 border border-black" id="currently-learning" placeholder="E.g. JavaScript, UX Design" />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-sm font-medium leading-5 transition-all text-black" htmlFor="future-goals">
                                    Future Goals
                                </label>
                                <input className="pl-2 mt-1 text-black bg-transparent h-10 border border-black" id="future-goals" placeholder="E.g. Master React, Build a portfolio" />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-sm font-medium leading-5 transition-all text-black" htmlFor="expectations">
                                    Expectations
                                </label>
                                <input className="pl-2 mt-1 text-black bg-transparent h-10 border border-black" id="expectations" placeholder="What do you expect from this course?" />
                            </div>
                            <button className="w-full text-black" type="submit">
                                Proceedee
                            </button>
                        </form>
                    </div>
                </div>
            )
}