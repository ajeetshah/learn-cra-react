import { useEffect, useRef, useState } from "react";

const iframeSrc = "https://www.w3schools.com/html/default.asp";

export function IFrame() {
  const iframeRef = useRef(null);
  const [consoleOutput, setConsoleOutput] = useState([]);

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
        <h3>Вывод консоли из iframe:</h3>
        <pre>{consoleOutput.join("\n")}</pre>
      </div>

      <iframe
        title="my-iframe"
        ref={iframeRef}
        src={iframeSrc}
        onLoad={() => console.warn("iframe loaded")}
      />
    </div>
  );
}
