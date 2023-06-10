import { GeneratePromptResponse } from "../../lib/api";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  promptData: GeneratePromptResponse;
}

export const Prompt: React.FC<Props> = ({ promptData }) => {
  const textToCopy = `Hi, I would like to know what are your favourite books in the following genres? \n\n${promptData.data.genres.map(
    (genre) => `- ${genre}\n`
  )}\nPlease go to https://app.arsolutions.it/api/v1/prompt/${
    promptData.data._id[0].$oid
  } and share your recommendations!`;

  return (
    <div className="mt-8 md:mt-16 md:text-center">
      <p>
        Hi, I would like to know what are your favourite books in the following
        genres?
      </p>
      <ul className="my-2 list-disc list-inside">
        {promptData.data.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p className="mb-8">
        {`Please go to
    https://app.arsolutions.it/api/v1/prompt/${promptData.data._id[0].$oid}
    and share your recommendations!`}
      </p>
      <CopyToClipboard
        text={textToCopy}
        onCopy={() =>
          //TODO: show a success message
          alert("copied")
        }
      >
        <button className="border-slate-500 border-2 font-bold py-2 px-12 rounded">
          copy
        </button>
      </CopyToClipboard>
    </div>
  );
};
