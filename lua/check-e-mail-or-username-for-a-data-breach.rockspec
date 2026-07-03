package = "voxgig-sdk-check-e-mail-or-username-for-a-data-breach"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk.git",
  tag = "lua/v0.0.1",
  dir = "check-e-mail-or-username-for-a-data-breach-sdk/lua"
}
description = {
  summary = "CheckEMailOrUsernameForADataBreach SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["check-e-mail-or-username-for-a-data-breach_sdk"] = "check-e-mail-or-username-for-a-data-breach_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
