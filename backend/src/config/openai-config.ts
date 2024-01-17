import { Configuration } from "openai";

export const openaiConfig = () => {
  const config = new Configuration({
    apiKey: process.env.open_ai_secret,
    organization: process.env.organization_id,
  });
  return config;
};
