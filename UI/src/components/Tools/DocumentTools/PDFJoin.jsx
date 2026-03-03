export const PDFJoin = ({ }) => {
    return (
        <div id="tool-pdf_join" className="tool-interface w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                    <svg className="h-6 w-6 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z" /></svg>PDF Joining
                </h3>
                <span
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                >PDF</span
                >
            </div>
            <form id="pdf_join-form" className="space-y-6">

                {/* File Upload */}
                <div>
                    <label
                        className="flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                    >
                        <svg className="h-6 w-6 fill-gray-700 dark:fill-gray-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z" /></svg>Upload pdf Documents
                    </label>
                    <div
                        id="pdf_join-drop-zone"
                        className="file-drop-zone rounded-lg p-6 text-center cursor-pointer border-2 border-dashed"
                    >
                        <div className="drop-placeholder">
                            <span className="flex justify-center">
                                <svg className="h-12 w-12 fill-gray-400 dark:fill-gray-200 mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M176 544C96.5 544 32 479.5 32 400C32 336.6 73 282.8 129.9 263.5C128.6 255.8 128 248 128 240C128 160.5 192.5 96 272 96C327.4 96 375.5 127.3 399.6 173.1C413.8 164.8 430.4 160 448 160C501 160 544 203 544 256C544 271.7 540.2 286.6 533.5 299.7C577.5 320 608 364.4 608 416C608 486.7 550.7 544 480 544L176 544zM337 255C327.6 245.6 312.4 245.6 303.1 255L231.1 327C221.7 336.4 221.7 351.6 231.1 360.9C240.5 370.2 255.7 370.3 265 360.9L296 329.9L296 432C296 445.3 306.7 456 320 456C333.3 456 344 445.3 344 432L344 329.9L375 360.9C384.4 370.3 399.6 370.3 408.9 360.9C418.2 351.5 418.3 336.3 408.9 327L336.9 255z" /></svg>
                            </span>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                                Drop your <span className="bg-red-300">pdf</span> documents here
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                or click to browse (PDF +)
                            </p>
                        </div>
                        <div className="file-list mt-4 space-y-2"></div>
                    </div>
                    <input
                        type="file"
                        id="pdf_join-file-input"
                        name="files"
                        multiple
                        accept=".pdf"
                        className="hidden"
                    />
                </div>

                {/* Advanced Settings */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onclick="toggleAdvanced('pdf_join-advanced')"
                    >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >Advanced Settings</span
                        >
                        <svg className="h-5 w-5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" /></svg>
                    </div>
                    <div id="pdf_join-advanced" className="mt-3 hidden space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1"
                                >Order <span className="text-gray-300">(Joining order)</span></label
                                >
                                {/*<select type="text" name="order" className="w-full text-gray-800 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-600"/>
            <option className="" value="AAB" selected>Sequential (AAB)</option>
            <option className="" value="ABA">Alternating (ABA)</option>
            </select>*/}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        <span className="flex justify-center items-center gap-2">
                            <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M176 120C189.3 120 200 130.7 200 144C200 157.3 189.3 168 176 168C162.7 168 152 157.3 152 144C152 130.7 162.7 120 176 120zM208.4 217.2C236.4 204.8 256 176.7 256 144C256 99.8 220.2 64 176 64C131.8 64 96 99.8 96 144C96 176.8 115.7 205 144 217.3L144 422.6C115.7 435 96 463.2 96 496C96 540.2 131.8 576 176 576C220.2 576 256 540.2 256 496C256 463.2 236.3 435 208 422.7L208 336.1C234.7 356.2 268 368.1 304 368.1L390.7 368.1C403 396.4 431.2 416.1 464 416.1C508.2 416.1 544 380.3 544 336.1C544 291.9 508.2 256.1 464 256.1C431.2 256.1 403 275.8 390.7 304.1L304 304C254.1 304 213 265.9 208.4 217.2zM176 472C189.3 472 200 482.7 200 496C200 509.3 189.3 520 176 520C162.7 520 152 509.3 152 496C152 482.7 162.7 472 176 472zM440 336C440 322.7 450.7 312 464 312C477.3 312 488 322.7 488 336C488 349.3 477.3 360 464 360C450.7 360 440 349.3 440 336z" /></svg>Join PDF
                        </span>
                    </button>
                    <button
                        type="button"
                        onclick="clearForm('pdf_join-form')"
                        className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        &times; Clear
                    </button>
                </div>
            </form>
        </div>
    )
}
