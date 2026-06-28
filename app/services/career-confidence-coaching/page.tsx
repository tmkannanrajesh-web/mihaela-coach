import ServiceLandingPage from "@/components/ServiceLandingPage";
import { SERVICES } from "@/data/services";

export default function CareerConfidenceCoachingPage() {
  return (
    <ServiceLandingPage
      {...SERVICES.careerConfidenceCoaching}
    />
  );
}