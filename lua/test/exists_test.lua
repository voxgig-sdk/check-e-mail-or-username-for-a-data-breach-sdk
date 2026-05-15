-- ProjectName SDK exists test

local sdk = require("check-e-mail-or-username-for-a-data-breach_sdk")

describe("CheckEMailOrUsernameForADataBreachSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
