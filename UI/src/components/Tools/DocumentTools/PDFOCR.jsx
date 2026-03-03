export const PDFOCR = ({ }) => {
    return (
        <div id="tool-scan_pdf" className="tool-interface w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                    <svg className="h-6 w-6 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M72 96C49.9 96 32 113.9 32 136L32 192C32 209.7 46.3 224 64 224C81.7 224 96 209.7 96 192L96 160L160 160L160 480L128 480C110.3 480 96 494.3 96 512C96 529.7 110.3 544 128 544L256 544C273.7 544 288 529.7 288 512C288 494.3 273.7 480 256 480L224 480L224 160L288 160L288 192C288 209.7 302.3 224 320 224C337.7 224 352 209.7 352 192L352 136C352 113.9 334.1 96 312 96L72 96zM470.6 425.4C458.1 412.9 437.8 412.9 425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7L489.3 534.7C501.8 547.2 522.1 547.2 534.6 534.7L598.6 470.7C611.1 458.2 611.1 437.9 598.6 425.4C586.1 412.9 565.8 412.9 553.3 425.4L543.9 434.8L543.9 205.3L553.3 214.7C565.8 227.2 586.1 227.2 598.6 214.7C611.1 202.2 611.1 181.9 598.6 169.4L534.6 105.4C528.6 99.4 520.5 96 512 96C503.5 96 495.4 99.4 489.4 105.4L425.4 169.4C412.9 181.9 412.9 202.2 425.4 214.7C437.9 227.2 458.2 227.2 470.7 214.7L480.1 205.3L480.1 434.8L470.7 425.4z" /></svg>PDF Scanning
                </h3>
                <span
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                >PDF</span
                >
            </div>
            <form id="scan_pdf-form" className="space-y-6">

                {/* File Upload */}
                <div>
                    <label
                        className="flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                    >
                        <svg className="h-6 w-6 fill-gray-700 dark:fill-gray-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z" /></svg>Upload PDF Documents
                    </label>
                    <div
                        id="extract_pages-drop-zone"
                        className="file-drop-zone rounded-lg p-6 text-center cursor-pointer border-2 border-dashed"
                    >
                        <div className="drop-placeholder">
                            <span className="flex justify-center">
                                <svg className="h-12 w-12 fill-gray-400 dark:fill-gray-200 mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M176 544C96.5 544 32 479.5 32 400C32 336.6 73 282.8 129.9 263.5C128.6 255.8 128 248 128 240C128 160.5 192.5 96 272 96C327.4 96 375.5 127.3 399.6 173.1C413.8 164.8 430.4 160 448 160C501 160 544 203 544 256C544 271.7 540.2 286.6 533.5 299.7C577.5 320 608 364.4 608 416C608 486.7 550.7 544 480 544L176 544zM337 255C327.6 245.6 312.4 245.6 303.1 255L231.1 327C221.7 336.4 221.7 351.6 231.1 360.9C240.5 370.2 255.7 370.3 265 360.9L296 329.9L296 432C296 445.3 306.7 456 320 456C333.3 456 344 445.3 344 432L344 329.9L375 360.9C384.4 370.3 399.6 370.3 408.9 360.9C418.2 351.5 418.3 336.3 408.9 327L336.9 255z" /></svg>
                            </span>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                                Drop PDF documents here
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                or click to browse (PDF)
                            </p>
                        </div>
                        <div className="file-list mt-4 space-y-2"></div>
                    </div>
                    <input
                        type="file"
                        id="scan_pdf-file-input"
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
                        onclick="toggleAdvanced('scan_pdf-advanced')"
                    >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >Advanced Settings</span
                        >
                        <svg className="h-5 w-5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" /></svg>
                    </div>
                    <div id="scan_pdf-advanced" className="mt-3 hidden space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1"
                                >Scanning Strategy <span className="text-gray-300"></span></label
                                >
                                {/*<select
              type="text"
              name="scan_strategy"
              className="w-full text-gray-800 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-600"
            />
                <option className="" value="default" selected> Default (Normal)</option>
                <option className="" value="images">Per-Page Image</option>
                <option className="" value="long_image">Long Image</option>
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
                            <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M72 96C49.9 96 32 113.9 32 136L32 192C32 209.7 46.3 224 64 224C81.7 224 96 209.7 96 192L96 160L160 160L160 480L128 480C110.3 480 96 494.3 96 512C96 529.7 110.3 544 128 544L256 544C273.7 544 288 529.7 288 512C288 494.3 273.7 480 256 480L224 480L224 160L288 160L288 192C288 209.7 302.3 224 320 224C337.7 224 352 209.7 352 192L352 136C352 113.9 334.1 96 312 96L72 96zM470.6 425.4C458.1 412.9 437.8 412.9 425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7L489.3 534.7C501.8 547.2 522.1 547.2 534.6 534.7L598.6 470.7C611.1 458.2 611.1 437.9 598.6 425.4C586.1 412.9 565.8 412.9 553.3 425.4L543.9 434.8L543.9 205.3L553.3 214.7C565.8 227.2 586.1 227.2 598.6 214.7C611.1 202.2 611.1 181.9 598.6 169.4L534.6 105.4C528.6 99.4 520.5 96 512 96C503.5 96 495.4 99.4 489.4 105.4L425.4 169.4C412.9 181.9 412.9 202.2 425.4 214.7C437.9 227.2 458.2 227.2 470.7 214.7L480.1 205.3L480.1 434.8L470.7 425.4z" /></svg>Extract
                        </span>
                    </button>
                    <button
                        type="button"
                        onclick="clearForm('scan_pdf-form')"
                        className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        &times; Clear
                    </button>
                </div>
            </form>
        </div>
    )
}
