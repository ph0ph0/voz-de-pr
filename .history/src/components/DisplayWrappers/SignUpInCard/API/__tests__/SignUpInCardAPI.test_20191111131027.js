import { cleanup } from "@testing-library/react";

import SignUpCardAPI from "../SignUpCardAPI";

afterEach(cleanup);

const state = {
  firstNameValue: "",
  lastNameValue: "",
  usernameValue: "",
  emailValue: "",
  locationValue: "",
  passwordValue: "",
  selectedLocation: "",
  listOpen: false,
  dropDownIsErrored: false,
  selectedAvatar: null,
  isSignUp: false,
  firstNameInputIsErrored: true,
  lastNameInputIsErrored: false,
  usernameInputIsErrored: false,
  emailInputIsErrored: false,
  locationInputIsErrored: false,
  passwordInputIsErrored: false,
  avatarInputIsErrored: false
};

const useApiMock = (api, defaultValue) => {
  let state = defaultValue;
  let setState = updater => {
    if (typeof updater === "function") {
      state = updater(state);
    } else {
      state = updater;
    }
    ref.api = api({ state, setState });
  };
  let ref = {
    api: api({ state, setState })
  };
  return ref;
};

const mockApi = useApiMock(SignUpCardAPI, state);

//Allows us to ignore window . log calls
global.log = () => {};

it("updates the first name value", () => {
  mockApi.api.updateFirstNameValue("TEST");
  expect(mockApi.api.firstNameValue).toEqual("TEST");
});

it("updates the last name value", () => {
  mockApi.api.updateLastNameValue("TEST");
  expect(mockApi.api.lastNameValue).toEqual("TEST");
});

it("updates the username value", () => {
  mockApi.api.updateUsernameValue("TEST");
  expect(mockApi.api.usernameValue).toEqual("TEST");
});

it("updates the email value", () => {
  mockApi.api.updateEmailValue("TEST");
  expect(mockApi.api.emailValue).toEqual("TEST");
});

it("updates the location value", () => {
  mockApi.api.updateLocationValue("TEST");
  expect(mockApi.api.locationValue).toEqual("TEST");
});

it("updates the password value", () => {
  mockApi.api.updatePasswordValue("TEST");
  expect(mockApi.api.passwordValue).toEqual("TEST");
});

it("updates the selectedLocation value, location value and closes the dropdown when a location is selected from the dropdown", () => {
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  expect(mockApi.api.locationValue).toEqual("TEST");
  expect(mockApi.api.selectedLocation).toEqual("TEST");
  expect(mockApi.api.listOpen).toEqual(false);
});

it("toggles the list open and close", () => {
  expect(mockApi.api.listOpen).toEqual(false);
  mockApi.api.toggleList();
  expect(mockApi.api.listOpen).toEqual(true);

  mockApi.api.toggleList();
  expect(mockApi.api.listOpen).toEqual(false);
});

it("updates the selected avatar", () => {
  expect(mockApi.api.selectedAvatar).toEqual(null);
  mockApi.api.onClickAv(1);
  expect(mockApi.api.selectedAvatar).toEqual(1);
});

it("checks that the first name is specified on submit", () => {
  expect(mockApi.api.firstNameInputIsErrored).toEqual(false);
  mockApi.api.updateFirstNameValue("");
  mockApi.api.updateLastNameValue("TEST");
  mockApi.api.updateUsernameValue("TEST");
  mockApi.api.updateEmailValue("TEST");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  mockApi.api.updatePasswordValue("TEST");
  mockApi.api.onClickAv(1);
  expect(mockApi.api.firstNameInputIsErrored).toEqual(true);
});

it("checks that the last name is specified on submit", () => {
  expect(mockApi.api.lastNameInputIsErrored).toEqual(false);
  mockApi.api.updateFirstNameValue("TEST");
  mockApi.api.updateLastNameValue("");
  mockApi.api.updateUsernameValue("TEST");
  mockApi.api.updateEmailValue("TEST");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  mockApi.api.updatePasswordValue("TEST");
  mockApi.api.onClickAv(1);
  expect(mockApi.api.lastNameInputIsErrored).toEqual(true);
});

it("checks that the username is specified on submit", () => {
  expect(mockApi.api.usernameInputIsErrored).toEqual(false);
  mockApi.api.updateFirstNameValue("TEST");
  mockApi.api.updateLastNameValue("TEST");
  mockApi.api.updateUsernameValue("");
  mockApi.api.updateEmailValue("TEST");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  mockApi.api.updatePasswordValue("TEST");
  mockApi.api.onClickAv(1);
  expect(mockApi.api.usernameInputIsErrored).toEqual(true);
});

it("checks that the email is specified on submit", () => {
  expect(mockApi.api.nameInputIsErrored).toEqual(false);
  mockApi.api.updateFirstNameValue("TEST");
  mockApi.api.updateLastNameValue("TEST");
  mockApi.api.updateUsernameValue("TEST");
  mockApi.api.updateEmailValue("");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  mockApi.api.updatePasswordValue("TEST");
  mockApi.api.onClickAv(1);
  expect(mockApi.api.emailInputIsErrored).toEqual(true);
});

it("checks that the location is specified on submit", () => {
  expect(mockApi.api.locationInputIsErrored).toEqual(false);
  mockApi.api.updateFirstNameValue("TEST");
  mockApi.api.updateLastNameValue("TEST");
  mockApi.api.updateUsernameValue("TEST");
  mockApi.api.updateEmailValue("TEST");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("");
  mockApi.api.updatePasswordValue("TEST");
  mockApi.api.onClickAv(1);
  expect(mockApi.api.locationInputIsErrored).toEqual(true);
});

it("checks that the password is specified on submit", () => {
  expect(mockApi.api.passwordInputIsErrored).toEqual(false);
  mockApi.api.updateFirstNameValue("TEST");
  mockApi.api.updateLastNameValue("TEST");
  mockApi.api.updateUsernameValue("TEST");
  mockApi.api.updateEmailValue("TEST");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  mockApi.api.updatePasswordValue("");
  mockApi.api.onClickAv(1);
  expect(mockApi.api.passwordInputIsErrored).toEqual(true);
});

it("checks that the avatar is specified on submit", () => {
  expect(mockApi.api.avatarInputIsErrored).toEqual(false);
  mockApi.api.updateFirstNameValue("TEST");
  mockApi.api.updateLastNameValue("TEST");
  mockApi.api.updateUsernameValue("TEST");
  mockApi.api.updateEmailValue("TEST");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  mockApi.api.updatePasswordValue("TEST");
  // mockApi.api.onClickAv(1);
  expect(mockApi.api.avatarInputIsErrored).toEqual(true);
});

it("clears all inputs on submit", () => {
  mockApi.api.updateFirstNameValue("TEST");
  mockApi.api.updateLastNameValue("TEST");
  mockApi.api.updateUsernameValue("TEST");
  mockApi.api.updateEmailValue("TEST");
  mockApi.api.toggleList();
  mockApi.api.onLocationSelected("TEST");
  mockApi.api.updatePasswordValue("TEST");
  mockApi.api.onClickAv(1);
  mockApi.api.submit();

  expect(mockApi.api.firstNameValue).toEqual("");
  expect(mockApi.api.lastNameValue).toEqual("");
  expect(mockApi.api.usernameValue).toEqual("");
  expect(mockApi.api.emailValue).toEqual("");
  expect(mockApi.api.locationValue).toEqual("");
  expect(mockApi.api.selectedLocation).toEqual("");
  expect(mockApi.api.passwordValue).toEqual("");
  expect(mockApi.api.selectedAvatar).toEqual(null);
});

// it("updates location value", () => {
//     mockApi.api.updateLocationValue("new location")
//     expect(mockApi.api.locationValue).toEqual("new location")
// })

// it("updates the selected location value", () => {
//     mockApi.api.onLocationSelected("Rincon")
//     expect(mockApi.api.selectedLocation).toEqual("Rincon")
//     expect(mockApi.api.listOpen).toEqual(false)
//     expect(mockApi.api.locationValue).toEqual("Rincon")
// })

// it("updates the selected avatar", () => {
//     mockApi.api.onClickAv("1")
//     expect(mockApi.api.selectedAvatar).toEqual("1")
// })

// it("resets the dropdown", () => {
//     mockApi.api.resetDropdown()
//     expect(mockApi.api.locationValue).toEqual("")
//     expect(mockApi.api.selectedLocation).toEqual("")
//     expect(mockApi.api.listOpen).toEqual(false)
// })

// it("resets the side panel", () => {
//     mockApi.api.resetAll()
//     expect(mockApi.api.name).toEqual("")
//     expect(mockApi.api.locationValue).toEqual("")
//     expect(mockApi.api.selectedLocation).toEqual("")
//     expect(mockApi.api.listOpen).toEqual(false)
//     expect(mockApi.api.selectedAvatar).toEqual(null)
//     expect(mockApi.api.dropDownIsErrored).toEqual(false)
// })

// it("checks that the location exists when submitting", () => {
//     mockApi.api.updateLocationValue("wont match")
//     mockApi.api.submit()
//     expect(mockApi.api.dropDownIsErrored).toEqual(true)

//     mockApi.api.updateLocationValue("rincon")
//     mockApi.api.submit()
//     expect(mockApi.api.dropDownIsErrored).toEqual(false)
// })
