package voxgigcheckemailorusernameforadatabreachsdk

import (
	"github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/go/core"
	"github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/go/entity"
	"github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/go/feature"
	_ "github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/go/utility"
)

// Type aliases preserve external API.
type CheckEMailOrUsernameForADataBreachSDK = core.CheckEMailOrUsernameForADataBreachSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CheckEMailOrUsernameForADataBreachEntity = core.CheckEMailOrUsernameForADataBreachEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CheckEMailOrUsernameForADataBreachError = core.CheckEMailOrUsernameForADataBreachError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDataBreachCheckEntityFunc = func(client *core.CheckEMailOrUsernameForADataBreachSDK, entopts map[string]any) core.CheckEMailOrUsernameForADataBreachEntity {
		return entity.NewDataBreachCheckEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCheckEMailOrUsernameForADataBreachSDK = core.NewCheckEMailOrUsernameForADataBreachSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
