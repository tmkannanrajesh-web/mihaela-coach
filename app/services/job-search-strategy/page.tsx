import ServiceLandingPage from "@/components/ServiceLandingPage";
import { SERVICES } from "@/data/services";

export default function JobSearchStrategyPage() {
  return (
    <ServiceLandingPage
      {...SERVICES.jobSearchStrategy}
    />
  );
}