import React from "react";

export default function useScreen() {
  const [match, setMatch] = React.useState(false);

  React.useEffect(() => {
    const checkMatch = () => {
      setMatch(window.matchMedia(`screen and (max-width: 426px)`).matches);
    };

    checkMatch();
    window.addEventListener("resize", checkMatch);

    return () => window.removeEventListener("resize", checkMatch);
  });

  return match;
}
