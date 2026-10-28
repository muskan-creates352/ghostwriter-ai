import { NextRequest, NextResponse } from "next/server";
import { StoryGenerationRequest } from "../../types";
import { generateMockStory } from "../../lib/storyGenerator";

export async function POST(req: NextRequest) {
  try {
    const body: StoryGenerationRequest = await req.json();

    if (!body.topic || !body.topic.trim()) {
      return NextResponse.json(
        { error: "A story topic is required." },
        { status: 400 },
      );
    }

    // Generate the procedural mock/demo story
    const story = generateMockStory(body);

    return NextResponse.json(story);
  } catch (error) {
    console.error("Story generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate story." },
      { status: 500 },
    );
  }
}
