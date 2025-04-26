import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Plus, ChevronDown, Check } from "lucide-react";
import styles from "./MultiSelect.module.css";

const CustomMultiSelect = ({
  options,
  label,
  required,
  id,
  name,
  placeholder = "Select...",
  selectedOptions = [],
  isAutoFocus = false,
  errMsg,
  listRef,
  cName,
  isDisabled = false,
  isCreatable = true,
  isMulti = true,
  changeHandler,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOptions);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setSelected(selectedOptions);
  }, [selectedOptions]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = useCallback(
    (option) => {
      if (!isMulti) {
        setSelected([option]);
        setIsOpen(false);
        changeHandler(name, [option], id);
        return;
      }

      if (selected.some((item) => item.id === option.id)) {
        const newSelected = selected.filter((item) => item.id !== option.id);
        setSelected(newSelected);
        changeHandler(name, newSelected, id);
      } else {
        const newSelected = [...selected, option];
        setSelected(newSelected);
        changeHandler(name, newSelected, id);
      }
      setSearchTerm("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [selected, isMulti, changeHandler, name, id]
  );

  const removeOption = (option) => {
    const newSelected = selected.filter((item) => item.id !== option.id);
    setSelected(newSelected);
    changeHandler(name, newSelected, id);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearSelection = () => {
    setSelected([]);
    changeHandler(name, [], id);
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCreateOption = (inputValue) => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && isCreatable) {
      const newOption = {
        label: trimmedValue,
        id: trimmedValue,
        value: trimmedValue,
      };
      handleOptionClick(newOption);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        if (prevIndex === null || prevIndex >= filteredOptions.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        if (prevIndex === null || prevIndex <= 0) {
          return filteredOptions.length - 1;
        }
        return prevIndex - 1;
      });
    } else if (e.key === "Enter" && highlightedIndex !== null) {
      e.preventDefault();
      handleOptionClick(filteredOptions[highlightedIndex]);
      setHighlightedIndex(null);
    } else if (e.key === "Enter" && searchTerm) {
      e.preventDefault();
      handleCreateOption(searchTerm);
      setHighlightedIndex(null);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setHighlightedIndex(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setHighlightedIndex(null);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      className={`custom-multi-select-container ${cName}`}
      ref={containerRef}
    >
      {label && (
        <label htmlFor={id}>
          {label}
          <span className={required ? "required" : "notRequired"}>*</span>
        </label>
      )}
      <div
        className={`select-container ${
          isDisabled ? "opacity-50 cursor-not-allowed" : ""
        } ${
          errMsg
            ? "border-red-500 focus-within:ring-2 focus-within:ring-red-500"
            : ""
        }`}
        onClick={() => !isDisabled && setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="flex flex-wrap items-center gap-2">
          {isMulti &&
            selected.map((option) => (
              <div key={option.id} className="selected-option">
                {option.label}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOption(option);
                  }}
                  className="remove-option"
                  tabIndex={-1}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          <input
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={selected.length === 0 ? placeholder : ""}
            className="input-box"
            onFocus={() => setIsOpen(true)}
            disabled={isDisabled}
            tabIndex={0}
          />
          {selected.length > 0 && (
            <button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                clearSelection();
              }}
              className="absolute right-8 top-1/2 -translate-y-1/2"
              tabIndex={-1}
            >
              <X className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </button>
          )}
          <ChevronDown className={`select-icon ${isOpen ? "open" : ""}`} />
        </div>
        {isOpen && (
          <div className="options-dropdown open">
            {filteredOptions.length === 0 &&
            searchTerm.trim() &&
            isCreatable ? (
              <div
                className="option create-option"
                onClick={() => handleCreateOption(searchTerm)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateOption(searchTerm);
                  }
                }}
              >
                <Plus className="h-4 w-4 text-green-500" />
                Create "{searchTerm}"
              </div>
            ) : filteredOptions.length === 0 && !searchTerm.trim() ? (
              <div className="option">No options available</div>
            ) : (
              filteredOptions.map((option, index) => (
                <div
                  key={option.id}
                  className={`option ${
                    selected.some((item) => item.id === option.id)
                      ? "selected"
                      : ""
                  } ${highlightedIndex === index ? "highlighted" : ""}`}
                  onClick={() => handleOptionClick(option)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleOptionClick(option);
                    }
                  }}
                >
                  {selected.some((item) => item.id === option.id) && (
                    <Check className="h-4 w-4 text-blue-600" />
                  )}
                  {option.label}
                </div>
              ))
            )}
          </div>
        )}
      </div>
      {errMsg && <span className="err">{errMsg}</span>}
    </div>
  );
};

export default CustomMultiSelect;
