import { useMutation } from "@tanstack/react-query";
import { GeneratePromptBody, generatePrompt } from "./api";

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
