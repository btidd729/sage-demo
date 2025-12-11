"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    function init() {
      const el = document.getElementById("nunan-chat") as any;
      if (!el || typeof el.setOptions !== "function") {
        setTimeout(init, 300);
        return;
      }

      el.setOptions({
        api: {
          // keep existing getClientSecret from the starter:
          getClientSecret: (window as any).chatkitGetClientSecret,
        },
        header: {
          enabled: true,
          title: { enabled: false },
        },
        theme: {
          colorScheme: "light",
          radius: "pill",
          density: "normal",
          color: {
            grayscale: {
              hue: 98, // matches #264017
              tint: 9,
              shade: 4,
            },
            accent: {
              primary: "#ffa200",
              level: 1,
            },
            surface: {
              background: "#ffffff",
              foreground: "#ffffff",
            },
          },
          typography: {
            baseSize: 16,
            fontFamily:
              '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
            fontFamilyMono:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
            fontSources: [
              {
                family: "OpenAI Sans",
                src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
                weight: 400,
                style: "normal",
                display: "swap",
              },
            ],
          },
        },
        composer: {
          placeholder: "Ask Your Question Here",
          attachments: {
            enabled: true,
            maxCount: 5,
            maxSize: 10 * 1024 * 1024,
          },
        },
        startScreen: {
          greeting:
            "Hi there! I’m Sage, your Nunan’s Grow Guide from Nunan’s Garden Center. What can I help you grow today?",
          prompts: [
            {
              icon: "circle-question",
              label:
                "Looking for blooms? Ask me which flowers will thrive in your garden!",
              prompt:
                "Looking for blooms. Which flowers will thrive in my garden?",
            },
            {
              icon: "circle-question",
              label:
                "Want nonstop color? I can help you pick the perfect flowering plants.",
              prompt:
                "I want nonstop color. Help me pick the perfect flowering plants.",
            },
            {
              icon: "circle-question",
              label:
                "Not sure why your flowers aren’t blooming? Let’s figure it out together!",
              prompt:
                "My flowers are not blooming. Can you help me figure out why?",
            },
            {
              icon: "circle-question",
              label:
                "Tell me your sunlight and soil—I’ll tell you what will bloom beautifully.",
              prompt:
                "I will tell you my sunlight and soil. Please tell me what will bloom beautifully.",
            },
            {
              icon: "circle-question",
              label:
                "Need pollinator-friendly flowers? I know all the local favorites.",
              prompt:
                "I need pollinator friendly flowers. What are the local favorites that will do well here?",
            },
          ],
        },
      });
    }

    init();
  }, []);

  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "24px",
        background: "#f3f4f6",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <div
          style={{
            textAlign: "center",
            padding: "12px 0 8px 0",
          }}
        >
          <img
            src="https://media.designrush.com/agencies/406942/conversions/Sunrise-Marketing-logo-profile.jpg"
            alt="Sunrise Marketing"
            style={{
              maxWidth: "220px",
              height: "auto",
              display: "inline-block",
            }}
          />
        </div>

        <div
          style={{
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
            overflow: "hidden",
            background: "#ffffff",
          }}
        >
          <openai-chatkit
            id="nunan-chat"
            style={{ display: "block", width: "100%", height: "640px" }}
          />
        </div>
      </div>
    </main>
  );
}
