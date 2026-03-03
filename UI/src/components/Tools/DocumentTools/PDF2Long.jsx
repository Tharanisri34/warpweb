export const PDF2LongImage = ({ }) => {
    return (
        <div id="tool-doc_long_image" className="tool-interface w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                    <svg className="h-6 w-6 fill-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z" /></svg>PDF to Long Image
                </h3>
                <span
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                >PDF</span
                >
            </div>
            <form id="doc_long_image-form" className="space-y-6">

                {/* File Upload */}
                <div>
                    <label
                        className="flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                    >
                        <svg className="h-6 w-6 fill-gray-700 dark:fill-gray-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z" /></svg>Upload PDF Document
                    </label>
                    <div
                        id="doc_long_image-drop-zone"
                        className="file-drop-zone rounded-lg p-6 text-center cursor-pointer border-2 border-dashed"
                    >
                        <div className="drop-placeholder">
                            <span className="flex justify-center">
                                <svg className="h-12 w-12 fill-gray-400 dark:fill-gray-200 mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M176 544C96.5 544 32 479.5 32 400C32 336.6 73 282.8 129.9 263.5C128.6 255.8 128 248 128 240C128 160.5 192.5 96 272 96C327.4 96 375.5 127.3 399.6 173.1C413.8 164.8 430.4 160 448 160C501 160 544 203 544 256C544 271.7 540.2 286.6 533.5 299.7C577.5 320 608 364.4 608 416C608 486.7 550.7 544 480 544L176 544zM337 255C327.6 245.6 312.4 245.6 303.1 255L231.1 327C221.7 336.4 221.7 351.6 231.1 360.9C240.5 370.2 255.7 370.3 265 360.9L296 329.9L296 432C296 445.3 306.7 456 320 456C333.3 456 344 445.3 344 432L344 329.9L375 360.9C384.4 370.3 399.6 370.3 408.9 360.9C418.2 351.5 418.3 336.3 408.9 327L336.9 255z" /></svg>
                            </span>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                                Drop PDF document here
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                or click to browse (PDF)
                            </p>
                        </div>
                        <div className="file-list mt-4 space-y-2"></div>
                    </div>
                    <input
                        type="file"
                        id="doc_long_image-file-input"
                        name="files"
                        multiple
                        accept=".pdf"
                        className="hidden"
                    />
                </div>

                {/* Advanced Settings*/}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onclick="toggleAdvanced('doc_long_image-advanced')"
                    >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >Advanced Settings</span
                        >
                        <svg className="h-5 w-5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" /></svg>
                    </div>
                    {/*
            <div id="doc_long_image-advanced" className="mt-3 hidden space-y-3">
            <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1"
            >Scanning Strategy <span className="text-gray-300"></span></label
            >
            <select
            type="text"
            name="scan_strategy"
            className="w-full text-gray-800 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-600"
            />
            <option className="" value="default" selected> Default (Normal)</option>
            <option className="" value="images">Per-Page Image</option>
            <option className="" value="long_image">Long Image</option>
            </select>
            </div>
            </div>
            </div>*/}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        <span className="flex justify-center items-center gap-2">
                            <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 214.6L470.6 310.6C461.4 319.8 447.7 322.5 435.7 317.5C423.7 312.5 416 300.9 416 288L416 224L96 224C78.3 224 64 209.7 64 192C64 174.3 78.3 160 96 160L416 160L416 96C416 83.1 423.8 71.4 435.8 66.4C447.8 61.4 461.5 64.2 470.7 73.3L566.7 169.3C579.2 181.8 579.2 202.1 566.7 214.6zM169.3 566.6L73.3 470.6C60.8 458.1 60.8 437.8 73.3 425.3L169.3 329.3C178.5 320.1 192.2 317.4 204.2 322.4C216.2 327.4 224 339.1 224 352L224 416L544 416C561.7 416 576 430.3 576 448C576 465.7 561.7 480 544 480L224 480L224 544C224 556.9 216.2 568.6 204.2 573.6C192.2 578.6 178.5 575.8 169.3 566.7z" /></svg>Convert
                        </span>
                    </button>
                    <button
                        type="button"
                        onclick="clearForm('doc_long_image-form')"
                        className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        &times; Clear
                    </button>
                </div>
            </form>
        </div>
    )
}
