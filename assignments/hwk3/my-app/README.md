## Learning Experience from Aider, GROQ and V0 for week 5
I succesfully installed Aider and obtained the GROQ API key to use with Aider. I was having trouble with using Aider because my app wasn't able to be previewed with localhost:3000 because it had a bug that aider was not able to fix. It was quite challenging to set up Aider, I ran into many problems but I finally managed to fix to. Also, whenever I tried to prompt aider too quickly, I would get a rate limited very quickly and had to restart aider multiple times. So, I went back V0 to help update my UI. I prompt the LLM to add a space for the character's pictures and added a background to resemble a starry sky. I also prompted the AI to make the space between the pictures and the name tag to be much smaller but it didn't do that despite multiple prompts instructing it to do so. These LLM are impressive but they still need much more improvement in terms of streamlining the process and make it easier to navigate and engage with the system than it current is. 

![image](https://github.com/user-attachments/assets/e967d2b1-a0a1-462c-ad9e-7300e742905d)


## Learning Experience
I prompted v0 to make an app about Baldur's Gate 3 and suggests character builds for players to browse. The app itself doesn't generate any necessary infomation like an actual character build, but it sets up the skeleton for the app. It manage to retrieve infomation about some of the playable characters for the game. It was very interesting to see the AI accurately change the app according to my prompt. When I prompt it to use the official logo for the game instead of just a plain text, it didn't import the actual logo, but instead instruct me to import the logo instead an how to set it up.
I think this is a very useful tool to help developer set up an app but not to build a complete app solely with this kind of tool.

![image](https://github.com/user-attachments/assets/13c50b5a-8c59-428f-92d3-f56409a1e279)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

