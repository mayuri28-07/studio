'use client'

import { Check, Clipboard } from "lucide-react"
import { useState, type ReactNode } from "react"

export function CodeBlock({ children }: { children: ReactNode }) {
    const [hasCopied, setHasCopied] = useState(false)

    const onCopy = () => {
        if (typeof children === 'string') {
            navigator.clipboard.writeText(children)
            setHasCopied(true)
            setTimeout(() => setHasCopied(false), 2000)
        }
    }

    return (
        <div className="relative my-6">
            <pre className="bg-gray-800 text-white p-4 pr-12 rounded-lg overflow-x-auto font-code text-sm">
                <code>{children}</code>
            </pre>
            <button
                onClick={onCopy}
                className="absolute top-3 right-3 p-2 bg-gray-700 rounded-md text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                aria-label="Copy code"
            >
                {hasCopied ? <Check className="w-4 h-4 text-accent" /> : <Clipboard className="w-4 h-4" />}
            </button>
        </div>
    )
}
