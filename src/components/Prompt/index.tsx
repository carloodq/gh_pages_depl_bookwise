import { GeneratePromptResponse } from "../../lib/api";

interface Props {
  promptData: GeneratePromptResponse;
}

export const Prompt: React.FC<Props> = ({ promptData }) => {
  return (
    <div className="mt-16 text-center">
      <p>
        Hi, I would like to know what are your favourite books in the following
        genres?
      </p>
      <ul className="list-disc list-inside">
        {promptData.data.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>
        {`Please go to
    https://app.arsolutions.it/api/v1/prompt/${promptData.data._id[0].$oid}
    and share your recommendations!`}
      </p>
    </div>
  );
};
