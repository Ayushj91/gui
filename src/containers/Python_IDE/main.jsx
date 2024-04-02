import React, { useRef, useState } from "react";
import CodeMirror from '@uiw/react-codemirror';


import { Output } from "./Output";

const PythonIDE = () => {
    const editorRef = useRef();

    const [language, setLanguage] = useState("python");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };


    const DefaultCodeSnippet = `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`;
    const [value, setValue] = useState(DefaultCodeSnippet);

    return (
        <div
            style={{
                display: "flex",
                borderRadius: "10px",
                margin: "10px",
                overflow: "hidden", // To ensure the borderRadius affects child components
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Subtle shadow for depth
            }}
        >
            {/* <Editor
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
                height="90vh"
                width="calc(50vw - 20px)" // Subtracting margins
                theme="vs-light"
                language="python"
                defaultValue={DefaultCodeSnippet}
                onMount={onMount}
                value={value}
                onChange={(value) => {
                    setValue(value);
                    console.log(value);
                }}
                style={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "auto", // Adjust based on content
                    borderRight: "1px solid #eee", // Separator between editor and output
                    padding: "30px", // Padding inside the editor for content
                }}

            /> */}

            <CodeMirror
                value={value}
                onChange={(value) => {
                    setValue(value);
                }}
                options={{
                    theme: 'material',
                    lineNumbers: true,
                    mode: 'python',
                }}
                height="90vh"
                width="calc(50vw - 40px)"
                style={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "auto", // Adjust based on content
                    borderRight: "1px solid #eee", // Separator between editor and output
                    padding: "20px", // Padding inside the editor for content
                }}
            />

            <Output
                code = {value}
                style={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "auto", // Adjust based on content
                    padding: "10px", // Padding inside the output for content
                }}
            />
        </div>
    );
};

export default PythonIDE;
