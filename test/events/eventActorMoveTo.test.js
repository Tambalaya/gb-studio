import { compile } from "../../src/lib/events/eventActorMoveTo";

test("Should set move player to position", () => {
  const mockactorSetActive = jest.fn();
  const mockActorMoveTo = jest.fn();

  compile(
    {
      actorId: "player",
      x: 5,
      y: 9
    },
    {
      scene: { actors: [] },
      actorSetActive: mockactorSetActive,
      actorMoveTo: mockActorMoveTo
    }
  );
  expect(mockactorSetActive).toBeCalledWith("player");
  expect(mockActorMoveTo).toBeCalledWith(5, 9);
});