import React from 'react';

interface KeyboardShortcutProps {
  keys: string[];
}

export function KeyboardShortcut({ keys }: KeyboardShortcutProps) {
  return (
    <div className="flex items-center gap-1">
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          <kbd className="px-1.5 py-0.5 text-xs font-mono bg-muted border rounded shadow-sm">
            {key}
          </kbd>
          {index < keys.length - 1 && <span className="text-xs text-muted-foreground">+</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
