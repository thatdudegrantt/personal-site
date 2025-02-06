"use client";

import { useState, useEffect } from 'react';

export default function Resume() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="p-8 bg-base-200">
            <h1 className="text-3xl font-bold mb-6"></h1>
            {isClient && (
                <div className="w-full h-screen">
                    <iframe
                        src="/resume.pdf"
                        width="100%"
                        height="100%"
                        style={{border: 'none'}}
                    >
                        Your browser does not support PDFs. <a href="/resume.pdf">Download my resume</a>.
                    </iframe>
                </div>
            )}
            <p className="mt-4 text-sm text-gray-600">
                Can't view the PDF? <a href="/resume.pdf" download className="text-blue-500">Download it here</a>.
            </p>
        </div>
    );
}
