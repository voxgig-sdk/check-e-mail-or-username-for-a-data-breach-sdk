package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDataBreachCheckEntityFunc func(client *CheckEMailOrUsernameForADataBreachSDK, entopts map[string]any) CheckEMailOrUsernameForADataBreachEntity

