package = "voxgig-sdk-check-e-mail-or-username-for-a-data-breach"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk.git"
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
