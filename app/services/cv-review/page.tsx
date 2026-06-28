import ServiceLandingPage from "@/components/ServiceLandingPage";
import { SERVICES } from "@/data/services";

export default function CVReviewPage() {
  return (
    <ServiceLandingPage
      {...SERVICES.cvReview}
    />
  );
}