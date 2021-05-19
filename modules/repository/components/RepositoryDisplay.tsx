import { Badge } from "shared/components/Badge";
import { H1, H2, P } from "shared/components/Texts";
import { Input } from "shared/components/Input";
import { Button } from "shared/components/Button";
import { RepositoryDTO } from "../RepositoryDTO";
import { useState } from "react";
import { TagList } from "modules/tags/components/TagList";
import Link from "next/link";

export function RepositoryDisplay(props: {
  repository: RepositoryDTO;
  mutateTag: (action: "add" | "remove", tag: string) => void;
  onDeleteAll: () => void;
}): JSX.Element {
  const [tagName, setTagName] = useState("");
  const suggestions = [props.repository?.language].filter(
    (tag) => !props.repository?.tags?.includes(tag)
  );
  const addTag = (): void => {
    if (tagName.trim() !== "") {
      props.mutateTag("add", tagName);
      setTagName("");
    }
  };
  return (
    <>
      <H1>
        {props.repository?.owner} / {props.repository?.name}
      </H1>
      <P>
        <Link href={`https://github.com/${props.repository?.owner}/${props.repository?.name}`}>
          <a>See on Github</a>
        </Link>
      </P>
      <P>{props.repository?.description}</P>
      <H2>Tags</H2>
      {suggestions.length > 0 && (
        <P>
          Suggestions (click to add):{" "}
          {suggestions.map((tag) => (
            <Badge
              key={tag}
              onClick={() => {
                props.mutateTag("add", tag);
              }}
            >
              {tag}
            </Badge>
          ))}
        </P>
      )}
      <P>
        <Input
          id="tagName"
          name="tagName"
          value={tagName}
          onKeyPress={(e) => e.key == "Enter" && addTag()}
          onChange={(e) => setTagName((e.target.value || "").trim().toUpperCase())}
          placeholder="Tag name to add"
        />
        <Button id="add" name="add" onClick={addTag}>
          Add tag
        </Button>
      </P>
      {props.repository.tags && props.repository.tags.length > 0 && (
        <>
          <P>(click to remove)</P>

          <br />
          <TagList>
            {props.repository.tags.map((tag) => (
              <Badge
                key={tag}
                onClick={() => {
                  props.mutateTag("remove", tag);
                }}
              >
                {tag}
              </Badge>
            ))}
          </TagList>
          <div style={{ textAlign: "center", marginTop: "1em" }}>
            <Button action="danger" onClick={props.onDeleteAll}>
              Remove all tags
            </Button>
          </div>
        </>
      )}
    </>
  );
}
