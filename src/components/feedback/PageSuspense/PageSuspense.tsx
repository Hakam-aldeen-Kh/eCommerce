import { Suspense } from "react";
import LottieHandler from "../LottieHandler/LottieHandler";

LottieHandler;
function PageSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <LottieHandler type="loading" message="Loading please wait..." />
      }
    >
      {children}
    </Suspense>
  );
}

export default PageSuspense;
