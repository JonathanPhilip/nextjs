export default function TestWindow() {
    const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <div className="pt-3">
            <div className="flex justify-end pr-6">
                <p className="text-slate-800">Time left: 44:55</p>
            </div>

            <div className="grid grid-cols-3 gap-x-0.5">
                <div className="col-span-2 p-3">
                    <p className="font-medium text-lg pl-2 pb-2">Question No: 4</p>
                    <div className="border-t-4 p-3">
                        <p className="text-sm font-medium text-gray-900">The "function" and " var" are known as:</p>
                        <div className="space-y-3 p-3">
                            <div className="flex items-center gap-x-3">
                                <input id="option1" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="option1" className="block text-sm font-medium leading-6 text-gray-900">Keywords</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="option2" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="option2" className="block text-sm font-medium leading-6 text-gray-900">Data types</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="option3" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="option3" className="block text-sm font-medium leading-6 text-gray-900">Declaration statements</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input id="option3" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="option3" className="block text-sm font-medium leading-6 text-gray-900">Prototypes</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between border-t-4 p-3">
                        <button className="px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-gray-200">Skip</button>
                        <button className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">Save & Next</button>
                    </div>
                </div>

                <div className="p-3">
                    <p className="font-medium text-sm bg-slate-200 p-2 pl-4">Questions Status</p>
                    <div className="flex flex-wrap justify-center border border-slate-200 p-2">
                        {
                            questions.map((questionNumber) =>
                                <button key={"Q" + questionNumber} className={`rounded-full text-xs border border-slate-300 m-2 text-center w-10 h-10 ${questionNumber % 5 == 0 ? "bg-green-300" : "bg-white"}`}>
                                    {questionNumber}
                                </button>
                            )
                        }
                    </div>
                    <div className="p-3">
                        <div className="p-6 pt-0 pb-2 flex content-center">
                            <div className="w-6 h-6 bg-green-300 rounded-full mr-3"></div>
                            <p className="text-sm text-gray-800">Answered</p>
                        </div>
                        <div className="p-6 pt-0 flex content-center">
                            <div className="w-6 h-6 rounded-full mr-3 bg-white border border-slate-300"></div>
                            <p className="text-sm text-gray-800">Not Answered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}