import { useAuthSWR } from "core/authorization";
import HomePage from "modules/home/components/HomePage";
import { useRouter } from "next/router";

export default function Index(): JSX.Element {
  const router = useRouter();
  const page = Number(router.query.page) || 1;
  const tags = useAuthSWR("/api/tag");
  const stars = useAuthSWR(`/api/stars?page=${page}`);
  const starsCount = useAuthSWR(`/api/stars/count`);
  return <HomePage page={page} stars={stars.data} starsCount={starsCount.data} tags={tags.data} />;
}
