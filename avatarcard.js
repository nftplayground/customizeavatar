import React, { useState } from "react";
import ReactDOM from 'react-dom';

const initialState = {
  sunglasses: { type: "Sunglasses", value: "Red", visible: false },
  beard: { type: "Beard", value: "", visible: false },
  earrings: { type: "Earrings", value: "", visible: false },
  eyepatch: { type: "Eyepatch", value: "", visible: false },
  headband: { type: "Headband", value: "", visible: false },
  mustache: { type: "Mustache", value: "", visible: false },
  scarf: { type: "Scarf", value: "", visible: false },
};

function AvatarCard() {
  const [traits, setTraits] = useState(initialState);

  const toggleTrait = (traitKey) => {
    setTraits((prevState) => ({
      ...prevState,
      [traitKey]: { ...prevState[traitKey], visible: !prevState[traitKey].visible },
    }));
  };

  const renderAvatar = () => {
    return (
      <svg width="128" height="128">
        {/* Base avatar layer */}
        <circle cx="64" cy="64" r="50" fill="#F5D6BA" />
        <circle cx="42" cy="42" r="10" fill="#333" />
        <circle cx="86" cy="42" r="10" fill="#333" />
        <path d="M55 80 h18 a25 25 0 0 1 25 25 h-16" fill="#333" />
        <path d="M73 80 h-18 a25 25 0 0 0 -25 25 h16" fill="#333" />
        {/* Render traits as separate layers */}
        {Object.keys(traits).map((key) => {
          const trait = traits[key];
          if (trait.visible) {
            switch (key) {
              case "sunglasses":
                return (
                  <g key={key}>
                    <circle cx="64" cy="64" r="28" fill="#000" opacity="0.5" />
                    <path d="M42 64 h44" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
                  </g>
                );
              case "beard":
                return (
                  <g key={key}>
                    <rect x="36" y="60" width="56" height="24" fill="#8B572A" />
                    <rect x="44" y="84" width="40" height="12" fill="#8B572A" />
                  </g>
                );
            case "earrings":
              return (
                <g key={key}>
                  <circle cx="38" cy="70" r="6" fill="#FFF" />
                  <circle cx="90" cy="70" r="6" fill="#FFF" />
                  <circle cx="38" cy="70" r="4" fill="#FFD700" />
                  <circle cx="90" cy="70" r="4" fill="#FFD700" />
                </g>
              );
            case "eyepatch":
              return (
                <g key={key}>
                  <rect x="32" y="44" width="64" height="32" fill="#000" />
                  <rect x="36" y="48" width="8" height="24" fill="#F5D6BA" />
                  <rect x="84" y="48" width="8" height="24" fill="#F5D6BA" />
                  <rect x="48" y="48" width="32" height="24" fill="#8B572A" />
                </g>
              );
            case "headband":
              return (
                <g key={key}>
                  <path d="M36 44 v-12 l56 12 v12 z" fill="#F5D6BA" />
                  <path d="M36 44 v-12 l56 12 v12 z" fill="#333" opacity="0.5" />
                  <circle cx="64" cy="40" r="6" fill="#333" />
                  <circle cx="64" cy="40" r="2" fill="#FFF" />
                </g>
              );
            case "mustache":
              return (
                <g key={key}>
                  <path d="M48 74 l12 -12 l12 12" stroke="#000" strokeWidth="4" fill="none" />
                  <path d="M48 70 l12 12 l12 -12" stroke="#000" strokeWidth="4" fill="none" />
                  <rect x="56" y="74" width="16" height="12" fill="#8B572A" />
                </g>
              );
            case "scarf":
              return (
                <g key={key}>
                  <path d="M32 72 h64 v8 h-64 z" fill="#FFA07A" />
                  <path d="M32 80 h64 v16 h-64 z" fill="#FFC0CB" />
                  <path d="M32 96 h64 v16 h-64 z" fill="#FFA07A" />
                  <path d="M32 112 h64 v8 h-64 z" fill="#F5D6BA" />
                </g>
              }
    );
  };

  const renderTraits = () => {
    return Object.keys(traits).map((key) => {
      const trait = traits[key];
      return (
        <div key={key} style={{ display: "inline-block", padding: 8 }}>
          <div>{`${trait.type}: ${trait.value}`}</div>
          <button onClick={() => toggleTrait(key)}>
            {trait.visible ? "Hide" : "Show"}
          </button>
        </div>
      );
    });
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      {renderAvatar()}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
        {renderTraits()}
      </div>
    </div>
  );
}

export default AvatarCard;
