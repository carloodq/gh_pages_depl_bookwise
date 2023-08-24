import { useQuery } from "@tanstack/react-query";
import { GoogleSuggestionData, PromptBook, PromptInfo } from "../interfaces";
import { getGoogleBooks, getPromptBooks, getPromptInfo } from "./api";
import { GET_BOOKS, GET_PROMPT_BOOKS, GET_PROMPT_INFO } from "./const";

export const useGetPromptInfo = (promptId: string) => {
  return useQuery<{ data: PromptInfo }>([GET_PROMPT_INFO, promptId], () =>
    getPromptInfo(promptId)
  );
};

export const useGetPromptBooks = (promptId: string) => {
  return useQuery<{ data: PromptBook[] }>([GET_PROMPT_BOOKS, promptId], () =>
    getPromptBooks(promptId)
  );
};

export const useGetBooks = (searchedText: string) => {
  return useQuery<{
    data: GoogleSuggestionData;
  }>([GET_BOOKS, searchedText], () => getGoogleBooks(searchedText), {
    enabled: !!searchedText,
  });
};
