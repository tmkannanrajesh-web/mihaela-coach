import ServiceLandingPage from "@/components/ServiceLandingPage";
import { SERVICES } from "@/data/services";

export default function InterviewPreparationPage() {
  return (
    <ServiceLandingPage
      {...SERVICES.interviewPreparation}
    />
  );
}