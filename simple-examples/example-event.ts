import Hatchet from "@hatchet-dev/typescript-sdk";

const hatchet = Hatchet.init();

hatchet.event.push("user:create", {
  test: "test",
});
