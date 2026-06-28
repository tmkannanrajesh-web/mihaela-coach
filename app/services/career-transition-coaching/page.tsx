import ServiceLandingPage from "@/components/ServiceLandingPage";
import { SERVICES } from "@/data/services";

export default function CareerTransitionCoachingPage() {
  return (
    <ServiceLandingPage
      {...SERVICES.careerTransitionCoaching}
    />
  );
}