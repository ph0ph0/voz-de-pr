import { cleanup } from "@testing-library/react";
import { locations } from "../../../../../../Constants/Constants";

import SignUpCardAPI from "../SignUpCardAPI";

afterEach(cleanup);

const state = {
  firstNameValue: "",
  lastNameValue: "",
  usernameValue: "",
  firstEmailValue: "",
  secondEmailValue: "",
  locationValue: "",
  firstPasswordValue: "",
  sedondPasswordValue: "",
  selectedLocation: "",
  listOpen: false,
  emailsMatch: null,
  passwordsMatch: null,
  dropDownIsErrored: false,
  selectedAvatar: null,
  firstNameInputIsErrored: false,
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

describe("Input field updaters", () => {
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

  it("updates the first email value", () => {
    mockApi.api.updateFirstEmailValue("TEST");
    expect(mockApi.api.firstEmailValue).toEqual("TEST");
  });

  it("updates the second email value", () => {
    mockApi.api.updateSecondEmailValue("TEST");
    expect(mockApi.api.secondEmailValue).toEqual("TEST");
  });

  it("updates the location value", () => {
    mockApi.api.updateLocationValue("TEST");
    expect(mockApi.api.locationValue).toEqual("TEST");
  });

  it("updates the first password value", () => {
    mockApi.api.updateFirstPasswordValue("TEST");
    expect(mockApi.api.firstPasswordValue).toEqual("TEST");
  });

  it("updates the second password value", () => {
    mockApi.api.updateSecondPasswordValue("TEST");
    expect(mockApi.api.secondPasswordValue).toEqual("TEST");
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
});

describe("Input match checkers", () => {
  it("checks that the password match works", () => {
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("Test");
    expect(mockApi.api.emailsMatch).toEqual(false);

    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    expect(mockApi.api.emailsMatch).toEqual(true);
  });

  it("checks that the email match works", () => {
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("test");
    expect(mockApi.api.passwordsMatch).toEqual(false);

    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    expect(mockApi.api.passwordsMatch).toEqual(true);
  });
});

describe("Form submission", () => {
  it("checks that the first name is specified on submit", () => {
    expect(mockApi.api.firstNameInputIsErrored).toEqual(false);
    mockApi.api.updateFirstNameValue("");
    expect(mockApi.api.firstNameValue).toEqual("");
    mockApi.api.updateLastNameValue("TEST");
    mockApi.api.updateUsernameValue("TEST");
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected("TEST");
    mockApi.api.onClickAv(1);
    mockApi.api.submit();
    expect(mockApi.api.firstNameInputIsErrored).toEqual(true);
  });

  it("checks that the last name is specified on submit", () => {
    expect(mockApi.api.lastNameInputIsErrored).toEqual(false);
    mockApi.api.updateFirstNameValue("TEST");
    mockApi.api.updateLastNameValue("");
    mockApi.api.updateUsernameValue("TEST");
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected("TEST");
    mockApi.api.onClickAv(1);
    mockApi.api.submit();
    expect(mockApi.api.lastNameInputIsErrored).toEqual(true);
  });

  it("checks that the username is specified on submit", () => {
    expect(mockApi.api.usernameInputIsErrored).toEqual(false);
    mockApi.api.updateFirstNameValue("TEST");
    mockApi.api.updateLastNameValue("TEST");
    mockApi.api.updateUsernameValue("");
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected("TEST");
    mockApi.api.onClickAv(1);
    mockApi.api.submit();
    expect(mockApi.api.usernameInputIsErrored).toEqual(true);
  });

  it("checks that the email is specified on submit", () => {
    expect(mockApi.api.emailInputIsErrored).toEqual(false);
    mockApi.api.updateFirstNameValue("TEST");
    mockApi.api.updateLastNameValue("TEST");
    mockApi.api.updateUsernameValue("TEST");
    mockApi.api.updateFirstEmailValue("");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected("TEST");
    mockApi.api.onClickAv(1);
    mockApi.api.submit();
    expect(mockApi.api.emailInputIsErrored).toEqual(true);
  });

  it("checks that the location is specified on submit", () => {
    expect(mockApi.api.locationInputIsErrored).toEqual(false);
    mockApi.api.updateFirstNameValue("TEST");
    mockApi.api.updateLastNameValue("TEST");
    mockApi.api.updateUsernameValue("TEST");
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected("");
    mockApi.api.onClickAv(1);
    mockApi.api.submit();
    expect(mockApi.api.locationInputIsErrored).toEqual(true);
  });

  it("checks that the password is specified on submit", () => {
    expect(mockApi.api.passwordInputIsErrored).toEqual(false);
    mockApi.api.updateFirstNameValue("TEST");
    mockApi.api.updateLastNameValue("TEST");
    mockApi.api.updateUsernameValue("TEST");
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected("TEST");
    mockApi.api.onClickAv(1);
    mockApi.api.submit();
    expect(mockApi.api.passwordInputIsErrored).toEqual(true);
  });

  it("checks that the avatar is specified on submit", () => {
    expect(mockApi.api.avatarInputIsErrored).toEqual(false);
    mockApi.api.updateFirstNameValue("TEST");
    mockApi.api.updateLastNameValue("TEST");
    mockApi.api.updateUsernameValue("TEST");
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected("TEST");
    mockApi.api.onClickAv(null);
    mockApi.api.submit();
    expect(mockApi.api.avatarInputIsErrored).toEqual(true);
  });
});

describe("Submission helpers", () => {
  it("checks that location exists", () => {
    mockApi.api.updateLocationValue("");
    expect(mockApi.api.locationNotFound()).toEqual(true);

    mockApi.api.updateLocationValue(locations[0].title);
    expect(mockApi.api.locationNotFound()).toEqual(false);
  });

  it("finds a location successfully", () => {
    mockApi.api.onLocationSelected("");
    expect(mockApi.api.getLocationObject()).toEqual(false);

    mockApi.api.onLocationSelected(locations[0].title);
    expect(mockApi.api.getLocationObject()).toEqual(locations[0]);
  });

  it("clears all inputs on submit", () => {
    mockApi.api.updateFirstNameValue("TEST");
    mockApi.api.updateLastNameValue("TEST");
    mockApi.api.updateUsernameValue("TEST");
    mockApi.api.updateFirstEmailValue("TEST");
    mockApi.api.updateSecondEmailValue("TEST");
    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    mockApi.api.toggleList();
    mockApi.api.onLocationSelected(locations[0].title);
    mockApi.api.onClickAv(1);
    mockApi.api.submit();

    expect(mockApi.api.firstNameValue).toEqual("");
    expect(mockApi.api.lastNameValue).toEqual("");
    expect(mockApi.api.usernameValue).toEqual("");
    expect(mockApi.api.firstEmailValue).toEqual("");
    expect(mockApi.api.secondEmailValue).toEqual("");
    expect(mockApi.api.locationValue).toEqual("");
    expect(mockApi.api.selectedLocation).toEqual(null);
    expect(mockApi.api.firstPasswordValue).toEqual("");
    expect(mockApi.api.secondPasswordValue).toEqual("");
    expect(mockApi.api.selectedAvatar).toEqual(null);
  });
});

// describe("Switching panels", () => {
//   it("clears all inputs when user switches panel type", () => {
//     mockApi.api.updateFirstNameValue("TEST");
//     mockApi.api.updateLastNameValue("TEST");
//     mockApi.api.updateUsernameValue("TEST");
//     mockApi.api.updateFirstEmailValue("TEST");
//     mockApi.api.updateSecondEmailValue("TEST");
//     mockApi.api.updateFirstPasswordValue("TEST");
//     mockApi.api.updateSecondPasswordValue("TEST");
//     mockApi.api.toggleList();
//     mockApi.api.onLocationSelected(locations[0].title);
//     mockApi.api.onClickAv(1);
//     mockApi.api.toggleSignUp();

//     expect(mockApi.api.firstNameValue).toEqual("");
//     expect(mockApi.api.lastNameValue).toEqual("");
//     expect(mockApi.api.usernameValue).toEqual("");
//     expect(mockApi.api.firstEmailValue).toEqual("");
//     expect(mockApi.api.secondEmailValue).toEqual("");
//     expect(mockApi.api.locationValue).toEqual("");
//     expect(mockApi.api.selectedLocation).toEqual(null);
//     expect(mockApi.api.firstPasswordValue).toEqual("");
//     expect(mockApi.api.secondPasswordValue).toEqual("");
//     expect(mockApi.api.selectedAvatar).toEqual(null);
//   });
// });
