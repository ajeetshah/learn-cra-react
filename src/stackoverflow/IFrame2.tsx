useEffect(() => {
  if (iframeRef.current) {
    const iframeWindow = iframeRef.current.contentWindow as any;
    if (iframeWindow) {
      const originalConsole = iframeWindow.console;
      const newConsoleOutput: string[] = [];
      const wrapConsoleMethod = (method: keyof Console, prefix: string) => {
        return (...args: any[]) => {
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
