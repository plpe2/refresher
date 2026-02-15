import { SetStateAction } from "react";

export function ChangeStatusFunction({
  changeConfirming,
  updateMessage,
  DisplayedMessage,
  changeAction,
}: {
  changeConfirming: React.Dispatch<SetStateAction<boolean>>;
  updateMessage: React.Dispatch<SetStateAction<string>>;
  DisplayedMessage: string;
  changeAction: React.Dispatch<SetStateAction<() => void>>;
}) {
  changeConfirming((prev) => !prev);
  updateMessage(DisplayedMessage);

  if (DisplayedMessage == "Ongoing") {
    changeAction(() => TaskintoOngoing);
  } else if (DisplayedMessage == "Finished") {
    changeAction(() => TaskintoFinished);
  } else if (DisplayedMessage == "Cancel") {
    changeAction(() => TaskintoCancel);
  }
}

export function TaskintoOngoing() {
  console.log("Ongoing");
}

export function TaskintoFinished() {
  console.log("Finished");
}

export function TaskintoCancel() {
  console.log("Cancel");
}
