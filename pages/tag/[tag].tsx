import { useAuthSWR } from "core/authorization";
import { useRouter } from "next/router";
import TagPage from "modules/tags/components/TagPage";

export default function Tag(): JSX.Element {
  const router = useRouter();
  const tagName = router.query.tag as string;
  const page = Number(router.query.page) || 1;
  const tags = useAuthSWR("/api/tag");
  const reposByTag = useAuthSWR(`/api/tag/${tagName}?page=${page}`);
  const count = useAuthSWR(`/api/tag/${tagName}/count`);
  const perPage = 12;

  const pages = count.isLoading ? 1 : Math.ceil(count.data / perPage);
  return (
    <TagPage
      page={page}
      repos={reposByTag.data}
      reposCount={pages}
      tags={tags.data}
      tagName={tagName}
    />
  );
}
