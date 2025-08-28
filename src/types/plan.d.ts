export interface PlanCardProps {
  title: string;
  price: string;
  oldPrice: string;
  tags: string[];
  badge?: string;
  bestseller?: boolean;
  label?: "basic" | "pro" | "expert";
}
