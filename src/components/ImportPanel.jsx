import { useCallback, useRef, useState } from "react";

const ACCEPTED = ".csv,.json,text/csv,application/json";

export default function ImportPanel({
  onImport = () => {},
  isImporting = false,
  error = null,
  count = 0,
}) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [localError, setLocalError] = useState("");

  const handleFiles = useCallback(
    async (fileList) => {
      if (!fileList || fileList.length === 0) return;
      setLocalError("");

      const files = Array.from(fileList).filter((file) => {
        const name = file.name.toLowerCase();
        return (
          name.endsWith(".csv") ||
          name.endsWith(".json") ||
          file.type === "text/csv" ||
          file.type === "application/json"
        );
      });

      if (files.length === 0) {
        setLocalError("Drop .csv or .json bookmark files.");
        return;
      }

      try {
        await onImport(files);
      } catch (err) {
        setLocalError(err?.message || "Import failed.");
      }
    },
    [onImport]
  );

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    handleFiles(event.dataTransfer?.files);
  };

  const handleInputChange = (event) => {
    handleFiles(event.target.files);
    event.target.value = "";
  };

  const displayError =
    localError || (typeof error === "string" ? error : error?.message) || "";

  return (
    <section className="rounded-2xl border border-stone-800 bg-stone-950/60 p-5 shadow-xl">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-stone-100">
            Import bookmark files
          </h2>
          <p className="mt-1 text-sm text-stone-400">
            Add CSV or JSON exports from browsers,