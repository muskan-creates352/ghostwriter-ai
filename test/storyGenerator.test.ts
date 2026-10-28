import { generateMockStory, GENRE_OPTIONS } from "../app/lib/storyGenerator.ts";
import { StoryGenre } from "../app/types/index.ts";

function assert(condition: boolean, msg?: string) {
  if (!condition) throw new Error(msg || "Assertion failed");
}

Deno.test("Story Generator - generates mock story with all required properties", () => {
  const request = {
    topic: "The Corrupted Disk Array",
    genre: "haunted-server" as StoryGenre,
    tone: "eerie" as const,
    length: "medium" as const,
  };

  const story = generateMockStory(request);

  assert(typeof story.id === "string", "id should be string");
  assert(typeof story.title === "string", "title should be string");
  assert(typeof story.content === "string", "content should be string");
  assert(story.isMock === true, "isMock should be true");
  assert(story.genre === "haunted-server", "genre should match");
  assert(story.engineInfo.version === "v0.1.0-mock", "version should match");
  assert(
    /Corrupted Disk Array/i.test(story.content),
    "content should include topic",
  );
});

Deno.test("Story Generator - supports all 6 horror archetypes", () => {
  assert(GENRE_OPTIONS.length === 6, "Must have 6 genres");

  for (const genreOption of GENRE_OPTIONS) {
    const story = generateMockStory({
      topic: "Quantum Ghost",
      genre: genreOption.id,
      tone: "lovecraftian-tech",
      length: "short",
    });

    assert(
      story.genre === genreOption.id,
      `Genre ${genreOption.id} should match`,
    );
    assert(
      story.wordCount > 50,
      `Word count should be > 50, got ${story.wordCount}`,
    );
    assert(story.readingTimeMinutes >= 1, "Reading time should be >= 1");
  }
});
