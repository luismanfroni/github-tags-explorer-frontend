import { useAuthSWR, authRequest } from "core/authorization";
import { useRouter } from "next/router";
import { RepositoryPage } from "modules/repository/components/RepositoryPage";
import { useState } from "react";
import { Loading } from "shared/components/Loading";

export default function Repo(): JSX.Element {
  const router = useRouter();
  const { author, repo } = router.query;
  const { data, isLoading, mutate } = useAuthSWR(`/api/repository/${author}/${repo}`);
  const tags = useAuthSWR("/api/tag");
  const [repository, setRepo] = useState(data);
  if (!!data && !isLoading && !repository) {
    setRepo(data);
  }
  const mutateTag = (action: "add" | "remove", tag: string): void => {
    const uriTag = encodeURIComponent(tag);
    let tags: string[] = repository.tags || [];
    if (action === "add") {
      authRequest(`/api/tag/${author}/${repo}/${uriTag}`, { method: "PUT" });
      tags.push(tag);
    } else {
      authRequest(`/api/tag/${author}/${repo}/${uriTag}`, {
        method: "DELETE"
      });
      tags = tags.filter((v) => v !== tag);
    }
    setRepo({ ...repository, tags: [...new Set(tags)] });
    mutate({ ...repository, tags: [...new Set(tags)] });
  };
  const deleteAllTags = (): void => {
    const sure = confirm(
      `Are you sure you want to delete all tags from the repository ${author} / ${repo} ?`
    );
    if (!sure) return;
    authRequest(`/api/tag/${author}/${repo}`, {
      method: "DELETE"
    });
    setRepo({ ...repository, tags: [] });
    mutate({ ...repository, tags: [] });
  };
  return isLoading || !repository ? (
    <Loading></Loading>
  ) : (
    <RepositoryPage
      repository={repository}
      mutateTag={mutateTag}
      onDeleteAll={deleteAllTags}
      tags={tags.data}
    />
  );
}
