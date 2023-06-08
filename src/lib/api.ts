import axios from "axios";

const API_URL = "https://app.arsolutions.it/api/v1/prompt";

export type GeneratePromptBody = {
  genres: string[];
  prompter: string;
};

export type GeneratePromptResponse = {
  success: boolean;
  data: {
    _id: { $oid: string }[];
    genres: string[];
    prompter: string;
  };
};

export const generatePrompt = async (
  body: GeneratePromptBody
): Promise<GeneratePromptResponse> => {
  try {
    const { data } = await axios.post(API_URL, body);
    return data;
  } catch (e) {
    throw new Error("something went wrong");
  }
};
