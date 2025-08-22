// import React from "react";
// import i18n from "i18n/config";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";
// import { CLIENT_ID } from "./constants";

// const { location } = window;

// beforeAll(() => {
//   // @ts-ignore
//   delete window.location;
// });

// afterAll(() => {
//   window.location = location;
// });

// beforeAll(() => {
//   // @ts-ignore
//   window.location = { hash: "" };
// });

// beforeEach(() => {
//   i18n.changeLanguage("en");
// });

// describe("i18n", () => {
//   test("language can be changed to French", async () => {
//     render(<App />);

//     const linkElement = screen.getByText(/Get Started/i);
//     expect(linkElement).toHaveTextContent("Get Started");

//     const changeLanguageButton = screen
//       .getByTitle(/Change language/i)
//       .getElementsByTagName("button")[0];
//     await userEvent.click(changeLanguageButton);

//     const frenchLanguageElement = screen.getByText(/Français/i);
//     expect(frenchLanguageElement).toBeInTheDocument();

//     await userEvent.click(frenchLanguageElement);

//     expect(screen.getByText(/Commencer/)).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent("Commencer");
//   });
// });

// describe("logging in", () => {
//   test("renders get started button and redirects to Spotify with correct scopes", async () => {
//     render(<App />);

//     const linkElement = screen.getByText(/Get Started/i);

//     expect(linkElement).toBeInTheDocument();

//     await userEvent.click(linkElement);

//     expect(window.location.href).toBe(
//       `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=%2F%2F&scope=playlist-read-private%20playlist-read-collaborative%20user-library-read&response_type=token&show_dialog=false`
//     );
//   });

//   describe("post-login state", () => {
//     beforeAll(() => {
//       // @ts-ignore
//       window.location = { hash: "#access_token=TEST_ACCESS_TOKEN" };
//     });

//     test("renders playlist component on return from Spotify with auth token", () => {
//       render(<App />);

//       expect(screen.getByTestId("playlistTableSpinner")).toBeInTheDocument();
//     });
//   });
// });

// describe("logging out", () => {
//   beforeAll(() => {
//     // @ts-ignore
//     window.location = {
//       hash: "#access_token=TEST_ACCESS_TOKEN",
//       href: "https://www.example.com/#access_token=TEST_ACCESS_TOKEN",
//     };
//   });

//   test("redirects user to login screen which will force a permission request", async () => {
//     const { rerender } = render(<App />);

//     const changeUserElement = screen.getByTitle("Change user");

//     expect(changeUserElement).toBeInTheDocument();

//     await userEvent.click(changeUserElement);

//     expect(window.location.href).toBe(
//       "https://www.example.com/?change_user=true"
//     );
//   });
// });
