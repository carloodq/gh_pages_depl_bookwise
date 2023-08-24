import axios from "axios";

const API_URL = "https://app.arsolutions.it/api/v1";

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
    const { data } = await axios.post(`${API_URL}/prompt`, body);
    return data;
  } catch (e) {
    throw new Error("something went wrong");
  }
};

export type SuggestNewBookBody = {
  prompt_id: string;
  title: string;
  author: string;
  isbn: string;
  recommender: string;
};

export type SuggestNewBookResponse = {
  success: boolean;
  data: {
    prompt_id: string;
    title: string;
    author: string;
    isbn: string;
    recommender: string;
    _id: { $oid: string }[];
  };
};

export const suggestNewBook = async (
  body: SuggestNewBookBody
): Promise<SuggestNewBookResponse> => {
  try {
    const { data } = await axios.post(`${API_URL}/book`, body);
    return data;
  } catch (e) {
    throw new Error("something went wrong");
  }
};

//https://app.arsolutions.it/api/v1/prompt?prompt_id=63dfb824f8ade78080a63b3c
export const getPromptInfo = async (promptId: string) => {
  const { data } = await axios.get(`${API_URL}/prompt?prompt_id=${promptId}`);
  return data;
};

export const getPromptBooks = async (promptId: string) => {
  const { data } = await axios.get(`${API_URL}/book?prompt_id=${promptId}`);
  return data;
};

export const getGoogleBooks = async (searchText: string) => {
  return await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchText}`
  );
};
