import OrderConfirmatioon from "./OrderConfirmation";

interface SuccessPageProps {
  params: Promise<{ id: string }>;
}

export default async function SuccessPage({ params }: SuccessPageProps) {
  const { id } = await params;

  return <OrderConfirmatioon orderId={id} />;
}
