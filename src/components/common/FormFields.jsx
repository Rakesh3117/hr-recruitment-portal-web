import { useState, useRef, useEffect, useMemo, Children, isValidElement } from 'react';
import { ChevronDown, AlertCircle, Check, Search } from 'lucide-react';

/**
 * FormField: Shared wrapper for labels, required markers, optional badges, and validation messages.
 */
export const FormField = ({
  id,
  label,
  required = false,
  badge,
  hint,
  error,
  className = '',
  children,
}) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor={id}
            className="block text-xs font-semibold tracking-wide text-navy select-none"
          >
            {label}
            {required && <span className="text-danger ml-1 font-bold">*</span>}
          </label>
          {badge && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-grey border border-slate-200/60">
              {badge}
            </span>
          )}
        </div>
      )}

      {children}

      {error ? (
        <p className="flex items-center gap-1.5 text-xs text-danger font-medium mt-1 animate-fadeIn">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      ) : hint ? (
        <p className="text-[11px] text-grey leading-relaxed mt-1">
          {hint}
        </p>
      ) : null}
    </div>
  );
};

/**
 * TextInput: Sleek single-line text input with icon support and focus glow.
 */
export const TextInput = ({
  id,
  type = 'text',
  icon: Icon,
  variant = 'teal', // 'teal' | 'primary'
  error,
  className = '',
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    teal: 'focus-within:border-teal focus-within:ring-4 focus-within:ring-teal/10 group-focus-within:text-teal',
    primary: 'focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 group-focus-within:text-primary',
  };

  const activeVariant = variantStyles[variant] || variantStyles.teal;

  return (
    <div
      className={`group relative flex items-center rounded-xl border transition-all duration-200 ${
        error
          ? 'border-danger/80 bg-danger/5 ring-2 ring-danger/10'
          : 'border-slate-200/90 bg-white/95 hover:border-slate-300 hover:bg-white shadow-xs'
      } ${disabled ? 'opacity-60 cursor-not-allowed bg-slate-100' : ''} ${activeVariant} ${className}`}
    >
      {Icon && (
        <div className="absolute left-3.5 flex items-center justify-center text-slate-400 group-focus-within:text-inherit pointer-events-none transition-colors">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        className={`w-full bg-transparent py-2.5 text-sm text-navy placeholder:text-slate-400/80 focus:outline-none disabled:cursor-not-allowed font-medium ${
          Icon ? 'pl-10 pr-3.5' : 'px-3.5'
        }`}
        {...props}
      />
    </div>
  );
};

/**
 * SelectInput / Dropdown: Custom attractive floating dropdown with smooth animations,
 * search filter, custom checkmark icons, and keyboard accessibility.
 */
export const SelectInput = ({
  id,
  name,
  value,
  onChange,
  icon: Icon,
  variant = 'teal', // 'teal' | 'primary'
  error,
  options = [],
  children,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  required = false,
  searchable,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Parse options from either `options` prop or `children` (<option>)
  const parsedOptions = useMemo(() => {
    if (options && options.length > 0) {
      return options.map((opt) => {
        if (typeof opt === 'object' && opt !== null) {
          return { value: opt.value, label: opt.label ?? opt.value };
        }
        return { value: opt, label: String(opt) };
      });
    }

    if (children) {
      return Children.toArray(children)
        .map((child) => {
          if (isValidElement(child)) {
            const val = child.props.value !== undefined ? child.props.value : child.props.children;
            const lbl = child.props.children ?? String(val);
            return { value: val, label: String(lbl) };
          }
          return null;
        })
        .filter(Boolean);
    }

    return [];
  }, [options, children]);

  // Determine active selected option label
  const selectedOption = useMemo(() => {
    if (value === undefined || value === null) return null;
    return parsedOptions.find((opt) => String(opt.value) === String(value)) || null;
  }, [parsedOptions, value]);

  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  // Filter options by search term if search is active
  const isSearchActive = searchable ?? parsedOptions.length > 8;

  const filteredOptions = useMemo(() => {
    if (!searchTerm.trim()) return parsedOptions;
    const term = searchTerm.toLowerCase();
    return parsedOptions.filter((opt) => opt.label.toLowerCase().includes(term));
  }, [parsedOptions, searchTerm]);

  // Handle option selection
  const handleSelect = (optValue) => {
    if (disabled) return;
    setIsOpen(false);
    setSearchTerm('');
    if (onChange) {
      onChange({
        target: {
          id: id || name,
          name: name || id,
          value: optValue,
        },
      });
    }
  };

  // Close on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && isSearchActive && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, isSearchActive]);

  const variantStyles = {
    teal: {
      activeRing: 'border-teal ring-4 ring-teal/10',
      activeText: 'text-teal',
      selectedBg: 'bg-teal-subtle text-teal font-bold',
      checkColor: 'text-teal',
    },
    primary: {
      activeRing: 'border-primary ring-4 ring-primary/10',
      activeText: 'text-primary',
      selectedBg: 'bg-primary/10 text-primary font-bold',
      checkColor: 'text-primary',
    },
  };

  const currentTheme = variantStyles[variant] || variantStyles.teal;

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Hidden native select for standard form compatibility */}
      <select
        id={id}
        name={name}
        value={value ?? ''}
        onChange={() => {}}
        disabled={disabled}
        required={required}
        tabIndex={-1}
        className="sr-only pointer-events-none"
        aria-hidden="true"
      >
        {parsedOptions.map((opt) => (
          <option key={String(opt.value)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom Dropdown Trigger Button */}
      <button
        type="button"
        id={id ? `${id}-btn` : undefined}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={`group relative flex w-full items-center justify-between rounded-xl border py-2.5 text-left text-sm font-medium transition-all duration-200 cursor-pointer select-none ${
          error
            ? 'border-danger/80 bg-danger/5 ring-2 ring-danger/10'
            : isOpen
            ? `${currentTheme.activeRing} bg-white shadow-sm`
            : 'border-slate-200/90 bg-white/95 hover:border-slate-300 hover:bg-white shadow-xs'
        } ${disabled ? 'opacity-60 cursor-not-allowed bg-slate-100' : ''} ${
          Icon ? 'pl-10 pr-3.5' : 'px-3.5'
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {Icon && (
          <div
            className={`absolute left-3.5 flex items-center justify-center pointer-events-none transition-colors ${
              isOpen ? currentTheme.activeText : 'text-slate-400 group-hover:text-slate-600'
            }`}
          >
            <Icon className="w-4 h-4" />
          </div>
        )}

        <span
          className={`truncate block ${
            selectedOption ? 'text-navy font-semibold' : 'text-slate-400 font-normal'
          }`}
        >
          {displayLabel}
        </span>

        <div
          className={`flex items-center justify-center transition-transform duration-200 ${
            isOpen ? `rotate-180 ${currentTheme.activeText}` : 'text-slate-400'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-2xl border border-slate-200/90 bg-white/98 backdrop-blur-md p-1.5 shadow-xl transition-all duration-150 animate-fadeIn"
          style={{ maxHeight: '280px' }}
        >
          {/* Quick Search if list is large */}
          {isSearchActive && (
            <div className="relative mb-1 px-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-lg bg-slate-50 border border-slate-200/80 py-1.5 pl-8 pr-3 text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Options List */}
          <div className="max-h-56 overflow-y-auto space-y-0.5 pr-0.5">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isSelected = String(opt.value) === String(value);
                return (
                  <button
                    type="button"
                    key={String(opt.value)}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? currentTheme.selectedBg
                        : 'text-navy hover:bg-slate-100 hover:text-navy'
                    }`}
                  >
                    <span className="truncate">{opt.label}</span>
                    {isSelected && (
                      <Check className={`w-3.5 h-3.5 shrink-0 ml-2 ${currentTheme.checkColor}`} />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="py-3 px-2 text-center text-xs text-grey">
                No matching options
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


/**
 * TextArea: Premium multiline text area with optional icon and character limit.
 */
export const TextArea = ({
  id,
  rows = 3,
  icon: Icon,
  variant = 'teal',
  error,
  className = '',
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    teal: 'focus-within:border-teal focus-within:ring-4 focus-within:ring-teal/10 group-focus-within:text-teal',
    primary: 'focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 group-focus-within:text-primary',
  };

  const activeVariant = variantStyles[variant] || variantStyles.teal;

  return (
    <div
      className={`group relative flex rounded-xl border transition-all duration-200 ${
        error
          ? 'border-danger/80 bg-danger/5 ring-2 ring-danger/10'
          : 'border-slate-200/90 bg-white/95 hover:border-slate-300 hover:bg-white shadow-xs'
      } ${disabled ? 'opacity-60 cursor-not-allowed bg-slate-100' : ''} ${activeVariant} ${className}`}
    >
      {Icon && (
        <div className="absolute left-3.5 top-3 flex items-center justify-center text-slate-400 group-focus-within:text-inherit pointer-events-none transition-colors">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <textarea
        id={id}
        rows={rows}
        disabled={disabled}
        className={`w-full bg-transparent py-2.5 text-sm text-navy placeholder:text-slate-400/80 focus:outline-none resize-y disabled:cursor-not-allowed font-medium ${
          Icon ? 'pl-10 pr-3.5' : 'px-3.5'
        }`}
        {...props}
      />
    </div>
  );
};
