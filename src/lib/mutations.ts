import { useMutation } from "@tanstack/react-query";
import {
  GeneratePromptBody,
  SuggestNewBookBody,
  generatePrompt,
  suggestNewBook,
} from "./api";
import { queryClient } from "../queryClient";
import { GET_PROMPT_BOOKS } from "./const";

export const useGeneratePrompt = () => {
  return useMutation({
    mutationFn: (body: GeneratePromptBody) => generatePrompt(body),
    onSuccess: () => {
      // Invalidate and refetch
    },
    onError: () => {
      // Show error
    },
  });
};

export const useSuggestNewBook = () => {
  return useMutation({
    mutationFn: (body: SuggestNewBookBody) => suggestNewBook(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_PROMPT_BOOKS] });
    },
    onError: () => {
      // Show error
    },
  });
};
