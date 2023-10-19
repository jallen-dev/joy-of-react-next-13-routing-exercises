import React from "react";

import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <div>
      Choose your color:
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/coral">Coral</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/darkorchid">Dark Orchid</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/goldenrod">Goldenrod</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/seagreen">Sea Green</Link>
        </li>
      </ul>
    </div>
  );
}

export default ScreenSaverExercise;
