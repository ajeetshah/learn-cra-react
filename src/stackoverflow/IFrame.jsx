import { useEffect, useRef, useState } from "react";

const iframeSrc = "http://localhost:3000/foo";

export function IFrame() {
  const iframeRef = useRef(null);

  console.log(iframeRef)
  console.log(window)
  const [consoleOutput, setConsoleOutput] = useState(["initial"]);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeWindow = iframeRef.current.contentWindow;
      if (iframeWindow) {
        const originalConsole = iframeWindow.console;

        const newConsoleOutput = [];
        const wrapConsoleMethod = (method, prefix) => {
          return (...args) => {
            newConsoleOutput.push(`[${prefix}] ` + args.map(String).join(" "));
            setConsoleOutput([...newConsoleOutput]);
            originalConsole[method](...args);
          };
        };
        iframeWindow.console = {
          ...originalConsole,
          log: wrapConsoleMethod("log", "Log"),
          error: wrapConsoleMethod("error", "Error"),
          warn: wrapConsoleMethod("warn", "Warn"),
        };
      }
    }
  }, []);

  return (
    <div>
      <div>
        <h3>Console output from iframe:</h3>
        <pre>{consoleOutput.join("\n")}</pre>
      </div>

      <iframe
        title="my-iframe"
        ref={iframeRef}
        src={iframeSrc}
        onLoad={() => {
          console.log("Loaded");
          iframeRef.current.contentWindow.console.log("this is log message");
          iframeRef.current.contentWindow.console.warn("this is warn message");
          iframeRef.current.contentWindow.console.error(
            "this is an error message"
          );
        }}
      />
    </div>
  );
}
