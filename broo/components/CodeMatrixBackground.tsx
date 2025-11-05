import React from 'react';

// A collection of "hacker" or "error" style text lines
const codeLines = [
    "The image you are requesting does not exist or is no longer available.",
    "ERROR: resource 'hero_asset.jpg' failed to load.",
    "img_404_not_found: true;",
    "[kernel] Retrying connection... attempt 3/3 failed.",
    "Access denied. You do not have permission to view this resource.",
    "Segmentation fault (core dumped)",
    "null_pointer_exception at memory address 0x00000000",
    "Loading game assets... [ FAILED ]",
    "Compiling shaders... 99% complete.",
    "// TODO: refactor legacy rendering engine",
    "Initializing quantum entanglement protocol... SYN/ACK received.",
    "Booting from /dev/sda1...",
    "User 'guest' logged in from 127.0.0.1",
    "Running fsck on /root (forced).",
];

// Function to create a large block of text by repeating and varying lines
const generateTextBlock = (lines: string[], repeat: number): string => {
    let block = '';
    for (let i = 0; i < repeat; i++) {
        // Get a random line
        const line = lines[Math.floor(Math.random() * lines.length)];
        // Add random indentation and a newline character
        const indentedLine = ' '.repeat(Math.floor(Math.random() * 20)) + line + '\n';
        block += indentedLine;
    }
    return block;
};

// Generate the text block once to avoid re-generating on re-renders
const textBlock = generateTextBlock(codeLines, 150);

const CodeMatrixBackground: React.FC = () => {
    return (
        <div 
            className="absolute inset-0 z-0 overflow-hidden bg-dark-bg"
            aria-hidden="true"
        >
            <div 
                className="absolute inset-[-25%] text-white/20 font-mono text-sm whitespace-pre blur-[1.5px]"
                style={{
                    transform: 'perspective(800px) rotateX(20deg) rotateZ(-20deg) scale(1.4)',
                }}
            >
                <div className="animate-matrix-scroll">
                    {/* Render the text block twice for a seamless loop */}
                    <div dangerouslySetInnerHTML={{ __html: textBlock }} />
                    <div dangerouslySetInnerHTML={{ __html: textBlock }} />
                </div>
            </div>
        </div>
    );
};

export default CodeMatrixBackground;
