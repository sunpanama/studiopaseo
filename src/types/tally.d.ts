
interface TallyInterface {
  openPopup: (formId: string) => void;
}

declare global {
  interface Window {
    Tally?: TallyInterface;
  }
}

export {};
