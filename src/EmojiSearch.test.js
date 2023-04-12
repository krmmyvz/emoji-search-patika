import React from "react";
import { render, fireEvent, screen, rerender } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import EmojiResults from "./EmojiResults";
import SearchInput from "./SearchInput";
import filterEmoji from "./filterEmoji";

// Başlık kısmının başarılı bir şekilde render
// edildiğini kontrol edecek olan test kodu
test("renders the title", () => {
  const { getByText } = render(<Header />);
  const title = getByText(/Emoji Search/i);
  expect(title).toBeInTheDocument();
});

// Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde
// render edildiğini kontrol edecek olan test kodu.
test("renders emoji list", () => {
  const emojiData = [
    { title: "Grinning Face", symbol: "😀" },
    { title: "Smiling Face with Heart-Eyes", symbol: "😍" },
  ];
  render(<EmojiResults emojiData={emojiData} data-testid="emoji-list" />);
  const emojiList = screen.getByTestId("emoji-list");
  expect(emojiList).toBeInTheDocument();
});

// Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye
// uygun şekilde yeniden render edildiğini kontrol edecek olan test kodu
test("filters the emoji list based on search input", () => {
  const { getByPlaceholderText, getByTestId, rerender } = render(
    <div>
      <SearchInput textChange={() => {}} />
      <EmojiResults emojiData={[]} />
    </div>
  );
  const searchInput = getByPlaceholderText(/Search Emoji/i);
  fireEvent.change(searchInput, { target: { value: "Face" } });
  const filteredEmojis = filterEmoji("Face", 10);
  rerender(
    <div>
      <SearchInput textChange={() => {}} />
      <EmojiResults emojiData={filteredEmojis} />
    </div>
  );

  const emojis = getByTestId("emoji-list").querySelectorAll(
    '[data-testid="emoji-row"]'
  );
  expect(emojis.length).toBe(filteredEmojis.length);
  emojis.forEach((emoji, index) => {
    const emojiData = filteredEmojis[index];
    expect(emoji.querySelector(".title").textContent).toBe(emojiData.title);
    expect(emoji.querySelector("img").getAttribute("alt")).toBe(
      emojiData.title
    );
  });
});

// Liste üzerinden herhangi emojiye tıklandığında,
// ilgili emojinin kopyalandığını kontrol edecek olan test
test("copies the clicked emoji to clipboard", () => {
  const emojiData = [
    {
      symbol: "😀",
      title: "Grinning Face",
    },
  ];

  const { getByText } = render(<EmojiResults emojiData={emojiData} />);
  const copy = getByText("Click to copy emoji");
  fireEvent.click(copy);
  expect(copy.parentElement.getAttribute("data-clipboard-text")).toMatch("😀");
});
